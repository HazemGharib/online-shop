import { ProductService } from './products/shared/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductsGridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
