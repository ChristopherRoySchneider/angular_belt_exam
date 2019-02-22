import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  newAuthor = {};
  errors = null;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('params', params);
    });
  }
  addAuthor(newAuthor) {
    console.log(newAuthor);
    let observable = this._httpService.addAuthor(newAuthor);
    observable.subscribe(data => {
      console.log('posted data', data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      if (data['message'] == 'Error') {
        console.log('Error saving Author');
        this.errors = data['error'];
        console.log(this.errors);
      } else {
        this.newAuthor = {};
        this._router.navigate(['/']);
        this.errors = null;
      }
    });
  }
}
