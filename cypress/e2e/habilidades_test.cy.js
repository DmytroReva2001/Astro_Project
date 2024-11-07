// tests/Habilidades.spec.js

describe('Habilidades Page', () => {
  beforeEach(() => {
    // Abre la página de habilidades directamente
    cy.visit('/habilidades'); 
  });

  it('should display user name in title', () => {
    // Verifica que el título principal de la página esté correcto
    cy.get('h1').should('contain', 'Mis Habilidades');
  });

  it('should render skill cards', () => {
    // Verifica que se rendericen las tarjetas de habilidad cuando hay habilidades disponibles
    cy.get('.hability-cards a').should('have.length.greaterThan', 0); // Verifica que hay al menos una tarjeta de habilidad
  });

  it('should render footer and header', () => {
    // Verifica que tanto el header como el footer estén presentes en la página
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
  });
});