import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: initial;
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <InputBase onChange={onChange} placeholder={placeholder} {...props} />
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
