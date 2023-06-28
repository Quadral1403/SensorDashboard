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
  
  urlAirTemp: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687940416487&to=1687962016487&theme=light&panelId=1";
  urlAirHumidity: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687941467616&to=1687963067616&theme=light&panelId=2";
  urlAirPressure: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687940671348&to=1687962271348&theme=light&panelId=9";
  urlRainGauge: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687940757375&to=1687962357375&theme=light&panelId=8";
  urlLightIntensity: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687940848543&to=1687962448544&theme=light&panelId=3";
  urlUvIndex: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687940913774&to=1687962513774&theme=light&panelId=4";
  urlWindDirection: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687941019424&to=1687962619424&theme=light&panelId=6";
  urlWindSpeed: string = "http://localhost:3000/d-solo/b10fe89a-fe06-4260-80d6-f5a6ccc93e76/wettersensorik?orgId=1&from=1687941094572&to=1687962694572&theme=light&panelId=5";

  urlSafe1: SafeResourceUrl = "";
  urlSafe2: SafeResourceUrl = "";
  urlSafeAirTemp: SafeResourceUrl = "";
  urlSafeAirHumidity: SafeResourceUrl = "";
  urlSafeAirPressure: SafeResourceUrl = "";
  urlSafeRainGague: SafeResourceUrl = "";
  urlSafeLightIntensity: SafeResourceUrl = "";
  urlSafeUvIndex: SafeResourceUrl = "";
  urlSafeWindDirection: SafeResourceUrl = "";
  urlSafeWindSpeed: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    this.urlSafeAirTemp = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlAirTemp);
    this.urlSafeAirHumidity = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlAirHumidity);
    this.urlSafeAirPressure = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlAirPressure);
    this.urlSafeRainGague = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlRainGauge);
    this.urlSafeLightIntensity = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlLightIntensity);
    this.urlSafeUvIndex = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlUvIndex);
    this.urlSafeWindDirection = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindDirection);
    this.urlSafeWindSpeed = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindSpeed);
  }

}
