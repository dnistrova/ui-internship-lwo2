import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ContentComponent } from './core/components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {  }
