import React from 'react';
import { Exception } from 'ant-design-pro';

const NotFound = () => (
  <Exception
    type="404"
    redirect="www.baidu.com"
    backText="回到主页"
  />
);

export default NotFound;