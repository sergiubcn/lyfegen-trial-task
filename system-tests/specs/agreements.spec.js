import Admin from "../users/admin";

import { adminData } from "../data/user-data";

describe("Agreements listing", () => {
  before(() => {
    // TODO: add the test data seeding mechanism via DB scripts or less elegantly via the API.
    // TODO: add the automatic login mechanism. Loging in is not in scope for this spec file.
  });

  after(() => {
    // TODO: add the test data cleanup mechanism via DB scripts or less elegantly via the API.
  });

  it("should list the available agreements in the table - Test case ID 1", () => {
    // Sensitive data should be stored in env variables.
    const admin = new Admin(Cypress.env.ADMIN_PASSWORD, adminData.email);
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
});
