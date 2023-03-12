export const UPGRADE_SEARCH_RESIZE = 680;
export const ERROR_TEXT = 'Что-то пошло не так. Обновите страницу через некоторое время.';
export const CLASSNAME_BUTTON_BOOKED = 'book__submit book__submit_closed';
export const CLASSNAME_BUTTON_BOOK = 'book__submit';
export const CLASSNAME_META_BUTTON_BOOKED = 'meta-info__button meta-info__button_closed';
export const CLASSNAME_META_BUTTON_BOOK = 'meta-info__button';
export const DEFAULT_PATH_BREAD = 'Все книги';
export const NO_BOOKS_IN_CATEGORY = 'В этой категории книг ещё нет';
export const NO_BOOKS_IN_SEARCH = 'По запросу ничего не найдено';
export const BUTTON_AUTH = 'Вход';
export const LINK_REGISTRATION_AUTH = 'РЕГИСТРАЦИЯ';
export const LINK_QUESTION_AUTH = 'Нет учётной записи?';
export const LINK_RECOVER_AUTH = 'Забыли логин или пароль?';
export const TITLE_AUTH = 'Bход в личный кабинет';
export const PLACEHOLDER_PASSWORD = 'Пароль';
export const PLACEHOLDER_LOGIN = 'Логин';
export const LINK_RECOVER_FORGOT_PASS = 'Восстановить?';
export const LINK_AUTH = 'ВОЙТИ';
export const LINK_QUESTION_REG = 'Есть учётная запись?';
export const TITLE_REGISTRATION = 'Регистрация';
export const BUTTON_RECOVER = 'ВОССТАНОВИТЬ';
export const PLACEHOLDER_RECOVER_MAIL = 'На этот email будет отправлено письмо с инструкциями по восстановлению пароля';
export const TITLE_RECOVER = 'Восстановление пароля';
export const TITLE_RECOVER_HEADER = 'ВХОД В ЛИЧНЫЙ КАБИНЕТ';
export const TITLE_RESPONSE_FALSE = 'Данные не сохранились';
export const TEXT_RESPONSE_FALSE = 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз';
export const TEXT_BUTTON_RESPONSE_FALSE = 'ПОВТОРИТЬ';
export const TITLE_RESPONSE_FALSE_TWO = 'Данные не сохранились';
export const TITLE_RESET_SUCCES = 'Новые данные сохранены';
export const TEXT_RESET_SUCCES = 'Зайдите в личный кабинет, используя свои логин и новый пароль';
export const TEXT_RESPONSE_FALSE_TWO =
  'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail';
export const TEXT_BUTTON_RESPONSE_FALSE_TWO = 'НАЗАД К РЕГИСТРАЦИИ';
export const TEXT_RESPONSE_SUCCES =
  'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль';
export const CONTENT_REQUEST_RESTORE =
  'Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля';
export const TITLE_REQUEST_RESTORE = 'Письмо выслано';
export const TITLE_RESPONSE_SUCCES = 'Регистрация успешна';
export const TEXT_BUTTON_FORGOT_PASS = 'СОХРАНИТЬ ИЗМЕНЕНИЯ';
export const TEXT_REGISTER_RESTORE = 'После сохранения войдите в библиотеку, используя новый пароль';
export const TEXT_BUTTON_RESPONSE_SUCCES = 'ВХОД';
export const TITLE_AUTH_RESPONSE = 'Вход не выполнен';
export const TEXT_AUTH_RESPONSE = 'Что-то пошло не так. Попробуйте ещё раз';
export const TEXT_ERROR_LOGIN = 'Неверный логин или пароль!';
export const ERROR_COINCEDENSE_PASSWTORD = 'Пароли не совпадают';
export const REG_SUCCESS = 0;
export const REG_ERROR_400 = 2;
export const REG_ERROR = 1;
export const PATH_AUTH = '/auth';
export const PATH_REG = '/registration';
export const PATH_FORGOT = '/forgot-pass';
export const BASE_URL = 'https://strapi.cleverland.by/api';

export const dataResetForms = [
  {
    title: TITLE_RESPONSE_SUCCES,
    text: TEXT_RESPONSE_SUCCES,
    textButton: TEXT_BUTTON_RESPONSE_SUCCES,
    path: PATH_AUTH,
  },
  {
    title: TITLE_RESPONSE_FALSE,
    text: TEXT_RESPONSE_FALSE,
    textButton: TEXT_BUTTON_RESPONSE_FALSE,
    path: PATH_REG,
  },
  {
    title: TITLE_RESPONSE_FALSE_TWO,
    text: TEXT_RESPONSE_FALSE_TWO,
    textButton: TEXT_BUTTON_RESPONSE_FALSE_TWO,
    path: PATH_REG,
  },
];

export const dataResetPassword = [
  {
    title: TITLE_RESET_SUCCES,
    text: TEXT_RESET_SUCCES,
    textButton: TEXT_BUTTON_RESPONSE_SUCCES,
    path: PATH_AUTH,
  },
  {
    title: TITLE_RESPONSE_FALSE_TWO,
    text: TEXT_AUTH_RESPONSE,
    textButton: TEXT_BUTTON_RESPONSE_FALSE,
    path: PATH_FORGOT,
  },
];
