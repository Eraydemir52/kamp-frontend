import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { from } from 'rxjs';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import{ToastrModule}from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,//bizim yazlımız componetler
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,//kendisi gelen kompanetler
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })//kullanabilir hale getir
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
