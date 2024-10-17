import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [focusedInput, setFocusedInput] = useState(null); // State to track focused input

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle input focus
  const handleFocus = (inputName) => {
    setFocusedInput(inputName); // Set focused input state
  };

  // Handle input blur
  const handleBlur = () => {
    setFocusedInput(null); // Reset focused input state
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password does not match';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data Submitted: ', formData);
      // Submit form data to your backend API here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login d-flex align-items-center py-5">
      <div className="container">
        <div className="row">
          <div className="mx-auto pl-5 pr-5 col-lg-8 col-md-9">
            <h3 className="login-heading mb-4">New Buddy!</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-label-group">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')} // Track focus
                  onBlur={handleBlur} // Reset focus on blur
                  className="form-custom-control"
                  id="inputEmail"
                />
                <label
                  className={`form-label ${focusedInput === 'email' ? 'active' : ''}`} // Conditional class
                  htmlFor="inputEmail"
                >
                  Email address / Mobile
                </label>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')} // Track focus
                  onBlur={handleBlur} // Reset focus on blur
                  className="form-custom-control"
                  id="inputPassword"
                />
                <label
                  className={`form-label ${focusedInput === 'password' ? 'active' : ''}`} // Conditional class
                  htmlFor="inputPassword"
                >
                  Password
                </label>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => handleFocus('confirmPassword')} // Track focus
                  onBlur={handleBlur} // Reset focus on blur
                  className="form-custom-control"
                  id="inputConfirmPassword"
                />
                <label
                  className={`form-label ${focusedInput === 'confirmPassword' ? 'active' : ''}`} // Conditional class
                  htmlFor="inputConfirmPassword"
                >
                  Confirm Password
                </label>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>

              <button type="submit" className="btn mt-2 rounded-0 btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</button>
              <div className="text-center pt-3">Already have an account? <a className="font-weight-bold" href="/login">Sign In</a></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
