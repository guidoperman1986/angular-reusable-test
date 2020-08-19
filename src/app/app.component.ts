import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './interface/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reusable-test';
  dataLicense:any[]=[];
  columns = [
    { headerName: 'Apellido', field: 'surname' },
    { headerName: 'Nombre', field: 'name' },
    { headerName: 'Diagnostico', field: 'medicDiagnostic' },
    { headerName: 'CUIL', field: 'cuil' },
  ];

  constructor(private dataService:DataService){
    //this.dataService.getData().subscribe((data:Data)=>{
    //  this.dataLicense = data.content;
    //});

  }
}
