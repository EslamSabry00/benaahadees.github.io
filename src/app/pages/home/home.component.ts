import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {DataService} from "../../core/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  ngOnInit() {
    // this._TranslateService.use('en');
    this.getRtlVal();
  }
  constructor(private _dataService: DataService) {
}
  //---------------variables
  rtlDir?:boolean;

  customOptions: OwlOptions = {
    rtl: false,
    autoplay: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }

  getRtlVal(){
    this._dataService.rtlDir.subscribe(
      res=>{
        if(res==true){
          this.rtlDir = true;
          this.customOptions= {
            rtl: true,
            autoplay: false,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 600,
            navText: ['&#8249', '&#8250;'],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              760: {
                items: 1
              },
              1000: {
                items: 1
              }
            },
            nav: true
          }

        }else {
          this.rtlDir = false;
          this.customOptions= {
            rtl: false,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 600,
            navText: ['&#8249', '&#8250;'],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              760: {
                items: 1
              },
              1000: {
                items: 1
              }
            },
            nav: true
          }
        }
      }
    )
  }
}
