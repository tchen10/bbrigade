import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormCheckboxComponent} from './components/form-checkbox';
import {FormGroupComponent} from './components/form-group';

@NgModule({
  declarations: [
    FormGroupComponent,
    FormCheckboxComponent
  ],
  exports: [
    FormGroupComponent,
    FormCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {
}
