import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() name!:string;
 @Input() obj:any;
 @Input() counter!:number;
 child(){
  console.log("child");
 }
}
