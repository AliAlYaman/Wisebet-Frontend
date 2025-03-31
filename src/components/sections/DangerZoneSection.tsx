"use client"

import type React from "react"

import { useState } from "react"

const DangerZoneSection = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would call your auth service to delete the account
      window.location.href = "/login"
    }, 1500)
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-red-800">
      <h2 className="text-xl font-semibold mb-4 text-red-500">Danger Zone</h2>

      <p className="text-gray-300 mb-4">Once you delete your account, there is no going back. Please be certain.</p>

      {!showDeleteConfirm ? (
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm"
        >
          Delete Account
        </button>
      ) : (
        <div className="border border-red-700 rounded-md p-4 bg-red-900/20">
          <h3 className="text-lg font-medium mb-3 text-red-400">Are you absolutely sure?</h3>

          <p className="text-sm text-gray-300 mb-4">
            This action cannot be undone. This will permanently delete your account and remove all your data from our
            servers.
          </p>

          <form onSubmit={handleDeleteAccount} className="space-y-4">
            <div>
              <label htmlFor="confirmDelete" className="block text-sm font-medium text-gray-300 mb-1">
                To confirm, type "delete my account"
              </label>
              <input
                id="confirmDelete"
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteConfirm(false)
                  setConfirmText("")
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || confirmText !== "delete my account"}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Permanently Delete Account"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default   DangerZoneSection;