import _ from 'lodash';
import './style.css';
import icon from './logo.svg';
import Data from './data.xml';
import printMe from './print.js';

import {cube} from './math.js'

if(process.env.NODE_ENV !='production'){
    console.log("这是在开发环境");
}

// function component(){
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello','webpack'],' ');
//     element.classList.add('hello');    
    
//     // // 添加图片
//     // var myIcon = new Image();
//     // myIcon.src = icon;
//     // myIcon.width="100";
//     // myIcon.height ="100";
//     // element.appendChild(myIcon);

//     // // 输出数据(xml)
//     // console.log(Data);

//     let btn = document.createElement('button');
//     btn.innerHTML = '点击并查看控制台';
//     btn.onclick = printMe;
//     element.appendChild(btn);

//     element.innerHTML += ['hello,webpack','cube(5) is ',cube(5)].join('<br/>');

//     return element;
// }

function getComponent(){
    return import(/* webpackChunkName: */ 'loadash').then(_=>{
        let element = document.createElement('div');
        element.innerHTML = _.join(['Hello','webpack'],' ');
        return element;
    }).catch(error=>'an error ocurred while loading the component.')
}

// document.body.appendChild(component())
let element = getComponent();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log("接受新更新的printMe模块!");
        // printMe();
        document.body.removeChild(element);
        element = getComponent();
        document.body.appendChild(element);
    })
}