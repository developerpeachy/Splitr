import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-split-bill',
  templateUrl: 'split-bill.html',
})
export class SplitBillPage {

	splitBillForm : FormGroup;
	calculateForm : FormGroup;
	submitAttempt: boolean = false;
  	amtPayable : any;
  	amtOwing : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.splitBillForm = formBuilder.group({
        totalAmt: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9.[0-9]*'), Validators.required])]
    });

    this.calculateForm = formBuilder.group({
        price: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9.[0-9]*'), Validators.required])]
    })
  }

  addPerson(){
  	if (this.splitBillForm.valid) {
  		// reveal a button that adds a person that needs to pay
  		this.calculate();
  		this.submitAttempt = true;
  	}
  	else {
  		// ask to fill in the form
  		//toast or alert message
  	}
  }

  calculatePerPerson(){
  	//amtPayable is the price that is being added up for each person.
  	let price = this.calculateForm.value.price;
  	this.amtPayable = this.amtPayable + price;
  	return parseFloat(this.amtPayable).toFixed(2);
  }

  calculate(){
  	//calculates the bill in total.
	let totalAmt = this.splitBillForm.value.totalAmt;
	parseFloat(totalAmt).toFixed(2);
	parseFloat(this.amtPayable).toFixed(2);
	if (totalAmt - this.amtPayable == 0){
		//all working ok
		console.log('success');
	}
	else {
		console.log('amount owing is not equal to total amount');
		//return amount owing to display how much money needs to get paid
		//return parseFloat(this.amtOwing).toFixed(2);
		
	}
  }

  back(){
  	this.navCtrl.push(HomePage);
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitBillPage');
  }



}
