// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const Profile = () => {
  return (//returns html and react components
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing your profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <h3>Oops... looks like you have no bookings yet</h3> 
        </div>
       
      </div>
    </div>
  );
};

export default Profile;
