export default (lang) => {
  switch(lang){
    case 'RU': return  {
      ADMIN_PANEL: 'Админ Панель',
      FOOTER: 'Footer'
    };

    case 'EN':
    default:
      return  {
      ADMIN_PANEL: 'Admin Panel',
      FOOTER: 'Footer',
    };
  }
}
