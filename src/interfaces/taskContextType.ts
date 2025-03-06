import { Dispatch, SetStateAction } from "react";

export interface TaskContextType {
    selectedData: string| null;
    setSelectedData: Dispatch<SetStateAction<string | null>>;
}

