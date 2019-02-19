import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllowAccessGuard } from './guards/allow-access.guard';
import { AuthRoutingModule } from './auth module/auth-routing.module';
import { HomeComponent } from './components/header-components/home/home.component';
import { AboutUsComponent } from './components/header-components/about-us/about-us.component';
import { ContactUsComponent } from './components/header-components/contact-us/contact-us.component';
import { HeaderComponent } from './shared module/shared module component/header/header.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
    canActivate: [AllowAccessGuard]
  }, 
  {
    path: 'about-us', 
    component: AboutUsComponent, 
    canActivate: [AllowAccessGuard]
  },
  {
    path: 'contact-us', 
    component: ContactUsComponent, 
    canActivate: [AllowAccessGuard]
  },
  {
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { } 