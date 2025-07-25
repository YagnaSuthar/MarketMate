import React, { useContext } from 'react';
import { AuthContext } from '../src/App.jsx';

const VendorDashboard = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h2>Welcome Vendor {auth.user?.name || ''}</h2>
      <p>This is your vendor dashboard.</p>
    </div>
  );
};

export default VendorDashboard; 