import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormBuilderService {
  editBlogForm!: FormGroup<{ title: FormControl<null>; authorFBArray: FormArray<FormControl<unknown>>; }>;
  constructor(private fb: FormBuilder) {}

  createBlogForm(): FormGroup {
    return this.editBlogForm = this.fb.group({
      'title': [null, [Validators.minLength(4), Validators.required]],
      'authorFBArray': this.fb.array([], Validators.required)
    });
  }

  createAuthorForEditArray(): FormArray {
    return this.fb.array([]);
  }

  // getting the length of the form array
  getAuthorFormLength(authorsFormArray: FormArray): number {
    return authorsFormArray.controls.length;
  }

  addAuthorControl(): void {
    const control = new FormControl('');
    this.authors.push(control);
  }

  removeAuthorFromFormArray(authorsFormArray: FormArray, index: number): void {
    authorsFormArray.removeAt(index);
  }

  get authors(): FormArray {
    return this.editBlogForm.get('authorFBArray') as FormArray;
  }
}