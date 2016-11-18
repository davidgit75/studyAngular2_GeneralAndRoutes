import { routing } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RequestComponent } from './components/request/request.component';
import { ContentComponent } from './components/content/content.component';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';
import { ArticleComponent } from './components/article/article.component';
import { HighlightDirective } from './directives/highlight.directive';

import { FormsDirective } from './directives/forms.directive';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader'; 


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RequestComponent,
    ContentComponent,
    UsersComponent,
    FormComponent,
    ArticleComponent,
    HighlightDirective,
    FormsDirective,
    UPLOAD_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
