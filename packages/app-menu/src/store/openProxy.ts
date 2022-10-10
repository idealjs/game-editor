import { proxy } from "valtio";

const openProxy = proxy<Record<string, boolean | undefined>>();

export default openProxy;
