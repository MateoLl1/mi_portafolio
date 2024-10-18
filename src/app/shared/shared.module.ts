import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
