import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-by-id',
  templateUrl: './author-by-id.component.html',
  styleUrls: ['./author-by-id.component.css']
})
export class AuthorByIdComponent implements OnInit {

author={};
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);

      this.getAuthorByIdFromService(params["id"]);
    });
  }

  getAuthorByIdFromService(id?: string) {
    let observable = this._httpService.getAuthorById(id);
    observable.subscribe(data => {
      console.log('Got our author by id the new way!', data);
      this.author = data['data'][0];
      console.log('this.authorToEdit', this.author);
    });
  }
  deleteAuthor(id: string): void {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('deleted item', data);
      console.log(`delete author by id ${id}`);
      this._router.navigate(['/']);
    });
  }
}
