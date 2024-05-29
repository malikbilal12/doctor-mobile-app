import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, Mess } from 'src/app/services/database.service';
import { userAddState } from './user.animations';
import { routeAnimationState } from '../../route.animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [userAddState, routeAnimationState]
})
export class UserComponent implements OnInit {
  @HostBinding('@routeAnimationState') routeAnimation = true
  messages = this.database.getMessages();
  message = '';
  user: any;

  constructor(private route: ActivatedRoute, private database: DatabaseService) { }

  async ngOnInit() {
    this.user = history.state.user;
    console.log(this.user);
    await this.database.initializePlugin();
  }

  async createMessage() {
    console.log(this.message);
    await this.database.addMessage(this.message);
    this.message = '';
    console.log(this.message);
  }

  deleteMessage(mess: Mess) {
    this.database.deleteMessageById(mess.id);
  }


}
