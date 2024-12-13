import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, // Default route
  { path: 'home', component: LandingComponent }, // Home route
  {
    path: 'sign-in',
    component: LayoutComponent, // Use LayoutComponent as a wrapper
    children: [
      { path: '', component: SignInComponent } // Render SignUp inside the layout
    ]
  },
  { path: '**', redirectTo: '' }, // Fallback route
];
