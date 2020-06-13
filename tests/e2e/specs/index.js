// https://docs.cypress.io/api/introduction/api.html

describe('/', () => {
  it('事前準備が表示される', () => {
    cy.visit('/');
    cy.contains('.v-timeline .v-timeline-item .v-card .title', '事前準備');
  });
});
