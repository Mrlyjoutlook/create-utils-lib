import dev from "./dev";
import prod from "./prod";

const isProd = process.env.NODE_ENV === "production";

export default {
  ...(isProd ? prod : dev),
};
