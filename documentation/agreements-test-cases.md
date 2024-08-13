# Agreements - Test cases

High-level test cases are in scope for this task.

Assumptions:

- because it is not mentioned in the business requirements it is considered that discounts are not cummulative.
- when multiple discounts collide the one highest in monetary value is applied.

| Description of treatment duration in days | No. Adverse events | Expected discount percentage points                                    |
| ----------------------------------------- | ------------------ | ---------------------------------------------------------------------- |
| 0                                         | 0                  | 0 on all packs                                                         |
| 50                                        | 0                  | 20 on all packs                                                        |
| 90                                        | 0                  | 20 on all packs                                                        |
| 91                                        | 0                  | 30 on packs administered on day 91                                     |
| 180                                       | 0                  | 30 on packs administered on days 91 - 180                              |
| 365                                       | 0                  | 5 on all packs                                                         |
| 500                                       | 0                  | 5 on all packs                                                         |
| 50                                        | 1                  | 10 on all packs                                                        |
| 91                                        | 1                  | 10 on all packs                                                        |
| 200                                       | 1                  | 10 on all packs                                                        |
| 366                                       | 1                  | 10 on all packs                                                        |
| 500                                       | 10                 | 10 on all packs                                                        |
| 90 -> discontinuation -> 50               | 0                  | 20 on packs administered until day 91                                  |
| 90 -> discontinuation -> 90               | 0                  | 20 on all packs                                                        |
| 180 -> discontinuation -> 90              | 0                  | 30 on packs administered 0 - 180 AND 20 on packs 0 - 90 after resuming |
| 10 -> discontinuation -> 180              | 0                  | 30 on packs administered 0 - 180 after resuming                        |
| 365 -> discontinuation -> 180             | 0                  | 5 on packs 0 - 365 AND 30 on packs 0 - 180 after resuming              |
| 500 -> discontinuation -> 90              | 1 on day 400       | ???                                                                    |
