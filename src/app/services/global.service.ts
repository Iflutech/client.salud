import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public rolVariable = new BehaviorSubject<any>({ rol: 'reg' })
}