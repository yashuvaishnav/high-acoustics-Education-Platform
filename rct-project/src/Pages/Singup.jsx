import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContextProvider";
import { Button, Input, Box, Heading, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { signup, checkIfUserExists } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleSignup = async (e) => {
    e.preventDefault();
    const userExists = await checkIfUserExists(email);
    if (userExists) {
      setError("User with this email already exists");
    } else {
      try {
        await signup(email, password);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box shadow="lg" w="35%" m="auto" mt="50px" p="20px">
      <Heading textAlign="center" as="h2">
        Signup here
      </Heading>
      <form onSubmit={handleSignup}>
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
        <Button mt="20px" colorScheme="teal" type="submit">Signup</Button>
      </form>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </Box>
  );
}

export default Signup;