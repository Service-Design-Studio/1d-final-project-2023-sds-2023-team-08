import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from '../../src/views/LoginScreen';

describe('Test Login Page', () => {
  it('should render', () => {
    // Set the viewport dimensions
    cy.viewport(400, 850);

    // Mount the component with Router, Routes, and Route
    cy.mount(
      <Router>
        <Routes>
            <Route path="/" element={<LoginScreen key="login" />} />
        </Routes>
      </Router>
    );

    // cy.get('img.DBS').should('be.visible');
    // cy.get('img.DBS').should('have.attr', 'src', '/assets/dbslogo.png');
  });
});