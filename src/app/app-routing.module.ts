import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen/authen.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  { path: 'one', component: AuthenComponent },
  { path: 'two', component: CompteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
