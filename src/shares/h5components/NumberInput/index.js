import React, { Component } from 'react';
import { InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeValue: '',
    };
  }

  onCodeChange = (codeValue) => {
    const { maxLength = 6 } = this.props;
    if (codeValue.length <= maxLength) {
      this.setState({
        codeValue,
      });
      const { onChange = () => {} } = this.props;
      onChange(codeValue);
    }
  }

  render() {
    const { form, placeholder = '', label = '数字键盘' } = this.props;
    const { getFieldProps } = form;

    const { codeValue } = this.state;
    return (
      <div>
        <InputItem
          {...getFieldProps('number')}
          type="number"
          placeholder={placeholder}
          onChange={this.onCodeChange}
          value={codeValue}
        >
          {label}
        </InputItem>
      </div>
    );
  }
}

export default createForm()(NumberInput);
