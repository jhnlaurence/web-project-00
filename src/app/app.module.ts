import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { IntroductionSectionComponent } from './core/introduction-section/introduction-section.component';
import { SectionOneComponent } from './core/home/section-one/section-one.component';
import { SectionTwoComponent } from './core/home/section-two/section-two.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    IntroductionSectionComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
