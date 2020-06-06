import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid-19 Analysis Report';

  constructor(
    private router: Router
  ) {
    }

    onSubmit(): void {
    this.router.navigate(['/']);
    this.title = '';

    }
}

