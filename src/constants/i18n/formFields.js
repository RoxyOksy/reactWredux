export default (lang) => {
  switch(lang){
    case 'RU':
      return {
        LOGIN: {
          LABEL:'Логин',
          PLACEHOLDER:'Введите логин',
        },
        PASSWORD: {
          LABEL:'Пароль',
          PLACEHOLDER:'Введите пароль',
        },
        POSITION: {
          LABEL:'Должность',
          PLACEHOLDER:'Введите должность',
        },
        AVATAR: {
          LABEL: 'Фото',
          PLACEHOLDER: 'Выберите фото',
        },
        GENDER: {
          LABEL: 'Пол'
        },
        MALE:{
          LABEL: 'Мужской'
        },
        FEMALE: {
          LABEL: 'Женский'
        },
        OTHER: {
          LABEL: 'Другой'
        },

      };

    case 'EN':
    default:
      return {
        LOGIN: {
          LABEL: 'Login',
          PLACEHOLDER:'Type your login',
        },
        PASSWORD: {
          LABEL:'Password',
          PLACEHOLDER:'Type your password',
        },
        POSITION: {
          LABEL:'Position',
          PLACEHOLDER:'Type your position',
        },
        AVATAR: {
          LABEL: 'Avatar',
          PLACEHOLDER: 'Choose avatar',
        },
        GENDER: {
          LABEL: 'Gender'
        },
        MALE:{
          LABEL: 'Male'
        },
        FEMALE: {
          LABEL: 'Female'
        },
        OTHER: {
          LABEL: 'Other'
        },
      };
  }
}
