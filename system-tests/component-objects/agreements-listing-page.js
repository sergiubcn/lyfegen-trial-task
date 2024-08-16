/*
 * Assumptions:
 * 1. unique identifiers are added for all or most of the UI elements;`data-testid` is the default one used by the React Testing Framework, so it can be used at multiple levels.
 * 2. pagination is done via "Next", "Previous" buttons. If it's another type such as infinite scrolling or numbered pages change the implementation to loops or recursion.
 */
const locators = {
  agreementEntity: (agreementId = "") =>
    `[data-testid*=agreement-${agreementId}]`,
  agreementsTable: "[data-testid=agreements-table]",
  paginationButton: (direction) => `[data-testid=${direction}-button]`,
  searchTextField: "[data-testid=search-field]",
};

const paginationNavigation = Object.freeze({
  nextSet: "next",
  previousSet: "previous",
});

const accessAgreementsDetails = (agreementId) => {
  cy.get(locators.agreementsTable).within(() => {
    cy.get(locators.agreementEntity(agreementId)).click();
  });
};

const getAllAgreements = () => {
  // Isolate the logical parent component and operate on the child elements.
  return cy.get(locators.agreementsTable).within(() => {
    return cy.get(locators.agreementEntity());
  });
};

const navigateThroughPagedAgreements = (direction) => {
  cy.get(locators.agreementsTable).within(() => {
    cy.get(locators.paginationButton(paginationNavigation[direction]));
  });
};

// Assumption: search narrows the list of results upon typing.
const searchByName = (name) => {
  cy.get(locators.searchTextField).type(name);
  //filter(':contains("Services")')
  return cy.get(locators.agreementsTable).within(() => {
    return cy.get(locators.agreementEntity()).filter(`:contains("${name}")`);
  });
};

export const agreementsListingPage = {
  accessAgreementsDetails,
  getAllAgreements,
  navigateThroughPagedAgreements,
  searchByName,
};
