import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss'],
})
export class MakeAppointmentComponent implements OnInit {

  doc: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc = history.state.user;
    console.log(this.doc);
  }

}
