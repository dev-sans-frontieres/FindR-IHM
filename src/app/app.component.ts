import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { BehaviorSubject } from 'rxjs';
import { ActivationSideBarService } from './service/activation-side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private activateSideBar: ActivationSideBarService) {}

  ngOnInit(): void {
  }

  public isActivate(): boolean {
    return this.activateSideBar.isActive();
  }


}
