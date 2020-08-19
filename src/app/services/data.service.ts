import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data, Content } from '../interface/data.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:string = '$2b$10$UyGPrK6L9yFdZqE2ltZaUu2RzIx7rJQgTyn/62GSzzY4XpAX7svaq';
  data:Data;

  constructor(private http:HttpClient) { 

  }
  
  getData(){
    const header = new HttpHeaders().set('secret-key',this.token);

    return this.http.get('https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77',{headers:header})
                .pipe(tap((data:Data)=>this.data=data))
    
  }
}
