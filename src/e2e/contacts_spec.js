const PORT = process.env.PORT || 3000;

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`);
  });

  it('should have Contacts', () => {
    cy.get('[class^=Contact__Wrapper]').should('have.length', 10);
  });

  it('should turn to next page of Contacts by clicking next', () => {
    cy.get('[class^=Pagination__NextButton]').click();
    cy.get('[class^=Contact__Wrapper]').should('have.length', 10);
  });

  it('should go to details by clicking', () => {
    cy.get('[class^=Contact__Anchor]').first().click();
    cy.get('[class^=Email__Wrapper]').should('have.length', 5);
  });

  it('should search username', () => {
    cy.get('[class^=Search__Input]').type('User 1000');
    cy.get('[class^=Contact__Wrapper]').should('have.length', 2);
  });
});
