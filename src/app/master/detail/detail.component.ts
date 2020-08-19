import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data, Content } from '../../interface/data.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dataLicense:Content;
  id:any;

  columns = [
    { headerName: 'Inicio Licencia', field: 'initDate' },
    { headerName: 'Fin Licencia', field: 'endingDate' },
    { headerName: 'Lugar', field: 'tenant' },
    { headerName: 'Estado', field: 'gcbaLicenseStatus' },
    { headerName: 'ID HR', field: 'assignationType' },
    { headerName: 'Tipo de licencia', field: 'licenseTypesGroup' },
    { headerName: 'Unidad Organizacional', field: 'organizationalUnits' },
    { headerName: 'Posicion', field: 'organizationalUnitsPosition' },
  ];

  constructor(private dataService:DataService, private ar:ActivatedRoute) { 
    this.id = this.ar.snapshot.params.id;

    this.dataService.getData().subscribe((data:any)=>{
      /* console.log(data); */      
      this.dataLicense = data.content.filter(d=>d.id == this.id)
  
    })
  }

  ngOnInit() {
  }

}
