import { Component } from '@angular/core';
import { NavController,ActionSheetController} from 'ionic-angular';
import { Camera } from 'ionic-native';


/*
  Generated class for the Password page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'report-detail-page',
  templateUrl: 'reportdetails.html'
})
export class ReportDetailPage {
  public services:any;
  public addGroup:any;
  public serviceGroups:any = [];
  public reports: string = "reports";
  public base64Image: string;
  public defulat:any;
  public IsFlag:boolean=false;
  public images: Array<string>=[];  
 



  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
          this.addGroup =
            {
              Name:"Add New",
              icon:"plus"
            };
          this.defulat= {
                          Name:"blood reports",
                          image:"assets/images/doctor1.png"
                        };

         this.services = [
                          {name:"gujg",image:"assets/images/doctor1.png"},
                          {name:"anil",image:"assets/images/doctor1.png"},
                          {name:"ram",image:"assets/images/doctor1.png"}
                        ];



        };


       ionViewDidLoad(){
       
     }

    
  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
      title: 'Add New',
      buttons: [
        {
          cssClass:'upload upload-icon',
          role: 'destructive',
          handler: () => {
             this.uploadPicture();
          }
        },
        {
          cssClass:'photo photo-icon',
          role: 'destructive',
          handler: () => {
            //console.log('Archive clicked');
             this.takePicture();
          }
        }
      ],
       cssClass:'reportactiontitle'
    });
    actionSheet.present();
  }

  //Take picture from camera
   takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit:true,
        correctOrientation:true,
        saveToPhotoAlbum:true,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
         this.images.push(this.base64Image);
       
    }, (err) => {
        console.log(err);
    });
  }

//Upload picture

  uploadPicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit:true,
        correctOrientation:true,
        saveToPhotoAlbum:true,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
         this.base64Image = "data:image/jpeg;base64," + imageData;
        this.images.push(this.base64Image);
       
    }, (err) => {
        console.log(err);
    });
  }
  

}
