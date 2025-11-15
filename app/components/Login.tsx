"use client";

import { Button, Input, Form } from "@heroui/react";

interface LoginProps {
  loginClick?: () => void;
}

const Login = ({ loginClick }: LoginProps) => {
  return (
    <Form
      className="flex flex-col gap-4 p-6 bg-background"
      onSubmit={loginClick}
    >
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm text-default-500">Sign in feel connected.</p>
      </div>
      <Input
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        isRequired
      />
      <Input
        label="Password"
        labelPlacement="outside"
        placeholder="••••••••"
        type="password"
        isRequired
      />
      <Button type="submit" aria-label="Login" color="primary" fullWidth>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
