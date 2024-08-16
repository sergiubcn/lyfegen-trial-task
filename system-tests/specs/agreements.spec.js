import Admin from "../users/admin";

import { adminData } from "../data/user-data";

describe("Agreements listing", () => {
  // Sensitive data should be stored in env variables.
  const admin = new Admin(Cypress.env.ADMIN_PASSWORD, adminData.email);

  // Assumption: we already know what data we can control via test data management. For this assignment let's assume we control names.
  const agreementToSearch = `cy-agreement-${Date.now()}`;

  // Assumption: if we control agreement names as assumed before, then we can retrieve the UUID via DB script.
  const agreementToViewDetails = "UUID";

  before(() => {
    // TODO: add the test data seeding mechanism via DB scripts or less elegantly via the API.
    // TODO: add the automatic login mechanism. Loging in is not in scope for this spec file.
  });

  after(() => {
    // TODO: add the test data cleanup mechanism via DB scripts or less elegantly via the API.
  });

  it("should list the available agreements in the table - Test case ID 1", () => {
    // Fill in when path is available.
    admin.loadPage("path-to-agreements-listing-page");
    const agreements1 = admin.getAgreementsFromListingTable();

    // TODO: double-check if Cypress Chainable provides a length prop, otherwise change the assertion.
    // Because we insert the test data we can control certain characteristics. Based on what we control, we should improve the assertion by comparing 2 lists of unique names or IDs.
    expect(agreements1).not.to.be.empty();

    admin.navigateThroughPagedAgreements("nextSet");
    const agreements2 = admin.getAgreementsFromListingTable();
    // Same as before. Improve the assertion when there is more time and we know which agreement characteristics we can control.
    expect(agreements2).not.to.be.empty();
  });

  it("should allow the user to search agreements by name - Test case ID 2A", () => {
    // Fill in when path is available.
    admin.loadPage("path-to-agreements-listing-page");
    const agreements1 = admin.getAgreementsFromListingTable();

    // TODO: double-check if Cypress Chainable provides a length prop, otherwise change the assertion.
    // Because we insert the test data we can control certain characteristics. Based on what we control, we should improve the assertion by comparing 2 lists of unique names or IDs.
    expect(agreements1).not.to.be.empty();

    const searchResults = admin.searchByAgreementName(agreementToSearch);
    // TODO: double-check if Cypress Chainable provides a length prop, otherwise change the assertion.
    // Same as before. Improve the assertion when there is more time and we know which agreement characteristics we can control.
    expect(searchResults).to.have.length(1);
  });

  it("should allow the user to search agreements by name - Test case ID 2B", () => {
    const dummyAgreement = "dummyAgreement";

    // Fill in when path is available.
    admin.loadPage("path-to-agreements-listing-page");
    const agreements1 = admin.getAgreementsFromListingTable();

    // TODO: double-check if Cypress Chainable provides a length prop, otherwise change the assertion.
    // Because we insert the test data we can control certain characteristics. Based on what we control, we should improve the assertion by comparing 2 lists of unique names or IDs.
    expect(agreements1).not.to.be.empty();

    const searchResults = admin.searchByAgreementName(dummyAgreement);
    // TODO: double-check if Cypress Chainable provides a length prop, otherwise change the assertion.
    // Same as before. Improve the assertion when there is more time and we know which agreement characteristics we can control.
    expect(searchResults).to.have.length(0);
  });

  it("should allow the user to access an agreement's details page - Test case ID 3", () => {
    // Fill in when path is available.
    admin.loadPage("path-to-agreements-listing-page");
    admin.accessAgreementDetails(agreementToViewDetails);
    const dataPoints = admin.retrieveAgreementInformation([
      "add-data-points-here",
    ]);

    // TO DO: loop through the list of data points and check against the seeded test data.
  });

  it("should allow the user to view the agreement's report - Test case ID 4", () => {
    // Fill in when path is available.
    admin.loadPage("path-to-agreements-listing-page");
    admin.accessAgreementDetails(agreementToViewDetails);
    admin.loadAgreementTab("reporting");
    const dataPoints = admin.retrieveAgreementInformation([
      "add-data-points-here",
    ]);

    // TO DO: loop through the list of data points and check against the seeded test data.
  });
});
