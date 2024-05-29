import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { userAddState } from './user/user.animations';
import { AnimationEvent } from '@angular/animations';
import { routeAnimationState } from '../route.animations';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [userAddState, routeAnimationState]
})
export class ChatComponent implements OnInit {
  @HostBinding('@routeAnimationState') routeAnimation = true
  displayedUsers: any[] = []
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.user.length > 0) {
      this.displayedUsers.push(this.user[0]);
    }
  }
  image: any = [
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
    { d: '../../../assets/doc.png' },
  ]
  user: any = [
    { isActive: true, n: 'Carla Schoen', c: 'Perfect, will check it', t: '09:00 PM' },
    { isActive: false, n: 'Mrs. Sheila Lemke', c: 'Thanks', t: '10:00 PM' },
    { isActive: false, n: 'Deanna Botsford', c: 'Wellcome!', t: '08:30 PM' },
    { isActive: true, n: 'Carla Schoen', c: 'Good Morning', t: '10:00 PM' },
    { isActive: false, n: 'Mr.Katie Gergum', c: 'Can i check that?', t: '11:00 PM' },
    { isActive: true, n: 'Carla Schoen', c: 'Perfect, will check it', t: '09:00 PM' },
    { isActive: false, n: 'Mrs. Sheila Lemke', c: 'Thanks', t: '10:00 PM' },
    { isActive: false, n: 'Deanna Botsford', c: 'Wellcome!', t: '08:30 PM' },
    { isActive: true, n: 'Carla Schoen', c: 'Good Morning', t: '10:00 PM' },
    { isActive: false, n: 'Mr.Katie Gergum', c: 'Can i check that?', t: '11:00 PM' },
  ]
  chatUser(s: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: s,
      },
    };
    this.router.navigate(['/chat/user'], navigationExtras);
  }

  onUserAddDone(e: AnimationEvent, i: number) {
    if (e.fromState != 'void') { return; }
    if (this.user.length > i + 1) {
      this.displayedUsers.push(this.user[i + 1]);
    }
  }


}
