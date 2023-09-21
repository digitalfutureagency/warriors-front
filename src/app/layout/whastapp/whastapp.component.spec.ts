import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhastappComponent } from './whastapp.component';

describe('WhastappComponent', () => {
  let component: WhastappComponent;
  let fixture: ComponentFixture<WhastappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhastappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhastappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
