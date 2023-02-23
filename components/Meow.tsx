import { Box, Typography } from "@mui/material";
import React from "react";
import { useAccount, useSigner } from "wagmi";
import { useCatContract } from "../hooks/useContract";
import { MeowList } from "./MeowList";
import { SayMeow } from "./SayMeow";

export const Meow = () => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const catContract = useCatContract();

  if (!address || !signer) return <></>;

  if (!catContract) {
    return (
      <Typography my={5} variant="h6">
        Wrong network, contract address is missing!
      </Typography>
    );
  }

  return (
    <Box>
      <SayMeow />
      <MeowList />
    </Box>
  );
};

export default Meow;
