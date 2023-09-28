import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.service.getuserrole().subscribe(res => {
      this.rolelist = res;
    });
    
  
  }
  ngOnInit(): void {
  }

  rolelist: any;
  editdata: any;

  registerform = this.builder.group({
    isactive: this.builder.control(false)
  });


  UpdateUser() {
    this.service.updateuser(this.registerform).subscribe(res => {
      this.toastr.success('Estado del usuario actualizado con exito.');
      this.dialogref.close();
    });
  }

}
