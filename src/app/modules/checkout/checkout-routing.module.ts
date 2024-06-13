import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProcessingComponent } from './components/processing/processing.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path: "processing",
    component: ProcessingComponent
  },
  {
    path: "success",
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
