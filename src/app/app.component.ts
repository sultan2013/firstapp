import { Component } from '@angular/core';
import {initializeApp,database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  about = 'this app is built to help be in touch with family and relatives';

  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBiYzysaXI6LFjCNGonk7IPmXyIX66Lu2I",
      authDomain: "relativescall.firebaseapp.com",
      databaseURL: "https://relativescall.firebaseio.com",
      storageBucket: "relativescall.appspot.com",
      messagingSenderId: "627182190390"
    };
    initializeApp(config);

    var root = database().ref();
    root.on('value', function(snap){
      console.log(snap.val)});
    }

  }
