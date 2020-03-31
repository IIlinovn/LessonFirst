import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category = []

  ngOnInit() {
    this.categoryService
    .loadAll()
    .subscribe( (items: any[]) => {
      this.category = items
    } )

  }

}
