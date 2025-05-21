import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './ParentFolder/parent/parent.component';
import { NavbarComponent } from './navbar/navbar.component';



export const routes: Routes = [
    {
        path:'',
        redirectTo:'app-navbar',
        pathMatch:'full'
    },
    {
        path:'app-navbar',
        component:NavbarComponent
    },
    {
        path:'app-parent',
        loadChildren:()=>import('./ParentFolder/parent/parent.routes')
    },{
        path:'app-child',
        component:ChildComponent
    }
];
