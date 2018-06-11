import { Component } from "@angular/core";

//ts class to instantiate it
//decorators to enhance elements

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){

        this.serverStatus = Math.random() > 0.5 ? 'online' :'offline';
    }

    getDerverStatus() {

        return this.serverStatus
    }

    getColor(){

        return this,this.serverStatus === 'online' ? 'green' : 'red';
    }
}