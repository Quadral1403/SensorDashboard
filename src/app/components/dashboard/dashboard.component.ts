import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url1: string = "http://localhost:3000/d-solo/a00a02d1-67c6-42b7-b8de-7881f26ea90a/altkleidercontainer?orgId=1&refresh=1m&theme=light&panelId=2";
  url2: string = "http://localhost:3000/d-solo/a3280554-9570-4307-b9a5-ba97bfc01ce4/strundesensorik?orgId=1&from=1687774595085&to=1687785395085&theme=light&panelId=1";
  
  urlSafe1: SafeResourceUrl = "";
  urlSafe2: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe1= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.urlSafe2= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }

}
