import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from './category/category.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AdditionComponent } from './addition/addition.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, ContactusComponent, ProductComponent,CategoryComponent,DataBindingComponent,AdditionComponent,PipesExamplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shankar';
  databind = 'interpolation';
}
