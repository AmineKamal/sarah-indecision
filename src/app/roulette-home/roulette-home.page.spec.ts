import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouletteHomePage } from './roulette-home.page';

describe('RouletteHomePage', () => {
  let component: RouletteHomePage;
  let fixture: ComponentFixture<RouletteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouletteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
