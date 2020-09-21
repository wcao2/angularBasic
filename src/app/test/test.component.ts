import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',//can also be a class or attribute   '.app-test' '[app-test]'
  //inline ts file, use back ticks to represents multiple lines
  //[] class to template; () template to class
  template: `<div>
                Inline template
                {{name}}
              </div>
              <h4>{{2+2}}</h4>
              <h4>{{name.length}}</h4>
              <h4>{{name.toUpperCase()}}</h4>
              <h4>{{greetUser()}}</h4>

              <input [id]="myId" type="text" value="property binding">

              <h4 [class]="successClass">class binding  1</h4>
              <h4 [class.text-danger]="hasError">class binding  2</h4>
              <h4 [ngClass]="messageClasses">class binding  3</h4>
              
              <h4 [style.color]="hasError?'red':'green'">style binding  3.1</h4>
              <h4 [style.color]="highlightColor">style binding  3.2</h4>
              <h4 [ngStyle]="titleStyles">style binding  3.3</h4>

              <button (click)="onClick($event)">EventBinding</button>
              <button (click)="greeting='Welcome!'">Greet</button>
              {{greeting}}

              <input type="text" #myInput>
              <button (click)="logMessage(myInput.value)">Log</button>
              
              <input [(ngModel)]="name" type="text">{{ name1 }}
            `,
  styles: [`
      .text-success{
        color:green;
      }
      .text-special{
        font-style:italic;
      }
  `]
})
export class TestComponent implements OnInit {

  //twdb
  public name1="";

  public name="Wei Cao";
  //property binding
  public myId="testId";
  //class binding
  public successClass="text-success";
  public hasError=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-special":this.hasError
  }
  //style binding
  public highlightColor="orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }
  //eb
  public greeting="";

  constructor() { }

  ngOnInit() {
  }

  //eb
  onClick(event){
    //console.log('welcome')
    console.log(event);
    //this.greeting='welcome';
    this.greeting=event.type;
  }

  greetUser(){
    return "Hello "+this.name;
  }

  //rf
  logMessage(value){
    console.log(value);
  }
}