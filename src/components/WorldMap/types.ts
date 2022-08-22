import { ContinentType } from "../../countries";

export type ContinentToCssType = { [K in ContinentType]: string };
export type SelectedCountryType = {
  name: string;
  id: string;
};
