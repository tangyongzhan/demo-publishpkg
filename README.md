## 发布npm包测试

1. 准备一个基础的 npm 包

> npm包信息如下： 
1. 包名称，版本，描述，关键字。
2. 开元协议，关联的仓库，bug和主页链接。
3. 发布的包dependencies 必须又一个依赖
```json
{
  "name": "demo-yongzhan-publishpkg",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "demo-yongzhan-publishpkg"
  ],
  "author": "Yong zhan",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tangyongzhan/demo-yongzhan-publishpkg.git"
  },
  "bugs": {
    "url": "https://github.com/tangyongzhan/demo-yongzhan-publishpkg/issues"
  },
  "homepage": "https://github.com/tangyongzhan/demo-yongzhan-publishpkg/#readme",
  "dependencies": {
    "axios": "^0.21.1"
  }
}

```
2. 将代码上传的github上,并添加开源协议文件，内容如下：例子（MIT协议）
```
MIT License

Copyright (c) 2021 yongzhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

3. 注册 npm 账号,然后登录
```
npm login 输入用户名，密码，邮箱等
```

4. 发布包
```
npm publish
```

5. 使用发布的包
```
npm i demo-yongzhan-publishpkg
```

学习网址
```
https://www.youtube.com/watch?v=Ufwbp838yZA
```