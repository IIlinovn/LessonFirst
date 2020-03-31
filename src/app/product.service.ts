import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAll() {
    return this.httpClient.get("http://iilinov-n.myjino.ru/products")
  }

  loadById(id) {
    return this.httpClient.get("http://iilinov-n.myjino.ru/products/" + id)
  }

}