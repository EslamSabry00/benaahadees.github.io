import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  ngOnInit() {
    // this._TranslateService.use('en');
    this.getRtlVal();
    this.emailForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  constructor(private _dataService: DataService,private formBuilder: FormBuilder,private toastr: ToastrService) {
  }
  //---------------variables
  emailForm!: FormGroup;

  rtlDir?:boolean;
  getRtlVal(){
    this._dataService.rtlDir.subscribe(
      res=> {
        if (res == true) {
          this.rtlDir = true;
        } else {
          this.rtlDir = false;
        }
      })
  }

  sendEmail() {
    if(this.emailForm.valid){
      const data = {
        service_id: 'service_mawlpev',
        template_id: 'template_ljw4099',
        user_id: '3tPTvM0H5SQeHRa_P',
        template_params: {
          from_name: this.emailForm.value.name,
          from_subject: this.emailForm.value.subject,
          from_message: this.emailForm.value.message,
          from_email: this.emailForm.value.email,
        }
      };
      this._dataService.sendEmail(data).subscribe({
        next: (response) => {
          console.log(response);
          if(response.status == '200'){
            this.toastr.success(!this.rtlDir?`We will contact you soon!`:`سيتم التواصل معك قريبا!`);
          }else {
            this.toastr.error(!this.rtlDir?`Please try again`:`من فضلك حاول مرة اخرى` )
          }
        },
        error : (error)=> {
          console.log(error);
          if(error.status == '200'){
            this.toastr.success(!this.rtlDir?`We will contact you soon!`:`سيتم التواصل معك قريبا!`);
          }else {
            this.toastr.error(!this.rtlDir?`Please try again`:`من فضلك حاول مرة اخرى` )
          }

          }
      })
    }else {
    this.toastr.error(!this.rtlDir?`Please fill in all fields `:`من فضلك املأ جميع الحقول` )
  }
  }
}
