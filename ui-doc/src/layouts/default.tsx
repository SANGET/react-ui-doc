import React, { useRef } from 'react';
import styled from 'styled-components';

import { Loading } from '@deer-ui/core/loading';
import { EventEmitter } from '@mini-code/base-func';
import { Head } from '../components/head';
import { ProjectHeader } from '../components/header';
import { LINK_TO_PAGE } from '../../utils/const';

const usePageLoading = () => {
  const [loading, setLoading] = React.useState(false);

  const currHref = window.location.href;
  const prevHref = useRef('');
  /** 设置加载和判断是否移动设备 */
  React.useEffect(() => {
    if (prevHref.current !== currHref) {
      setLoading(false);
      prevHref.current = currHref;
    }
    const handleLinkToPage = (to) => {
      if (to !== currHref) {
        setLoading(true);
      }
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    return () => {
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
    };
  }, [loading, currHref]);

  return loading;
};

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Headers = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const DefaultLayout = (props) => {
  const { children, pageContext } = props;
  const loading = usePageLoading();

  return (
    <Container>
      <div className="wrapper-loading-tip relative" style={{ zIndex: 111 }}>
        <Loading inrow loading={loading} />
      </div>
      <Head pageContext={pageContext} />
      <Headers>
        <ProjectHeader />
      </Headers>
      {children}
    </Container>
  );
};

export default DefaultLayout;
