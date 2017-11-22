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
	submitAttempt1: boolean = false;
  	amtPayable : number = 0;
  	amtOwing : any;
  	balance : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.splitBillForm = formBuilder.group({
        totalAmt: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9.[0-9]*'), Validators.required])]
    });

    this.calculateForm = formBuilder.group({
        price: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[0-9][0-9.[0-9]*'), Validators.required])]
    })
  }

  //need a better way to code this. 
  addPerson(){
  	if (this.splitBillForm.valid) {
  		// reveal a button that adds a person that needs to pay
  		this.submitAttempt = true;
  	}
  	else {
  		//idk
  	}
  }

  addSecondPerson(){
  	this.submitAttempt1 = true;
  }

  calculatePerPerson(){
  	//calculates the balance
  	let price = +this.calculateForm.value.price;
  	if (this.balance == 0) {
  		this.balance = this.balance + price;
  		console.log("new bal: " + this.balance);
  		return this.balance;
  	}
  	else {
	  	//let balance accumulate value by balance + price
	  	let balance = this.balance + price;
	  	return this.balance;
  	}
  }

  //Haven't tested
  calculate(){
  	//calculates the bill in total.
	let totalAmt = +this.splitBillForm.value.totalAmt;
	let amtPayable = totalAmt - this.balance;
	
	if (amtPayable < totalAmt){
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

}
