import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
// import { HeaderContactsComponent } from './header/header-contacts/header-contacts.component';
// import { HeaderNavComponent } from './header/header-nav/header-nav.component';
// import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './guard/module-import-guard';
// import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderContactsComponent } from './components/header/header-contacts/header-contacts.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    ContentComponent,
  ], exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    ContentComponent
  ],

  imports: [
    CommonModule,
    // CoreRoutingModule,
    SharedModule,
    SharedModule.forRoot()
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
