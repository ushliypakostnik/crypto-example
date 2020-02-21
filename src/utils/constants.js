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
    elements: {
      step1: {
        header: 'Send coins',
        address: 'ADDRESS',
        or: 'or',
        deeplink: 'DEEPLINK',
        copy: 'Copy address',
        bit: 'Open wallet.bit.to',
        minter: 'Open console.minter',
        ammout: 'Ammount BIP',
      },
      balance: {
        loader: 'Waiting for coins',
        balance: 'Balance',
      },
      step2: {
        header: 'Share link',
      },
    },
    page404: {
      text: 'Page not found!!!',
    },
  },
  [LANGUAGES[1].name]: {
    layout: {
      logo: 'Простой способ отправить деньги',
    },
    elements: {
      step1: {
        header: 'Отправить монеты',
        address: 'По адресу',
        or: 'или',
        deeplink: 'По QR-коду',
        copy: 'Скопируйте адрес',
        bit: 'Открыть wallet.bit.to',
        minter: 'Открыть console.minter',
        ammout: 'Количество BIP',
      },
      balance: {
        loader: 'В ожидании монет',
        balance: 'Баланс',
      },
      step2: {
        header: 'Поделиться ссылкой',
      },
    },
    page404: {
      text: 'Страница не найдена!!!',
    },
  },
};
