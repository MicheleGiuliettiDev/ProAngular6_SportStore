import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository: ProductRepository) { }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  getCategories(): string[] {
    return this.repository.getCategories();
  }
  ngOnInit() {
  }

}
