import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css']
})
export class SecondaryCardComponent implements OnInit {

  @Input()
  photoCover:string = ''

  @Input()
  tittle:string = ''

  @Input()
  textContent:string = ''

  @Input()
  id:string = '0'
  constructor() { }

  ngOnInit(): void {
  }

}
