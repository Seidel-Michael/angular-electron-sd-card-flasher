import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {ImageSourceFtp} from '../lib/image-source-ftp';

import {ElectronService} from './providers/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
      public electronService: ElectronService,
      private translate: TranslateService) {
    translate.setDefaultLang('en');

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in
      // webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in
      // webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

    /*const ftpSource = new ImageSourceFtp(
        {host: '192.168.69.172', user: 'etidv2-drop', password: 'etidv2-drop'},
        '/etiv2-drop/DEV1-Image/');

    ftpSource.connect().then(() => {
      ftpSource.getCurrentImageVersion()
          .then((name) => {
            console.log('Newest Version: ' + JSON.stringify(name));


            ftpSource.downloadImage(name).then((fileName) => {
              console.log('Downloaded to: ' + fileName);
            });

          })
          .catch((error) => {
            console.log(error);
          });
    });*/

  }
}
