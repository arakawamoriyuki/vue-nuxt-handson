describe('/todo', () => {
  beforeEach(() => {
    cy.visit('/todo');
  });

  it('TODOリストが表示される', () => {
    cy.get('.v-toolbar__title').contains('Create Todo');
    cy.get('.v-subheader').contains('Todo');
    cy.get('.v-subheader').contains('Done');
  });
});
