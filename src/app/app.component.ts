import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  title = 'app';
  name = '';

  showSecret = false; // Controls secret password
  log = [];

  // Method for keeping track of logs
  onToggleDetails() { 
	  this.showSecret = !this.showSecret;
	  //this.log.push(this.log.length + 1); -- Returns log number
	  this.log.push(new Date()); // Returns date/time stamp of log
	}

}
