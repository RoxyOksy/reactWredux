import getPageTitlesLocalisation from './pageTitles';
import getMenuItemsLocalisation from './menuItems';
import getTextsLocalisation from './texts';
import getTableLocalisation from './tables';
import getFormFieldsLocalisation from './formFields';
import getButtonsLocalisation from './buttons';
import getModalsLocalisation from './modals';

export const getApplicationLocalisation = (lang) => ({
  PAGE_TITLE: getPageTitlesLocalisation(lang),
  MENU_ITEM: getMenuItemsLocalisation(lang),
  TEXT: getTextsLocalisation(lang),
  TABLE: getTableLocalisation(lang),
  FORM_FIELD: getFormFieldsLocalisation(lang),
  BUTTON: getButtonsLocalisation(lang),
  MODAL: getModalsLocalisation(lang)
});
