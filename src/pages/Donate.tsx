import React, { useState } from 'react';
import { CreditCard, Heart, DollarSign, ArrowRight } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', {
      amount: amount === 'custom' ? customAmount : amount,
      paymentMethod
    });
  };

  return (
    <div className="pt-20">
      {/* Donation Hero */}
      <section className="relative py-20 bg-yellow-400 text-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Make a Difference Today</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Your donation helps us continue our mission of empowering communities and creating lasting change.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm opacity-80">Donations Received</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm opacity-80">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['25', '50', '100', '250', '500', 'custom'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`p-4 border rounded-lg text-center transition-colors ${
                          amount === value
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:border-blue-600'
                        }`}
                        onClick={() => setAmount(value)}
                      >
                        {value === 'custom' ? 'Custom' : `$${value}`}
                      </button>
                    ))}
                  </div>
                  {amount === 'custom' && (
                    <div className="mt-4">
                      <label htmlFor="customAmount" className="sr-only">Custom Amount</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="pl-8 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`p-4 border rounded-lg flex items-center justify-center transition-colors ${
                        paymentMethod === 'card'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:border-blue-600'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Credit Card
                    </button>
                    <button
                      type="button"
                      className={`p-4 border rounded-lg flex items-center justify-center transition-colors ${
                        paymentMethod === 'paypal'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:border-blue-600'
                      }`}
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                           alt="PayPal" 
                           className="h-5 mr-2" />
                      PayPal
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-8 text-center text-gray-600">
              <p className="mb-4">
                Your donation is tax-deductible. You will receive a receipt for your records.
              </p>
              <p className="text-sm">
                For questions about donations or to donate by check, please contact us at{' '}
                <a href="mailto:donations@ambardhara.org" className="text-blue-600 hover:underline">
                  donations@ambardhara.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;