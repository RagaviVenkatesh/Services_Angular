import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
  // providers: [LoggingService, AccountService]
})
export class AccountComponent implements OnInit {

  constructor(private log: LoggingService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // onSetTo(status: string) {
  //   this.statusChanged.emit({id: this.id, newStatus: status});
  //   this.log.logStatusChange(status);

  // console.log('A server status changed, new status: ' + accountStatus);
  // }

  onSetTo(status: string)
  {
    this.accountService.updateStatus(this.id,status);
    // this.log.logStatusChange(status);
  }

  

}
