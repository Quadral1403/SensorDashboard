import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url: string = "http://localhost:3000/d-solo/a00a02d1-67c6-42b7-b8de-7881f26ea90a/altkleidercontainer?orgId=1&refresh=1m&theme=light&panelId=2";
  urlSafe: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
