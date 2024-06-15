import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruenaAmaterialComponent } from './pruena-amaterial.component';

describe('PruenaAmaterialComponent', () => {
  let component: PruenaAmaterialComponent;
  let fixture: ComponentFixture<PruenaAmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruenaAmaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruenaAmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
