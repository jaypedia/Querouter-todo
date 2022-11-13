import styled, { css } from 'styled-components';

import { flexBox } from './flexBox';
import { FONT } from './font';

const MainWrapper = styled.main`
  padding: 32px 0;
`;

const InnerContainer = styled.div`
  max-width: 1280px;
  width: calc(100% - 60px);
  margin: 0 auto;
`;

const ColumnWrapper = styled(InnerContainer)`
  ${flexBox({ direction: 'column' })}
  padding: 32px 0;
`;

const headerWrapperStyle = css`
  width: 100%;
  border-bottom: 1px solid ${({ theme: { color } }) => color.line};
  padding: 15px 0;
  margin-bottom: 35px;
`;

const Heading1 = styled.h1`
  font: ${FONT.display_medium};
  margin: 0;
`;

const Heading2 = styled.h2`
  font: ${FONT.display_small};
  margin: 0;
`;

const Heading4 = styled.h4`
  font: ${FONT.regular_medium};
  margin: 10px;
  margin-bottom: 20px;
`;

const FlexBetween = styled.div`
  width: 100%;
  ${flexBox({ justifyContent: 'space-between' })}
`;

const Flex = styled.div`
  ${flexBox({})}
`;

const FlexStart = styled.div`
  width: 100%;
  ${flexBox({ justifyContent: 'flex-start' })}
`;

const FlexColumn = styled.div`
  width: 100%;
  ${flexBox({ direction: 'column' })}
`;

const FlexEnd = styled.div`
  width: 100%;
  ${flexBox({ justifyContent: 'flex-end' })}
`;

const FlexEndAlign = styled.div`
  width: 100%;
  ${flexBox({ alignItems: 'flex-end' })}
`;

const FlexColumnStart = styled.div`
  width: 100%;
  ${flexBox({ direction: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' })}
`;

export {
  MainWrapper,
  InnerContainer,
  ColumnWrapper,
  headerWrapperStyle,
  Heading1,
  Heading2,
  Heading4,
  Flex,
  FlexBetween,
  FlexStart,
  FlexColumn,
  FlexEnd,
  FlexColumnStart,
  FlexEndAlign,
};
