const PORT = process.env.PORT || 3000;

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit(`http://127.0.0.1:${PORT}`);
  });

  it('should have Contacts', () => {
    cy.get('[class^=Contact__Wrapper]').should('have.length', 10);
  });

  it('should turn to next page of Contacts by clicking next', () => {
    cy.visit(`http://127.0.0.1:${PORT}`);
    cy.get('[class^=Pagination__NextButton]').click();
    cy.get('[class^=Contact__Wrapper]').should('have.length', 10);
  });
});
