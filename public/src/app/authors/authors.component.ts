import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {
  newAuthor: any;
  sortDirection='<'
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



  deleteAuthor(id: string): void {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('deleted item', data);
      console.log(`delete author by id ${id}`);
      this.getAuthorsFromService();
    });
  }
  sortToggle(direction: string){
    if(this.sortDirection=='<'){
      this.sortDirection='>';
    }
    else{
      this.sortDirection='>';
    }
  }


}
