import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  handleError: any;
  constructor(private http: HttpClient) {
    console.log('service works')
   }


  getDebt(){
    const url = 'https://staging.adamspay.com/pay/e-commerce737/debt/demo001'

    return this.http.get(url)
  }
  // private url = 'https://staging.adamspay.com/api/v1'

  // addDebt(debt: Debt): Observable<Debt> {
  //   return this.http.post<Debt>(this.url, debt, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addDebt', debt))
  //     );
  // }
}
