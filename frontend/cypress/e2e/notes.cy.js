describe('Notes CRUD E2E Test', () => {
  it('creates a new note and checks if it\'s in the list', () => {
    // 1. “Listening” to the network: intercepting the initial GET request based on notes
    cy.intercept('GET', 'http://localhost:8080/notes').as('getNotes');

    // 2. Go to the website
    cy.visit('http://localhost:5173');

    // 3. WAITING for the backend to respond to our GET request
    cy.wait('@getNotes');

    // 4. React has now fully rendered and is stable. You can type text without any issues.
    cy.get('input[placeholder="Заголовок..."]').type('E2E Header');
    cy.get('textarea[placeholder="Текст нотатки..."]').type('This is an automated end-to-end test');

    // 5. Save
    cy.get('button[type="submit"]').click();

    // 6. Checking the result
    cy.contains('E2E Header').should('be.visible');
    cy.contains('This is an automated end-to-end test').should('be.visible');
  });
});