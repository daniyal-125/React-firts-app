import React from 'react';
import RegistrationForm from './RegistrationForm';

function Register() {
  return (
    <div className="bg-white container-fluid">
    <div className="row">
        <div className="d-none d-md-flex bg-image col-lg-6 col-md-4"></div>
        <div className="col-lg-6 col-md-8"><RegistrationForm/></div>
    </div>
    </div>
  );
};

export default Register;