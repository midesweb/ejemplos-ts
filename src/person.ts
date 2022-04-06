
export class Person {
  constructor(private name: string, private age: number) {}

  public show() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}