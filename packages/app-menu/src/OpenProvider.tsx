import { createContext, PropsWithChildren } from "react";

const openContext = createContext(false);

interface IProps {}

const OpenProvider = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  return <openContext.Provider value={false}>{children}</openContext.Provider>;
};

export default OpenProvider;
