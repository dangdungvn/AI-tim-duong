import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";
export function Grid({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  const { grid, setGrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };
  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    setIsMouseDown(false);
  };
  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };
  return (
    <div
      className={twMerge(
        "flex items-center flex-col justify-center border-sky-300 mt-10",
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className="flex">
          {r.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isTraversed, isWall, isPath } =
              tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isStart={isStart}
                isTraversed={isTraversed}
                isWall={isWall}
                isPath={isPath}
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseEnter={() => handleMouseEnter(row, col)}
                handleMouseUp={() => handleMouseUp(row, col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
