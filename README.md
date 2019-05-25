## Installation
Clone repo and run:

```
yarn
yarn start
```

nginx config location:
```sh
location ~ ^/rspa/(?<subapp>\w+)/.* {
  root   html;
  index  index.html index.htm;
  try_files  $uri $uri/ /rspa/$subapp/index.html;
}
```

