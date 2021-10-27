import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { MusicControls } from '@ionic-native/music-controls/ngx';
import { RespuestaMusic } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PushService {
  public stream: any;
  promise: any;
  radio = {
    title: 'Radio Altares',
    description: 'Tu mejor compañia',
    url: 'https://radios.sonidoshd.com/8018/stream',
    image: 'assets/img/logo.png'
  };

  public resultStrm: any;

  public ejecute: any = false;

  constructor(private oneSignal: OneSignal,
    private musicControls: MusicControls,
    private httpClient: HttpClient
  ) { }

  /* ONE SIGNAL Notificaciones push */
  configuracionInicial() {
    this.oneSignal.startInit('ea14e173-f874-4b9e-b9ef-e3c076669445', '1051684493500');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('notificación recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('notificación abierta', noti);
    });

    this.oneSignal.endInit();
  }


  createNotificationMusic() {
    if (this.stream == null) {
      console.log(this.radio.url);

      //this.localStorage.ready().then(() => {
      //this.localStorage.set(`@playSoyLuz`, 1);//esto es lo mismo que --->  'local'+id
      localStorage.setItem(`@playSoyLuz`, '1');
      this.stream = new Audio(this.radio.url);
      this.stream.play();
      //miaudio.play();
      //this.audio = false;
      // this.events.publish('updatePlay', { data: 1 });
      //});

      this.stream.volume = 1;
    }
    this.ejecute = true;
    return this.musicControls.create({
      track: this.radio.description,
      artist: this.radio.title,
      cover: this.radio.image,
      isPlaying: true,
      dismissable: false,
      hasPrev: false,
      hasNext: false,
      hasSkipForward: false,
      hasSkipBackward: false,
      skipForwardInterval: 0,
      skipBackwardInterval: 0,
      hasClose: true,
      album: '',
      duration: 0,
      elapsed: 0,
      ticker: 'Ahora estas escuchando la' + this.radio.title,
      playIcon: 'media_play',
      pauseIcon: 'media_pause',
      prevIcon: 'media_prev',
      nextIcon: 'media_next',
      closeIcon: 'media_close',
      notificationIcon: 'notification'
    });
  }

  play(url) {
    console.log('play');
    if (this.stream == null) {
      console.log(url);
      //this.localStorage.ready().then(() => {
      //this.localStorage.set(`@playSoyLuz`, 1);//esto es lo mismo que --->  'local'+id
      localStorage.setItem(`@playSoyLuz`, '1');
      this.stream = new Audio(url);
      this.stream.play();
      this.stream.volume = 1;
      //miaudio.play();
      //this.audio = false;
      // this.events.publish('updatePlay', { data: 1 });
      //});

    }
    this.promise = new Promise((resolve) => {
      resolve(true);
    });
    return this.promise;
  }

  pause() {
    console.log('pause');
    //this.localStorage.get(`@playSoyLuz`).then((data) => {
    //if (data == 1) {
    localStorage.setItem(`@playSoyLuz`, '0');
    //this.localStorage.set(`@playSoyLuz`, 0);//esto es lo mismo que --->  'local'+id
    this.stream.pause();
    this.stream = null;
    //this.events.publish('updatePlay', { data: 0 });
    //miaudio.pause();
    //this.audio = true;
    //} else {
    //this.alertaService.warnAlert(this.restService.headerValidacion, "Contacta al administrador", null);
    //}
    //});
  }
  
  getDataStreaming() {
    return this.httpClient.get<RespuestaMusic>('https://radios.sonidoshd.com/cp/get_info.php?p=8018');
  }
}

