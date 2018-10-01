import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-grid',
  templateUrl: './seller-grid.component.html',
  styleUrls: ['./seller-grid.component.css']
})
export class SellerGridComponent implements OnInit {

  title = 'Wacans';
   defaultColDef;
  constructor(private http: HttpClient,private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apSellerDetail.php')
    .subscribe((result) =>{
      this.rowData = result
      if(result){
       // this.toastr.success('Seller Grid Loaded SuccessFully', 'Success!');
     }
    });
    this.defaultColDef = { editable: true };
    this.rowClassRules = {
      "sick-days-warning": function(params) {
        let selectedRow = params.data.sellerId;
        return selectedRow == '9130055254';
      }
    };
    console.log(this.rowClassRules);
    
  }
  rowData: any;
   rowClassRules;
  
  columnDefs = [
    { headerName: 'Seller Id', field: 'sellerId', width:150,checkboxSelection: true },
    { headerName: 'Name', field: 'sellerName' ,width:100},
    { headerName: 'Can Code', field: 'sellerCanCode',width:300 },
    { headerName: 'Area', field: 'sellerArea' },
    { headerName: 'Seller Code', field: 'sellerCode',width:100 },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Joined Date', field: 'joinedDate',width:100 },
    { headerName: 'Last Date', field: 'lastDate',width:150 },
   ];
 

  ngOnInit() {
  }

}
