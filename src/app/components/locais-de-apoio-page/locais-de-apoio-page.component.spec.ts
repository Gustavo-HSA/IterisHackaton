import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisDeApoioPageComponent } from './locais-de-apoio-page.component';

describe('LocaisDeApoioPageComponent', () => {
  let component: LocaisDeApoioPageComponent;
  let fixture: ComponentFixture<LocaisDeApoioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisDeApoioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisDeApoioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
