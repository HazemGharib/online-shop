
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModalComponent } from './common/modal/modal.component';

import { ProductService } from './products/shared/product.service';
import { CategoryService } from './categories/shared/category.service';
import { ModalService } from './common/modal/modal.service';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'categories',      component: CategoriesComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductsGridComponent,
    ModalComponent,
    CategoriesComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService, CategoryService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
