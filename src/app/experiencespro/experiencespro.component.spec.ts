import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesproComponent } from './experiencespro.component';

describe('ExperiencesproComponent', () => {
  let component: ExperiencesproComponent;
  let fixture: ComponentFixture<ExperiencesproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
