import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

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

  back(){
  	this.navCtrl.push(HomePage);
  }

}
