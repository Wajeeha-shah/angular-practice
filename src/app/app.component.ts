import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ChildComponent } from './child/child.component';

import { Router } from '@angular/router'; // ✅ correct
import { string } from 'zod';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgIf, FormsModule, NgFor, NgClass, RouterOutlet, RouterLink, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnChanges {
  value:string='';
  val:string='';

title:boolean=false;
para={name:'',url:''};
removelink=true;
newData={
  name:'kulfa',
  company:'engro'
}
products=[{
  name:'icecream',
  company:'nestle'
},{
  name:'cream',
  company:'nestle'
},{
  name:'juice',
  company:'nestle'
}]
product=signal<any>([])
constructor(private router:Router) {
  console.log(this.product());
  this.product.set(this.products);
  this.product.update((preData)=>{
  return [ ...preData,this.newData];
 
  })
}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 
inputval=signal('');
submitBtn()
{
  this.value=this.val;
}


}
