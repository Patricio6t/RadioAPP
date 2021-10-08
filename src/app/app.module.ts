import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MusicControls } from '@ionic-native/music-controls/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    OneSignal,
    MusicControls,
    { provide:
    RouteReuseStrategy,
    useClass:
    IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
