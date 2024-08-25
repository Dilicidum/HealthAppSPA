import { Component, OnInit } from '@angular/core';
import { NavigationMenuItem } from '../models/nav-menu-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = [
    { name: "Home", path : "/home" },
    {
      name: "Diary", path: "/diary", children: [
        { name: "Make a note about today", path: "/diary/create-record" },
        { name: "Edit your previous diary notes", path: "/diary/update-record" },
        { name: "Journal list", path: "/diary/list" }
    ]}
  ] as NavigationMenuItem[]

  constructor() { }

  ngOnInit(): void {
  }

  ChooseMenuTab(name: string) {
    this.menuItems.forEach(x => x.isChoosen = false);
    this.menuItems.find(x => x.name == name).isChoosen = true;

  }

}
