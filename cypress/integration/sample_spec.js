describe('The Home Page', function() {
  
  it('successfully loads', function() {
    cy.visit('/');
  });

  it('buttons are clickable', function() {
    cy.get('button#btn_genre').click();
    cy.should('have.class', 'btn-red')

    cy.get('button#btn_rating').click();
    cy.should('have.class', 'btn-red')
  })
})