import { Component, AfterViewInit } from '@angular/core';
import { selectState } from '../animations.trigger';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
  animations: [selectState]
})
export class ScrollerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation(scrollers);
    }
  }

  addAnimation(scrollers: NodeListOf<Element>) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', 'true');

      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }
  drSpeclist: any = [
    { img: 'assets/teeth.png', name: 'Dentist' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Ortho..' },
    { img: 'assets/teeth.png', name: 'Neuro..' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Neuro..' }
  ]
  clickInfo = 'default'
  selectedImage!: any
  onSelected(e: any) {
    this.selectedImage = e
  }
}
