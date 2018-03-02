import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
	.online {
		color: white;
	}
	`]
})
export class ServerComponent {
	// Variables
	serverId: number = 10;
	serverStatus: string = 'offline';

	// Generates a random number to determine if the server is online or offline
	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	// Returns the server's status
	getServerStatus() {
		return this.serverStatus;
	}

	// Dynamically determines the color of the server status
	// which is dependent on the random number generated
	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}