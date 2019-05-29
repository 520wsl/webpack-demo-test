// import _ from 'lodash';
import {cube} from "./math";
import './style.css';
import Icon from './wechat.png';
import Data from './data.xml';
import printMe from './print.js';


function component() {
    var element = document.createElement('div');
    // var element = document.createElement('pre');


    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', ' 测试打包生成js', 'Mad Dragon 233'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // element.innerHTML = [
    //     'Hello.webpack!',
    //     '5 cube is equal to ' + cube(5)
    // ].join('\n\n');

    console.log(Data);

    return element;
}

document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe()
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }