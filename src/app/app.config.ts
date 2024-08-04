import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp(
        {
          "projectId":"friendlyeatchat",
          "appId":"1:896973758533:web:8a0198953eeacb5f65832c",
          "storageBucket":"friendlyeatchat.appspot.com",
          "apiKey":"AIzaSyCXYPslNQ5Lz7Pg6TrRBLeVppLA_yGBSWY",
          "authDomain":"friendlyeatchat.firebaseapp.com",
          "messagingSenderId":"896973758533"
        }
      )
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
};
