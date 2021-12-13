#!/bin/bash
# 用法: build.sh 后面跟分支名称，不加分支默认为master
# ./build.sh 直接执行构建master分支
# ./build.sh test 构建test分支

if [ ! -n "$1" ] ;then
echo "build master"
git checkout master
else
echo "build $1"
git checkout "$1"
fi

git pull
yarn && yarn build
