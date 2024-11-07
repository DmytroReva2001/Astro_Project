describe('Contacto Page', () => {
  beforeEach(() => {
    cy.visit('/contacto'); // Cambia esta ruta si es necesario
  });

  it('should render the contact page correctly', () => {
    // Verifica que la página se cargue correctamente
    cy.get('main').should('exist');
    cy.get('.contact-info').should('exist');
    cy.get('h2').should('contain.text', 'Contacto:');
  });

  it('should display user contact data correctly', () => {
    // Verifica que los elementos de contacto no estén vacíos
    cy.get('.contact-info').within(() => {
      cy.get('p').eq(0).should('contain.text', 'Nombre completo:'); // Verifica el nombre
      cy.get('p').eq(1).should('contain.text', 'Email:'); // Verifica el email
      cy.get('p').eq(2).should('contain.text', 'Teléfono:'); // Verifica el teléfono
    });
    
    // Verifica que el enlace del correo electrónico se haya generado correctamente
    cy.get('.contact-info a[href^="mailto:"]').should('exist');
    // Verifica que el enlace telefónico se haya generado correctamente
    cy.get('.contact-info a[href^="tel:"]').should('exist');
  });

  it('should display availability information', () => {
    // Verifica que la sección de disponibilidad esté presente
    cy.get('.availability').within(() => {
      cy.get('h3').should('contain.text', 'Horario de disponibilidad:');
      cy.get('p').should('have.length', 2); // Verifica que haya 2 párrafos de horario
      cy.get('p').eq(0).should('contain.text', 'Lunes a viernes:');
      cy.get('p').eq(1).should('contain.text', 'Sábado y domingo:');
    });
  });

  it('should display social media links correctly', () => {
    // Verifica que los enlaces de redes sociales estén presentes
    cy.get('.social').first().within(() => { // Selecciona solo el primer contenedor
      cy.get('a').should('have.length', 2); // Verifica que haya 2 enlaces de redes sociales
      cy.get('a').first().should('have.attr', 'href').and('include', 'linkedin'); // Verifica el enlace de Linkedin
      cy.get('a').last().should('have.attr', 'href').and('include', 'github'); // Verifica el enlace de Github
    });
  });
});