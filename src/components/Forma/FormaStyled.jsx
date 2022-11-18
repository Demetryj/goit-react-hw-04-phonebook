import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[3]}px;
  width: 500px;

  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.borderColor};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.space[2]}px;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};

  cursor: pointer;

  &:focus-within {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Input = styled.input`
  padding: ${props => props.theme.space[2]}px;
  width: 300px;

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

export const Button = styled.button`
  padding: ${props => props.theme.space[2]}px;

  width: 120px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.m};

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  box-shadow: ${props => props.theme.shadows.second};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }
`;
