import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WalletComponent } from './wallet/wallet.component';
import { WalletTransComponent } from './wallet-trans/wallet-trans.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { EmptyandUnpaidComponent } from './emptyand-unpaid/emptyand-unpaid.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    routingComponents,
    WalletComponent,
    WalletTransComponent,
    LoginComponentComponent,
    EmptyandUnpaidComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
