import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  flag:Subject<boolean>=new Subject<boolean>();
  constructor() { }
}
