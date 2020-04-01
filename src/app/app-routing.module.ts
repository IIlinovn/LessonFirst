import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'view', component: ProductViewComponent },
  { path: 'edit', component: ProductEditComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryViewComponent },
  { path: 'user', loadChildren: () => UserModule },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
