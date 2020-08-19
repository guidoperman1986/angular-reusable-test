import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { DataService } from 'src/app/services/data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReusableToolbarComponent } from '../../shared/reusable/toolbar/reusable-toolbar.component';
import { RouterModule } from '@angular/router';
import { ReusableTableComponent } from '../../shared/reusable/table/reusable-table.component';
import { RouterTestingModule } from '@angular/router/testing';
/* import { Observable } from 'rxjs/Observable'; */

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;
  let servicio:DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalComponent, ReusableToolbarComponent, ReusableTableComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [DataService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let http:HttpClient;
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    servicio = new DataService(http)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba de arreglo que contenga datos', ()=>{

    expect(servicio.data).not.toBeNull()

  })

  
});
