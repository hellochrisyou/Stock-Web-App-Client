import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
