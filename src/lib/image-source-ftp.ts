import * as fs from 'fs';
import * as PromiseFtp from 'promise-ftp';


export class ImageSourceFtp {
  ftpOptions = {};
  path = '';
  ftpClient = null;

  constructor(ftpOptions: any, path: string) {
    this.ftpOptions = ftpOptions;
    this.path = path;
  }

  connect(): Promise<any> {
    return new Promise((resolve) => {
      this.ftpClient = new PromiseFtp();
      this.ftpClient.connect(this.ftpOptions).then(() => {
        resolve();
      });
    });
  }

  downloadImage(versionInfo: any): Promise<string> {
    console.log(this.ftpOptions);
    return new Promise((resolveTop) => {
      const ftp = this.ftpClient;
      const thisInstance = this;

      ftp.get(versionInfo.fullPath)
          .then(function(stream) {
            return new Promise(function(resolve, reject) {
              stream.once('close', resolve);
              stream.once('error', reject);
              stream.pipe(fs.createWriteStream('tempimage.img'));
            });
          })
          .then(function() {
            resolveTop('tempimage.img');
          })
          .catch((error) => {
            console.log(error);
          });
    });
  }

  getCurrentImageVersion(): Promise<any> {
    return new Promise((resolve, reject) => {
      const ftp = this.ftpClient;
      const thisInstance = this;
      let name;
      let imageName;

      return ftp.list(thisInstance.path)
          .then(function(list) {
            list.sort((a, b) => {
              if (a.date < b.date) {
                return -1
              };
              if (a.date > b.date) {
                return 1
              };
              return 0;
            });
            name = list[list.length - 1].name;
            return ftp.list(thisInstance.path + '/' + name);
          })
          .then((list) => {
            imageName = list[0].name;
            resolve({
              version: name,
              imageName: imageName,
              fullPath: thisInstance.path + '/' + name + '/' + imageName
            });
          })
          .catch(function(error) {
            reject(error);
          });
    });
  }
}
