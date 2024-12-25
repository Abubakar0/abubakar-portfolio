import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  query,
  transition,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/home'])
        .then(() =>
          document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
        );
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    const cvUrl = `${window.location.origin}/assets/cv/cv.pdf`;
    window.open(cvUrl, '_blank');
  }
}
