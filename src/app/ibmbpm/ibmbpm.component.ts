console.log("Angular src - ibmbpm.component.ts - START");
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ibmbpm',
  templateUrl: './ibmbpm.component.html',
  styleUrls: ['./ibmbpm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IbmbpmComponent implements OnInit {
  private credentials:any;
  constructor(private http: Http) { 
  }
  public ngOnInit(): void {
    // TODO Auto-generated method stub
    return;
  }
}
console.log("Angular src - ibmbpm.component.ts - END");