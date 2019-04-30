import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  public headerNames : string[] = ['home', 'settings', 'about', 'contact'];
  public logoURL: string = 'https://avatars3.githubusercontent.com/u/46693979?s=400&u=1b0b543a9496b5746178ca58665da632282a9220&v=4';
  public handlers = [this.test, this.test, this.test, this.test];
  public prim = "1B2A33";
  public sec = "#223333";
  
  test() {
    window.alert("test ");
  }

}
