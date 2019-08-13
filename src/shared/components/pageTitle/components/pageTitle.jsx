import React from "react";
import classNames from "classnames";
import get from "lodash/get";
import Box from '@material-ui/core/Box';
import {withTranslation} from 'react-i18next';

import '../../../../locale/i18n';

import styles from "./pageTitle.module.scss";

const PageTitleComponent = ({title, variant, componentStyle, t}) =>  {
  return (
    <Box as={variant} className={classNames(styles[get(componentStyle, 'size', 'big')], styles[get(componentStyle, 'theme', 'darken')])} >
      {t(`PAGE_TITLE.${title}`)}
    </Box>
  )};

export default withTranslation()(PageTitleComponent)
