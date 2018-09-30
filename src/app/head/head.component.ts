import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
declare var $: any;

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @ViewChild(LoginComponent) lc: LoginComponent;
  visibleSidebar1;
  visibleSidebar2;
  uName: string;
  logged: boolean;
  admin_role: boolean;
  // cartCount: number;
  koi: any;
  constructor(private loginS: LoginService, private route: Router) { }

  ngOnInit() {
    // this.cartCount = this.cartCount ? this.cartCount : 0;
    // $(function() {
    //   $('#tagcloud a').tagcloud({
    //     size: {
    //       start: 20,
    //       end: 30,
    //       unit: 'px'
    //     },
    //     color: {
    //       start: '#1c5866',
    //       end: '#661c49'
    //     }
    //   });
    // });
  }

  userClkRes(e) {
    this.visibleSidebar1 = false;
    if (e.type === 'login') {
      this.uName = e.username;
      this.logged = true;
      if ( e.admin === true ) {
        this.admin_role = true;
      } else { this.admin_role = false; }
    } else {
      this.logged = false;
    }
    this.lc.username = '';
    this.lc.password = '';
  }

  logoutClk() {
    this.loginS.setLoginSts(false);
    this.loginS.loginSts.subscribe(res => this.koi = res);
    console.log(this.koi);
    this.uName = 'Username';
    this.logged = false;
    this.visibleSidebar2 = false;
    this.route.navigate(['/']);
  }
}
