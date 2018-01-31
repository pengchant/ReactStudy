import _ from 'lodash';
import './style.css';
// import icon from './logo.svg';
// import Data from './data.xml';
import printMe from './print.js';

import {cube} from './math.js'

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello');    
    
    // // 添加图片
    // var myIcon = new Image();
    // myIcon.src = icon;
    // myIcon.width="100";
    // myIcon.height ="100";
    // element.appendChild(myIcon);

    // // 输出数据(xml)
    // console.log(Data);

    let btn = document.createElement('button');
    btn.innerHTML = '点击并查看控制台';
    btn.onclick = printMe;
    element.appendChild(btn);

    element.innerHTML += ['hello,webpack','cube(5) is ',cube(5)].join('<br/>');

    return element;
}

// document.body.appendChild(component())
let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log("接受新更新的printMe模块!");
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}