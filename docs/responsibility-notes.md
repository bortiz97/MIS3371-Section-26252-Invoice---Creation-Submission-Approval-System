# Three-Tier Architecture Responsibility Notes

## Presentation Tier
The presentation tier handles interaction between the user and the invoice system. It collects invoice information entered by the billing employee, displays invoice forms and current invoice status, provides immediate feedback, and sends user actions to the application logic tier.

## Application Logic Tier
The application logic tier handles the system's business rules and transaction processing. It validates required invoice information, enforces business rules, controls invoice state transitions, processes approval or rejection decisions, and generates transaction identifiers.

Critical business rules are enforced in this tier so they are applied consistently and cannot be bypassed by the user interface.

## Data Tier
The data tier stores and maintains the official invoice records. It preserves client information, invoice charges, invoice status, timestamps, reviewer or approver decisions, and audit/history information.

The data tier is responsible for maintaining the persistent official record of each invoice transaction.

## Audit Requirement

The system must maintain an audit history for each invoice, including the action performed, the user responsible, the date and time of the action, and the resulting invoice status.

## Tier Interaction
The presentation tier sends user requests to the application logic tier. The application logic tier validates and processes those requests and communicates with the data tier to store or retrieve official invoice information.
