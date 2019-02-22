import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.css"]
})
export class EditAuthorComponent implements OnInit {
  authorID = null;
  errors = null;
  authorToEdit = {};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this.authorID = params["id"];
      this.getAuthorByIdFromService(this.authorID);
    });
  }
  putAuthor(updatedAuthor) {
    console.log(updatedAuthor);
    let observable = this._httpService.putAuthor(updatedAuthor);
    observable.subscribe(data => {
      console.log("put author", data);

      if (data['message'] == 'Error') {
        console.log('Error saving Author');
        this.errors = data['error'];
        console.log(this.errors);
      } else {
        this.authorToEdit = {};
        this._router.navigate(['/']);
        this.errors = null;
      }
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
}
