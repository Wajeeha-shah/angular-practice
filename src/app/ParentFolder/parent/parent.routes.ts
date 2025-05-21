import { Route } from "@angular/router"; 
import { AllparentsComponent } from "../allparents/allparents.component";
import { ParentComponent } from "./parent.component";

export default [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'all-parent',
        component: AllparentsComponent
      },
      {path:':id',
        component:AllparentsComponent
      },
      {
        path: '',
        redirectTo: 'all-parent',
        pathMatch: 'full'
      }
    ]
  }
] as Route[];
