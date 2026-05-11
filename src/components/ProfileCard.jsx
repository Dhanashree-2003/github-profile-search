function ProfileCard({ user }) {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 mt-10 w-full max-w-md border border-gray-200 hover:scale-105 transition duration-300">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
        />

        <h2 className="text-3xl font-extrabold mt-5 text-gray-800 text-center">
          {user.name || "No Name"}
        </h2>

        <p className="text-gray-500 mt-1 text-sm">@{user.login}</p>

        <p className="text-gray-600 mt-4 text-center leading-relaxed px-4">
          {user.bio || "No bio available"}
        </p>

        <div className="grid grid-cols-3 gap-5 mt-8 w-full">
          <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600">
              {user.followers}
            </h3>
            <p className="text-gray-500 text-sm mt-1">Followers</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600">
              {user.following}
            </h3>
            <p className="text-gray-500 text-sm mt-1">Following</p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600">
              {user.public_repos}
            </h3>
            <p className="text-gray-500 text-sm mt-1">Repos</p>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
