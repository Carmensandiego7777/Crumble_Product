import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SoloproductComponent } from './components/soloproduct/soloproduct.component';

const routes: Routes = [{
  path: ':id',
  component:ProductsComponent
},
{
  path:':id/:solo',
  component:SoloproductComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
