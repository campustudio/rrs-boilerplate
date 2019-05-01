import { message } from 'antd';
import moment from 'moment';

moment.locale('zh-CN');

const today = moment().valueOf();

// for url without '#' such as: ?taskId=5&dakaId=6&userId=9
export function getUrlParamValue() {
  let search = window.location.search;
  const mapper = {};
  search = search.slice(1, search.length).split('&');
  search.map((item) => {
    const temp = item.split('=');
    mapper[temp[0]] = temp[1];
  });
  return mapper;
}

const IMAGE_SIZE_LIMIT = 10 * 1024 * 1024;
export function beforeUploadImage(file) {
  return new Promise((success, failed) => {
    const isValidType = ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type);
    const isValidSize = file.size < IMAGE_SIZE_LIMIT;

    if (!isValidType) {
      message.error('仅支持jpg、png、jpeg格式!');
      failed(file);
    }

    if (!isValidSize) {
      message.error('图片应小于10M，请重新点击上传!');
      failed(file);
    }

    success(file);
  });
}

export function diffDaysDuration(endTime, beginTime) {
  const result = moment.duration(endTime.diff(beginTime, 'days'), 'days').asDays();
  return result + 1;
}

export function isBeforeToday(momentDate) {
  if (!momentDate) {
    return false;
  }

  if (momentDate.isBefore(today, 'day')) {
    return true;
  }

  return false;
}

export function safeJsonParse(jsonstr) {
  let result = {};
  try {
    result = JSON.parse(jsonstr);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
  }
}

export function safeTrim(s) {
  return typeof s === 'string' ? s.trim() : s;
}

let __localUid = 0;
export const uuid = () => ++__localUid;
