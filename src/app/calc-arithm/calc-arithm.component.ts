import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'calc-arithm',
  standalone: true, // ✅ Add this
  imports: [CommonModule, FormsModule],
  templateUrl: './calc-arithm.component.html',
  styleUrls: ['./calc-arithm.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    if (this.num2 === 0) {
      alert("Cannot divide by zero");
      return;
    }
    this.result = this.num1 / this.num2;
  }
}


