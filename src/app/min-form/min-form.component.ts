import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * # Example Use
 * 
 * Typescript
 * ```typescript
 * export class HomeComponent {
 *
 * constructor() {}
 *
 * public offwhite = "#e5e5e5";
 * public formTypes = ["Name:string", "Date:date",
 *  "Count:number", "Gender:radio,Male,Female,Non-binary",
 *  "Checkbox:checkbox"]
 * public title = "Data entry";
 * public description = "Description for a particular form";
 * 
 *
 * onSubmit(object: any) {
 *   console.log(object);
 * }
 *
 * onCancel() {
 *   window.alert('User cancelled');
 * }
 * ```
 * Html
 * ```html
 * <min-form
 * [types]='formTypes' 
 * [primaryColor]="offwhite" 
 * [title]="title"
 * [description]="description"
 * [submit]="onSubmit"
 * [cancel]="onCancel">
 * 
 * </min-form>
 */

@Component({
  selector: 'min-form',
  templateUrl: './min-form.component.html',
  styleUrls: ['./min-form.component.css']
})
export class MinFormComponent implements OnInit {

  /**
   * ## Input
   * **required** Input array that specifies the contents of a particular form. 
   * Each value in this array must follow the format '{Name}:{Type}'.
   * The form input type radio box has options, and follows a special form. 
   * Radio box follow the form '{Name}:radio,{Option1},{Option2},...,{OptionN}'
   * where each option follows the 'radio' type signifier in a comma seperated list
   * with **no spaces**.
   * 
   * ### Example
   * Typescript
   * ```typescript
   * // Array specifying the fields and types of the form
   * public formTypes = ["Name:string", "Date:date",
   * "Count:number", "Gender:radio,Male,Female,Non-binary,Unicorn,Word with space",
   * "Checkbox:checkbox"]
   * ```
   * 
   * Html
   * ```html
   * <min-form [types]='formTypes'></min-form>
   * ```
   */
  @Input()
  types: string[]

  /**
   * ## Input
   * **required** Input for the primary background color of the form.
   * 
   * ### Example
   * Typescript
   * ```typescript
   * public primColor = '#ffffff';
   * ```
   * 
   * Html
   * ```html
   * <min-form [primaryColor]="primColor"></min-form>
   * ```
   * 
   */
  @Input()
  primaryColor: string

  /**
   * ## Input
   * **required** Input for the title of the form.
   * 
   * ### Example
   * Typescript
   * ```typescript
   * public title = 'A title';
   * ```
   * 
   * Html
   * ```html
   * <min-form [title]="title"></min-form>
   * ```
   * 
   */
  @Input()
  title: string

  /**
   * ## Input
   * **required** Input for the description of the form.
   * 
   * ### Example
   * Typescript
   * ```typescript
   * public description = 'A description';
   * ```
   * 
   * Html
   * ```html
   * <min-form [description]="description"></min-form>
   * ```
   * 
   */
  @Input()
  description: string

  /**
   * ## Input
   * **required** Input for a function that handles sumbitting the form.
   * A json object is sent to this function. The object itself is based
   * on the types array that is passed into the form as an object. The 
   * function passed in as input must have one paramater, an object of 
   * type any, that allows the form data to be passed through. 
   * 
   * ### Example
   * Typescript
   * ```typescript
   * onSubmit(object: any) {
   *  console.log(object);
   * }  
   * ```
   * 
   * Html
   * ```html
   * <min-form [submit]="onSubmit"></min-form>
   * ```
   * 
   */
  @Input()
  submit: Function;

  /**
   * ## Input
   * **required** Input for a function that handles the case when 
   * a user clicks cancel on the form. The funciton passed into this input
   * should not take any parameters.
   * 
   * ### Example
   * Typescript
   * ```typescript
   * onCancel() {
    *  console.log('Form Cancelled');
    * }  
    * ```
    * 
    * Html
    * ```html
    * <min-form [cancel]="onCancel"></min-form>
    * ```
    * 
    */
  @Input()
  cancel: Function;

  /**
   * @hidden
   */
  formVals: formVal[];

  /**
   * @hidden
   */
  formControls: { [name: string]: FormControl };

  /**
   * @hidden
   */
  constructor() { }

  /**
   * @hidden
   */
  ngOnInit() {
    document.getElementById('main-box').style.backgroundColor = this.primaryColor;
    this.parseInput();
  }

  /**
   * @hidden
   */
  parseInput() {
    this.formVals = [];
    this.formControls = {};
    for (let t of this.types) {
      let hasOptions = false;
      let temp = t.split(':');
      let options = temp[1].split(',')
      if (options.length > 1) {
        hasOptions = true;
      }

      let fVal: formVal = {
        title: temp[0],
        type: temp[1],
        options: []
      }

      if (hasOptions) {
        fVal.type = options[0]
        let opts = options.slice(1, options.length);
        fVal.options = opts;
      }

      this.formVals.push(fVal);
      this.formControls[fVal.title] = new FormControl('');
    }

    console.log(this.formVals);
  }

  /**
  * @hidden
  */
  onSubmit() {
    var obj: { [k: string]: any } = {};
    for (let v of this.formVals) {
      obj[v.title] = this.formControls[v.title].value;
    }
    this.submit(obj);

  }

  /**
  * @hidden
  */
  onCancel() {
    this.cancel();
  }

}

/**
* @hidden
*/
class formVal {
  title: string
  type: string
  options: string[]
}
