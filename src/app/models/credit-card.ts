export interface CreditCard {
  id: number;
  name: string;
  description: string;
  bankName: string;
  maxCredit: number;
  interestRate: number;
  active: boolean;
  // recommendedScore: string;
  // termsAndConditions: string;
  // annualFee: number;
  createdDate: string;
  updatedDate: string;
}
