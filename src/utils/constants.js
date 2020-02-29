const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.VUE_APP_API_URL;
export const API_URL = isProd ? apiUrl || 'https://???' : apiUrl || 'http://localhost:8082';

export const LOCALSTORAGE = {
  LANGUAGE: 'language',
  THEME: 'theme',
};

export const SESSIONSTORAGE = {
};

export const LANGUAGES = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

// Auto language
export const AUTO_LANG = localStorage.getItem(LOCALSTORAGE.LANGUAGE) || null;

export const THEMES = [
  { id: 1, name: 'light' },
  { id: 2, name: 'dark' },
];

// Auto theme
const theme = localStorage.getItem(LOCALSTORAGE.THEME) || null;
export const AUTO_THEME = theme || THEMES[1].name;

export const DESIGN = {
};

export const LOCALES = {
  [LANGUAGES[0].name]: {
    layout: {
      logo: 'Easy way to send a value',
    },
    views: {
      main: {
        header1: 'Send coins to address',
        copy: 'Copy address',
        bit: {
          part1: 'Open ',
          part2: 'wallet.bit.to',
        },
        minter: {
          part1: 'Open ',
          part2: 'console.minter',
        },
        header2: 'Or use deeplink',
        ammount: 'Ammount BIP',
        qr: 'Send 10 BIP',
      },
      page404: {
        text: 'Page not found!!!',
      },
    },
  },
  [LANGUAGES[1].name]: {
    layout: {
      logo: 'Простой способ отправить деньги',
    },
    views: {
      main: {
        header1: 'Отправить монеты по адресу',
        copy: 'Copy address',
        bit: {
          part1: 'Open ',
          part2: 'wallet.bit.to',
        },
        minter: {
          part1: 'Open ',
          part2: 'console.minter',
        },
        header2: 'Или используйте deeplink',
        ammount: 'Количество BIP',
        qr: 'Send 10 BIP',
      },
      page404: {
        text: 'Страница не найдена!!!',
      },
    },
  },
};
