import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IObjectFindR } from '../../interfaces/object-find-r.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  objects: IObjectFindR[] = [
    {
      nom: 'Objet 1',
      qrHash: 'qr1',
      status: 'Perdu',
    },
    {
      nom: 'Objet 2',
      qrHash: 'qr2',
      status: 'OK',
    },
    {
      nom: 'Objet 3',
      qrHash: 'qr3',
      status: 'OK',
    }
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const redirectFinder = params['redirectFinder'];
      if (redirectFinder) {
        this.router.navigate(['/chat-finder', redirectFinder]);
      }
    });
  }
}
