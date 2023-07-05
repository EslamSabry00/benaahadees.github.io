import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
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
}
