import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  title = 'Wacans';
   defaultColDef;
  constructor(private http: HttpClient,private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apItemDetail.php')
    .subscribe((result) =>{
      this.rowData = result
      if(result){
        //this.toastr.success('Item Detail Grid Loaded SuccessFully', 'Success!');
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
    { headerName: 'Item Id', field: 'itemId',width:150 ,checkboxSelection: true },
    { headerName: 'Item name', field: 'itemName',width:150 },
    { headerName: 'Description', field: 'description',width:150 },
    { headerName: 'Category', field: 'category',width:180 },
    { headerName: 'Item Code', field: 'itemCode',width:150 },
    { headerName: 'Price', field: 'price',width:100 },
    { headerName: 'Discount', field: 'discount',width:150 },
    { headerName: 'Deposit Amount', field: 'depositAmount',width:150 },
    { headerName: 'Litre', field: 'litre' ,width:100},
  ];
 

  ngOnInit() {
  }


}
