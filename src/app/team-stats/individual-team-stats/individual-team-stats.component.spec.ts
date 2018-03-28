import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTeamStatsComponent } from './individual-team-stats.component';

describe('IndividualTeamStatsComponent', () => {
  let component: IndividualTeamStatsComponent;
  let fixture: ComponentFixture<IndividualTeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualTeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
