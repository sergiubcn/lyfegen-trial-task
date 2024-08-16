const locators = {
  // TODO: add locators based on the data points.

  // Could be done by ID as well.
  tab: (tabName) => `[data-testid=${tabName}-tab]`,
};

// Given that `information` is an array of strings representing the various information points return an array or some kind of iterable with locators or strings with the information points of interest.
// One way to simplify this is to hard-code the data points of interest and just not make it dynamic - if it's not used elsewhere.
const retrieveAgreementInfo = (information) => {
  if ((information.length = 0))
    throw new Error("Information topics were not provided.");

  // TODO: Add further details.
  return true;
};

// TODO: if this is used elsewhere as well, then extract it to a separate component.
const switchTabTo = (tab) => {
  if (tab !== "details" || tab !== "reporting")
    throw new Error(
      "The target tab does not exist. Use one of: details or reporting.",
    );
  cy.get(locators.tab(tab)).click();
};

export const agreementDetailsPage = {
  retrieveAgreementInfo,
  switchTabTo,
};
