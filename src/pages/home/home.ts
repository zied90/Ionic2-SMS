import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { SMS} from '@ionic-native/sms';
import {Calendar} from '@ionic-native/calendar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
phoneNumber:number;
textMessage:string;
  constructor(public navCtrl: NavController,private sms: SMS,private toast:ToastController,private calendar: Calendar) {

  }
async sendText(){
 try{
   await this.sms.send(String(this.phoneNumber),this.textMessage);
   const toast=this.toast.create({
     message:'text was send',
     duration:3000
   });
   toast.present();
 }
 catch(e){
   const toast=this.toast.create({
     message:'text notsend',
     duration:3000
   });
   toast.present();
 }
}
addCalendar(){
  this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);
}
}
