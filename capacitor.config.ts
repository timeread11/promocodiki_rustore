import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.promocodiki',
  appName: 'Промокодики',
  webDir: 'out',
  server: {
    url: 'https://promocodiki.ru',
    cleartext: true,
    errorPath: 'error.html'
  }
};

export default config;
