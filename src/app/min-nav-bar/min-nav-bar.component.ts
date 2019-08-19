import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { AfterViewInit } from "@angular/core";
import { ColorService } from "../color.service";


/**
 * # Example Use
 * 
 * Typescript
 * ```typescript
 * export class HomeComponent {
 *
 *  public headerNames : string[] = ['home', 'settings', 'about', 'contact'];
 *  public dropHeaders : string[] = ['Logout', 'Settings'];
 *  public dhandlers = [this.test, this.test];
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
 * [dropDownHandlers]="dhandlers"
 * [dropDownHeaders]="dropHeaders"
 * [secondaryColor]="sec"></min-nav-bar>
 * ```
 */
@Component({
  selector: 'min-nav-bar',
  templateUrl: './min-nav-bar.component.html',
  styleUrls: ['./min-nav-bar.component.css']
})
export class MinNavBarComponent implements OnInit, AfterViewChecked{

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
   * Input array for header names corresponding to the entered drop down action handlers ([[dropDownHandlers]])
   * 
   * ### Example
   * Typescript
   * ```typescript
   * public dropHeaders : string[] = ['home', 'profile', 'settings'];
   * ```
   * 
   * Html
   * ```html
   * <min-nav-bar [dropDownHeaders]="dropHeaders" ... >
   * ```
   */
  @Input() dropDownHeaders: string[];

  /**
   * ## Input
   * Input array for function pointers to *drop down menu navigation action functions*.
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
   * let dropHandlers : any[] = [this.handle];
   * ```
   * 
   * Html
   * ```html
   * <min-nav-bar [dropDownHandlers]="dropHandlers" ... ></min-nav-bar>
   * ```
   */
  @Input() dropDownHandlers: any[];
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

  /**
   * ## Input
   * Input CSS value that sets the primary color for the theme of this application.
   */
  @Input() primaryColor: string;

  /**
   * ## Input
   * Input CSS value that sets the secondary color for the theme of this application.
   */
  @Input() secondaryColor: string;

  /**
   * @hidden
   */
  private invertedSecondaryColor: string;

  /**
   * @hidden
   */

  private lastWindowWidth: number;
  /**
   * @hidden
   */
  
  private navControl : NavControl[] = null;

  /**
   * @hidden
   */
  private dropDownControl: NavControl[] = null;

  /**
   * @hidden
   */
  constructor(private color: ColorService) {}
  
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

    this.invertedSecondaryColor = this.color.invertColor(this.secondaryColor);
    if (window.innerWidth >= 800) {
      this.loadDesktopControls();
    } else {
      this.loadMobileControls();
    }
    
    // register click listener for drop down menu
    const onClick = (e: MouseEvent) =>
        this.onWindowClicked((<Element>e.target).className);
    window.addEventListener('click', onClick);
  }

  /**
   * @hidden
   */
  loadDesktopControls() {
      // apply all the actions to the navigation buttons
      this.navControl = [];
      for (var i = 0; i < this.buttonHeaders.length; i++) {
        let control = {
          text: this.buttonHeaders[i],
          funcIndex: i
        }
        this.navControl.push(control);
      }   

      // apply all the actions to the dropdown menu
      this.dropDownControl = [];
        for (var i = 0; i < this.dropDownHeaders.length; i++) {
          let control = {
            text: this.dropDownHeaders[i],
            funcIndex: i
          }
          this.dropDownControl.push(control);
        } 
  }

  /**
   * @hidden
   */
  loadMobileControls() {
    this.navControl = [];
      this.dropDownControl = [];

      for (var i = 0; i < this.buttonHeaders.length; i++) {
      let control = {
        text: this.buttonHeaders[i],
        funcIndex: i
      }
      this.dropDownControl.push(control);
    } 

      for (var i = 0; i < this.dropDownHeaders.length; i++) {
        let control = {
          text: this.dropDownHeaders[i],
          funcIndex: i
        }
        this.dropDownControl.push(control);
      } 
  }

  /**
   * @hidden
   * @param event containing resize information 
   */
  onResize(event) {
    // width at which nav button dissapear
    if (event.target.innerWidth <= 800 && this.lastWindowWidth >= 800) {
      this.loadMobileControls();
    } else {
      if (this.navControl.length == 0 && event.target.innerWidth >=800) {
        this.loadDesktopControls();
        this.ngAfterViewInit();
      }
    }

    this.lastWindowWidth = event.target.innerWidth;
  }

  /**
   * 
   * @hidden
   */
  onWindowClicked(classname: string) {
      if (classname != 'dropbtn' && classname != 'fas fa-ellipsis-h') {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
      }
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
      if (document.getElementById(this.buttonHeaders[i])) {
        document.getElementById(this.buttonHeaders[i]).style.backgroundColor = this.secondaryColor;
        document.getElementById(this.buttonHeaders[i]).style.borderColor = this.secondaryColor
      }
    }   
  }

  /**
   * @hidden
   */
  ngAfterViewChecked() {
    document.getElementById('logo').style.backgroundColor = this.primaryColor;
    document.getElementById('logo').style.borderColor = this.secondaryColor;

    document.getElementById('nav').style.borderColor = this.secondaryColor;
    document.getElementById('nav').style.backgroundColor = this.primaryColor;

    for (var i = 0; i < this.buttonHeaders.length; i++) {
      if (document.getElementById(this.buttonHeaders[i])) {
        var color : any = document.getElementById(this.buttonHeaders[i]).style.backgroundColor.replace('rgb','');
        color = color.replace('(', '');
        color = color.replace(')', '');
        var rgb  = color.split(','); 
        color = this.color.rgbToHex(+rgb[0], +rgb[1], +rgb[2]);
        if (color != this.invertedSecondaryColor) {
          document.getElementById(this.buttonHeaders[i]).style.backgroundColor = this.secondaryColor;
          document.getElementById(this.buttonHeaders[i]).style.borderColor = this.secondaryColor
        }
      }
    } 
  }

  /**
   * @hidden
   */
  mouseEnterButton(id: string) {
    document.getElementById(id).style.backgroundColor = this.invertedSecondaryColor;
  }

  /**
   * @hidden
   */
  mouseLeaveButton(id: string) {
    document.getElementById(id).style.backgroundColor = this.secondaryColor;

  }
  

  /**
   * @hidden
   */
  onMenuPressed() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
}

/**
* @hidden
*/
interface NavControl {
  text: string,
  funcIndex: number,
}
