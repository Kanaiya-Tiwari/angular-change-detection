import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 @Input() name!:string;
 @Input() obj:any;
 @Input() counter!:number;
 parent(){
  console.log("parent");
 }
}
