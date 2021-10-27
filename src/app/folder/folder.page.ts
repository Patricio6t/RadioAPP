import { Component, OnInit } from '@angular/core';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  reproduciendo: boolean = true;
  audio: HTMLAudioElement;

  informacionRadio: any;
  song: string;
  volumen:number = 50;

  constructor(private pushService: PushService) { }

  ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //this.audio = new Audio('https://radios.sonidoshd.com/8018/stream');
    this.pushService.stream.volume = this.volumen/100;

    //this.audio2 = document.getElementById("radio");
    //console.log(this.audio2);
    
    this.pushService.getDataStreaming()
    .subscribe(
      (resp )=>{
      console.log('canción', resp);
     this.song = resp.title;
     console.log(this.song);
    });

    setInterval(() => {
      this.pushService.getDataStreaming()
      .subscribe(
        (resp )=>{
        console.log('Refresh', resp);
       this.song = resp.title;
       console.log(this.song);
      });
    }, 35000);


  }

  onPlayClick() {

    this.pushService.stream.play();
    this.reproduciendo = true;

  }

  onPauseClick() {

    this.pushService.stream.pause();
    this.reproduciendo = false;

  }

  onChangeRange(event) {
    // this.audio.volume = event.detail.value;
    this.pushService.stream.volume = event.detail.value / 100;
    this.volumen = event.detail.value;
  }
  }


