import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  title = 'Wacans';
  public defaultColDef;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apWallet.php')
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
    { headerName: 'Wallet ID', field: 'walId', checkboxSelection: true },
    { headerName: 'Customer', field: 'customer' },
    { headerName: 'Wallet', field: 'Wallet' },
    { headerName: 'Offer Amount', field: 'OfferAmount' },
    { headerName: 'Minus Pattern', field: 'minusPattern' },
    { headerName: 'Reward Points', field: 'rewardPoints' },
  ];


  ngOnInit() {

  }

}
