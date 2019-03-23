import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';

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


  @ViewChild('first') first: ElementRef;


  constructor(private renderer: Renderer2){

  }

  ngAfterViewInit(): void {

  }


  startTour(){
    this.started = true;
    this.renderer.addClass(this.first.nativeElement, 'selected');
    this.renderer.addClass(document.body, 'hide');
  }

  next(){
    alert();
  }


}
