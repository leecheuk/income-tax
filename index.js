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

    /*
     * GetOperatingBenefits returns the operating benefits portion of the automobile benefit
     * @return {number} - Amount of automobile benefit in CAD
     */
    getOperatingBenefits() {
        const {totalUse, personalUse} = this;
        const PersonalUseRatio = personalUse/totalUse;
        const rate = 0.26 //rate given by deparate of Finance
        const standbyCharge = this.getStandbyCharge()

        if (PersonalUseRatio >= 0.5) {
            return personalUse*rate;
        } else {
            return Math.min(personalUse*rate, 0.5*standbyCharge)
        }
    }

    /*
     * Calculate standby charge for automobiles you own or lease
     * @return {number} - The amount of standby charge in CAD
     */
    getStandbyCharge() {
        const {personalUse, monthsAvailable, totalUse} = this;
        const B = 1667*monthsAvailable;
        const A = Math.min(personalUse, B);
        let AB = A/B;

        if (personalUse/totalUse >= 0.5) {
            AB = 1;
        } 

        if (this.isOwned) {
            const {C, D} = this;
            return AB*0.02*C*D;
        } else {
            const {E, F} = this;
            return AB*2/3*(E-F);
        }
    }
    
    /*
     * GetTaxableBenefit returns a string representing the taxable benefit from automobile benefit.
     * Recall, the taxable automobile benefits is standby charge plus operating cost benefit minus 
     * reimbursements by employees.
     * 
     * @return {string} - String of taxable automobile benefits
     */
    getTaxableBenefit () {
        const standbyCharge = this.getStandbyCharge();
        const operatingBenefit = this.getOperatingBenefits();
        const {reimbursements} = this;
        const ttb = standbyCharge + operatingBenefit - reimbursements;

        return `\nTaxable automobile benefit\nStandby Charge: $${standbyCharge}` +
                `\nOperating benefits: $${operatingBenefit}` +
                `\nLess: Reimbursements: $${reimbursements}` + 
                `\nTotal taxable benefits: $${ttb}`;
    }
}

module.exports = AutomobileBenefits;