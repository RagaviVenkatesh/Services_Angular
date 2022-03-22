import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{

    constructor(private log: LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string)
      {
        this.accounts.push({name: name, status: status});
        this.log.logStatusChange(status);
      }

      updateStatus(id: number, status:string)
      {
        this.accounts[id].status = status;
        this.log.logStatusChange(status);
      }
}