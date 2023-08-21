import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {
  public clientDetails = []
  responseData: any;
  constructor(private api:ClientsService){

  }

  getClients(){
    this.api.getClientsData().subscribe((res:any)=>{
      this.clientDetails = res
      console.log(res)
    })
  }

  ngOnInit() {
    this.api.getDataWithToken().subscribe(
      (response:any) => {
        this.responseData = response;
      }
    );

    console.log(this.responseData)
  }
}
