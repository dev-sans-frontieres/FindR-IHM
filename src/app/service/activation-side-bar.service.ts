import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivationSideBarService {
  private isActivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  public isActive(): boolean {
    return this.isActivate.getValue();
  }

  public toggleActivate(): void {
    this.isActivate.next(!this.isActive());
  }

}
