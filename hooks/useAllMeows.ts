import React, { useEffect, useState } from "react";
import { Meow } from "../types";
import { useCatContract } from "./useContract";

export default function useAllMeows() {
  const catContract = useCatContract();
  const [meows, setMeows] = useState<Meow[]>();

  useEffect(() => {
    if (!catContract) return;

    const fetchMeows = async () => {
      const meows = await catContract.getAllMeows();
      setMeows(
        meows
          .map((meow: any) => ({
            author: meow.author,
            message: meow.message,
            timestamp: meow.timestamp.toNumber(),
          }))
          .sort((x: Meow, y: Meow) => y.timestamp - x.timestamp)
      );
    };

    fetchMeows();
  }, [catContract]);

  return meows;
}
