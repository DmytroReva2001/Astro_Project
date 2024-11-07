// Footer.spec.js
describe('Footer Component', () => {
    it('should render footer correctly', () => {
        cy.visit('/'); // Visita la ruta principal de tu aplicación
        cy.get('footer').should('exist');
    });
});

// Header.spec.js
describe('Header Component', () => {
    it('should render header correctly', () => {
        cy.visit('/'); // Visita la ruta principal de tu aplicación
        cy.get('header').should('exist');
    });
});

// Main Component Test
describe('Main Component', () => {
    beforeEach(() => {
        cy.visit('/cv'); // Solo visita la página
    });

    it('should display the correct layout title', () => {
        cy.get('title').should('not.be.empty'); // Ajusta el contenido del título según tus datos
    });

    it('should switch to English CV when button is clicked', () => {
        cy.wait(1000); // Espera de 1 segundo
        cy.get('#pdf').should('have.attr', 'src', '/cv_es.pdf');
        
        // Simula el clic en el botón para cambiar el CV
        cy.get('#bandera').click();
        
        // Verifica que el atributo 'src' del PDF se haya actualizado al PDF en inglés
        cy.get('#pdf').should('have.attr', 'src', '/cv_eng.pdf');
    });

    it('should switch back to Spanish CV when button is clicked again', () => {
        cy.get('#bandera').click(); // Cambia a inglés
        cy.get('#bandera').click(); // Cambia de vuelta a español
        cy.get('#pdf').should('have.attr', 'src', '/cv_es.pdf');
    });
});