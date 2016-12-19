import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BugOperations} from './BugOperations';

@Injectable()
export class BugService{
   constructor(private _http:Http, private _bugOperations:BugOperations){
       console.log(_http);
   } 
   getAll(){
       return this._http
        .get('http://localhost:5000/bugs')
        .map(response => response.json());
   }

   addNew(bugName:string){
       var newBug = this._bugOperations.createNew(0,bugName);
       return this._http
        .post('http://localhost:5000/bugs', newBug) 
        .map(response => response.json()) ; 
   }
}