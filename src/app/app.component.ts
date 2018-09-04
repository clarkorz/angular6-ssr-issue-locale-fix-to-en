import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<h1>Hello</h1><p>locale is {{locale}}</p>`
})
export class AppComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public locale: string) {
    console.log(`LOCALE_ID is ${locale}`);
  }

  ngOnInit() {
  }
}
