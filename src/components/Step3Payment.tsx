import type React from "react";

interface Step3PaymentProps {
  subtotal: number;
  discount: number;
  totalAmount: number;
  couponCode: string;
  paymentPhone: string;
  transactionId: string;
  onCouponCodeChange: (value: string) => void;
  onPaymentPhoneChange: (value: string) => void;
  onTransactionIdChange: (value: string) => void;
}

const Step3Payment: React.FC<Step3PaymentProps> = ({
  subtotal,
  discount,
  totalAmount,
  couponCode,
  paymentPhone,
  transactionId,
  onCouponCodeChange,
  onPaymentPhoneChange,
  onTransactionIdChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border-4 border-blue-400">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Payment Summary</h3>

      {/* Payment Method Icons */}
      <div className="flex gap-4 mb-6">
        <div className="w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center">
          <span className="text-pink-600 font-bold text-sm">bKash</span>
        </div>
        <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
          <span className="text-orange-600 font-bold text-sm">Nagad</span>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
          <p className="text-gray-700">
            Open Bkash app or dial <span className="font-semibold">*247#</span>{" "}
            / Nagad app or dial <span className="font-semibold">*167#</span>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
          <p className="text-gray-700">
            Send amount{" "}
            <span className="font-semibold text-lime-600">[085]</span> to this
            number{" "}
            <span className="font-semibold text-lime-600">01234567899</span>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
          <p className="text-gray-700">
            Copy transaction id after successful send money
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
          <p className="text-gray-700">
            Paste transaction id and payment phone number below
          </p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center py-3 border-t border-gray-200">
        <span className="text-gray-700 font-medium">Subtotal</span>
        <span className="text-gray-800 font-semibold">৳{subtotal}</span>
      </div>

      {/* Coupon Code */}
      <div className="py-3 border-t border-gray-200">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => onCouponCodeChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
        />
      </div>

      {/* Discount */}
      <div className="flex justify-between items-center py-3 border-t border-gray-200">
        <span className="text-gray-700 font-medium">Discount</span>
        <span className="text-gray-800 font-semibold">৳{discount}</span>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
        <span className="text-gray-800 font-bold text-lg">Total Amount</span>
        <span className="text-lime-600 font-bold text-xl">৳{totalAmount}</span>
      </div>

      {/* Phone Number */}
      <div className="mt-6">
        <input
          type="tel"
          placeholder="Phone Number"
          value={paymentPhone}
          onChange={(e) => onPaymentPhoneChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 mb-4"
        />
        <input
          type="text"
          placeholder="Trx ID"
          value={transactionId}
          onChange={(e) => onTransactionIdChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
        />
      </div>

      {/* Warning Message */}
      <div className="mt-6 p-4 bg-red-50 rounded-md">
        <p className="text-sm text-red-600 text-center">
          All payments are non-refundable. Please review your selections
          carefully before proceeding.
        </p>
      </div>
    </div>
  );
};

export default Step3Payment;
