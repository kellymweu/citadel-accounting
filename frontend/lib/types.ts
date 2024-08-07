//INVOICING TYPES

export interface CustomerType {
  id: number;
  name: string; // Assuming the Customer model has a name field
}

export interface InvoiceType {
  id: number;
  customer: CustomerType;
  invoice_number: string;
  date: string; // This will be a string in ISO format
  due_date: string; // This will be a string in ISO format
  total_amount: string; // Using string for decimal values
  paid: boolean;
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface InvoicesResponseType {
  invoices?: InvoiceType[];
  error?: Error;
}

// BANKING TYPES
export interface AccountType {
  id: number;
  account_name: string;
  account_number: number;
  account_type: "SAVINGS" | "CHECKING";
  balance: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface TransactionType {
  id: number;
  account_number: AccountType;
  transaction_type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  amount: string; // Using string for decimal values
  timestamp: string; // This will be a string in ISO format
  description?: string; // Optional field
}

export interface AccountsResponseType {
  accounts?: AccountType[];
  error?: Error;
}

export interface TransactionsResponseType {
  transactions?: TransactionType[];
  error?: Error;
}

//EXPENSES TYPES

export interface ExpenseCategoryType {
  id: number;
  name: string;
  description?: string; // Optional field
}

export interface ExpenseType {
  id: number;
  category: string; // Using string since the ForeignKey is commented out
  // category: ExpenseCategoryType;  // Uncomment if using ForeignKey
  amount: string; // Using string for decimal values
  date: string; // This will be a string in ISO format
  description?: string; // Optional field
  payee?: string; // Optional field
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface ExpenseCategoriesResponseType {
  expenseCategories?: ExpenseCategoryType[];
  error?: Error;
}

export interface ExpensesResponseType {
  expenses?: ExpenseType[];
  error?: Error;
}

//INVENTORY TYPES

export interface ItemType {
  id: number;
  item_name: string;
  tax_type: "16% VAT" | "EXEMPT" | "2% CATERING" | "14% VAT";
  SKU: string;
  purchase_price: string; // Using string for decimal values
  marked_price: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface ItemsResponseType {
  items?: ItemType[];
  error?: Error;
}

//PAYROLL TYPES
export interface EmployeeType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  job_title: string;
  hire_date: string; // This will be a string in ISO format
  salary: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface PayrollType {
  id: number;
  employee: EmployeeType;
  payroll_date: string; // This will be a string in ISO format
  basic_salary: string; // Using string for decimal values
  bonuses: string; // Using string for decimal values
  deductions: string; // Using string for decimal values
  total_payment: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface EmployeesResponseType {
  employees?: EmployeeType[];
  error?: Error;
}

export interface PayrollsResponseType {
  payrolls?: PayrollType[];
  error?: Error;
}

//PURCHASES TYPES
export interface ItemType {
  id: number;
  item_name: string;
  tax_type: "16% VAT" | "EXEMPT" | "2% CATERING" | "14% VAT";
  SKU: string;
  purchase_price: string; // Using string for decimal values
  marked_price: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface PurchaseType {
  id: number;
  supplier_name: string;
  purchase_date: string; // This will be a string in ISO format
  purchase_quantity: number;
  invoice_number: string;
  item: ItemType;
  purchase_price: string; // Using string for decimal values
  tax_type: "16% VAT" | "EXEMPT" | "2% CATERING" | "14% VAT";
  sub_total: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface SupplierType {
  id: number;
  name: string;
  phone_number?: string; // Optional field
  email?: string; // Optional field
  address?: string; // Optional field
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface PurchasesResponseType {
  purchases?: PurchaseType[];
  error?: Error;
}

export interface SuppliersResponseType {
  suppliers?: SupplierType[];
  error?: Error;
}

//SALES TYPES
export interface ItemType {
  id: number;
  item_name: string;
  tax_type: "16% VAT" | "EXEMPT" | "2% CATERING" | "14% VAT";
  SKU: string;
  purchase_price: string; // Using string for decimal values
  marked_price: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface CustomerType {
  id: number;
  name: string; // Assuming the Customer model has a name field
}

export interface SaleType {
  id: number;
  item: ItemType;
  // customer: CustomerType;  // Uncomment if using ForeignKey
  sale_date: string; // This will be a string in ISO format
  sale_quantity: number;
  selling_price: string; // Using string for decimal values
  tax_type: "16% VAT" | "EXEMPT" | "2% CATERING" | "14% VAT";
  sub_total: string; // Using string for decimal values
  created_at: string; // This will be a string in ISO format
  updated_at: string; // This will be a string in ISO format
}

export interface SalesResponseType {
  sales?: SaleType[];
  error?: Error;
}
