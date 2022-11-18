import styled from 'styled-components';

export const ElementList = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;

export const Circle = styled.span`
  margin-right: ${props => props.theme.space[3]}px;

  width: 7px;
  height: 7px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.black};
`;

export const Text = styled.p`
  margin-right: ${props => props.theme.space[5]}px;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;

export const Button = styled.button`
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.s};

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  box-shadow: ${props => props.theme.shadows.third};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentDeleteBtn};
  }
`;
