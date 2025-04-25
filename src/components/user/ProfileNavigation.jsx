const ProfileNavigation = ({ items }) => (
    <nav className="profile-nav bg-white rounded-lg shadow p-4 mb-6">
      <ul className="flex flex-wrap justify-between">
        {items.map((item, index) => (
          <li key={index} className="w-1/3 p-2 text-center">
            <button className="w-full py-2 hover:text-green-600">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
  export default ProfileNavigation;