import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';


import { OrderManagerService } from './shared/services/order-manager.service';
import { WindowRefService } from './shared/services/window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    	{ path: 'showcase', component: ShowcaseComponent },
    	{ path: 'checkout', component: CheckoutComponent },
    	{ path: '**', redirectTo: '/showcase', pathMatch: 'full' }])
    ],
  providers: [
    OrderManagerService,
    WindowRefService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

