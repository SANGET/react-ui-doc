import React from 'react';
import {
  Link
} from 'gatsby';
import { Call, EventEmitter } from '@mini-code/base-func';
import { Children } from '@deer-ui/core/utils';

import { LINK_TO_PAGE } from '../../utils/const';

interface CusLinkProps {
  to: string;
  onClick?;
  children?: Children;
}

const CusLink = React.forwardRef(({
  onClick, to, ...props
}: CusLinkProps, ref) => (
  <Link {...props} to={to} ref={ref} onClick={(e) => {
    Call(onClick, e);
    EventEmitter.emit(LINK_TO_PAGE, to);
  }} />
));

export default CusLink;
