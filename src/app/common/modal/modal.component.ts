import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../_modal.scss']
})

// @Component({
//   selector: 'app-modal',
//   styleUrls: ['../../_modal.scss'],
//   template: `
//   	<div class="modal-container" *ngIf="isOpen">
//   	  <div class="modal-overlay" (click)="close(true)"></div>
//   	    <div class="app-modal">
//   		<div class="title">
// 		  <h3 *ngIf="modalTitle" [innerHTML]="modalTitle"></h3>
// 		  <button *ngIf="!blocking && closebtn"
// 	      	class="btn-close" (click)="close()">X</button>
// 	    </div>
// 	    <div class="body">
// 	      <ng-content></ng-content>
// 	    </div>
// 	  </div>
// 	</div>
//   `
// })

export class ModalComponent implements OnInit {

  isOpen = false;

  @Input() closebtn: boolean;
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking: boolean;
  @HostListener('document:keyup', ['$event'])
  /**
  * keyup - Checks keys entered for the 'esc' key, attached to hostlistener
  */
  keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }

  constructor(private modalService: ModalService) { }

  /**
  * ngOnInit - Initiated when component loads
  */
  ngOnInit() {
    this.modalService.registerModal(this);
  }

  /**
  * close - Closes the selected modal
  */
  close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

}
