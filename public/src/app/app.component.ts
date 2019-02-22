import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  newAuthor: any;
  title = 'app';
  showAuthorEditFormId = null;
  authors = [];
  authorToEdit = {};
  newRating={};
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    console.log('ngOnInit');
    this.getAuthorsFromService();
    // this.getAuthorByIdFromService();
    this.newAuthor = {  };
  }


  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Got our authors the new way!', data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      this.authors = data['data'];
      console.log('this.authors', this.authors);
    });
  }

  getAuthorByIdFromService(id?: string) {
    let observable = this._httpService.getAuthorById(id);
    observable.subscribe(data => {
      console.log('Got our author by id the new way!', data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      this.authorToEdit = data['data'][0];
      console.log('this.authorToEdit', this.authorToEdit);
    });
  }
  onButtonClick(): void {
    this.getAuthorsFromService();
    console.log(`Click event is working`);
  }
  onButtonClickAuthor(id?: string): void {
    this.getAuthorByIdFromService(id);
    console.log(`Click event author by id`);
  }
  showRatingForm(id: string): void {
    this.showAuthorEditFormId = id;
    console.log(`Click event showRatingForm`);
  }
  onSubmit(newAuthor) {
    console.log(newAuthor);
    let observable = this._httpService.addAuthor(newAuthor);
    observable.subscribe(data => {
      console.log('posted data', data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      this.newAuthor = { };
      this.getAuthorsFromService();
    });
  }
  onSubmitRating( newRating, authorId) {
    console.log("*newRating",newRating);
    console.log("*authorId",authorId);

    let observable = this._httpService.addRating(authorId,newRating);
    observable.subscribe(data => {
      console.log('put ', data);

      this.newRating = { };
      this.showAuthorEditFormId=null;
      this.getAuthorsFromService();
      this.getAuthorByIdFromService(authorId);


    });
  }


  deleteAuthor(id: string): void {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('deleted item', data);
      console.log(`delete author by id ${id}`);
      this.getAuthorsFromService();
    });
  }
  putAuthor(updatedAuthor) {
    console.log(updatedAuthor);
    let observable = this._httpService.putAuthor(updatedAuthor);
    observable.subscribe(data => {
      console.log('posted data', data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      this.authorToEdit = { };
      this.getAuthorsFromService();
    });
  }
  dataFromChild(eventData) {
    console.log('********eventData', eventData);
    console.log('********pre', this.authorToEdit);
    this.authorToEdit = eventData;
    console.log('********post', this.authorToEdit);
    this.getAuthorsFromService();
  }

}
