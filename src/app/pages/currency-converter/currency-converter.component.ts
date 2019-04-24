import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.sass']
})
export class CurrencyConverterComponent implements OnInit {
  selected = 'option2';
  
  constructor() { }

  ngOnInit() {
  }

}
