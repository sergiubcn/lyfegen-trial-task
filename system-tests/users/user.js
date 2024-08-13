// TODO: add implementation once the user hierarchy/ structure is defined.

// The available app actions for the basic user are added here.
// In this way whenever an engineer writes a test file s/he just instantiates any number of users and the available actions in the app are available via code completion along with explanatory JSDoc comments.

export default class User {
  #password;
  #username;
  constructor(password, username) {
    this.#password = password;
    this.#username = username;
  }

  /**
   * Loads a specific page. If the path is not provided it just loads the root page.
   * @param {string} path The path of the page to navigate to.
   */
  loadPage = (path = "") => {};

  /**
   * Logs the user into the account based on the provided credentials.
   */
  login = () => {};

  /**
   * Logs the user out of the account.
   */
  logout = () => {};

  // Add more...
}
