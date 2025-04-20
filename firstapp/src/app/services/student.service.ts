import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  students=[
    {firstname:"Shankar",lastname:"Pal",marks:90},
    {firstname:"Arti",lastname:"Lachure",marks:100},
    {firstname:"Mujeetha",lastname:"N",marks:92}
  ]
  constructor() { }
}
