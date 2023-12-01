// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// function FormExample() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//       <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Sign Up</Button>
//       <Button variant="primary" type="submit">
//         or Log In
//       </Button>
//     </Form>
//   );
// }

// export default FormExample;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
