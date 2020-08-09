import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoulettePage } from './roulette.page';

describe('RoulettePage', () => {
  let component: RoulettePage;
  let fixture: ComponentFixture<RoulettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoulettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoulettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
