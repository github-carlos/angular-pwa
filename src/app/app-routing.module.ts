import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password-page/recovery-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'cadastrar', component: RegisterPageComponent},
  {path: 'recuperar', component: RecoveryPasswordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
