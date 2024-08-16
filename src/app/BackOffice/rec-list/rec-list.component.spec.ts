import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecListComponent } from './rec-list.component';

describe('RecListComponent', () => {
  let component: RecListComponent;
  let fixture: ComponentFixture<RecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
