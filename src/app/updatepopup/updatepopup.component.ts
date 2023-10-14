import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

   /*  this.service.getuserrole().subscribe(res => {
      this.rolelist = res;
    }); */

    this.registerForm = this.fb.group({
      viewIs: this.fb.control(false)
    });
    
  
  }
  rolelist: any;
  editdata: any;

  ngOnInit(): void {
  }

  onCheckboxChange(event: any) {
    if (this.registerForm) {
      const isChecked = event.checked;
      const control = this.registerForm.get('viewIs');
      if (control) {
        control.setValue(isChecked);
      }
    } else {
      console.error('registerForm is null');
    }
  }
  
  UpdateUser() {
    const viewIsValue = this.registerForm.get('viewIs')?.value;
    const payload = {
      viewIs: viewIsValue
    };
    this.service.updateuser(this.data?.code, payload).subscribe(res => {
      this.toastr.success('Estado del usuario actualizado con éxito.');
      this.dialogref.close();
    });
  }
  
  

}
