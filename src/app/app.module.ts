import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { T1Component } from './components/shared/t1/t1.component';
import { T2Component } from './components/shared/t2/t2.component';
import { ImageComponent } from './components/shared/image/image.component';
import { ParrafoComponent } from './components/shared/parrafo/parrafo.component';
import { PlaceholderComponent } from './components/shared/placeholder/placeholder.component';
import { IconComponent } from './components/shared/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    T1Component,
    T2Component,
    ImageComponent,
    ParrafoComponent,
    PlaceholderComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
