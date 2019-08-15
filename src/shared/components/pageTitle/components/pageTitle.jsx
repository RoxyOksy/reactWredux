import React from "react";
import get from "lodash/get";
import classNames from "classnames";

import {Box} from "shared/vendors";

import styles from "./pageTitle.module.scss";

const PageTitleComponent = ({title, variant, componentStyle}) =>  {
  return (
    <Box as={variant} className={classNames(styles[get(componentStyle, 'size', 'big')], styles[get(componentStyle, 'theme', 'darken')])} >
      {title}
    </Box>
  )};

export default PageTitleComponent
