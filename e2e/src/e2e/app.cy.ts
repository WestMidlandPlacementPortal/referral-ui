import { getGreeting } from '../support/app.po';

describe('wmpp', () => {
  beforeEach(() => cy.request({
      url:'/',
      timeout: 120000,
      retryOnStatusCodeFailure: true
    }).visit('/')
  )
   

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to wmpp');
  });
});
