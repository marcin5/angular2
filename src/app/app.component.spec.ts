import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';

describe('QuickStart E2E Tests', function () {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement[];
  let comp: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, RouterLinkStubDirective, RouterOutletStubComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  });


  it('should display: ', function () {
    expect(true).toBe(true);
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

});
