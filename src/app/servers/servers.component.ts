import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Variables
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'TestServer 2']; // Array of servers

  // Disable the 'Add Server' button until 2 sec after the page has loaded
  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);

   }

  ngOnInit() {
  }
  // serverCreated is now set to true
  // The serverName will be displayed
  onCreateServer() {
  	this.serverCreated = true;
    this.servers.push(this.serverName); // Add server to array
  	this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  // Updates the serverName
  onUpdateServerName(event: any) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
