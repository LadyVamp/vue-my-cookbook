#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist


git init
git add -A
git commit -m 'deploy'


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:LadyVamp/vue-my-cookbook.git master:gh-pages

cd -