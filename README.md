#  熊猫UI（PandaUI）-一个VUE UI组件
[![Build Status](https://www.travis-ci.org/python-cx/panda-ui.svg?branch=master)](https://www.travis-ci.org/python-cx/panda-ui)

## 介绍
这是在学习 Vue 过程中做得 UI 框架，希望对你有用
## 开始使用
1. 安装
    使用本框架钱，请在css中开启 border-box
    ```
    *{box-sizing:border-box}
    *::before,*::after{box-sizing:border-box}
    
    ```
    还需要设置颜色等变量
    ```
       html {
         --font-size: 14px;
         --button-height: 32px;
         --border-color: #999;
         --color: #41b884;
         --border-color-hover: #41b884;
         --border-radius: 4px;
         --button-background: white;
         --button-active-background: #999;
       } 
   ```
    IE 15 及以上浏览器支持

2. 安装
    ```
    npm i --save screwui-vue2
    ```
   
3. 引入screw
    ```
    import { Button } from "screwui-vue2";
    import "screwui-vue2/dist/index.css";
    export default {
       name: "App",
       components: {
            Button,
         },
       };
    ```
4. 引入    
        
   
 
## 文档
## 提问
## 变更记录
