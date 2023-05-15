import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        // private _scrumboardService: ScrumboardService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return of(route.paramMap.get('id'));
        // return this._scrumboardService.getCard(route.paramMap.get('cardId'))
        //            .pipe(
        //                // Error here means the requested task is not available
        //                catchError((error) => {

        //                    // Log the error
        //                    console.error(error);

        //                    // Get the parent url
        //                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

        //                    // Navigate to there
        //                    this._router.navigateByUrl(parentUrl);

        //                    // Throw an error
        //                    return throwError(error);
        //                })
        //            );
    }
}