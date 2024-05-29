import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {

  view: any = [
    { icon: 'people', num: '7,500+', det: 'Patients' },
    { icon: 'briefcase', num: '10+', det: 'Years Exp' },
    { icon: 'star', num: '4.9+', det: 'Rating' },
    { icon: 'chatbox-ellipses', num: '4,956+', det: 'Review' },
  ]
  day: any = [
    { day: 'Today', date: '4 Oct', clicked: true },
    { day: 'Mon', date: '5 Oct', clicked: false },
    { day: 'Tue', date: '6 Oct', clicked: false },
    { day: 'Wed', date: '7 Oct', clicked: false },
    { day: 'Thu', date: '8 Oct', clicked: false },
    { day: 'Fri', date: '9 Oct', clicked: false },
    { day: 'Sat', date: '5 Oct', clicked: false },
    { day: 'Sun', date: '11 Oct', clicked: false },
  ]
  time: any = [{ t: '7:00 PM', clicked: true }, { t: '7:30 PM', clicked: false }, { t: '8:00 PM', clicked: false }, { t: '8:30 PM', clicked: false }, { t: '9:00 PM', clicked: false }, { t: '9:30 PM', clicked: false }]
  constructor() { }

  toggleClass(clickedDay: any) {
    this.time.forEach((day: any) => {
      day.clicked = (day === clickedDay);
    });
  }
  toggleClassD(clickedDay: any) {
    this.day.forEach((day: any) => {
      day.clicked = (day === clickedDay);
    });

  }
  top: any = { img: 'assets/doctor.png', p: 'Dentist', name: 'Dr. Jane Cooper', veiw: '49', rate: '4.9' }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
}
