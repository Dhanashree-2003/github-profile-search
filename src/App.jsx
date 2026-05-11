import { useState } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGitHubUser = async () => {
    if (!username) {
      setError("Please enter a username");
      setUser(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      setUser(response.data);
    } catch (error) {
      setError("User not found");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center p-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-3 text-center drop-shadow-md">
        GitHub Profile Search
      </h1>

      <p className="text-gray-600 mb-10 text-center text-lg">
        Search any GitHub user and explore their profile instantly 🚀
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-5 flex gap-4 flex-wrap justify-center border border-gray-200">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchGitHubUser();
            }
          }}
          className="border border-gray-300 rounded-xl px-5 py-3 w-72 outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />

        <button
          onClick={fetchGitHubUser}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 shadow-md"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading && (
        <p className="text-blue-600 mt-8 text-xl font-semibold animate-pulse">
          Loading profile...
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-8 text-lg font-semibold bg-red-100 px-4 py-2 rounded-xl shadow-sm">
          {error}
        </p>
      )}

      {user && !loading && <ProfileCard user={user} />}
    </div>
  );
}

export default App;
