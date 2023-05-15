import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    constructor(
        public matDialogRef: MatDialogRef<ProductDetailComponent>,
    ) { }

    ngOnInit() {

    }
}