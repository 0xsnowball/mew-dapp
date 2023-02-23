import { TextFields } from "@mui/icons-material";
import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useCatContract } from "../hooks/useContract";

export const SayMeow = () => {
  const contract = useCatContract();
  const [message, setMessgae] = useState("");
  const [pending, setPending] = useState(false);

  const handleSayMeow = async () => {
    if (!contract) return;

    try {
      setPending(true);
      const tx = await contract.sayMeow(message);
      const receipt = await tx.wait();
    } catch (err) {
      console.error(err);
    }
    setPending(false);
  };

  return (
    <Box sx={{ mt: 3, width: "100%" }}>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        label="Message"
        fullWidth
        value={message}
        onChange={(e) => setMessgae(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleSayMeow}
        disabled={pending}
      >
        Say Meow
      </Button>
    </Box>
  );
};
