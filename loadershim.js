/**
 * In jest.config.js the `setupFiles` in array lets you list files 
 * that will be included before all tests are run
 * */ 

global.___loader = {
  enqueue: jest.fn(),
}