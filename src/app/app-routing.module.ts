import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BeerListComponent,
  },
  {
    path: 'add',
    component: BeerFormComponent,
  },
  {
    path: 'detail',
    component: BeerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
