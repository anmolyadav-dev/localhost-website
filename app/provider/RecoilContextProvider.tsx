"use client";

import { RecoilRoot } from "recoil";

type Props = {
  children: React.ReactNode;
};

function RecoilContextProvider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
export default RecoilContextProvider;
