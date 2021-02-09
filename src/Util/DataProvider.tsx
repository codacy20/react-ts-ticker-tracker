import React from "react";
import { getCandlesRequest } from "./ApiRequests";
import { ContextState, Status } from "../Models/ContextState.model";

const Context = React.createContext<ContextState | null>(null);

export const useItemData = (): ContextState => {
    const contextState = React.useContext(Context);
    if (contextState === null) {
        throw new Error('useItemData must be used within a ItemDataProvider tag');
    }
    return contextState;
};

export const ItemDataProvider: React.FC<{ param: string }> = (props) => {
    const [state, setState] =
        React.useState<ContextState>({ status: Status.LOADING, value: null });

    React.useEffect(() => {
        setState({ status: Status.LOADING, value: null });

        (async (): Promise<void> => {
            const result = await getCandlesRequest(props.param);
            if (result) {
                setState({
                    status: Status.LOADED,
                    value: { current: result.c, open: result.o, time: result.t },
                });
            } else {
                setState({ status: Status.ERROR, value: null });
            }
        })();
    }, [props.param]);

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    );
};
