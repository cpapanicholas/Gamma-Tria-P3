
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { useUserContext } from "../../utils/UserContext";

import Auth from '../../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);
  const {setCurrentUser, setFruit} = useUserContext()

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({...formState});
    try {
      const { data } = await login({
        variables: formState,
      });
      console.log(data.login);
      setCurrentUser(data.login)
      Auth.login(data.login.token);
      console.log(Auth.getProfile());
    } catch (e) {
      console.error(e);
    }
    
    setFruit("banana");
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              ''
            ) : (
              <form onSubmit={handleFormSubmit} className='d-flex flex-column'>
                <input
                  className="form-input form-control mt-2"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input form-control mt-2"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
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
            <div className='d-flex justify-content-center'>
              <Link className='btn btn-block btn-primary mt-2' to={'/signup'}>signup</Link>
            </div>
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
}