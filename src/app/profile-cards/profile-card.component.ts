import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, ViewChild, Renderer2, TemplateRef } from '@angular/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip/public_api';
export interface Step{
  stepId: string,
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
    stepId: "first",
    title: "First Title",
    content: "First Content"
  }, {
    stepId: "second",
    title: "Second Title",
    content: "Second Content"
  }, {
    stepId: "third",
    title: "Third Title",
    content: "Third Content"
  }];

  @Input()
  footerTemplate: TemplateRef<any>;


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

  next(step:TooltipDirective){

    step.toggle();

  }


}
