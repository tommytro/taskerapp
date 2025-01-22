import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, inject } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { AuthService } from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import { ModalController } from '@ionic/angular';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    AuthService,
    CookieService,
    ModalController,
    provideApollo(() => {
      const httpLink = inject(HttpLink);
 
      return {
        link: httpLink.create({ uri: 'https://localhost:7115/graphql' }),
        cache: new InMemoryCache(),
        // other options...
      };
    }),
  ],
};