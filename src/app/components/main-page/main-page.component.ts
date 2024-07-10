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
      id: "qr1",
      nom: 'Objet 1',
      qrHash: window.origin + '?redirectFinder=',
      status: 'Perdu',
    },
    {
      id: "qr2",
      nom: 'Objet 2',
      qrHash: window.origin + '?redirectFinder=',
      status: 'OK',
    },
    {
      id: "qr3",
      nom: 'Objet 3',
      qrHash: window.origin + '?redirectFinder=',
      status: 'OK',
    }
  ];

  ngOnInit(): void {
    console.log(this.objects)
    this.route.queryParams.subscribe((params) => {
      const redirectFinder = params['redirectFinder'];
      if (redirectFinder) {
        this.router.navigate(['/chat-finder', redirectFinder]);
      }
    });
  }

  navigateToChat(idChat: string) {
    this.router.navigate(['/chat', idChat]);
  }

  toggleStatus(object: any) {
    if (object.status === 'OK') {
      object.status = 'PERDU';
    } else {
      object.status = 'OK';
    }
  }
}
