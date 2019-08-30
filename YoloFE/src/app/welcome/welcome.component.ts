import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  i = 0; // Start Point

  time = 5000;
  pictures: any = [
    { name: "one", src: "../../assets/slider/one.jpg" },
    { name: "two", src: "../../assets/slider/two.jpg" },
    { name: "three", src: "../../assets/slider/three.jpg" },
    { name: "four", src: "../../assets/slider/four.jpg" },
    { name: "five", src: "../../assets/slider/five.jpg" }
  ];
  picture = this.pictures[0].src;

  constructor() {}

  changeImg() {
    this.picture = this.pictures[this.i].src;

    // Check If Index Is Under Max
    // for (let y = 0; y < this.pictures.length; y++) {
    if (this.i < this.pictures.length - 1) {
      // Add 1 to Index
      this.i++;
    } else {
      // Reset Back To O
      this.i = 0;
    }
    // }

    // Run function every x seconds
    setTimeout(() => {
      this.changeImg();
      // console.log("u funkciji");
    }, this.time);
  }

  // changePicture() {
  //   this.picture = this.pictures[this.i].src;
  //   setTimeout(() => {
  //     this.picture = this.pictures[this.i].src;
  //     if (this.i < this.pictures.length - 1) {
  //       // Add 1 to Index
  //       this.i++;
  //     } else {
  //       // Reset Back To O
  //       this.i = 0;
  //     }
  //   }, this.time);
  // }

  ngOnInit() {
    // this.changePicture();
    this.changeImg();
    // console.log("on init");
  }

  // ngOnDestroy() {
  //   this.pictures = [{ name: "one", src: "" }];
  //   this.picture = this.pictures[0].src; //izbacuje gresku treba videti sta je
  // }
}
