import React, { useState } from "react";
import { useAuth } from "../AuthContext/AuthContextProvider";
import { Box, Button, Heading, Input,FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please check your email and password.");
      console.error(error);
    }
  };

  return (
    <Box shadow="lg" w="35%" m="auto" mt="50px" p="20px">
      <Heading textAlign="center" as="h2">
        Login here
      </Heading>
      <form onSubmit={handleLogin}>
        
      <FormLabel mb="20px">Email *</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <FormLabel mt="10px" mb="20px">Password *</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button mt="20px" colorScheme="teal"  type="submit">Login</Button>
      </form>
    </Box>
  );
}
console.log(",,")

export default Login;
