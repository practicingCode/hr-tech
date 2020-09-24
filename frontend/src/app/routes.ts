import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

//Auth
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component:UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component:UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'home', component:HomeComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];