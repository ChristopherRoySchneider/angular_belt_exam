import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthorsComponent } from './authors/authors.component';

import { NewauthorComponent } from './newauthor/newauthor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorByIdComponent } from './author-by-id/author-by-id.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

@NgModule({
  declarations: [
    AppComponent,

    AuthorsComponent,

    NewauthorComponent,
    PageNotFoundComponent,
    AuthorByIdComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
