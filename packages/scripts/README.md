# @create-utils-lib/scripts

基于`typescript`编译器来开发工具库

- [Getting Started](#Getting Started)
- [Commands](##Commands)

## Getting Started

install depend

```shell
yarn add @create-utils-lib/scripts -D
```

`package.json` add `scirpt command`

```json
{
  "dev": "utils-lib-scripts dev"
}
```

run command `yarn dev`

生成目录结构

```shell
|--esdoc
|--esTemp // es
|--dist
|--|--* // 编译后的代码
|--types // typescript 申明文件
```

## Commands

**`utils-lib-scripts dev`**

开发，涉及流程代码编译、文件变动监听、生成`esdoc`文档

options

- `-d`，默认`false`，当添加此参数会开启`esdoc`服务

**`utils-lib-scripts build`**

编译文件

- `-D`，默认`true`，当使用`typescript`开发时会生成`*.d.ts`文件

**`utils-lib-scripts doc`**

生成 esdoc 文档

**`utils-lib-scripts clean`**

清除生成的目录
