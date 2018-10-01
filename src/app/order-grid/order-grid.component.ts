import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {
  title = 'Wacans';
   defaultColDef;
  constructor(private http: HttpClient,private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apOrderDetail.php  ')
    .subscribe((result) =>{
      this.rowData = result
      if(result){
       // this.toastr.success('Order Grid Loaded SuccessFully', 'Success!');
     }
    });
    this.defaultColDef = { editable: true };
    this.rowClassRules = {
      "highlightRow": function(params) {
        let selectedRow = params.data.newOrRefill;
        return selectedRow == 'Refill';
      }
    };
   
  }
  rowData: any;
   rowClassRules;
  
  columnDefs = [
    { headerName: 'Order Id', field: 'orderId',width:90 ,checkboxSelection: true },
    { headerName: 'Customer Id', field: 'customerId',width:100 },
    { headerName: 'Customer Name', field: 'customerName',width:100 },
    { headerName: 'Seller Id', field: 'sellerId',width:100 },
    { headerName: 'Seller Name', field: 'sellerName',width:100 },
    { headerName: 'Product Name', field: 'productName',width:100 },
    { headerName: 'Delivery Date', field: 'deliveryDate',width:100 },
    { headerName: 'Number of Items', field: 'noOfItems',width:100 },
    { headerName: 'Order Amount', field: 'orderAmount' ,width:100},
    { headerName: 'Order Status', field: 'orderStatus',width:100 },
    { headerName: 'Order Type', field: 'orderType',width:100 },
    { headerName: 'Order Date', field: 'orderDate',width:100 },
    { headerName: 'Status', field: 'newOrRefill',width:100 },
    { headerName: 'Order Rating', field: 'orderRating',width:100 },
    
    
  ];
 

  ngOnInit() {
  }

}
