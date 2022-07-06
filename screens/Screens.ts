import { UserSelectionModel } from '../models';

/** Screen-Parameters type map. */
export type Screens = {
  Home: undefined;
  Question: undefined;
  Results: { userSelections: UserSelectionModel[] };
};
