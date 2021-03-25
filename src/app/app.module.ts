import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { from } from 'rxjs';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import{ToastrModule}from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,//bizim yazlımız componetler
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    CategoryAddComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,//kendisi gelen kompanetler
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })//kullanabilir hale getir
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
