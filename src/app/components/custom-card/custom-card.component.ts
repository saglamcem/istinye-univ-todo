import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {

  @Input() cardImageUrl: string;
  @Input() cardImageDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
