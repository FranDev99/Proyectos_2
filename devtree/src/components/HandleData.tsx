import type { Handle } from "../types";

type HandleDataProps = {
  data: Handle;
};

export const HandleData = ({ data }: HandleDataProps) => {
  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
    </div>
  );
};
