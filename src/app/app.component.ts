import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-change-detection';
  public name:string="kanaiya";
  public counter:number=0;
public obj:any={
  name:"kanaiya",
  email:"kanaiay@gmail.com"
}

changename(){
this.name="pawan";
this.counter++;
}
changeobject(){
  this.obj.name="pawan",
  this.obj.email="pawan@gmail.com"
}
}
