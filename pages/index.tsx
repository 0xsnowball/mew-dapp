import Container from "@mui/material/Container";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const MeowComponent = dynamic(() => import("../components/Meow"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <ConnectButton />
      <MeowComponent />
    </Container>
  );
};

export default Home;
