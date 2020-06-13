describe('/', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('事前準備が表示される', () => {
    cy.contains('.v-timeline .v-timeline-item .v-card .title', '事前準備');
  });
});
