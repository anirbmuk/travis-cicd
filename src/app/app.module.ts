import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './service/user.service';
import { FunctionService } from './service/function.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, FunctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
