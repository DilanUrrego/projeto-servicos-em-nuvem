import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  quantity: number;
}

@Injectable({ 
  providedIn: 'root' })
export class ItemsService {
  private apiUrl = 'http://10.0.142.236:25000/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  addItem(item: { name: string; quantity: number }): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}