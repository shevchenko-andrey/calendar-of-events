import { format } from "date-fns";
import { DATE_FNS_PATTERNS } from "./app-keys.const";

export const eventInitialState = {
  title: "",
  description: "",
  date: format(new Date(), DATE_FNS_PATTERNS.SEPARATED_DASHES),
  time: "",
};
