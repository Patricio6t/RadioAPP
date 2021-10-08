import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{

  constructor( ) { }

  }

/*
  ngAfterViewInit(){
    const play = document.getElementById('play');
    const stop = document.getElementById('pause');
    const loader = document.getElementById('loader');

  const file = new Audio('https://radios.sonidoshd.com/8018/stream');

  file.play();
    play.style.display = "none";
    loader.style.display = "block";
    stop.style.display = "none";

    file.addEventListener('playing', function(){
      loader.style.display= "none";
      play.style.display= "none";
      stop.style.display= "block";
    });

    file.addEventListener('waiting', function(){
      loader.style.display= "block";
      play.style.display= "none";
      stop.style.display= "none";
    });

    stop.addEventListener('click', function(){
      file.pause();
      play.style.display = "block";
      stop.style.display= "none";
      loader.style.display= "none";
    });

    play.addEventListener('click', function(){
      file.play();
      play.style.display= "none";
      stop.style.display= "block";
      loader.style.display="none";
    });
    }
*/
