describe('/counter', () => {
  beforeEach(() => {
    cy.visit('/counter');
  });

  it('カウンターが表示される', () => {
    cy.get('.text-h1').contains('0');
  });

  it('+ を押すとインクリメントされる', () => {
    cy.get('i.mdi-plus').click();
    cy.contains('.text-h1', '1');
  });

  it('- を押すとデクリメントされる', () => {
    cy.get('i.mdi-minus').click();
    cy.contains('.text-h1', '-1');
  });
});
