# Lyfegen Trial Task

## Repo structure

1. The Test Cases & Plan documents can be found in the `documentation` folder;
2. Automated functional browser tests are located in the `system-tests` folder;
3. Automated integration tests are located in the `integration-tests` folder - NOT IN SCOPE for this task, but the assumption is that API tests will be added here as well;
4. Automated visual regression are located also in the `system-tests` folder, because they completely rely on the whole setup.

### Functional browser tests

1. The test files are located in the `specs` folder;
2. Component objects are defined in the `component-objects` folder - previously & confusingly known as Page Object Model, as per the author;
3. Utilities and scaffolding functions are located in the `support` folder;
4. The users classes contain the types of users and maps available actions to them - this helps with writing new tests and code completion; this test development pattern can be extended to the Screenplay pattern if there is enough variety in terms of user roles;
5. The `app-interactions` would store the orchestrator files in the case of complex application actions instead of doing this in the user classes, but this depends on whether we use the Screenplay pattern or not;

## NodeJS test solution

### Noteworthy

Assumption: this is a standalone repository for tests only. If the tests are part of the frontend repo or any other NodeJS repository reinstall all packages as devDependencies!!!

The whole test solution is based on CypressIO.
Required NodeJS version: the team will always keep the solution up-to-date for compatibility and security reasons. The latest NodeJS LTS version is required.

The solution uses `eslint` along with the `eslint-plugin-cypress` for basic coding issues checking. At the same time `prettier` is used for code styling.

Given the small team there is little value gained by adding Typescript (or any other strongly typed lang such as TS or FlowTyped), but some overhead. Type checking can be added later on and even gradually.

Not in scope for this assignment, but I installed `cypress-image-snapshot` in case the team would decide to proceed with Visual Regression tests.

### Installation

Run `npm i` after cloning the repo and you're all set.

### Usage

- For local development use: `cy:open` which will open the Cypress GUI;
- For CI execution use: `cy:ci` which will run the tests without the Cypress GUI;
- For visual regression tests use: `cy:visual` - NOT IN SCOPE;
- For code styling use: `style` - prettier can be configured in your IDE to run automagically on save (OR pre-commit hook with `husky` NOT IN SCOPE);

### Reporting

`mocha-awesome` plugin is used for reporting. Consideration: because there is no public test environment to actually develop the tests and run them against, there is no sample report. See the official Github page for more details on the plugin - https://github.com/LironEr/cypress-mochawesome-reporter

When multiple types of tests are executed (browser and API integration and/ or visual regression tests for example), then all reports can be merged into a single one with this plugin: `mochawesome-merge`.

### CI

Github Actions is used as a CI tool. See `.github/workflows/functional-testing.yml.example` configuration file. After the test environment is configured just remove the `.example` extension and make sure that the YAML file is correctly configured in terms of tabs and spaces.
