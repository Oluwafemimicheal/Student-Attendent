import React, { useState, useRef, useEffect } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isError, setIsError] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  // Start countdown timer for "Resend"
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Focus the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return; // Only allow numbers

    const newOtp = [...otp];
    // Take only the last character entered (prevents multiple digits in one box)
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move focus to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    setIsError(false);
  };

  const handleKeyDown = (e, index) => {
    // Move focus to previous input on backspace if current box is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];

    pasteData.forEach((char, index) => {
      if (!isNaN(char)) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);

    // Focus the last filled input or the first empty one
    const nextFocusIndex = pasteData.length < 6 ? pasteData.length : 5;
    inputRefs.current[nextFocusIndex].focus();
  };

  const handleSubmit = () => {
    const finalCode = otp.join("");
    if (finalCode.length < 6) {
      setIsError(true);
      return;
    }
    console.log("Submitted Code:", finalCode);
    alert(`Verifying code: ${finalCode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify your email</h2>
        <p className="text-gray-500 mb-8">
          We've sent a 6-digit code to <span className="font-medium text-gray-700">user@example.com</span>
        </p>

        <div className="flex justify-center gap-2 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className={`w-12 h-14 text-center text-2xl font-semibold border-2 rounded-lg transition-all outline-none
                ${isError
                  ? 'border-red-500 text-red-600 animate-shake'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
              `}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={otp.join("").length < 6}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all
            ${otp.join("").length < 6
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200'}
          `}
        >
          Verify Account
        </button>

        <div className="mt-6 text-sm text-gray-500">
          Didn't receive the code?{' '}
          {timer > 0 ? (
            <span className="font-medium text-gray-400">Resend in {timer}s</span>
          ) : (
            <button
              onClick={() => setTimer(60)}
              className="text-blue-600 font-semibold hover:underline focus:outline-none"
            >
              Resend Code
            </button>
          )}
        </div>
      </div>

      {/* Custom CSS for the shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
};

export default OtpInput;
