import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rtlDir = new BehaviorSubject(false);
  constructor(private _HttpClient: HttpClient) { }
  sendEmail(model:any):Observable<any> {
    return this._HttpClient.post('https://api.emailjs.com/api/v1.0/email/send', model);
  }
}
