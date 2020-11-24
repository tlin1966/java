import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'You are entering the wrong URL, please contact your administrators'
  constructor() { }

  ngOnInit(): void {
  }

}
