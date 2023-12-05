import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
<<<<<<< HEAD
  const [addUser, { error, data }] = useMutation(ADD_FRIEND);
=======
  
  const [addUser, { error, data }] = useMutation(ADD_USER);
>>>>>>> 9f83af2f5ff93eb507498b32e3cfc4d027f817fa

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { input: formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e, 7);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className='d-flex flex-column justify-content-center align-items-center'>
                <input
                  className="form-input form-control mt-2"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                  autoComplete="given-name" // Autofill hint for first name
                />
                <input
                  className="form-input form-control mt-2"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                  autoComplete="family-name" // Autofill hint for last name
                />
                <input
                  className="form-input form-control mt-2"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                  autoComplete="username" // Autofill hint for username
                />
                <input
                  className="form-input form-control mt-2"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email" // Autofill hint for email
                />
                <input
                  className="form-input form-control mt-2"
                  placeholder="*********"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  autoComplete="new-password" // Autofill hint for password
                />
                <button
                  className="btn btn-block btn-primary mt-2"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
