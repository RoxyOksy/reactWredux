import React from "react";
import classNames from "classnames";
import get from "lodash/get";
import Box from '@material-ui/core/Box';

import styles from "./pageTitle.module.scss";

const PageTitleComponent = ({title, variant, componentStyle}) =>  {
  return (
    <Box as={variant} className={classNames(styles[get(componentStyle, 'size', 'big')], styles[get(componentStyle, 'theme', 'darken')])} >
      {title}
    </Box>
  )}

export default PageTitleComponent
