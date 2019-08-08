import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'min-box',
  templateUrl: './min-box.component.html',
  styleUrls: ['./min-box.component.css']
})
export class MinBoxComponent implements OnInit {

  @Input() primaryColor: string;

  @Input() secondaryColor: string;

  constructor() { }

  ngOnInit() {
    document.getElementById('main_box').style.backgroundColor = this.primaryColor;
  }

}
