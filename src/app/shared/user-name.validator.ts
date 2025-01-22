import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//    const  forbidden = /admin/.test(control.value);
//    return forbidden ? { 'forbiddenName': {value: control.value}} : null;
// }
// it has some limitation like it's only take one paramneter


export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
   return (control: AbstractControl): {[key: string]: any} | null  => {
        const  forbidden = forbiddenName.test(control.value);
        return forbidden ? { 'forbiddenName': {value: control.value}} : null;
    }
}