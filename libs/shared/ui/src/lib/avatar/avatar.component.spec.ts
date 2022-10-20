import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootstrapConfig, Environment } from '@dalenguyen/common';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent, HttpClientTestingModule],
      providers: [{
        provide: Environment,
        useValue: {
          environment: 'test',
          production: false
        }
      }, {
        provide: BootstrapConfig,
        useValue: {
          apiUrl: 'https://testing.example.com'
        }
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Environment', () => {
    expect(component.env).toEqual({"environment": "test", "production": false});
  });
});
