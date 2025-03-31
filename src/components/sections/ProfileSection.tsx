import type React from "react"

import { useState } from "react"
import type { User } from "../../models/IUser"

interface ProfileSectionProps {
  user: User
  updateProfile: (data: { name: string }) => Promise<boolean>
}

const ProfileSection = ({ user, updateProfile }: ProfileSectionProps) => {
  const [name, setName] = useState(user.name)
  const [isEditing, setIsEditing] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    try {
      const success = await updateProfile({ name })
      if (success) {
        setMessage({ text: "Profile updated successfully", type: "success" })
        setIsEditing(false)
      }
    } catch (error) {
      setMessage({ text: "Failed to update profile", type: "error" })
    } 
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

      <div className="flex items-start space-x-6">
        

        <div className="flex-grow">
          {message && (
            <div
              className={`mb-4 p-3 rounded ${
                message.type === "success" ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                User Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className={`w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default  ProfileSection;