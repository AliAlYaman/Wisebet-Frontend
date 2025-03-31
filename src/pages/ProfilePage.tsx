"use client"

import { useState } from "react"
import ProfileSection from "../components/sections/ProfileSection"
import SecuritySection from "../components/sections/SecuritySection"
import TwoFactorSection from "../components/sections/TwoFactorSection"
import DangerZoneSection from "../components/sections/DangerZoneSection"
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "user@example.com",
    name: "John Doe",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const updateProfile = async (data: { name: string }) => {
    // In a real app, this would call an API endpoint
    setUser({ ...user, name: data.name })
    return true
  }

  const logout = () => {
    // In a real app, this would call your auth service
    window.location.href = "/login"
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Back to home"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-indigo-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-indigo-500">Account Settings</h1>
        </div>
        <button onClick={logout} className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors cursor-pointer text-sm">
          Logout
        </button>
      </div>

      <div className="space-y-6">
        <ProfileSection user={user} updateProfile={updateProfile} />
        <SecuritySection />
        <TwoFactorSection />
        <DangerZoneSection />
      </div>
    </div>
  </div>
  )
}


export default AccountPage;