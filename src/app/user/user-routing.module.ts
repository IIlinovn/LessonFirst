import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: '', component: UserAuthComponent },
  { path: 'me', component: UserViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
