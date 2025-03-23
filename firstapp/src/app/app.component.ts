import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, ContactusComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shankar';
  databind = 'interpolation';
}
