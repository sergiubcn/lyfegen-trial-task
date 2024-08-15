# Agreements - Test cases

High-level test cases are in scope for this task. Test cases are based on the sample agreement setup.
To do: find out if a treatment started/ continued after an interruption is considered a new treatment.

Background: for each scenario check the reported values for: Gross, Variable and Discounts.

1. Patient receives 20% discount to all packs administered within 90 days of uninterrupted treatment.
2. Patient receives 30% discount to all packs administered within 90 days of uninterrupted treatment.
3. Patient receives 5% discount to all packs administered within 365 days of uniterrupted treatment.
4. Patient receives 10% discount to all packs administered within the first 365 days if an adverse event occurred.
5. Patient receives multiple discounts (cummulative).

## Sample data

| Description of treatment duration in days | No. Adverse events   | Expected discount percentage points                                                                                 |
| ----------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 0                                         | 0                    | 0                                                                                                                   |
| 50                                        | 0                    | 0                                                                                                                   |
| 90                                        | 0                    | 20 on all packs                                                                                                     |
| 91                                        | 0                    | 20 on packs administered on days 1 - 90; 30 on packs administered on day 91                                         |
| 180                                       | 0                    | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180                                  |
| 365                                       | 0                    | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 5 on all packs                  |
| 500                                       | 0                    | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 5 on all packs                  |
| 50                                        | 1 on day 20          | 10 on all packs                                                                                                     |
| 91                                        | 1 on day 20          | 20 on packs administered on days 1 - 90; 10 on all packs                                                            |
| 200                                       | 1 on day 20          | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 10 on all packs                 |
| 366                                       | 1 on day 20          | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 5 on all packs; 10 on all packs |
| 500                                       | 3 on days 20, 30, 40 | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 5 on all packs; 10 on all packs |
| 500                                       | 1 on day 400         | 20 on packs administered on days 1 - 90; 30 on packs administered on days 91 - 180; 5 on all packs                  |
