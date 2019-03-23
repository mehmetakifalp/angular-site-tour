import { Component, TrackByFunction } from '@angular/core';
export interface People{
  cardImg: string;
  cardTitle: string;
  cardText:string;
  cardUrl:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-site-tour';


  peoples: People[] = [
    {
      id: 1,
      cardImg : 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
      cardTitle: 'John Doe',
      cardText: 'Such an short description about him',
      cardUrl: 'http://www.rastmobile.com'
    },
    {
      id: 2,
      cardImg : 'https://www.w3schools.com/bootstrap4/img_avatar6.png',
      cardTitle: 'Her Doe',
      cardText: 'Short description about her',
      cardUrl: 'http://www.google.com'
    },
  ];


}
