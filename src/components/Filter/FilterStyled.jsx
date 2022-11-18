import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.space[2]}px;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};

  &:focus-within {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Input = styled.input`
  padding: ${props => props.theme.space[2]}px;
  width: 200px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.m};

  border-radius: ${props => props.theme.radii.normal};

  &:placeholder-shown {
    border-color: ${props => props.theme.colors.borderColor};
  }

  &:not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.accent};
  }
`;
