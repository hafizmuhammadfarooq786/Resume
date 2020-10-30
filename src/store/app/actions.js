export const INITIALIZE = "app/INITIALIZE";
export const INITIALIZED = "app/INITIALIZED";

export const initialize = () => ({
  type: INITIALIZE,
  payload: {},
});

export const initialized = (isInitialized) => ({
  type: INITIALIZED,
  payload: {
    isInitialized,
  },
});
