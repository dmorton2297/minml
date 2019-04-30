import { Component, OnInit, Input } from '@angular/core';
import { AfterViewInit } from "@angular/core";


@Component({
  selector: 'min-nav-bar',
  templateUrl: './min-nav-bar.component.html',
  styleUrls: ['./min-nav-bar.component.css']
})
export class MinNavBarComponent implements OnInit{

  /**
   * ## Input
   * Input array for function pointers to *navigation action functions*.
   * Navigation action functions should be defined in the **component implementing
   * this navigation bar**.
   * 
   * ### Example
   * 
   * Typescript
   * ```typescript
   * // Routing function to home page
   * function(id: number) handle() { 
   *  this.router.navigateByUrl('home'); 
   * };
   * 
   * // Array to pass as input into component
   * let handlers : any[] = [this.handle];
   * ```
   * 
   * Html
   * ```html
   * <min-nav-bar [actionHandlers]="handlers" ... ></min-nav-bar>
   * ```
   */
  @Input() actionHandlers : any[];

  /**
   * ## Input
   * Input array for header names corresponding to the entered action handlers ([[actionHandlers]])
   * 
   * ### Example
   * Typescript
   * ```typescript
   * public headerNames : string[] = ['home', 'profile', 'settings'];
   * ```
   * 
   * Html
   * ```html
   * <min-nav-bar [buttonHeaders]="headerNames" ... >
   * ```
   */
  @Input() buttonHeaders: string[];

  @Input() logoURL: string; 

  @Input() primaryColor: string;

  @Input() secondaryColor: string;

  private navControl : NavControl[] = null;

  constructor() {}

  ngOnInit() {
    if (this.buttonHeaders.length != this.actionHandlers.length) {
      console.log('%c min-nav-bar error: %c Info: ButtonHeaders input must be of same length as ActionHandlers input.', 
      'backgroud: yellow; font-weight: bold',  
      'backgroud: yellow; color: red');
      return;
    }

    this.navControl = [];
    for (var i = 0; i < this.buttonHeaders.length; i++) {
      console.log(i);
      let control = {
        text: this.buttonHeaders[i],
        funcIndex: i
      }
      this.navControl.push(control);
    }    
  }

  ngAfterViewInit() {
    document.getElementById('logo').style.backgroundColor = this.primaryColor;
    document.getElementById('logo').style.borderColor = this.secondaryColor;

    document.getElementById('nav').style.borderColor = this.secondaryColor;
    document.getElementById('nav').style.backgroundColor = this.primaryColor;
    for (var i = 0; i < this.buttonHeaders.length; i++) {
      document.getElementById(this.buttonHeaders[i]).style.backgroundColor = this.secondaryColor;
      document.getElementById(this.buttonHeaders[i]).style.borderColor = this.secondaryColor
    }   
  }
}

/**
 * Internal interface used for min-nav-bar
 */
interface NavControl {
  text: string,
  funcIndex: number,
}
