import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableComponent } from './reusable-table.component';
import { ReusableToolbarComponent } from '../toolbar/reusable-toolbar.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReusableTableComponent', () => {
	let component: ReusableTableComponent;
	let fixture: ComponentFixture<ReusableTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ReusableTableComponent, ReusableToolbarComponent ],
			providers: [RouterModule],
			imports:[RouterTestingModule.withRoutes([])]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReusableTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
