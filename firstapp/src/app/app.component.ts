import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from './category/category.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AdditionComponent } from './addition/addition.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { ParentComponent } from './parent/parent.component';
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, ContactusComponent, ProductComponent,CategoryComponent,DataBindingComponent,AdditionComponent,PipesExamplesComponent,DirectivesExampleComponent,SwitchexampleComponent,ParentComponent,AttributedirectivesComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shankar';
  databind = 'interpolation';
}
