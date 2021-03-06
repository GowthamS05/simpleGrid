import { LoginComponentComponent } from './login-component/login-component.component';
import { EmptyandUnpaidComponent } from './emptyand-unpaid/emptyand-unpaid.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletTransComponent } from './wallet-trans/wallet-trans.component';
import { ItemAvailabilityComponent } from './item-availability/item-availability.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SellerGridComponent } from './seller-grid/seller-grid.component';
import { DefaultComponentComponent } from './default-component/default-component.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  { path:'adminPanel',component: AdminPanelComponent} ,  
  { path:'orderGrid',component: OrderGridComponent} ,  
  { path:'sellerGrid',component: SellerGridComponent} ,
  { path:'itemDetailGrid',component: ItemDetailComponent} ,
  { path:'itemAvailabiltyGrid',component: ItemAvailabilityComponent} ,
  { path:'itemWalletComponent',component: WalletComponent} ,
  { path:'itemWalletTransComponent',component: WalletTransComponent} ,
  { path:'emptyUnpaid',component: EmptyandUnpaidComponent} ,  
  { path:'login',component: LoginComponentComponent} ,  
  { path:'',component: DefaultComponentComponent}   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminPanelComponent,DefaultComponentComponent,
  OrderGridComponent,ItemDetailComponent,ItemAvailabilityComponent,WalletTransComponent,
  SellerGridComponent,WalletComponent,EmptyandUnpaidComponent,LoginComponentComponent]