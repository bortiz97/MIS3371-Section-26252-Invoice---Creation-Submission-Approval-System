function canApproveInvoice(status) {
    if (status === "Under Review") {
        return "Invoice can be approved";
    } else {
        return "Invoice cannot be approved";
    }
}

// Test the business rule with multiple invoice statuses
console.log("Draft:", canApproveInvoice("Draft"));
console.log("Submitted:", canApproveInvoice("Submitted"));
console.log("Under Review:", canApproveInvoice("Under Review"));
console.log("Approved:", canApproveInvoice("Approved"));