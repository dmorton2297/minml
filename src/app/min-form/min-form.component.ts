import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'min-form',
  templateUrl: './min-form.component.html',
  styleUrls: ['./min-form.component.css']
})
export class MinFormComponent implements OnInit {

  @Input() 
  types : string[]

  @Input() 
  primaryColor: string
  
  @Input()
  title: string

  @Input()
  description: string

  @Input()
  submit: Function;

  @Input()
  cancel: Function;

  formVals: formVal[];

  formControls: {[name: string]: FormControl};

  constructor() {}

  ngOnInit() {
    document.getElementById('main-box').style.backgroundColor = this.primaryColor;
    this.parseInput();
  }

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

      let fVal : formVal = {
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

  onSubmit() {
    var obj: {[k: string]: any} = {};
    for (let v of this.formVals) {
      obj[v.title] = this.formControls[v.title].value;
    }
    this.submit(obj);

  }

  onCancel() {
    this.cancel();
  }

}

class formVal {
  title: string
  type: string
  options: string[]
}
