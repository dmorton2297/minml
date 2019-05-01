import { Component, OnInit } from '@angular/core';

/**
 * @ignore
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  public headerNames : string[] = ['Home', 'Import Data', 'Export Data', 'Reports'];
  public dropHeaders : string[] = ['Logout', 'Settings'];
  public dhandlers = [this.test, this.test];
  public logoURL: string = 'https://avatars3.githubusercontent.com/u/46693979?s=400&u=1b0b543a9496b5746178ca58665da632282a9220&v=4';
  public handlers = [this.test, this.test, this.test, this.test];
  public prim = "#000219";
  public sec = "#1A1F23";
  
  test() {
    window.alert("test ");
  }

}
