import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodcutos.component.html',
  styleUrl: './prodcutos.component.css'
})
export class ProductosComponent {
  productos=[
    {id:1, name:'ProductoA',price:100,descuento:true},
    {id:2,name:"ProductoB",price:100,descuento:true},
    {id:3,name:"ProductoC",price:100,descuento:false}
  ]
}
