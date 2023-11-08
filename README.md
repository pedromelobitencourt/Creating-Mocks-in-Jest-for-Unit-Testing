# Creating Mocks in Jest for Unit Testing: Practical Examples

## Theoretical Explanation

**Software tests** verify if a program exhibits the waited answers. They can be manual or **automatic**. It's crucial to emphasize that tests show the presence of bugs, but not the absence of them, as stated by Dijkstra

If you want, you can study the subject before practicing. If so, i recommend the [chapter 8](https://engsoftmoderna.info/cap8.html) of the book [Engenharia de Software Moderna](https://engsoftmoderna.info). But unfortunatelly for some, this book is in Portuguese.

Our objective is to allow that the student have a first contact with **Jest's mocks for unit testing**

## Practical Explanation

First and foremost, It's worth noting that usually if a file is named, for example, *index.ts*, its test file usually is named *index.spec.ts* or *index.test.ts*

There are some folders on *src* folder. The folder *examples* contains a typescript file (test-jest-assertions.spec.ts) that helps to show how *unit testing with jest* works

### Test suites

Firstly, you can create tests suites, promoting organization. A **test suite** is a function that group related tests cases. To create a test suite using Jest, you do the following:
```
describe('description of the test block', function that contains the tests)
```

### Test

Thereafter, inside its function, you have to define individual tests cases in the following way:

```
it('test description', test function)
```

**OR**

```
test('test description', test function)
```

Inside each test, there is, at least, one *expect* function to test a value. There are a lot of tests that can be done, so we're going to show the most important ones.

```
const number = 10;
expect(number).toBe(10);
expect(number).toEqual(10);
```

The above example tests if the variable *number* is equal to 10. The opposite could be done with:
```
expect(number).not.toBe(10);
expect(number).not.toEqual(10);
```

To verify if an object has a property, we can do the following:
```
expect(obj).toHaveProperty('property');
```

Furthermore, we can check if the object has a property and if its property has a certain value:

```
expect(obj).toHaveProperty('property', value);
```

Now, that you know all of this, it's important to point out what **Mocks** are.

**Mocks** are fake objects, functions or modules that mimic the behavior of real components, allowing you to isolate and test specific parts of your code without relying on or affecting external dependencies. Mocks are commonly used in unit testing to create controlled environments for testing individual units of code, such as functions or methods.

In the context of mocking, you will often encounter terms like:
- **Stub**: It is a type of mock that provides predefined responses to method calls, but it does not verify whether the methods are called or not

- **Mock**: A mock, in the stricter sense, is a mock object that both provides predefined responses and verifies whether specific methods are called during the test

- **Spy**: A spy is a type of mock that "watches" real objects or functions and records information about their method calls, allowing you to inspect their behavior.

All things considered, we can understand what ***jest.clearAllMocks()*** is doing. It is resetting and clearing any mocks created or used within each test case, ensuring a **clean state** for subsequent tests. Moreover, ***jest.spyOn*** is a function used to created mock spies for tracking the behavior of functions or methods in your code during testing. **Spies** are helpful when you want to monitor whether specific functions have been called, with what arguments and how many times they were invoked

***jest.spyOn*** works in the following way:

1. **Creating a Spy**

    You use *jest.spyOn* to create a spy for a specific object and method.
    ```
    jest.spyOn(object, 'methodName');
    ```
    - object: The object or module that contains the method you want to spy on

    - methodName: The name of the method you want to spy on

2. **Configuring Spy Behavior**


    After creating a spy, you can define its behavior. For example, you can make it return a specific value or throw an exception when called. You can configure the spy like this:
    ```
    jest.spyOn(object, 'methodName').mockReturnValue('mockedReturnValue');
    ```

3. **Using the Spy in Tests**

    You then use the spy in your test cases to monitor the method's behavior. You can call the method as you normally would in your code, and the spy will keep track of these calls.

4. **Assertions**

    In your test, you can make assertions to verify how the spy was used. For example, you can check if the method was called with specific arguments or determine how many times it was invoked. Jest provides various matchers for these assertions, like '*toHaveBeenCalled*', '*toHaveBeenCalledWith*', and '*toHaveBeenCalledTimes*'.

    Here's an exemple of using '*jest.spyOn*':
    ```
    // Suppose you have a simple object with a method.
    const myObject = {
      add: (a, b) => a + b,
    };

    // Create a spy for the `add` method.
    const addSpy = jest.spyOn(myObject, 'add');

    // Configure the spy behavior.
    addSpy.mockReturnValue(5);

    // Use the spy in a test.
    const result = myObject.add(2, 3);

    // Assertions
    expect(result).toBe(5); // The result is the mocked return value.
    expect(addSpy).toHaveBeenCalledWith(2, 3); // The method was called with the expected arguments.
    expect(addSpy).toHaveBeenCalledTimes(1); // The method was called exactly once.
    ```

## Technologies

- Node
- TypeScript
- Jest

## Installation

Now we're going to describe the installation process.

1. Fork the repository. For that, click on **Fork** button
2. Open the terminal of you operational system in the folder that will contain the project and **clone** the repo:
```
git clone https://github.com/<SEU USUÁRIO>/Creating-Mocks-in-Jest-for-Unit-Testing
```

3. Install Node.js if you don't have it on this [page](https://nodejs.org/en/download/)

4. In a terminal, go to the project's directory and install the required dependencies:

```
npm install
npm i jest ts-jest @types/jest -D
```

## Usage

Describe the usage of the project here.

## Testing

Make sure that you have the *package.json* file

To run the testing files, you have three options:

With the option below, it will execute the Jest testing framework, which will run your tests and provide you with the test results and any failures.
```
npm run test
```

<br>

The option below (*npm run test:silent*) is a variant of *npm run test* with additional options, such as:
- watchAll: This option makes Jest run in watch mode, where it continuously monitors your project files for changes and re-runs the tests whenever there's a change.

- silent:  This option suppresses most of Jest's console output, making it less verbose.

- noStackTrace: This option disables printing stack traces for test failures, further reducing the verbosity of the output
```
npm run test:silent
```

<br>

The option below (*npm run test:coverage*) is also a variant of *npm run test* with additional options, such as:
- coverage: This option instructs Jest to collect code coverage information during the test run. It generates a code coverage report that shows which parts of your code have been tested and which haven't. This is helpful for assessing the quality of your tests and identifying areas of your code that may need more test coverage

- silent

- noStackTrace
```
npm run test:coverage
```

## Contributing

Details about how to contribute to the project.

## License

This script and code were created by the group consisting of:
- Lucas Rafael Alves de Souza
- Pedro Vitor Melo Bitencourt
- Rafael Pereira Duarte
- Sérgio Henrique Mendes de Assis

 We are undergraduate students in the Computer Engineering program at CEFET-MG. This script and code are part of a software engineering laboratory assignment for the class of 2023/2. Both the code and the script are under the MIT license.
