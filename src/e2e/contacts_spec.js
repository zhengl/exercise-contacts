const PORT = process.env.PORT || 3000;

describe('The Home Page', () => {
  it('should have Contacts', () => {
    cy.visit(`http://127.0.0.1:${PORT}`);
    cy.get('[class^=Contact__Wrapper]').should('have.length', 100);
  });
});
