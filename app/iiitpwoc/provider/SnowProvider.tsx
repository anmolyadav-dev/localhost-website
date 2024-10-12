"use client";
import Snowfall from "react-snowfall";
type Props = {
  children: React.ReactNode;
};

function RecoilContextProvider({ children }: Props) {
  return (
    <div>
      <Snowfall />
      <Snowfall color="#4DFFDB" snowflakeCount={50} />
      {children}
    </div>
  );
}
export default RecoilContextProvider;
