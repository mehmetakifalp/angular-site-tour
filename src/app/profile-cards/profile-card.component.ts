import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
export interface Step{
  id: string,
  title: string,
  content: string
}
@Component({
  selector: 'profile-card',
  templateUrl:'profile-card.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {

  @Input()
  cardImg: string = 'https://www.w3schools.com/bootstrap4/img_avatar1.png';

  @Input()
  cardTitle: string = 'John Doe';

  @Input()
  cardText: string = 'Some example text some example text. John Doe is an architect and engineer';

  @Input()
  cardUrl: string = 'http://www.google.com';


  @Input()
  steps: Step[] = [{
    id: "#first",
    title: "First Title",
    content: "First Content"
  }, {
    id: "#second",
    title: "Second Title",
    content: "Second Content"
  }, {
    id: "#third",
    title: "Third Title",
    content: "Third Content"
  }, ]


  @ViewChild('first') first: ElementRef;


  constructor(private renderer: Renderer2){

  }

  ngAfterViewInit(): void {

  }


  started():boolean{
    return false;
  }

  startTour(){
    this.renderer.addClass(this.first.nativeElement, 'selected');
    this.renderer.addClass(document.body, 'hide');
  }

  next(){

  }


}
