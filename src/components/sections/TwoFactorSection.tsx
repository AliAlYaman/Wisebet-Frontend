import { useState } from "react"
import { enable2FA, verify2FA, disable2FA } from "../../services/api/auth/twoAuthFactor"

const TwoFactorSection = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showSetup, setShowSetup] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)
  const [totpUri, setTotpUri] = useState("")
  const [secret, setSecret] = useState("")

  const handleEnableClick = async () => {
    setShowSetup(true)
    setMessage(null)

    try {
      setLoading(true)
      const response = await enable2FA()
      setTotpUri(response.data.qr_code) // Should be something like "otpauth://totp/..."
      setSecret(response.data.secret)
    } catch (error) {
      setMessage({ text: "Failed to setup 2FA. Please try again.", type: "error" })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDisable = async () => {
    setLoading(true)
    try {
      await disable2FA()
      setTwoFactorEnabled(false)
      setMessage({ text: "Two-factor authentication disabled", type: "success" })
    } catch (error) {
      setMessage({ text: "Failed to disable 2FA. Please try again.", type: "error" })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const verifyAndEnable = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!verificationCode || verificationCode.length !== 6) {
      setMessage({ text: "Please enter a valid 6-digit code", type: "error" })
      return
    }

    setLoading(true)

    try {
      const response = await verify2FA(verificationCode)
      if (response.data.verified) {
        setTwoFactorEnabled(true)
        setShowSetup(false)
        setMessage({ text: "Two-factor authentication enabled", type: "success" })
      } else {
        setMessage({ text: "Invalid verification code", type: "error" })
      }
    } catch (error) {
      setMessage({ text: "Verification failed. Please try again.", type: "error" })
      console.error(error)
    } finally {
      setLoading(false)
      setVerificationCode("")
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${message.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="mb-6">
        <p className="text-gray-300 mb-4">
          Two-factor authentication adds an extra layer of security to your account by requiring more than just a
          password to sign in.
        </p>

        {twoFactorEnabled ? (
          <div className="space-y-4">
            <div className="p-4 bg-gray-700/50 rounded-md border border-green-500/30">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-5 w-5 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-400">
                    Two-factor authentication is currently enabled
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDisable}
              disabled={loading}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Disabling..." : "Disable Two-Factor"}
            </button>
          </div>
        ) : showSetup ? (
          <div className="border border-gray-700 rounded-md p-4 bg-gray-800/50 space-y-4">
            <h3 className="text-lg font-medium">Set Up Two-Factor Authentication</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  Scan this QR code with your authenticator app:
                </p>
                <div className="bg-white p-4 rounded-lg flex justify-center">
  {totpUri ? (
    <div dangerouslySetInnerHTML={{ __html: totpUri }} />
  ) : (
    <div className="w-40 h-40 flex items-center justify-center text-gray-500">
      Loading QR code...
    </div>
  )}
</div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Or enter this secret key manually:
                </p>
                <div className="font-mono bg-gray-700 px-3 py-2 rounded text-sm">
                  {secret}
                </div>
              </div>

              <form onSubmit={verifyAndEnable} className="space-y-4">
                <div>
                  <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-300 mb-1">
                    Enter 6-digit verification code
                  </label>
                  <input
                    id="verificationCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="123456"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowSetup(false)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading || verificationCode.length !== 6}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Verifying..." : "Enable Two-Factor"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <button
            onClick={handleEnableClick}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm disabled:opacity-50"
          >
            {loading ? "Setting up..." : "Set Up Two-Factor Authentication"}
          </button>
        )}
      </div>
    </div>
  )
}

export default TwoFactorSection