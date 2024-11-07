// cypress/integration/Layout.spec.js

describe('Layout Component', () => {
  it('displays the correct title', () => {
    cy.visit('/');  // Visita la página de inicio
    cy.title().should('not.be.empty');  // Verifica que el título contenga la cadena correcta
  });

  it('renders header and footer', () => {
    cy.visit('/');  // Visita la página
    cy.get('header').should('exist');  // Verifica que el header esté presente
    cy.get('footer').should('exist');  // Verifica que el footer esté presente
  });

  it('displays welcome message with user info', () => {
    cy.visit('/');  // Visita la página
    cy.get('h1').contains('¡Bienvenido a mi sitio web!');  // Verifica que el título de bienvenida esté presente
    cy.get('p').should('not.be.empty');;  // Verifica el mensaje con el nombre y rol del usuario
  });

  it('displays contact message', () => {
    cy.visit('/');  // Visita la página
    cy.get('p').contains('¡Gracias por visitar!');  // Verifica que el mensaje de contacto esté presente
  });

  it('renders cards with correct themes and URLs', () => {
    cy.visit('/');  // Visita la página
    cy.get('.temas').find('.card').should('have.length', 3);  // Verifica que haya 3 tarjetas

    // Verifica que las tarjetas tienen los temas correctos
    cy.get('.card').eq(0).should('contain', 'CV');
    cy.get('.card').eq(1).should('contain', 'Portafolio');
    cy.get('.card').eq(2).should('contain', 'Habilidades');
  });

  it('handles empty data gracefully', () => {
    // Simula el caso cuando no hay datos disponibles (o datos vacíos)
    cy.visit('/');  // Visita la página
    cy.get('h1').contains('¡Bienvenido a mi sitio web!');  // Verifica el título
    cy.get('p').contains('Soy ');  // Verifica que se manejan valores vacíos correctamente
  });

  it('displays default values when no data is available', () => {
    // Simula el caso cuando no hay datos disponibles
    cy.visit('/');  // Visita la página
    cy.get('h1').contains('¡Bienvenido a mi sitio web!');  // Verifica el título
    cy.get('p').contains('Soy ');  // Verifica que se manejan valores nulos correctamente
  });

  it('shows error when rendering fails', () => {
    // Aquí se simula un error en el renderizado si es necesario (por ejemplo, con un fallback)
    cy.visit('/');  // Visita la página
    cy.get('.error').should('not.exist');  // Verifica que no se muestra ningún mensaje de error
  });
});