import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  PostImage:string = ""
  @Input()
  PostData:string = ""
  @Input()
  PostTitle:string = ""
  @Input()
  PostContent:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
