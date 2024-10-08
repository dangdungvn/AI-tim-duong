import { MouseEventHandler } from "react";
import { GrPowerReset } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";

export function Playbutton({
  handleRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in-out rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none focus:ring focus:ring-green-300 focus:ring-opacity-30"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="w-5 h-5"></GrPowerReset>
      ) : (
        <BsFillPlayFill className="w-5 h-5"></BsFillPlayFill>
      )}
    </button>
  );
}
