console.log("Angular src - app.component.ts - START");
/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { PostsService } from './posts/posts.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from './login/login.component';
import {Http, RequestOptions} from '@angular/http';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl:'./app.component.html',
    

  providers: [PostsService]
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Mean stack starter';
  public url = 'https://mean.io';
  public dialogRef: MatDialogRef<LoginComponent>;
  private auth={
    username:"",
    host:"",
    port:0
  }

  constructor(
    public appState: AppState,
    public dialog:MatDialog,
    private http:Http
  ) {
    this.openDialog();
   }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  openDialog(){
    this.dialogRef = this.dialog.open(LoginComponent);
    this.dialogRef.afterClosed().subscribe(result=>{
      let option= new RequestOptions({
        params:{
          "credentials":{
            'auth':result.username+':'+result.password,
            'host':result.host,
            'port': result.port
          }
        }
      });
      this.http.get('/api/appAuth',option).subscribe();
      this.auth.username=result.username;
      this.auth.host=result.host;
      this.auth.port=result.port
    });
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
console.log("Angular src - app.component.ts - DONE");
