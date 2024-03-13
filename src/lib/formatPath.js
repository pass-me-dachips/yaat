import { format } from "node:path";

export default function formatPath(dir, base) {
  return format({
    dir,
    base,
  });
}
