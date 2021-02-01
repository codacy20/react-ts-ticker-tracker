import React from "react";
import { ApiRequests } from "./ApiRequests";

type ContextState = { status: 'LOADING' | 'ERROR' } | { status: 'LOADED'; value: { name: string } };

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
        React.useState<ContextState>({ status: 'LOADING' });

    React.useEffect(() => {
        setState({ status: 'LOADING' });

        (async (): Promise<void> => {
            const result = await ApiRequests.loadItemData(props.param);
            if (result.ok) {
                setState({
                    status: 'LOADED',
                    value: result,
                });
            } else {
                setState({ status: 'ERROR' });
            }
        })();
    }, [props.param]);

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    );
};
