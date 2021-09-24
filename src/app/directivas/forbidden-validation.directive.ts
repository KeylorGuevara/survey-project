import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


//espacio de funcion


export function forbiddenNameValidator(nameRe: RegExp) : ValidatorFn
{

  return (control: AbstractControl):ValidationErrors | null =>
  {
    const forbidden =nameRe.test(control.value);
    return forbidden ? { forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidationDirective, multi: true}]
})

export class ForbiddenValidationDirective implements Validators {

  @Input('appForbiddenName') forbiddenName = '';

  validate(control : AbstractControl) : ValidationErrors | null
  {
    return this.forbiddenName ? forbiddenNameValidator( new RegExp(this.forbiddenName, 'i'))(control): null;
    }
  constructor() { }

}
