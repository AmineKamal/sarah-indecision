import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaysSincePage } from './days-since.page';

describe('DaysSincePage', () => {
  let component: DaysSincePage;
  let fixture: ComponentFixture<DaysSincePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysSincePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaysSincePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
