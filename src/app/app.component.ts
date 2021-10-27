import { Component } from '@angular/core';
import { PushService } from './services/push.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
    title: 'Conoce ',
    strong: 'nuestra web',
    url: 'https://www.radioaltares.com',
    icon: 'globe',
    descripcion: 'Tenemos varidad de considerados e informaciones de gran interés para tu día a día.' },
    {
    title: '',
    strong: 'Mensajes de fe',
    url: 'https://www.facebook.com/radioaltares',
    icon: 'chatbubbles',
    descripcion: 'El pan de nuestro para cada día, te brindamos diariamente una palabra de fe y esperanza para tí.' },
    {
    title: 'Nuestra ',
    strong: 'programación',
    url: 'https://www.radioaltares.com/programacion',
    icon: 'radio',
    descripcion:'Para cada día de la semana, una programación única y diferente.' },
    {
    title: 'Siguenos en ',
    strong: 'Facebook',
    url: 'https://www.facebook.com/radioaltares',
    icon: 'logo-facebook',
    descripcion:'Sé un fan de nuestros variados contenidos y mensajes 24/7 los 365 días del año.' },
    {
    title: 'Siguenos en ',
    strong: 'Instagram',
    url: 'https://www.instagram.com/radioaltares/?hl=es-la',
    icon: 'logo-instagram',
    descripcion:'Un contenido diferente, pensado en tí para elevar tu fe y seguir fortaleciendo a cada día.' }
    ];

    constructor(private pushServices: PushService, private platform: Platform) {
      this.initializeApp();
    }
    initializeApp(){
      this.platform.ready().then(()=>{
        this.pushServices.configuracionInicial();
        this.pushServices.createNotificationMusic();
        
      });
    }
}
