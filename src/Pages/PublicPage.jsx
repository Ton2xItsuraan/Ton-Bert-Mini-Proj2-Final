import '../index.css'

function PublicPage() {
    return (
      <>
        <h1>Public page</h1>
        <a href="/home">Sign-In</a>

        <div className="max-w-md mx-auto bg-gray-800 text-white rounded-md shadow-md p-6">
      {/* Avatar and textarea container */}
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <img
          src="https://placekitten.com/40/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />

        {/* Textarea container */}
        <div className="flex-1">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
            rows="4"
            placeholder="Type your message..."
          />
        </div>
      </div>

      {/* Actions (buttons, etc.) */}
      <div className="flex items-center justify-end mt-4">
        {/* Insert Image button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Insert Image
        </button>

        {/* Insert Video button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-2">
          Insert Video
        </button>
      </div>
    </div>
      </>
    );
  }

  export default PublicPage