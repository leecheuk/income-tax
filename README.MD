# Income tax
The node.js project is for building tools for determining income tax for individuals based on Canadian Revenue Agency (CRA).

## Features
- Automobile benefits

## Usage
```js
var AutomobileBenefits = require('../income-tax');
let autoBenefits = new AutomobileBenefits(
    isOwned = true,
    reimbursements = 1900,
    personalUse = 13000,
    totalUse = 23000,
    monthsAvailable = 12,
    C = 30000,
    D = 12
);

//Calculate taxable benefits
autoBenefits.getTaxableBenefit()
/* 
 * Taxable automobile benefit
 * Standby Charge: $7200
 * Operating benefits: $3380
 * Less: Reimbursements: $1900
 * Total taxable benefits: $8680
 */
```