import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserServicesService } from '../../service/user-services.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{

val:string=''
users:any[]=[]
constructor(private user:UserServicesService,http:HttpClient){

}
  ngOnInit(): void {
   this.user.getData().subscribe((res)=>{
this.users=res.users;
    });
  }


}
