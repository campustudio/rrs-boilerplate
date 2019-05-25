import { postAwait } from '@libs/asyncReq';
import mock from './mock';

export function handleAwaitResObj(resObj) {
  console.log('handleAwaitResObj resObj: ', resObj);

  if (resObj) {
    if (resObj.error) {
      alert(resObj.error + '服务器异常');
      return null;
    }
    if (resObj.code && resObj.code !== '200') {
      alert(resObj.msg);
      return null;
    }
    if (resObj.status && resObj.status !== 200) {
      alert(resObj.message);
      return null;
    }

    return resObj.respData;
  }

  return null;
}

const getUsers = async (profile) => {
  const usersResObj = await postAwait('/api/users', {

  });
  const users = handleAwaitResObj(usersResObj) || [];

  return users;
};

export default {
  getUsers,
};
