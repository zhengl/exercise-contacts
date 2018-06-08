const PORT = process.env.PORT || 3000;

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit(`http://127.0.0.1:${PORT}`);
    cy.get('.contact').should('have.length', 10);
  });
});
