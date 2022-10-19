import React, { createContext } from "react";

import { LoadState } from "../util/types";
export const LoadingContext = createContext<LoadState>({articleLoaded: false, commentsLoaded: false, buttonLoaded: false});
