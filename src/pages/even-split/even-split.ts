import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-even-split',
  templateUrl: 'even-split.html'
})

export class EvenSplitPage {

  splitBillForm: FormGroup;
  submitAttempt: boolean = false;
  amtPayable: any;
  total: any;
  persons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.splitBillForm = formBuilder.group({
        totalAmt: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9.[0-9]*'), Validators.required])],
        amtOfPpl: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9]*'), Validators.required])]
    });

    this.persons = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenSplitPage');
  }

  calculate(){
  	this.submitAttempt = true;
  	if (this.splitBillForm.valid){
  		// totalamt  / amtOfPPl = total pay out
  		let totalAmt = this.splitBillForm.value.totalAmt;
  		let amtOfPpl = this.splitBillForm.value.amtOfPpl;
  		this.amtPayable = (+totalAmt / +amtOfPpl).toFixed(2); 
      this.persons.length = amtOfPpl;
      console.log(this.persons);
  	}
  }

  showPrompt(persons: string) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Person',
      message: "Change the person's name and amt owing",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'amtOwing',
          placeholder: 'How much do they owe?'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked ' + this.persons);
          }
        }
      ]
    });
    prompt.present();
  }

  back(){
  	this.navCtrl.push(HomePage);
  }

}
