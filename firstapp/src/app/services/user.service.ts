import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggerService:LoggerService=inject(LoggerService)
  data:string="ABC"

  users:any[]=[
    {userId:1,username:"XYZ"},
    {userId:2,username:"PQR"}
  ]
  getUsers(){
    this.loggerService.msg(`${this.users.length} users fetched`,this.users)
    return this.users
      
  }
  constructor() { }
}
