import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Importa aquí

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
}
