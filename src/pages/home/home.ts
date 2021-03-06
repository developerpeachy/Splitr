import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvenSplitPage } from '../even-split/even-split';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  evenSplit() {
  		this.navCtrl.push(EvenSplitPage, { animate: true, animation: "slide-right-to-left", direction: 'forward'});
  }

}
