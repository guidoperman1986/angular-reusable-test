import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './master/detail/detail.component';
import { ReusableToolbarComponent } from './shared/reusable/toolbar/reusable-toolbar.component';
import { ReusableTableComponent } from './shared/reusable/table/reusable-table.component';
import { APP_ROUTES } from './app.routes';
import { PrincipalComponent } from './master/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ReusableToolbarComponent,
    ReusableTableComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
