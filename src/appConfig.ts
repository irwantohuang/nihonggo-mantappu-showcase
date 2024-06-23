// src/appConfig.ts

export const appConfig = {
    baseUrl: import.meta.env.VITE_BASE_URL as string,
    apiKey: import.meta.env.VITE_API_KEY as string,
    channelId: import.meta.env.VITE_CHANNEL_ID as string,
  };
  