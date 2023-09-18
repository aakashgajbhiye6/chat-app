import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsservicesService {

  constructor(private http: HttpClient) { }

   getData() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=7c9b9c7e55dd4f45bf992b585ebd034e')
  }
}
