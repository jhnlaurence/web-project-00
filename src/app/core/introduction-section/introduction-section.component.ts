import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss']
})
export class IntroductionSectionComponent {

  scrolledOver = false;
  scrollThreshold: number = 1000;
  originalStickyImageStyle: any = {};
  lastScrollPosition: number = 0;
  
  constructor(private elementRef: ElementRef) {
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
  
      const currentScrollPosition = window.scrollY;
  
      if (currentScrollPosition > this.lastScrollPosition) {
        this.scrolledOver = true;
      } else {
        this.scrolledOver = false;
      }
      console.log(event);
      this.lastScrollPosition = currentScrollPosition;
  }
}
