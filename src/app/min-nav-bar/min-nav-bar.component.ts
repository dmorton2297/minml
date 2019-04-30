import { Component, OnInit, Input } from '@angular/core';
import { AfterViewInit } from "@angular/core";


/**
 * # Example Use
 * 
 * Typescript
 * ```typescript
 * export class HomeComponent {
 *
 *  public headerNames : string[] = ['home', 'settings', 'about', 'contact'];
 *  public logoURL: string = 'some_url';
 *  public handlers = [this.test, this.test, this.test, this.test];
 *  public prim = "1B2A33";
 *  public sec = "#223333";
 * 
 *  constructor(private router: Router) {}
 * 
 *  test() {
 *    this.router.navigateByUrl("someUrl");
 *  }
 *
 *}
 * ```
 * 
 * Html
 * ```html
 * <min-nav-bar 
 * [actionHandlers]="handlers" 
 * [buttonHeaders]="headerNames" 
 * [logoURL]="logoURL" 
 * [primaryColor]="prim" 
 * [secondaryColor]="sec"></min-nav-bar>
 * ```
 */
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

  /**
   * ## Input
   * Input to a url (or direct path location if file in project) that is injected into 
   * img url source of the project logo.
   * 
   * ## Example
   * Typescript
   * ```typescript
   * public logoURL: string = 'some_url';
   * ```
   * 
   * Html
   * ```html
   * <min-nav-bar 
   * ...
   * [logoURL]="logoURL" 
   * ...
   * ></min-nav-bar>
   * ```
   */
  @Input() logoURL: string; 

  @Input() primaryColor: string;

  @Input() secondaryColor: string;

  /**
   * @hidden
   */
  private navControl : NavControl[] = null;

  /**
   * @hidden
   */
  constructor() {}
  
  /**
   * @hidden
   */
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

  /**
   * @hidden
   */
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
* @hidden
*/
interface NavControl {
  text: string,
  funcIndex: number,
}
