console.log("Angular src - rest-tester.component.ts - START");

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApiListInterface } from './graphql/schema';
import { GetApiList} from './graphql/queries';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rest-tester',
  templateUrl: './rest-tester.component.html',
  styleUrls: ['./rest-tester.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RestTesterComponent implements OnInit {

      clickMessage;
      restStatus;
      restBody;
      tiles;
      private apiList: ApolloQueryObservable<ApiListInterface>;
  constructor(private http: Http, private apollo: Apollo) {
      this.apollo = apollo;
      this.clickMessage = '';
      this.restStatus;
      this.restBody = '';
      this.tiles = [
               {text: 'Rest Parameters', cols: 1, rows: 1, color: 'lightblue'},
               {text: 'Rest Response', cols: 3, rows: 1, color: 'lightgreen'},
           ];
  }


  ngOnInit() {
    this.apiList= this.apollo.watchQuery<ApiListInterface>({
      query: GetApiList
    }).map(result => result.data.apis) as any;
  }

}
console.log("Angular src - rest-tester.component.ts - END");
