import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  constructor(private _dataService: DataService,private formBuilder: FormBuilder) {
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
  }
}
