import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {
  images = [
    {buildName: 'DEV-1-IMAGE', cols: 1, rows: 1, currentImage: 'DEV-1_CI-13-14'},
    {buildName: 'Main-Gated', cols: 1, rows: 1, currentImage: 'MAIN_Gated-13-14'}
  ]

  /**
   * Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor() {}

  /**
   * This life cycle hook gets called when this component is initialized.
   *
   * @memberof HomeComponent
   */
  ngOnInit() {}
}
