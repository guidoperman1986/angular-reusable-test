import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './master/detail/detail.component';
import { PrincipalComponent } from './master/principal/principal.component';

const routes: Routes = [  
    { path:'home' , component: PrincipalComponent },
    { path:'detail/:id' , component: DetailComponent },
    { path:'' , redirectTo: '/home', pathMatch: 'full' },
  
];

export const APP_ROUTES = RouterModule.forRoot(routes);