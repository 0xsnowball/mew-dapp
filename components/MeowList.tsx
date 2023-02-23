import { Box, Button, CircularProgress } from "@mui/material";
import React, { useMemo, useState } from "react";
import useAllMeows from "../hooks/useAllMeows";
import { MeowCard } from "./MeowCard";

export const MeowList = () => {
  const meows = useAllMeows();
  const [page, setPage] = useState(1);
  const displayMeows = useMemo(() => {
    if (meows) {
      return meows.slice(0, 10 * page);
    }
  }, [meows, page]);

  const handleLoadMore = () => setPage(page + 1);

  return (
    <Box mt={3}>
      {!displayMeows ? (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {displayMeows.map((meow) => (
            <MeowCard key={meow.timestamp} meow={meow} />
          ))}
          <Button variant="outlined" onClick={handleLoadMore}>
            Load more...
          </Button>
        </>
      )}
    </Box>
  );
};
