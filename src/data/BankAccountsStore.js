// src/data/BankAccountsStore.js

// This file stores all bank accounts that belong to you / your business.
// It is designed for display to bank officials, screenshots, and printed records.
// Each record represents a bank account that you have added and used for client payments.

// Status values can be:
// Active
// Closed
// Pending Verification

export const bankAccounts = [

  {
    id: "ACC1001",
    accountHolderName: "Nazrul Hoque",
    bankName: "HDFC Bank",
    branchName: "Silchar Main Branch",
    accountNumber: "XXXXXX4587",
    ifsc: "HDFC0001234",
    accountType: "Savings",
    dateAdded: "2026-01-10",
    status: "Active",
    purpose: "Client Payments and Business Transactions"
  },

  {
    id: "ACC1002",
    accountHolderName: "Nazrul Hoque",
    bankName: "State Bank of India",
    branchName: "Silchar Bazar Branch",
    accountNumber: "XXXXXX9021",
    ifsc: "SBIN0005678",
    accountType: "Current",
    dateAdded: "2026-02-05",
    status: "Active",
    purpose: "Project Payments and Service Charges"
  }

];

// Helper function to get all accounts

export const getAllBankAccounts = () => {
  return bankAccounts;
};

// Helper function to get account by id

export const getBankAccountById = (accountId) => {
  return bankAccounts.find(
    (acc) => acc.id === accountId
  );
};

// Helper function to get active accounts only

export const getActiveBankAccounts = () => {
  return bankAccounts.filter(
    (acc) => acc.status === "Active"
  );
};
