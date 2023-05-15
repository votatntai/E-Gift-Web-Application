import { Route } from '@angular/router';
import { ProductComponent } from './product.component';

export const productRoutes: Route[] = [
    {
        path: ':id',
        component: ProductComponent
    }
];