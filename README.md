## 发布npm包测试


1. 准备一个基础的 npm 包

> 信息如下： 
1. 包名称，版本，描述，关键字。
2. 开元协议，关联的仓库，bug和主页链接。
3. 发布的包dependencies 必须又一个依赖
    ```json
    {
      "name": "demo-publishpkg", 
      "version": "1.0.0",
      "description": "yongzhan test publishpkg to npm",
      "main": "src/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "demo-publishpkg"
      ],
      "author": "Yong zhan",
      "license": "MIT",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/tangyongzhan/demo-publishpkg.git"
      },
      "bugs": {
        "url": "https://github.com/tangyongzhan/demo-publishpkg/issues"
      },
      "homepage": "https://github.com/tangyongzhan/demo-publishpkg/#readme",
      "dependencies": {
        "rmc-feedback": "^2.0.0"
      }
    }
    ```
2. 将代码上传的github上。

3. 注册 npm 账号
