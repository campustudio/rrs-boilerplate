import qs from 'qs';

const getSearchObj = (search) => {
  return search ? (qs.parse(search, { ignoreQueryPrefix: true }) || {}) : {};
};

export default {
  getSearchObj,
};
