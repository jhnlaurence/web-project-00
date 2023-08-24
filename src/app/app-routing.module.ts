import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactUsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}