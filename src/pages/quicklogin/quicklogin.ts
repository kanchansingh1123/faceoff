import { Component, ViewChild ,AfterContentInit } from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Password page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'quick-login-page',
  templateUrl: 'quicklogin.html'
})
export class QuickLoginPage implements AfterContentInit {

  @ViewChild('focusable1') myInput1 ;
  @ViewChild('focusable2') myInput2 ;
  @ViewChild('focusable3') myInput3 ;
  @ViewChild('focusable4') myInput4 ;
  @ViewChild('focusable5') myInput5 ;

  public range1:any;
  public range2:any;
  public range3:any;
  public range4:any;
  public range5:any;
  public val:any;
  public password:string;

  constructor(public navCtrl: NavController) {
  		
  }

  ngAfterContentInit() {
   // this.myInput1.setFocus();
  }
  

  saverange(event,focusId) {

  this.val= event.target.value;
  if(this.val != " " && this.val !=null && this.val != undefined && this.val != ""){
  
    switch (focusId) 
      { 
      case'focusable2': 
         this.myInput2.setFocus();
        break; 
      case'focusable3': 
        this.myInput3.setFocus(); 
        break; 
      case'focusable4': 
        this.myInput4.setFocus(); 
        break; 
      case'focusable5': 
        this.myInput5.setFocus(); 
        break; 
      default: 
        this.myInput1.setFocus();
      } 
  }
} 

  doLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  doQuickLogin(){
  
    this.password = this.range1 + this.range2 + this.range3 + this.range4 + this.range5;
    if(this.password == localStorage.getItem("Name"))
    {
      this.navCtrl.setRoot(TabsPage);
    }else{
      console.log("Enter valid data");
    }
  }

  
}
