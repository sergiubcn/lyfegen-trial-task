const loadPage = (path = "") => {
  cy.visit(path);
};

export const page = {
  loadPage,
};
