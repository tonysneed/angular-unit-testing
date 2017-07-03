import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureModule } from './feature/feature.module';

describe('Router: App', () => {

    let location: Location;
    let router: Router;

    // Configure router testing module
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FeatureModule,
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
            ],
            providers: [Location]
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);
    });

    // Test for asyncFake
    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "" redirects you to /dashboard', fakeAsync(() => {
        const fixture = TestBed.createComponent(DashboardComponent);
        router.navigateByUrl('');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/dashboard');
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('dashboard works!');
    }));

    it('navigate to "feature" redirects to /feature', fakeAsync(() => {
        const fixture = TestBed.createComponent(FeatureComponent);
        router.navigateByUrl('/feature');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/feature');
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('feature works!');
    }));
});
