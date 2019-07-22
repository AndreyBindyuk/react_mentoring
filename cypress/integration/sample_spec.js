describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('buttons are clickable', () => {
    cy.get('button#btn_genre').click();
    cy.should('have.class', 'btn-red');

    cy.get('button#btn_rating').click();
    cy.should('have.class', 'btn-red');
  });
});
