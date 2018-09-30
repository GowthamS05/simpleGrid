import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-availability',
  templateUrl: './item-availability.component.html',
  styleUrls: ['./item-availability.component.css']
})
export class ItemAvailabilityComponent implements OnInit {

  
  title = 'Wacans';
  private defaultColDef;
  constructor(private http: HttpClient,private toastr: ToastrService) {
    this.http.get('http://techietet.com/bshopAdminPanel/adminPanel/apItemAvailability.php')
    .subscribe((result) =>{
      this.rowData = result
      if(result){
        this.toastr.success('Item Availability Grid Loaded SuccessFully', 'Success!');
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
  private rowClassRules;
  
  columnDefs = [
    { headerName: 'Can AV Id', field: 'canAvId',width:150 ,checkboxSelection: true },
    { headerName: 'Seller Id', field: 'canAvSellerId',width:150 },
    { headerName: 'Can Id', field: 'canId',width:150 },
  ];
 

  ngOnInit() {
  }

}
