import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PasswordPage } from '../pages/password/password';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchDoctors } from '../pages/searchdoctors/searchdoctors';
import { DoctorDetailsPage } from '../pages/doctordetails/doctordetails';
import { NotificationPage } from '../pages/notification/notification';
import { SchedulePage } from '../pages/schedule/schedule';
import { ModalPage } from '../pages/schedule/modal-page/modal-page';
//import { RatingModalPage } from '../pages/about/modal-page/modal-page';
import { RecordsPage } from '../pages/records/records';
import { ReportDetailPage } from '../pages/reportdetails/reportdetails';
import { SearchPage } from '../pages/search/search';
import { SearchPipe } from '../pipes/searchPipe';
import { HeaderBarPage } from '../pages/header/header';
import { SelectLocationPage } from '../pages/selectlocation/selectlocation';
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    SearchDoctors,
    DoctorDetailsPage,
    NotificationPage,
    SchedulePage,
    ModalPage,
    //RatingModalPage,
    TabsPage,
    RecordsPage,
    ReportDetailPage,
    SearchPage,
    SearchPipe,
    HeaderBarPage,
    SelectLocationPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    SearchDoctors,
    DoctorDetailsPage,
    NotificationPage,
    SchedulePage,
    ModalPage,
    //RatingModalPage,
    TabsPage,
    RecordsPage,
    ReportDetailPage,
    SearchPage,
    HeaderBarPage,
    SelectLocationPage,
    ProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
