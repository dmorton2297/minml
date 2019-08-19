import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'min-button',
  templateUrl: './min-button.component.html',
  styleUrls: ['./min-button.component.css']
})
export class MinButtonComponent implements OnInit {

  @Input()
  text: string

  @Input()
  onClick: Function

  @Input() 
  color: string

  @Input() 
  hoverColor: string

  constructor() { }

  ngOnInit() {
    document.getElementById('button').style.backgroundColor = this.color;
  }

  mouseEnterButton() {
    document.getElementById('button').style.backgroundColor = this.hoverColor;
  }

  mouseLeaveButton() {
    document.getElementById('button').style.backgroundColor = this.color;
  }

}
