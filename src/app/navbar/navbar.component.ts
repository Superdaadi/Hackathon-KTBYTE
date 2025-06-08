import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LangService } from '../../service/lang.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  constructor(private router: Router, public langService: LangService) {
  }

  changeLang(lang: string) {
    this.langService.lang = lang;
    this.langService.checkLang();

  }

  navigateHome() {
    this.router.navigate(['/']);
  }

}


