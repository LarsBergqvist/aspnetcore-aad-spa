import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRouteComponent } from './myroute.component';

const routes: Routes = [{ path: 'myroute', component: MyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
