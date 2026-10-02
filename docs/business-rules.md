# Business Rules and Invoice States

## Business Rules

1. An invoice must include a client, invoice date, and at least one charge before it can be submitted.

2. All invoice charges must have an amount greater than $0.

3. The invoice total must equal the sum of all charges included on the invoice.

4. Only invoices with a Draft or Rejected status may be edited by the billing employee.

5. Only an authorized reviewer or approver may approve or reject a submitted invoice.

6. A rejected invoice must include a reason for rejection or correction before it is returned to the billing employee.

7. An approved invoice cannot be changed unless it is returned to an authorized user for correction.

## Authoritative Application Rule

The application tier must enforce that an invoice cannot be submitted unless it includes a client, invoice date, and at least one charge greater than $0.

## Invoice States

- **Draft** – The invoice is being created and may still be edited.
- **Submitted** – The billing employee has completed and submitted the invoice.
- **Under Review** – The invoice is being reviewed for accuracy.
- **Approved** – The invoice has passed review and has been approved.
- **Rejected** – The invoice requires corrections before it can be approved.

## State Flow

Draft → Submitted → Under Review → Approved

If corrections are required:

Under Review → Rejected → Draft → Submitted → Under Review → Approved
