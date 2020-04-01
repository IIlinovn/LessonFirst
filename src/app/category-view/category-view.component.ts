import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category = {}

  ngOnInit() {
    this.categoryService
    .loadById(1)
    .subscribe( (items: any) => {
      this.category = items
    } )

  }
}
