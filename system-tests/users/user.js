// TODO: add implementation once the user hierarchy/ structure is defined.

// The available app actions for the basic user are added here.
// In this way whenever an engineer writes a test file s/he just instantiates any number of users and the available actions in the app are available via code completion along with explanatory JSDoc comments.

import { page } from "../component-objects/page";
import { agreementDetailsPage } from "../component-objects/agreements-details-page";
import { agreementsListingPage } from "../component-objects/agreements-listing-page";

export default class User {
  #password;
  #username;
  constructor(password, username) {
    this.#password = password;
    this.#username = username;
  }

  /**
   * Locates the agreement with provided identifier and selects the row in order to view details page.
   * @param {string} agreementId The agreement's unique identifier.
   */
  accessAgreementDetails = (agreementId) => {
    agreementsListingPage.accessAgreementsDetails(agreementId);
  };

  /**
   * On the Agreement Details page it switches between tabs.
   * @param {"details"|"reporting"} tabName The target tab's name.
   */
  loadAgreementTab = (tabName) => {
    agreementDetailsPage.switchTabTo(tabName);
  };

  /**
   * Loads a specific page. If the path is not provided it just loads the root page.
   * @param {string} path The path of the page to navigate to. Defaults to empty string.
   */
  loadPage = (path = "") => {
    page.loadPage(path);
  };

  /**
   * Logs the user into the account based on the provided credentials.
   */
  login = () => {};

  /**
   * Logs the user out of the account.
   */
  logout = () => {};

  /**
   * Retrieves a list of locators or strings with data points of interest. TBD
   * @param {string[]} informationPoints The list of data points of interest.
   * @returns The list of locators or strings with the data points of interest.
   */
  retrieveAgreementInformation = (informationPoints) => {
    return agreementDetailsPage.retrieveAgreementInfo(informationPoints);
  };

  /**
   * Performs a search in the agreements table by name and returns the list of results.
   * @param {string} name The agreement's name.
   * @returns The list of agreements after the search action.
   */
  searchByAgreementName = (name) => {
    return agreementsListingPage.searchByName(name);
  };

  // Add more...
}
