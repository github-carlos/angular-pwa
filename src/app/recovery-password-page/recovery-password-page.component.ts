import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-password-page',
  templateUrl: './recovery-password-page.component.html',
  styleUrls: ['./recovery-password-page.component.css']
})
export class RecoveryPasswordPageComponent implements OnInit {

  email: string;
  displayModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
