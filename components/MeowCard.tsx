import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Address, useEnsName } from "wagmi";
import { Meow } from "../types";

export const MeowCard = ({ meow }: { meow: Meow }) => {
  const { data, isError, isLoading } = useEnsName({
    address: meow.author as Address,
  });

  return (
    <Card key={meow.timestamp} sx={{ my: 2 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {data ?? meow.author}
        </Typography>
        <Typography gutterBottom>{meow.message}</Typography>
        <Typography variant="caption" color="text.secondary">
          {dayjs(meow.timestamp * 1000).format("DD/MM/YYYY HH:mm:ss")}
        </Typography>
      </CardContent>
    </Card>
  );
};
