import { Component } from '@angular/core';

@Component({
  selector: 'app-prodcutos',
  standalone: true,
  imports: [],
  templateUrl: './prodcutos.component.html',
  styleUrl: './prodcutos.component.css'
})
export class ProdcutosComponent {
  productos=[
    {id:1, name:'ProductoA',price:100},
    {id:2,name:"ProductoB",price:100},
    {id:3,name:"ProductoC",price:100}
  ]
}
