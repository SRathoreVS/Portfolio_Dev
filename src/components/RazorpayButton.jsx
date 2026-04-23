import React from "react";

export default function RazorpayButton() {
  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", 
      amount: 50000, 
      currency: "INR",
      name: "Satyam Rathore",
      description: "Support / Freelance Payment",
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      },
      theme: {
        color: "#38bdf8",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition"
    >
      Pay via Razorpay
    </button>
  );
}