class AutomobileBenefits {
    /*
     * @constructs AutomobileBenefits
     * @param {boolean} isOwned - Whether employer owns or leases the automobile
     * @param {number} reimbursements - Amount of reimbursements by employee
     * @param {number} personalUse - Number of personal use for current tax year in kilometers
     * @param {number} totalUse - Number of kilometers driven in current tax year
     * @param {number} monthsAvailable - Number of months available for employee use 
     * @param {number} C - Original cost of employer-owned vehicle including HST
     * @param {number} D - Total available days when employer owned automobile divided by 30 days
     * @param {number} E - Lease payments made by employer including HSt
     * @param {number} F - Portion of lease payments relating to insurance for loss or damages 
     */
    constructor(isOwned, reimbursements, personalUse, totalUse, monthsAvailable, C, D, E, F) {
        this.isOwned = isOwned;
        this.reimbursements = reimbursements;
        this.totalUse = totalUse;
        this.personalUse = personalUse;
        this.monthsAvailable = monthsAvailable;
        this.C = C;
        this.D = D;
        this.E = E;
        this.F = F;
    }
}

module.exports = AutomobileBenefits;