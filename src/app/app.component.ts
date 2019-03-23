import { Component, TrackByFunction, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
  title = 'Angular Site Tour Plugin';

  @ViewChildren('slides') slides: QueryList<any>;



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
    }
  ];


  ngAfterViewInit(): void {

        console.log(this.slides.toArray().filter(s => console.log(s)));
  }

}
