// Import React and any necessary styles

// Define a functional component called Profile
const Profile = () => {
  return (
    <div className="container">
      <div className="flex-row justify-center mb-3">
        {/* A header indicating the user is viewing their profile */}
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing your profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {/* Message indicating that the user has no bookings */}
          <h3>Oops... looks like you have no bookings yet</h3>
        </div>
      </div>
    </div>
  );
};

// Export the Profile component as the default export of this module
export default Profile;

// This component isn't fully functional yet