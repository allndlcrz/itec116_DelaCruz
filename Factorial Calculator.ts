import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('assignment-3-factorial-calculator/:number')
  getFactorial(@Param('number') number: string): string {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      return 'Please provide a valid Non-Negative Integer.';
    }

    const factorialResult = this.calculateFactorialIterative(num);
    return Factorial of ${num} is ${factorialResult};
  }

  private calculateFactorialIterative(num: number): number {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}