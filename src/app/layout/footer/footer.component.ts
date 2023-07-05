import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  ngOnInit() {
    // this._TranslateService.use('en');
    this.getRtlVal();
  }
  constructor(private _dataService: DataService) {
  }
  //---------------variables
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
  sendEmail() : void {
    const emailForm = document.getElementById('emailForm') as HTMLFormElement;
    const formData = new FormData(emailForm);
    const mailtoLink = `mailto:eslam2001sabry@gmail.com?subject=${formData.get('subject')}&body=${formData.get('message')}`;

    window.location.href = mailtoLink;
  }
}
