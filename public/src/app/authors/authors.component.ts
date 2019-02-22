import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {
  newAuthor: any;

  title = "app";
  showAuthorEditFormId = null;
  authors = [];
  authorToEdit = {};
  newRating = {};
  sortAscending = true;
  sortField = "_id";
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    console.log("ngOnInit");
    this.getAuthorsFromService();
    // this.getAuthorByIdFromService();
    this.newAuthor = {};
  }

  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got our authors the new way!", data);
      // In this example, the array of authors is assigned to the key 'authors' in the data object.
      // This may be different for you, depending on how you set up your Author API.
      var temp = data["data"];
      console.log(typeof temp);
      console.log(JSON.stringify(temp));
      if (this.sortAscending) {
        if (this.sortField == "_id") {
          temp = temp.sort((a, b) => (a._id < b._id ? -1 : 1));
        }
        if (this.sortField == "name") {
          temp = temp.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
        }
      } else {
        if (this.sortField == "_id") {
          temp = temp.sort((a, b) => (a._id > b._id ? -1 : 1));
        }
        if (this.sortField == "name") {
          temp = temp.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1));
        }
      }
      console.log(temp);
      this.authors = temp;
      console.log("this.authors", this.authors);
    });
  }

  deleteAuthor(id: string): void {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("deleted item", data);
      console.log(`delete author by id ${id}`);
      this.getAuthorsFromService();
    });
  }
  sortByDate(): void {
    this.sortField = "_id";
    this.changeSortOrder();
    this.getAuthorsFromService();

  }
  sortByName(): void {
    this.sortField = "name";
    this.changeSortOrder();
    this.getAuthorsFromService();

  }
  changeSortOrder() {
    if (this.sortAscending) {
      this.sortAscending = false;
    } else {
      this.sortAscending = true;
    }
  }
}
