import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  constructor(private api:ClientsService){

  }

  onSubmit(formData:any){
    this.api.clientLogin(formData.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
