import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { IntroductionSectionComponent } from './core/introduction-section/introduction-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    IntroductionSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
