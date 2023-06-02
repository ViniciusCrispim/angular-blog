import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.css']
})
export class PrimaryCardComponent implements OnInit {

  @Input()
  photoCover:string = ''

  @Input()
  tittle:string = ''

  @Input()
  textContent:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
