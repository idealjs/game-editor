import { createState } from "@idealjs/reactive";

export const workspace = createState<{
  opfsRoot: FileSystemDirectoryHandle | null;
}>({
  opfsRoot: null,
});
