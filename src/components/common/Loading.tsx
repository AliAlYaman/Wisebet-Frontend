const LoadingSuspense = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-gray-900"></div>
            </div>
          </div>
  
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-500 mb-2">Loading your page</h2>
            <p className="text-gray-400">Please wait while loading</p>
          </div>
  
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }
  
export default LoadingSuspense;  