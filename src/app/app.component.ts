import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular with Firebase CRUD';

  employee:string='';
  employeeName:string='';
  employeeAge:number = 0;
  employeeAddress:string='';
  message:string = ''
  Record:any = {};


  constructor(private crudservice:CrudService){

  }

  CreateRecord(){
    this.Record['name'] = this.employeeName
    this.Record['age'] = this.employeeAge
    this.Record['address'] = this.employeeAddress

    console.log( this.Record);
    

    this.crudservice.create_Newemployee(this.Record).then(res=>{
      this.employeeName = ''
      this.employeeAge = 0
      this.employeeAddress = ''
      console.log(res);
      this.message = "Employee data save done"
    })
  }
}
