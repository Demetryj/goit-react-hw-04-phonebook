import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const TitleContacts = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: ${props => props.theme.space[4]}px;
`;
