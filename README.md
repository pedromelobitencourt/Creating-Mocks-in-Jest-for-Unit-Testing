# Creating Mocks in Jest for Unit Testing: Practical Examples

## Theoretical Explanation

**Software tests** verify if a program exhibit the waited answers. They can be manual or **automatic**. It's crucial to emphasize that tests show the presence of bugs, but not the absence of them, as stated by Dijkstra

If you want, you can study the subject before practicing. If so, i recommend the [chapter 8](https://engsoftmoderna.info/cap8.html) of the book [Engenharia de Software Moderna](https://engsoftmoderna.info). But unfortunatelly for some, this book is in Portuguese.

Our objective is to allow that the student have a first contact with **Jest's mocks for unit testing**

## Practical Explanation

First and foremost, It's worth noting that usually if a file is named, for example, *index.ts*, its test file usually is named *index.spec.ts* or *index.test.ts*

There are some folders on *src* folder. The folder *examples* contains a typescript file (test-jest-assertions.spec.ts) that helps to show how *unit testing with jest* works

### Test blocks

Firstly, you can create blocks of tests, promoting organization. To create a block of test:
```
describe('description of the test block', function that contains the tests)
```

### Test

Thereafter, inside its function, you have to create the tests in the following way:

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
2. Open the terminal of you operational system in the folder that will contain the project and **clone** the repo
```
git clone https://github.com/<SEU USUÁRIO>/Creating-Mocks-in-Jest-for-Unit-Testing
```

3. Install Node.js if you don't have it on this [page](https://nodejs.org/en/download/)

```
npm install
```

```
npm i jest ts-jest @types/jest -D
```

## Usage

Describe the usage of the project here.

## Testing

Make sure that you have the *package.json* file

```
npm run test
```

```
npm run test:silent
```

```
npm run test:coverage
```

## Contributing

Details about how to contribute to the project.

## License

Information about the license.
