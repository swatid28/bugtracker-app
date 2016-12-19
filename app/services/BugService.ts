import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BugService{
   constructor(private _http:Http){
       console.log(_http);
   } 
   getAll(){
       return this._http
        .get('http://localhost:5000/bugs')
        .map(response => response.json());
   }
}