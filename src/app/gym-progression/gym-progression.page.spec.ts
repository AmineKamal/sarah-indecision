import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymProgressionPage } from './gym-progression.page';

describe('GymProgressionPage', () => {
  let component: GymProgressionPage;
  let fixture: ComponentFixture<GymProgressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymProgressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymProgressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
