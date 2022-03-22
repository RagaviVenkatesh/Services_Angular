import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent implements OnInit {

  constructor(private log: LoggingService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // onCreateAccount(accountName: string, accountStatus: string) {
  //   // event.preventDefault();
  //   // this.accountAdded.emit({
  //   //   name: accountName,
  //   //   status: accountStatus
  //   // });

  //Should not use services in this way
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    
    
    // console.log('A server status changed, new status: ' + accountStatus);
// }

    onCreateAccount(accountName: string, accountStatus: string) {
      event.preventDefault();
      this.accountService.addAccount(accountName, accountStatus);
      // this.log.logStatusChange(accountStatus);
    }

    
    
  
}
