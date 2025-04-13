import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  imports: [NgClass],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {
  classes : any = {
    bg:"bg-warning",
    tc:"text-danger",
    m:"m-2"
  }
}
