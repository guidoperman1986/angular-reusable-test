import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/interface/data.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public dataLicense:any[]=[];
  columns = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Nombre', field: 'name' },
    { headerName: 'Apellido', field: 'surname' },
    { headerName: 'Diagnostico', field: 'medicDiagnostic' },
    { headerName: 'CUIL', field: 'cuil' },
  ];

  constructor(private dataService:DataService) {
    this.dataService.getData().subscribe((data:Data)=>{
      this.dataLicense = data.content;
    });   
  }

  ngOnInit() {
  }

}
