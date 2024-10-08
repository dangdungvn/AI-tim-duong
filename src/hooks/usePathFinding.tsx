import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

export const usePathFinding = () => {
  const context = useContext(PathfindingContext);
  if (!context) {
    throw new Error("usePathFinding must be used within PathfindingProvider");
  }
  return context;
};
