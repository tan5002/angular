import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloAngularComponent} from './hello-angular/hello-angular.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent} from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/items',pathMatch: 'full'},
  {path:"hello",component: HelloAngularComponent},
  {path:"about",component: AboutComponent},
  {path:"items",component: ItemsComponent},
  {path:"items/:id",component: ItemDetailComponent},
  {path:"**", component: PageNotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
