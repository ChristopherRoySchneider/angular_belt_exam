import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorByIdComponent } from './author-by-id.component';

describe('AuthorByIdComponent', () => {
  let component: AuthorByIdComponent;
  let fixture: ComponentFixture<AuthorByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
