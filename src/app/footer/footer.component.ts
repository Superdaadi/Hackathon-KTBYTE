import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LangService } from '../../service/lang.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(private router: Router, public langService: LangService) {
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

   
}
