const cutState = (state) => state.app;

export const getIsInitialized = (state) => cutState(state).isInitialized;
