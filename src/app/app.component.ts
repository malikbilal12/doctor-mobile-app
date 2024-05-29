import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private database: DatabaseService) {
    this.initApp();
  }

  async initApp() {
    try {
      // const initialized = await this.database.initializePlugin();
      // if (initialized) {
      //   SplashScreen.hide();
      // } else {
      //   console.error('Database initialization failed');
      // }
    } catch (error) {
      console.error('Error during app initialization:', error);
    }
  }
}
