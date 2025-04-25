const ProfileHeader = ({ name, phone }) => (
    <div className="profile-header text-center mb-6">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-600">{phone}</p>
    </div>
  );
  export default ProfileHeader;