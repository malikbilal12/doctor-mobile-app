import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedTab: any
  constructor() { }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab
  }

}
