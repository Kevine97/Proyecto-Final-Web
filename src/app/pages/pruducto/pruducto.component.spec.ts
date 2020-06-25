import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductoComponent } from './pruducto.component';

describe('PruductoComponent', () => {
  let component: PruductoComponent;
  let fixture: ComponentFixture<PruductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
