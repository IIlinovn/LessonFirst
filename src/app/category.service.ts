import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAll() {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/category")
  }

  loadById(id) {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/category/" + id)
  }

}