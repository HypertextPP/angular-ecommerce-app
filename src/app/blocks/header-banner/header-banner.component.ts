import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.less']
})
export class HeaderBannerComponent implements OnInit {

  authService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  ngOnInit() {
  }

  isMobile(): boolean {
    return window.screen.width <= 750;
  }

}
