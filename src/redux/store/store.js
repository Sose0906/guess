import { createStore } from 'redux';

import { game } from "../reducers";

export const store = createStore(game);
