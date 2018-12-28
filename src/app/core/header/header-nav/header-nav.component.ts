import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  searchIsOpen: boolean = false;

  clickHandler = () => {
    this.searchIsOpen = !this.searchIsOpen;
  };
  
  constructor() { }

  ngOnInit() {
  }

}
