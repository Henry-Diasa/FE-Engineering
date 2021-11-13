const sum = require("./sum");
import "./test.js"
import "./index.css";
import "./a.less";
import "./font/iconfont.css"
sum(1, 2);

const divEl = document.createElement('div')
const imgEl = new Image()

// imgEl.src = require("./Nodejs.png").default
import imgSrc from './Nodejs.png'
imgEl.src = imgSrc

divEl.appendChild(imgEl)
const div2 = document.createElement('div')
div2.style.width = 200 + 'px'
div2.style.height = 200 + 'px'
div2.className = 'bg-image'
div2.style.backgroundColor = "blue"
document.body.appendChild(divEl)
document.body.appendChild(div2)


const iEl = document.createElement('i')
iEl.className = "iconfont icon-banquan"

document.body.appendChild(iEl)