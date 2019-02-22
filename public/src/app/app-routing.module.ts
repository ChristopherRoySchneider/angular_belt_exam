import { AuthorByIdComponent } from './author-by-id/author-by-id.component';
import { AuthorsComponent } from './authors/authors.component';
// import { AlphaComponent } from './alpha/alpha.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
const routes: Routes = [

  { path: 'new',component: NewauthorComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: 'view/:id', component: AuthorByIdComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', component: AuthorsComponent },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
