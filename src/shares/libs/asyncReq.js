function handleAwaitRes(res) {
  if (res.status === 200) {
    return res.json();
  }

  const statusArr = [500, 403, 400, 404];
  try {
    if (statusArr.indexOf(res.status) !== -1) {
      throw new Error(`系统服务器${res.status}异常，请联系客服人员`);
    }
    if (res.status !== 200) {
      throw new Error('系统服务器异常，请联系客服人员');
    }
  } catch (err) {
    alert(err.toString());
  }

  return null;
}

export async function postAwait(url = '', obj = {}) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  const resObj = await handleAwaitRes(res);
  return resObj;
}

export async function getAwait(url = '', headersObj) {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      ...headersObj,
    }),
  });

  const resObj = await handleAwaitRes(res);
  return resObj;
}
