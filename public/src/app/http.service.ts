import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {

  }
  getAuthors() {

    return this._http.get('/authors');
      }
  getAuthorById(id = '5c69e4472cc64c61b0628c5b') {
    // our http response is an Observable, store it in a variable
    return this._http.get('/authors/' + id);
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our author by id!', data));
  }


  addAuthor(newauthor) {
    return this._http.post('/authors', newauthor);
  }
  deleteAuthor(id) {
    return this._http.delete(`/authors/${id}`);
  }
  putAuthor(updatedAuthor) {
    return this._http.put(`/authors/${updatedAuthor._id}`,updatedAuthor);
  }
  addRating(id,newrating) {
    return this._http.post(`/authors/${id}/ratings`, newrating);
  }
}
