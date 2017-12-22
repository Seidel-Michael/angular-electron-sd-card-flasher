import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlashComponent} from './components/flash/flash.component';
import {HomeComponent} from './components/home/home.component';
import {WaitComponent} from './components/wait/wait.component';
import {ElectronService} from './providers/electron.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, FlashComponent, WaitComponent],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MatToolbarModule, MatGridListModule, MatCardModule, MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
