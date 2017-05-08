import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormCheckboxComponent} from './components/form-checkbox';
import {FormGroupComponent} from './components/form-group';
import {InlineEdit} from './components/inline-edit';

@NgModule({
    declarations: [
        FormGroupComponent,
        FormCheckboxComponent,
        InlineEdit
    ],
    exports: [
        FormGroupComponent,
        FormCheckboxComponent,
        InlineEdit
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class SharedModule {
}
