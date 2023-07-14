import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery'
import {OwlOptions} from "ngx-owl-carousel-o";
import {TranslateService} from "@ngx-translate/core";
import {DataService} from "./core/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'benaa-hadees';
constructor(private _TranslateService: TranslateService, private _dataService: DataService) {
}
  ngOnInit(): void {
    this.translate('ar')
  }
  translate(lang: string) {
    // this.setLang(lang)
    this._TranslateService.use(lang);
    if(lang == 'ar'){
      this._dataService.rtlDir.next(true);
    }else{
      this._dataService.rtlDir.next(false);
    }
  }
}
