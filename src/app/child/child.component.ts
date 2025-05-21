import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges

{
  
@Input() boxcolor:string='green';
@Input() text:string="";
@Output () inputEvent=new EventEmitter;

c:number=0;
count(inputval:any){
  if(inputval.value.trim()){
this.c=this.c+1;
this.inputEvent.emit(inputval.value);

}}
constructor(private activeRoute:ActivatedRoute){}
 ngOnChanges(changes: SimpleChanges): void {
  console.log('This is value:', changes['text']);
if (changes['text']) {
  const change = changes['text'];
  console.log('Previous:', change.previousValue);
  console.log('Current:', change.currentValue);
}


  }



}


