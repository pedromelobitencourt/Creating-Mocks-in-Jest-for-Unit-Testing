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
