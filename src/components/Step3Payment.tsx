"use client";
import React, { ReactNode, useEffect, useState } from "react";

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
  onApplyDiscount: (discount: number) => void;
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
  onApplyDiscount,
}) => {
  const [loading, setLoading] = useState(false);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<
    "bkash" | "nagad" | null
  >(null);
  const bkashNumber = "01928316192";
  const nagadNumber = "01956568575";
  const [selectedNumber, setSelectedNumber] = useState<string>(bkashNumber);

  useEffect(() => {
    if (selectedMethod === "bkash") {
      setSelectedNumber(bkashNumber);
    } else if (selectedMethod === "nagad") {
      setSelectedNumber(nagadNumber);
    }
  }, [selectedMethod]);

  const handleApplyCoupon = async () => {
    if (!couponCode) {
      setCouponMessage("Please enter a coupon code");
      return;
    }

    setLoading(true);
    setCouponMessage(null);

    try {
      const res = await fetch(`/api/coupon/${couponCode}/`);
      const data = await res.json();

      if (data.success) {
        const discountAmount = (subtotal * data.coupon.discount) / 100;
        onApplyDiscount(discountAmount);
        setCouponMessage(`✅ Coupon applied! ${data.coupon.discount}% off`);
      } else {
        onApplyDiscount(0);
        setCouponMessage("❌ Invalid or inactive coupon code");
      }
    } catch (error) {
      console.error(error);
      setCouponMessage("❌ Error validating coupon. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border-4 border-blue-400 flex flex-col md:flex-row gap-6 md:gap-10 relative">
      {/* Left Section */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Summary
        </h3>

        {/* Payment Method Selection */}
        <div className="flex">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex gap-2">
              {/* bKash */}
              <button
                onClick={() => setSelectedMethod("bkash")}
                className={`w-24 h-20 rounded-lg flex items-center justify-center border-2 transition 
              ${
                selectedMethod === "bkash"
                  ? "border-pink-500 bg-pink-100"
                  : "border-gray-200 bg-gray-50 hover:border-pink-400"
              }`}
              >
                {/* <span className="text-pink-600 font-bold text-sm">bKash</span> */}
                <img src="/home/payment/bkash.png" className="px-2" alt="" />
              </button>

              {/* Nagad */}
              <button
                onClick={() => setSelectedMethod("nagad")}
                className={`w-24 h-20 rounded-lg flex items-center justify-center border-2 transition 
              ${
                selectedMethod === "nagad"
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-200 bg-gray-50 hover:border-orange-400"
              }`}
              >
                <img src="/home/payment/nagad.png" className="px-2" alt="" />
              </button>
            </div>

            {/* Conditional Instructions */}
            {selectedMethod && (
              <div className="space-y-2 mb-6 text-sm">
                {selectedMethod === "bkash" ? (
                  <>
                    <Instruction
                      text={
                        <>
                          Open <span className="font-semibold">bKash app</span>{" "}
                          or dial <span className="font-semibold">*247#</span>{" "}
                        </>
                      }
                    />
                    <Instruction
                      text={
                        <>
                          Send amount ৳{totalAmount} to this number
                          <span className="font-bold"> {selectedNumber}</span>
                        </>
                      }
                    />
                    <Instruction text="Copy transaction ID after successful send money" />
                    <Instruction text="Paste transaction ID and payment phone number below" />
                  </>
                ) : (
                  <>
                    <Instruction
                      text={
                        <>
                          Open <span className="font-semibold">Nagad app</span>{" "}
                          or dial <span className="font-semibold">*167#</span>{" "}
                        </>
                      }
                    />
                    <Instruction
                      text={
                        <>
                          Send amount ৳{totalAmount} to this number
                          <span className="font-bold"> {selectedNumber}</span>
                        </>
                      }
                    />
                    <Instruction text="Copy transaction ID after successful send money" />
                    <Instruction text="Paste transaction ID and payment phone number below" />
                  </>
                )}
              </div>
            )}
          </div>
          {selectedMethod === "bkash" && (
            <div className="flex justify-center items-center md:w-1/3">
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <img
                  src="/images/bkash-qr.png"
                  alt="bKash QR Code"
                  className="w-40 h-40 object-contain"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Scan to pay via bKash
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span className="text-gray-800 font-semibold">৳{subtotal}</span>
        </div>

        {/* Coupon Code */}
        <div className="py-3 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => onCouponCodeChange(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            />
            <button
              onClick={handleApplyCoupon}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Checking..." : "Apply"}
            </button>
          </div>
          {couponMessage && (
            <p className="text-sm mt-2 text-center text-gray-600">
              {couponMessage}
            </p>
          )}
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-gray-700 font-medium">Discount</span>
          <span className="text-gray-800 font-semibold">৳{discount}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
          <span className="text-gray-800 font-bold text-lg">Total Amount</span>
          <span className="text-lime-600 font-bold text-xl">
            ৳{totalAmount}
          </span>
        </div>

        {/* Phone + Trx ID */}
        <div className="mt-6">
          <input
            type="tel"
            placeholder="Phone Number"
            value={paymentPhone}
            onChange={(e) => onPaymentPhoneChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 bg-gray-50 mb-4"
          />
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => onTransactionIdChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 bg-gray-50"
          />
        </div>

        {/* Warning */}
        <div className="mt-6 p-4 bg-red-50 rounded-md">
          <p className="text-sm text-red-600 text-center">
            All payments are non-refundable. Please review your selections
            carefully before proceeding.
          </p>
        </div>
      </div>

      {/* Right Section (QR Code for bKash only) */}
    </div>
  );
};

// Small helper component for bullet points
const Instruction: React.FC<{ text: string | ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-2">
    <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
    <p className="text-gray-700">{text}</p>
  </div>
);

export default Step3Payment;
