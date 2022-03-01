import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {DefaultLayoutComponent} from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'memorial',
    // component: DefaultLayoutComponent,
    loadChildren: () => import('./memorial/memorial.module').then(m => m.MemorialModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'memorial'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
