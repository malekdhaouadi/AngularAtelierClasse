import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent {
  suggestionForm: FormGroup;
  categories = ['Infrastructure', 'Pédagogie', 'Cantine', 'Transport', 'Événements', 'Technologie', 'Autre'];

  constructor(
    private fb: FormBuilder,
    public router: Router
  ) {
    this.suggestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      console.log('Suggestion submitted:', this.suggestionForm.value);
      alert('Suggestion ajoutée avec succès!');
      this.suggestionForm.reset();
      this.router.navigate(['/suggestions']);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.suggestionForm.controls).forEach(key => {
      this.suggestionForm.get(key)?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.suggestionForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.suggestionForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return 'Ce champ est requis';
      if (field.errors['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
    }
    return '';
  }
}