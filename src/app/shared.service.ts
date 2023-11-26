import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private usernameSubject = new Subject<string>();
  public username$ = this.usernameSubject.asObservable();

  set username(value: string) {
    this.usernameSubject.next(value);
  }
  constructor() {}
}
