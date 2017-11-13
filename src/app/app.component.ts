import {Component, AfterViewInit, OnInit} from '@angular/core';
import {LoadingMaskService} from './share/service/loading-mask.service';
import {Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';
import 'rxjs/add/operator/filter';
import {BreadcrumbsService} from './share/components/breadcrumbs/breadcrumbs.service';
import {IBreadcrumb} from './share/components/breadcrumbs/breadcrumbs.model';

@Component({
  selector: 'app-eye',
  template: `
    <app-toaster-container></app-toaster-container>
    <router-outlet (activate)="onActivate($event)"></router-outlet>`,
})
export class AppComponent implements AfterViewInit, OnInit {
  private currentBreadcrumbs: IBreadcrumb[];

  public breadcrumbs: IBreadcrumb[];

  constructor(private mask: LoadingMaskService,
              public router: Router,
              private activatedRoute: ActivatedRoute,
              public breadcrumbService: BreadcrumbsService) {

  }

  ngAfterViewInit() {

    this.mask.hide();
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';
    const ROUTE_PARAM_BREADCRUMB: string = 'breadcrumb';
    const PREFIX_BREADCRUMB: string = 'prefixBreadcrumb';
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.currentBreadcrumbs = [];


      // get the root of the current route
      let currentRoute: ActivatedRoute = this.activatedRoute.root;
      // set the url to an empty string
      let url: string = '';

      // iterate from activated route to children
      while (currentRoute.children.length > 0) {

        const childrenRoutes: ActivatedRoute[] = currentRoute.children;
        let breadCrumbLabel: string = '';

        // iterate over each children
        childrenRoutes.forEach(route => {
          // Set currentRoute to this route
          currentRoute = route;
          // Verify this is the primary route
          if (route.outlet !== PRIMARY_OUTLET) {
            return;
          }

          const hasData = (route.routeConfig && route.routeConfig.data);
          const hasDynamicBreadcrumb: boolean = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);

          if (hasData || hasDynamicBreadcrumb) {


            /*
             Verify the custom data property "breadcrumb"
             is specified on the route or in its parameters.

             Route parameters take precedence over route data
             attributes.
             */
            if (hasDynamicBreadcrumb) {
              breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, ' ');
            } else if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
              breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
            }

            // Get the route's URL segment
            const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
            console.log(routeURL);
            url += `/${routeURL}`;

            // Cannot have parameters on a root route
            if (routeURL.length === 0) {
              route.snapshot.params = {};
            }


            // Add breadcrumb
            let breadcrumb: IBreadcrumb = {
              label: breadCrumbLabel === 'pages' ? '应用列表' : breadCrumbLabel,
              params: route.snapshot.params,
              url: breadCrumbLabel === 'pages' ? '/views' : url
            };
            // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
            if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
              this.breadcrumbService.storePrefixed(breadcrumb);
            } else {
              this.currentBreadcrumbs.push(breadcrumb);
            }

          }

        });
        console.log(this.currentBreadcrumbs);
        this.breadcrumbService.store(this.currentBreadcrumbs);
      }
    });
  }

  onActivate(componentRef) {

  }
}
