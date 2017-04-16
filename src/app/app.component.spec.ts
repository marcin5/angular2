import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing';

describe('AppComponent', function () {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let dt: DebugElement[];
  let comp: AppComponent;
  let el: HTMLElement;

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

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

   it('should have expected <div> text', () => {
    de = fixture.debugElement.query(By.css('#title'));
    fixture.detectChanges();
    el = de.nativeElement;
    expect(el.textContent).toContain('VHS rental store');
  });

  it('should have expected <a> text', () => {
    dt = fixture.debugElement.queryAll(By.css('a'));
    fixture.detectChanges();
    const a1 = dt[0].nativeElement;
    const a2 = dt[1].nativeElement;
    expect(a1.innerText).toMatch('Available Movies');
    expect(a2.innerText).toMatch('Rented Movies');
  });

  it('should have expected link value', () => {
    dt = fixture.debugElement.queryAll(By.css('a'));
    fixture.detectChanges();
    const a1 = dt[0].nativeElement;
    const a2 = dt[1].nativeElement;
    expect(a1.outerHTML).toContain('ng-reflect-link-params="/movies"');
    expect(a2.outerHTML).toContain('ng-reflect-link-params="/rented"');
  });

});
