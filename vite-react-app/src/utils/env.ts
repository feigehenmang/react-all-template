export const getEnvTag: () => String = () => {
  return import.meta.env.VITE_APP_ANT;
};
export const isUat: Boolean = import.meta.env.VITE_APP_ANT === "uat";
export const isDev: Boolean = import.meta.env.VITE_APP_ANT === "development";
export const isProd: Boolean = import.meta.env.VITE_APP_ANT === "production";
