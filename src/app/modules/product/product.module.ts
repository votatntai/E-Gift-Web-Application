import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { productRoutes } from './product.routing';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes),
        MatIconModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class ProductModule {
}
