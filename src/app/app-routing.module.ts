import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { AuthDeactivateGuard } from './services/guards/auth-deactivate.guard';
import { UserResolveService } from './services/resolvers/user-resolver';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'show' } },
  {
    path: 'users',
    // whether or not user can visit the route that's based on canActivate guard
    // canActivate: [AuthGuardGuard],
    // use can visit the parent but to visit its child routes the user must qualify via this guard
    canActivateChild: [AuthGuardGuard],
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [AuthDeactivateGuard],
        // whatever data is coming from UserResolveService is saved within user property
        resolve: { user: UserResolveService },
      },
    ],
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'extra', component: ExtraComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import(`./admin/admin.module`).then((m) => m.AdminModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
Whether or not user can visit the route: canActivate
User can visit the parent route but whether ot not that user can visit its child routes : canActivateChild
whether the user can leave the current route or not : canDeactivate
whether user can visit the lazy loaded routes : canLoad
*/
