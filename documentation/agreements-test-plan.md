# Agreements functionality - Test plan

## Overview

The purpose of this document is to describe the approach to testing the Agreements minimum viable product version.
This is a point-in-time document and will no longer be updated after its review and acceptance. This will be archived along with other artifacts. Please refer to the Test Approach/ Test Strategy document for higher level activities which are valid across multiple release

## Key personnel involved

- Development engineering: DevA, DevB
- Test engineering: TesterA, Sergiu Bacanu
- DevOps engineering: OpsA
- Business SME: AnalystA, ProductManagerA

## Key dates & milestones - chronological order

1. Feature complete and test cases available by date dd/mm;
2. Feature testing iteration 1 complete by date dd/mm;
3. Release candidate branch(es) available by date dd/mm;
4. Confirmation testing defect fixes (if needed) & Regression testing complete by date dd/mm (OPTIONAL: demo/ User Acceptance testing);
5. Release & post-release activities on dd/mm.

## Prerequisites

1. Test data is seeded in the test environment database;
2. The Agreements module feature flag is enabled in the test environment (assumption is that the feature is being worked on for quite awhile and deployed to Production, but disabled in all environments according to modern working standards: https://12factor.net/).

## Testing scope

1. Agreement set-up (link to feature/ epic docs);
2. Patient data set up (link to feature/ epic docs);
3. Financial set up (link to feature/ epic docs);

## Closure activities

1. The test cycle is archived in the test case management tool;
2. Outstanding defects are reported and triaged;
3. Due to the importance of the feature an email is sent out to the whole engineering team and other key stakeholders informing about the outcome;
4. DevOps engineering will monitor performance and error logs for the next 4 hours and will report anomalies to the Release Support group chat (assumption: such a group chat exists);
5. Any test cases which are still not finished need to be wrapped up;
6. Automated checks and tests need to be stable.
