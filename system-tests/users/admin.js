import User from "./user";

import { agreementsListingPage } from "../component-objects/agreements-listing-page";

// TODO: add implementation once the user hierarchy/ structure is defined.

// The available app actions for the basic user are added here.
// In this way whenever an engineer writes a test file s/he just instantiates any number of users and the available actions in the app are available via code completion along with explanatory JSDoc comments at the cost of this file getting quite large of course.

// Assumption: the `admin` is the user type with the highest priviledge.
export default class Admin extends User {
  constructor(password, username) {
    super(password, username);
  }

  /**
   * Retrieves the list of locators for agreements available.
   * @returns The list of locators for all agreements on the available page of results.
   */
  getAgreementsFromListingTable = () => {
    return agreementsListingPage.getAllAgreements();
  };

  /**
   * Navigates through the list of paginated agreements.
   * @param {"nextSet" | "previousSet"}  direction The direction of navigation.
   */
  navigateThroughPagedAgreements = (direction) => {
    agreementsListingPage.navigateThroughPagedAgreements(direction);
  };
}
