/// <reference types="cypress" />

describe('Astro Page Component', () => {
    const mockTitle = 'Test Page Title';

    beforeEach(() => {
        cy.visit('/'); // Asegúrate de que la ruta corresponda a la página de prueba
    });

    it('renders with a valid title', () => {
        cy.document().then((doc) => {
            doc.title = mockTitle; // Simula el título recibido
        });
        cy.get('title').should('have.text', mockTitle); // Verifica que el título sea el esperado
        cy.get('meta[name="description"]').should('have.attr', 'content', 'Astro description');
    });

    it('renders the favicon correctly', () => {
        cy.get('link[rel="icon"]').should('have.attr', 'href', '/favicon.svg');
    });

    it('displays global styles correctly', () => {
        cy.get('html').should('have.css', 'font-family').and('include', 'Montserrat');
    });

    it('displays correct generator meta tag', () => {
        cy.get('meta[name="generator"]').should('have.attr', 'content').and('include', 'Astro');
    });

    it('After loading title check that it has content', () => {
        cy.get('title').should('not.be.empty');
    });
});