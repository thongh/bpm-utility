import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-ibmbpm',
  templateUrl: './ibmbpm.component.html',
  styleUrls: ['./ibmbpm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IbmbpmComponent implements OnInit {
  clickMessage = '';
  restStatus = '';
  restBody = '';
  constructor(private http: Http) { }
  ngOnInit() {
  }
  
  onClickMe(http: Http) {
    this.clickMessage = 'Calling a REST API...';
	this.restStatus = 'n/a';
	this.http.get("/api/ibmbpm")
      // Call map on the response observable to get the parsed object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed object and attach it to the
      // component
      .subscribe(data => {
		console.log(data)
		this.clickMessage = "DONE";
		this.restStatus = data.status;
		this.restBody = data.body;
		});
  }

}
