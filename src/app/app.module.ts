import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MenuComponent } from './menu/menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      LayoutComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      AngularFontAwesomeModule,
      BrowserAnimationsModule,
      FormsModule,
      SweetAlert2Module.forRoot({
         buttonsStyling: false,
         customClass: 'modal-content',
         confirmButtonClass: 'btn btn-primary',
         cancelButtonClass: 'btn'
      }),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      PaginationModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PopoverModule.forRoot(),
      ProgressbarModule.forRoot(),
      RatingModule.forRoot(),
      SortableModule.forRoot(),
      TimepickerModule.forRoot(),
      TooltipModule.forRoot(),
      TypeaheadModule.forRoot(),
      AlertModule.forRoot(),
      RouterModule.forChild(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
