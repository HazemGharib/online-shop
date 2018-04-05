import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCJm9sdA5uN6n9M-PY0TKQKZKlB8OZET0o',
  authDomain: 'online-shop-e37c4.firebaseapp.com',
  databaseURL: 'https://online-shop-e37c4.firebaseio.com',
  projectId: 'online-shop-e37c4',
  storageBucket: 'online-shop-e37c4.appspot.com',
  messagingSenderId: '745334263316'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
