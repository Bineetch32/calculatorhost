import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  toshow = '0';
  currvalue = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle number input
  writetoinput(value: string): void {
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
  }

  // Method to handle the equal sign (=) for evaluation
  equal(): void {
    try {
      // Using Function constructor for evaluation (safer than eval)
      const result = new Function('return ' + this.currvalue)();
      this.toshow = result.toString();
      this.currvalue = result.toString();
    } catch (error) {
      // Handle evaluation error
      console.error('Error in evaluation:', error);
    }
  }

  // Method to clear the input
  clear(): void {
    this.currvalue = '';
    this.toshow = '0';
  }

  // Method to remove the last character (backspace)
  back(): void {
    this.currvalue = this.currvalue.slice(0, -1);
    this.toshow = this.currvalue || '0'; // Show '0' if empty
  }

  // Additional method to handle decimal point input
  getDecimal(): void {
    if (!this.currvalue.includes('.')) {
      this.currvalue += '.';
      this.toshow = this.currvalue;
    }
  }

  writeSpecial(value: string): void {
    if (value === 'π') {
      this.currvalue += Math.PI.toFixed(8); // Adding PI value with precision
    } else {
      this.currvalue += value;
    }
    this.toshow = this.currvalue;
  }
  

}
