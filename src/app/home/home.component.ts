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

  public headerNames : string[] = ['home', 'about', 'contact'];
  public dropHeaders : string[] = ['logout', 'settings'];
  public dhandlers = [this.test, this.test];


  public logoURL: string = 'https://avatars1.githubusercontent.com/u/23268332?s=400&v=4';
  public handlers = [this.test, this.test, this.test];
  public prim = "black";
  public sec = "goldenrod";
  
  test() {
    window.alert("test ");
  }

}
