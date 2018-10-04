import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptyand-unpaid',
  templateUrl: './emptyand-unpaid.component.html',
  styleUrls: ['./emptyand-unpaid.component.css']
})
export class EmptyandUnpaidComponent implements OnInit {

  gridApiUnpaid;
  gridApiEmpty;
  title = 'Wacans';
  defaultColDefUnpaid;
  defaultColDefEmpty;
  rowDataUnpaid: any;
  rowDataEmpty: any;
  columnDefsUnpaid = [
    { headerName: 'Un Paid', field: 'unpaid', checkboxSelection: true },
    { headerName: 'Customer', field: 'customer' },
    { headerName: 'Seller', field: 'seller' },
  ];
  columnDefsEmpty = [
    { headerName: 'Count', field: 'emptyCount', checkboxSelection: true },
    { headerName: 'Customer', field: 'customer' },
    { headerName: 'Seller', field: 'seller' },
  ];
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apUnpaid.php')
      .subscribe((result) => {
        this.rowDataUnpaid = result
        if (result) {
          //this.toastr.success('Item Availability Grid Loaded SuccessFully', 'Success!');
        }
      });
      this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apEmpty.php')
      .subscribe((result) => {
        this.rowDataEmpty = result
        if (result) {
          //this.toastr.success('Item Availability Grid Loaded SuccessFully', 'Success!');
        }
      });
    this.defaultColDefUnpaid = { editable: true };
    this.defaultColDefEmpty = { editable: true };
    
    }
 
  ngOnInit() {
  }
  onGridReadyUnpaid(params) {
    this.gridApiUnpaid = params.api;
    this.gridApiUnpaid.sizeColumnsToFit();
  }
  onGridReadyEmpty(params) {
    this.gridApiEmpty = params.api;
    this.gridApiEmpty.sizeColumnsToFit();
  }

}
