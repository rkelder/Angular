import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`.largeNumber {color: white;}`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']
  passwordDisplayed = false;
  numberOfClicks = 0;
  numberOfClicksList = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onDisplayPassword() {
    this.passwordDisplayed = !this.passwordDisplayed;
    // this.numberOfClicksList.push(this.numberOfClicks);
this.numberOfClicks++
    this.numberOfClicksList.push(new Date())
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clicksColor() {
    return this.numberOfClicks > 4 ? 'blue' : 'white';
  }

}
