import { createContext } from "react";

import { LoadContext } from "../util/types";
export const LoadingContext = createContext<LoadContext>({loadState: {articleLoaded: false, commentsLoaded: false, buttonLoaded: false}, setIsLoaded: () => {}});
