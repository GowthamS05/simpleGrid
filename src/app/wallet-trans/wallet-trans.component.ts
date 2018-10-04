import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wallet-trans',
  templateUrl: './wallet-trans.component.html',
  styleUrls: ['./wallet-trans.component.css']
})
export class WalletTransComponent implements OnInit {

  title = 'Wacans';
  public defaultColDef;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apWalTransaction.php')
      .subscribe((result) => {
        this.rowData = result
        if (result) {
          //this.toastr.success('Admin Grid Loaded SuccessFully', 'Success!');
        }
      }
      //  error => {
      //   this.toastr.success('Admin Grid Not loaded SuccessFully', 'Success!');
      // }
    );

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
    { headerName: 'ID', field: 'id', checkboxSelection: true,width:200 },
    { headerName: 'Customer', field: 'customer' },
    { headerName: 'Type', field: 'type' },
    { headerName: 'Amount', field: 'amount' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Order Id', field: 'orderId',width:100 },
    { headerName: 'Date', field: 'transDate' }
  ];


  ngOnInit() {

  }
}
