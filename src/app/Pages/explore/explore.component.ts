import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {

  constructor() { }
  location: any = [
    { img: 'assets/hospital.jpg', name: 'Golamer Haven', time: '15 min', dist: '1.5 km', rate: '4.8' },
    { img: 'assets/hospital.jpg', name: 'DentaCare', time: '25 min', dist: '2.5 km', rate: '4.5' },
    { img: 'assets/hospital.jpg', name: 'EvateDental Clinic', time: '10 min', dist: '1.1 km', rate: '4.2' },
    { img: 'assets/hospital.jpg', name: 'DentaCare', time: '25 min', dist: '3.5 km', rate: '4.5' },
  ]

  ngOnInit() {
    console.log();

  }

}
