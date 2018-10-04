import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  title = 'Wacans';
  public defaultColDef;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apCustomerDetail.php')
      .subscribe((result) =>{
        this.rowData = result
        if(result){
          //this.toastr.success('Admin Grid Loaded SuccessFully', 'Success!');
       }
      //  error => {
      //   this.errors = error;
      // },
      });

    this.defaultColDef = { editable: true };
    this.rowClassRules = {
      "sick-days-warning": function (params) {
        let selectedRow = params.data.mobileNo;
        return selectedRow == '9130055254';
      }
    };
    console.log(this.rowClassRules);

  }
  rowData: any;
  rowClassRules;

  columnDefs = [
    { headerName: 'Mobile Number', field: 'mobileNo', checkboxSelection: true },
    { headerName: 'Name', field: 'customerName' },
    { headerName: 'Area', field: 'customerArea' },
    { headerName: 'Address', field: 'address' },
    { headerName: 'Account Created', field: 'accountCreated' },
    { headerName: 'Email', field: 'customerEmail' },
    { headerName: 'Longitude', field: 'longitude' },
    { headerName: 'Latitude', field: 'latitude', checkboxSelection: true },

  ];


  ngOnInit() {

  }

}
