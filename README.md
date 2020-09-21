# create-utils-lib

使用 **monorepo** 方式进行多包管理，`lerna` + `yarn workspaces` 方案

- yarn 管理包依赖
- learn 管理版本发布

package.json 添加配置

```json
{
  "private": true,
  "name": "create-utils-lib",
  "workspaces": ["packages/*"]
}
```

如果`package/*`内的包已有`node_modules`，需先清除

```shell
lerna clean # 清理所有的node_modules
```

初始化安装项目依赖

```shell
# 1
yarn install
# 2
yarn workspaces run install
# 3
lerna bootstrap --npm-client yarn --use-workspaces
```

安装｜删除 依赖

- 为 package 安装，`yarn workspace packageB add packageA`为 packageB 安装 packageA
- 给所有 package 安装，`yarn workspaces add module`为所有的包安装 module
- 给 root（根）安装，`yarn add -W -D typescrip`安装
