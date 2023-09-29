import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilespopupComponent } from './filespopup.component';

describe('FilespopupComponent', () => {
  let component: FilespopupComponent;
  let fixture: ComponentFixture<FilespopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilespopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilespopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
