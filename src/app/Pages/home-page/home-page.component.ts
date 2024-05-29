import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { clickedState, doctorAddState, listAnimation, selectState } from './animations.trigger';
import { routeAnimationState } from '../route.animations';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    clickedState,
    selectState,
    doctorAddState,
    routeAnimationState,
    listAnimation
  ]

})
export class HomePageComponent implements OnInit, AfterViewInit {

  @HostBinding('@routeAnimationState') routeAnimation = true
  clickInfo = 'default'
  selectedImage!: any
  onToggle() {
    this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
  }

  displayedUsers: any[] = []
  onSelected(e: any) {
    this.selectedImage = e
  }

  ngOnInit() {
    if (this.topDr.length > 0) {
      this.displayedUsers.push(this.topDr[0]);
    }
  }
  ngAfterViewInit() {
    const totalTime = this.drSpeclist.length * 1;
    document.documentElement.style.setProperty('--total-animation-time', `${totalTime}s`);
  }

  drSpeclist: any = [
    { img: 'assets/teeth.png', name: 'Dentist' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Ortho..' },
    { img: 'assets/teeth.png', name: 'Neuro..' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Neuro..' }
  ]

  drSpeclists: any = [
    { img: 'assets/teeth.png', name: 'Dentist' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Ortho..' },
    { img: 'assets/teeth.png', name: 'Neuro..' },
    { img: 'assets/teeth.png', name: 'Cardil..' },
    { img: 'assets/teeth.png', name: 'Neuro..' }
  ]
  location: any = [
    { img: 'assets/hospital.jpg', name: 'EvateDental', time: '15 min', dist: '1.5 km', rate: '4.8' },
    { img: 'assets/hospital.jpg', name: 'DentaCare', time: '25 min', dist: '2.5 km', rate: '4.5' },
    { img: 'assets/hospital.jpg', name: 'EvateDental Clinic', time: '10 min', dist: '1.1 km', rate: '4.2' },
    { img: 'assets/hospital.jpg', name: 'DentaCare', time: '25 min', dist: '3.5 km', rate: '4.5' },
  ]
  topDr: any = [
    { img: 'assets/doctor.png', p: 'Dentist', name: 'Dr. Jane Cooper', veiw: '49', rate: '4.9' },
    { img: 'assets/doctor.png', p: 'Ortho', name: 'Dr. Robert Fox', veiw: '48', rate: '4.8' },
    { img: 'assets/doctor.png', p: 'Neuro', name: 'Dr. Jacob Jones', veiw: '45', rate: '4.5' },
  ]

  topDoctor: string = 'Proffesional Doctor'
  constructor(private router: Router) { }

  makeApp(s: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: s,
      },
    };
    this.router.navigate(['/home/make'], navigationExtras);
  }
  onIonInfinite(ev) {
    const startIndex = this.displayedUsers.length;
    const endIndex = Math.min(startIndex + 1, this.topDr.length);
    for (let i = startIndex; i < endIndex; i++) {
      this.displayedUsers.push(this.topDr[i]);
    }
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
      if (this.displayedUsers.length === this.topDr.length) {
        (ev as InfiniteScrollCustomEvent).target.disabled = true;
      }
    }, 500);
  }
}
