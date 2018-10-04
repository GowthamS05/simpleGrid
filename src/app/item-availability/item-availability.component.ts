import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-availability',
  templateUrl: './item-availability.component.html',
  styleUrls: ['./item-availability.component.css']
})
export class ItemAvailabilityComponent implements OnInit {

  gridApi;
 
  title = 'Wacans';
   defaultColDef;
  constructor(private http: HttpClient,private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apItemAvailability.php')
    .subscribe((result) =>{
      this.rowData = result
      if(result){
        //this.toastr.success('Item Availability Grid Loaded SuccessFully', 'Success!');
     }
    });
    this.defaultColDef = { editable: true };
    this.rowClassRules = {
      "sick-days-warning": function(params) {
        let selectedRow = params.data.mobileNo;
        return selectedRow == '9130055254';
      }
    };
    console.log(this.rowClassRules);
    
  }
  rowData: any;
   rowClassRules;
  
  columnDefs = [
    { headerName: 'Can AV Id', field: 'canAvId' ,checkboxSelection: true },
    { headerName: 'Seller Id', field: 'canAvSellerId' },
    { headerName: 'Can Id', field: 'canId' },
  ];
 

  ngOnInit() {
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
 }
}
