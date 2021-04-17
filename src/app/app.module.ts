import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password-page/recovery-password-page.component';
import { ModalComponent } from './shared/modal/modal.component';

// PrimeNg imports
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {ButtonDirective, ButtonModule} from 'primeng/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RecoveryPasswordPageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    CardModule,
    ButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
