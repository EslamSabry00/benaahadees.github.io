import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DataService} from "../../core/data.service";
// import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit() {
    // this._TranslateService.use('en');
    this.getRtlVal();
  }

  constructor(private _TranslateService: TranslateService, private _dataService: DataService) {
  }
  //---------------variables
  rtlDir?:boolean;
  setlangToLocal(lang: string){
    localStorage.setItem('lang',lang);
  }
  translate(lang: string) {
    // this.setLang(lang)
    this._TranslateService.use(lang);
    // this._DataService._lang.next(lang);
    this.setlangToLocal(lang);
    if(lang == 'ar'){
      this._dataService.rtlDir.next(true);
    }else{
      this._dataService.rtlDir.next(false);
    }
  }

  getRtlVal(){
    this._dataService.rtlDir.subscribe(
      res=>{
        if(res==true){
          this.rtlDir = true;
        }else {
          this.rtlDir = false;
        }
      }
    )
  }

  // setLang(x: string) {
  //   if (x == "en") {
  //     this.rtlDir = false;
  //   } else {
  //     this.rtlDir = true;
  //   }
  // }
}
