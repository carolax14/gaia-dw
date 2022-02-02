import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen/authen.component';

const routes: Routes = [
  {
    path: 'authentification',
    component: AuthenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
