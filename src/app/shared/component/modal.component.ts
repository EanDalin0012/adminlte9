import { Component, OnInit } from '@angular/core';
import { ModalDataService } from './modalData.service';

@Component({
  template: '<div [innerHTML]="message"></div>',
})
export class ModalComponent implements OnInit {

  public message: string;

  constructor(
    private modalDataService: ModalDataService,
  ) {
    this.modalDataService.currentMessage.subscribe((message) => this.message = message);
  }

  public ngOnInit() {


    this.modalDataService.currentMessage.subscribe((message) => this.message = message);
  }
}
