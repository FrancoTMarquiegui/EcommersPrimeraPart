
import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data)
    axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
      .then(res => {
        navigate("/")
        localStorage.setItem("token",res.data.data.token );
      })
      .catch(err => {
        if (err.response?.status === 404) {
          alert("incorrect credentials");
        } else {
          console.log(err.response?.data);
        }
      })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(submit)} style={{ maxWidth: 600, margin: "0 auto" }} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>Login</h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;