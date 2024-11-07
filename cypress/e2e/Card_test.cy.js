describe('Card Component', () => {
  const imgCV = 'https://cdn-icons-png.flaticon.com/512/3846/3846805.png';
  const temaCV = 'CV';

  beforeEach(() => {
    // Visitar la página donde se renderiza la tarjeta
    cy.visit('/');
  });

  it('should display the card with correct image, title, and link', () => {
    // Verifica que la tarjeta existe
    cy.get('.card').eq(0).should('exist'); // Verifica que la tarjeta exista

    // Verificar la imagen del CV
    cy.get('.card').eq(0).find('img')
      .should('exist') // Verifica que la imagen exista
      .should('have.attr', 'src', imgCV); // Verifica que la imagen tenga el atributo src correcto

    // Verificar el título de la tarjeta
    cy.get('.card').eq(0).find('h2')
      .should('exist') // Verifica que el título exista
      .should('contain', temaCV); // Verifica que el título contenga el texto esperado
  });

  // Si tienes más pruebas relacionadas con otras tarjetas, puedes agregarlas aquí
  it('should display another card with correct attributes', () => {
    // Verificar la segunda tarjeta (por ejemplo, "Portafolio")
    cy.get('.card').eq(1).should('exist'); // Verifica que la segunda tarjeta exista

    cy.get('.card').eq(1).find('h2')
      .should('contain', 'Portafolio'); // Verifica que el título sea el esperado
  });
});