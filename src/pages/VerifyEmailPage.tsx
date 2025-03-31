import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../services/api/auth/emails/verifyEmail';

const VerifyEmailPage = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get('verification_url');
    const verificationUrl = query?.substring(query.indexOf('/email:'));

    if (!verificationUrl) {
      setError('Invalid verification link.');
      return;
    }

    verifyEmail({
      verificationUrl,
      setIsVerifying,
      setIsVerified,
      setError,
      navigate
    });
  }, [searchParams, navigate]);

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen bg-secondary">
      <div className="bg-gray-800 p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Email Verification</h2>

        {isVerified ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold">Email Verified Successfully!</p>
            <p className="text-gray-500">You will be redirected shortly.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-center mb-6">
              Verifying your email address...
            </p>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {isVerifying && <p className="text-center text-blue-500">Verifying...</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyEmailPage;