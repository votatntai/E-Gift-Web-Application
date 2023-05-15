import { Route } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from './home.component';
import { ProductDetailResolver } from '../product/product-detail/product-detail.resolvers';

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'products/:id',
                component: ProductComponent,
                resolve: {
                    detail: ProductDetailResolver
                }
            }
        ]
    },

];
