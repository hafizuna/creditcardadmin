import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';

@Injectable({
  providedIn: 'root',
})
export class CreditcardsService {
  private apiUrl = '';
  constructor(private httpClient: HttpClient) {}

  //Crud Functionality
  // create credit card
  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiUrl, creditCard);
  }

  //get all credit cards
  getCreditCards(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.apiUrl);
  }

  //Get Specific credit Card
  getCreditCardById(id: Number): Observable<CreditCard> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<CreditCard>(url);
  }

  //Update Credit Card
  updateCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    const url = `${this.apiUrl}/${creditCard.id}`;
    return this.httpClient.put<CreditCard>(url, creditCard);
  }

  //Delete
  deleteCreditCard(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
