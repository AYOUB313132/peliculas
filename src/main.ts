import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    importProvidersFrom(HttpClientModule,RouterModule,ActivatedRoute),
  ]
})
  .catch((err) => console.error(err));
