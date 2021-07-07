// import { createApp } from 'vue'

// v-dialogDrag: 弹窗拖拽
// createApp({}).directive('dialogdrag', {

export const datg = {
    beforeMount(el, binding) {
        el.style.background = binding.value
    }
}
// export const datg = {
//     mounted() {
//         console.log("dialogdrag")
//     },
//     // mounted(el) {
//     //     console.log("directive")
//     //     const dialogHeaderEl = el.querySelector('.el-dialog__header');
//     //     const dragDom = el.querySelector('.el-dialog');
//     //     dialogHeaderEl.style.cursor = 'move';

//     //     // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
//     //     const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
        
//     //     dialogHeaderEl.onmousedown = (e) => {
//     //         // 鼠标按下，计算当前元素距离可视区的距离
//     //         const disX = e.clientX - dialogHeaderEl.offsetLeft;
//     //         const disY = e.clientY - dialogHeaderEl.offsetTop;
            
//     //         // 获取到的值带px 正则匹配替换
//     //         let styL, styT;

//     //         // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
//     //         if(sty.left.includes('%')) {
//     //             styL = +document.body.clientWidth * (+sty.left.replace(/%/g, '') / 100);
//     //             styT = +document.body.clientHeight * (+sty.top.replace(/%/g, '') / 100);
//     //         }else {
//     //             styL = +sty.left.replace(/\px/g, '');
//     //             styT = +sty.top.replace(/\px/g, '');
//     //         }
            
//     //         document.onmousemove = function (e) {
//     //             // 通过事件委托，计算移动的距离 
//     //             const l = e.clientX - disX;
//     //             const t = e.clientY - disY;

//     //             // 移动当前元素  
//     //             dragDom.style.left = `${l + styL}px`;
//     //             dragDom.style.top = `${t + styT}px`;

//     //             //将此时的位置传出去
//     //             //binding.value({x:e.pageX,y:e.pageY})
//     //         };

//     //         document.onmouseup = function () {
//     //             document.onmousemove = null;
//     //             document.onmouseup = null;
//     //         };
//     //     }  
//     // }
// // })
// }

// // v-dialogDragWidth: 弹窗宽度拖大 拖小
// Vue.directive('dialogDragWidth', {
//     bind(el, binding, vnode, oldVnode) {
//         const dragDom = binding.value.$el.querySelector('.el-dialog');

//         el.onmousedown = (e) => {
            
//             // 鼠标按下，计算当前元素距离可视区的距离
//             const disX = e.clientX - el.offsetLeft;
            
//             document.onmousemove = function (e) {
//                 e.preventDefault(); // 移动时禁用默认事件

//                 // 通过事件委托，计算移动的距离 
//                 const l = e.clientX - disX;
//                 dragDom.style.width = `${l}px`;
//             };

//             document.onmouseup = function (e) {
//                 document.onmousemove = null;
//                 document.onmouseup = null;
//             };
//         }  
//     }
// })

// Vue.directive('showTips', {
// 	// el {element} 当前元素
// 	bind (el, binding, vnode, oldVnode) {
// 	  const curStyle = el.currentStyle || window.getComputedStyle(el, null) // 获取当前元素的style
//       const textSpan = document.createElement('span') // 创建一个容器来记录文字的width
//       // 设置新容器的字体样式，确保与当前需要隐藏的样式相同
//     //   console.log("qwer",textSpan, curStyle)
// 	  textSpan.style.fontSize = curStyle.fontSize
// 	  textSpan.style.fontWeight = curStyle.fontWeight
//       textSpan.style.fontFamily = curStyle.fontFamily
// 	  // 将容器插入body，如果不插入，offsetWidth为0
// 	  document.body.appendChild(textSpan)
// 	  // 设置新容器的文字
//     //   textSpan.innerHTML = el.innerText
//       textSpan.innerText = el.innerText
//       let a = textSpan.offsetWidth
//       // 如果字体元素大于当前元素，则需要隐藏
// 	  if (textSpan.offsetWidth > el.offsetWidth) {
// 	    // 给当前元素设置超出隐藏
// 	    // el.style.overflow = 'hidden'
// 	    // el.style.textOverflow = 'ellipsis'
// 	    // el.style.whiteSpace = 'nowrap'
//         // 鼠标移入
// 	    el.onmouseenter = function (e) {
//           // 因为在外面获取不到el.offsetWidth并且在里面textSpan.offsetWidth为0,所以此处再加一次判断
//         // console.log("directive", el, textSpan.offsetWidth, el.  offsetWidth)
// 	      if (a > el.offsetWidth) {
//             // 创建浮层元素并设置样式
//             const vcTooltipDom = document.createElement('div')
//             vcTooltipDom.style.cssText = `
//                 max-width:400px;
//                 max-height: 400px;
//                 overflow: auto;
//                 position:absolute;
//                 top:${e.clientY + 5}px;
//                 left:${e.clientX}px;
//                 background: rgba(0, 0 , 0, .6);
//                 color:#fff;
//                 border-radius:5px;
//                 padding:10px;
//                 display:inline-block;
//                 font-size:14px;
//                 z-index:19999
//             `
//             // 设置id方便寻找
//             vcTooltipDom.setAttribute('id', 'vc-tooltip')
//             // 将浮层插入到body中
//             document.body.appendChild(vcTooltipDom)
//             // 浮层中的文字
//             document.getElementById('vc-tooltip').innerHTML = el.innerText
//           }
//         }
// 	    // 鼠标移出
// 	    el.onmouseleave = function () {
// 	      // 找到浮层元素并移出
// 	      const vcTooltipDom = document.getElementById('vc-tooltip')
// 	      vcTooltipDom && document.body.removeChild(vcTooltipDom)
// 	    }
// 	  } //
// 	  // 记得移除刚刚创建的记录文字的容器
// 	  document.body.removeChild(textSpan)
// 	},
// 	// 指令与元素解绑时
// 	unbind () {
// 	  // 找到浮层元素并移除
// 	  const vcTooltipDom = document.getElementById('vc-tooltip')
// 	  vcTooltipDom && document.body.removeChild(vcTooltipDom)
// 	}
// })
