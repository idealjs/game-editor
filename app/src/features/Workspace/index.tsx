import { useEffect } from "@idealjs/reactive";

import { workspace } from "../store/workspace";

const Workspace = () => {
  useEffect(() => {
    console.log("test test", workspace.val);
  });
  return (
    <div>
      {() => {
        console.log("test test", workspace.val.opfsRoot);
        if (workspace.val.opfsRoot == null) {
          return (
            <div
              onClick={async () => {
                console.log("test test", workspace.val);
                const val = await navigator.storage.getDirectory();
                console.log("test test", val);

                workspace.val.opfsRoot = val;
              }}
            >
              no opfsRoot
            </div>
          );
        }
        return <div>has opfsRoot</div>;
      }}
    </div>
  );
};

export default Workspace;
