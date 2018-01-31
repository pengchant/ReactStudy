import _ from 'lodash';
// import './style.css';
// import icon from './logo.svg';
// import Data from './data.xml';
import printMe from './print.js';

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

    return element;
}

document.body.appendChild(component())