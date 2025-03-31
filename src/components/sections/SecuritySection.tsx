import { useState } from "react"
import { requestPasswordReset } from "../../services/api/auth/emails/resetPassword"

const SecuritySection = () => {
  const [resetEmail, setResetEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!resetEmail) {
      setMessage({ text: "Please enter your email", type: "error" })
      return
    }

    setLoading(true)
    setMessage(null)

    const result = await requestPasswordReset(resetEmail)
    
    if (result.success) {
      setMessage({ 
        text: result.message, 
        type: "success" 
      })
      setResetEmail("")
    } else {
      setMessage({ 
        text: result.message, 
        type: "error" 
      })
    }
    
    setLoading(false)
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex mb-6">
        <button className="text-xl font-semibold">Reset Password</button>
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handlePasswordReset} className="space-y-4">
        <div>
          <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            id="resetEmail"
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            placeholder="your@email.com"
          />
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm cursor-pointer"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SecuritySection