import { Component, OnInit, Input } from '@angular/core';

import { LogService } from './../../services/log.service';

@Component({
  selector: 'app-alert',
  styleUrls: ['alert.component.css'],
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() message: string;

  constructor(
    private log: LogService
  ) { }

  ngOnInit() { }
}
