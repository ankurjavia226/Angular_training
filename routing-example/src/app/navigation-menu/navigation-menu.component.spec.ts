import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuComponent } from './navigation-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { By } from '@angular/platform-browser';

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NavigationMenuComponent,
        homeDummyComponent,
        aboutUsDummyComponent,
        contactUsDummyComponent 
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'home', component: homeDummyComponent},
          {path: 'about', component: aboutUsDummyComponent},
          {path: 'contact-us', component: contactUsDummyComponent},
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    sessionStorage.setItem('Data', 'asd');
    location = TestBed.get(Location);
  });

  it('should create navigation-menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /home when clicked on home link', () => {
    const navLink = fixture.debugElement.queryAll(By.css('a'));
    const home: HTMLAnchorElement = navLink[0].nativeElement;
    home.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    })
  });

  it('should navigate to /about when clicked on home link', () => {
    const navLink = fixture.debugElement.queryAll(By.css('a'));
    const about: HTMLAnchorElement = navLink[1].nativeElement;
    about.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/about');
    })
  });

  it('should navigate to /home when clicked on home link', () => {
    const navLink = fixture.debugElement.queryAll(By.css('a'));
    const contactUs: HTMLAnchorElement = navLink[2].nativeElement;
    contactUs.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/contact-us');
    })
  });
});

@Component({template:''})
class homeDummyComponent {}

@Component({template:''})
class aboutUsDummyComponent {}

@Component({template:''})
class contactUsDummyComponent {}
