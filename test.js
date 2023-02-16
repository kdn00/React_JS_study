class testClass {
    constructor() {
      this.a = '12345';
    }
  
    consoleA() {
      console.log(this.a);
    }
  }
  
  const testClassInstance = new testClass();
  testClassInstance.consoleA(); // 12345
  
  const globalConsoleA = testClassInstance.consoleA.bind(testClassInstance);
  globalConsoleA();