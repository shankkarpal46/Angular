import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  imports: [NgClass,NgStyle],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.css'
})
export class AttributedirectivesComponent {
  darktheme:boolean=true 
  isHighlighted:boolean = true
  classes : any = {
    bg:"bg-warning",
    tc:"text-danger",
    m:"m-2"
  }
  
  toggle(){
    this.darktheme = !this.darktheme
  }

  boxStyles(){
    return{
      "background-color":this.isHighlighted?"red":"white",
      "color":"green"
    } 

  }

  changeHighlight(){
    this.isHighlighted=!this.isHighlighted
  }
}
