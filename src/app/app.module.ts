import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoadingMaskService} from './share/service/loading-mask.service';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from './share/share.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReqInterceptor} from './share/service/interceptor';
import {HttpService} from './share/service/http.service';
import {CookieService} from './share/service/cookie.service';
import {HyToasterModule} from './share/components/hy-toaster/hy-toaster.module';
import {BreadcrumbsModule} from './share/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule, BreadcrumbsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    HyToasterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoadingMaskService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
    HttpService,
    CookieService,
    ShareModule.forRoot().providers
  ],
  exports: [
    BreadcrumbsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
