import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl:'profile-card.component.html',
  encapsulation:ViewEncapsulation.None,
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
  cardUrl: string = 'http://www.google.com'

}
