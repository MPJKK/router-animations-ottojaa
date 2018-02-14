import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private mediaService: MediaService) {
  }

  ngOnInit() {
    this.mediaService.logged = false;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
