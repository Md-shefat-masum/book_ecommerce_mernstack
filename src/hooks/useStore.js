import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

function useStore() {
  return useContext(StoreContext);
}

export default useStore