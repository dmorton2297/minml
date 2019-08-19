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
  public prim = "#1a2c56";
  public sec = "#333745";
  public offwhite = "#e5e5e5";
  public formTypes = ["Name:string", "Date:date",
   "Count:number", "Gender:radio,Male,Female,Non-binary,Unicorn,Word with space",
   "Checkbox:checkbox"]
  public title = "Data entry";
  public description = "Description for a particular form";
  
  test() {
    window.alert("test ");
  }

}
