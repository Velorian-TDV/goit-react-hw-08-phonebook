"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[332],{7332:function(n,p,e){e.r(p),e.d(p,{default:function(){return w}});var x=e(4165),r=e(5861),t=e(9434),a=e(1538),o=e(3634),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,p){return n+=(p&=63)<36?p.toString(36):p<62?(p-26).toString(36).toUpperCase():p>62?"-":"_"}),"")},s=e(3329);function c(n){var p=n.name,e=n.type,x=n.pattern,r=n.title,t=n.placeholder;return(0,s.jsx)("section",{children:(0,s.jsx)("input",{type:e,name:p,id:p,pattern:x,title:r,placeholder:t,autoComplete:"off",required:!0})},i())}function f(){var n=(0,t.v9)(a.Un),p=(0,t.I0)(),e=function(){var e=(0,r.Z)((0,x.Z)().mark((function e(r){var t,a,i,s;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t=r.target,a=t.name,i=t.phone,n.find((function(n){return n.name===a.value}))?alert("contact exist"):(s={name:a.value,number:i.value},p((0,o.uK)(s)));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.jsxs)("form",{className:"form",onSubmit:e,children:[(0,s.jsx)(c,{type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,s.jsx)(c,{type:"text",name:"phone",placeholder:"Number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,s.jsx)("button",{type:"submit",children:"Add Contact"})]})}var d=e(6895);function l(){var n=(0,t.I0)();return(0,s.jsx)("section",{className:"search",children:(0,s.jsx)("input",{type:"text",id:"search",onChange:function(p){return n((0,d.Tv)(p.target.value.toLowerCase()))},placeholder:"Find contact by name",autoComplete:"off"})})}var u=e(2791),h=e(6382);function b(){var n=(0,t.I0)(),p=(0,t.v9)(a.Un),e=(0,t.v9)(d.zT),x=(0,t.v9)(a.fD),r=(0,t.v9)(a.UT),i=function(){var n=p.filter((function(n){return n.name.toLowerCase().includes(e)}));return""===e?p:n};return(0,u.useEffect)((function(){n((0,o.yF)())}),[n]),(0,s.jsx)("section",{className:"contacts",children:0===i().length?x&&!r&&(0,s.jsx)("p",{className:"empty",children:"Loading ..."})||(0,s.jsx)("p",{className:"empty",children:"Contacts not found"}):(0,s.jsx)("ul",{children:i().map((function(p){var e=p.id,x=p.name,r=p.number;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:[x,": ",r]}),(0,s.jsx)("button",{type:"button",name:e,onClick:function(){return function(p){return n((0,o.GK)(p))}(e)},children:"Delete"})]},(0,h.x0)())}))})})}var g,m=e(168),v=e(5867).zo.div(g||(g=(0,m.Z)(["\n    display: flex;\n    position: relative;\n\n    width: 100%;\n    height: 100%;\n\n    .empty{\n        text-align: center;\n    }\n\n    .form{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        color: #162946;\n        width: 250px;\n        height: 220px;\n        margin: 30px;\n        padding: 15px;\n        border-radius: 10px;\n        background-color: #f1f2f6;\n        box-shadow: -14px -14px 20px 0 #fff, \n                    inset 1px 1px 1px 0 #fff, \n                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), \n                    -2px -2px 14px 4px #fff, \n                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), \n                    3px 3px 15px 0 #c4ceda;\n        input{\n            height: 35px;\n            width: 100%;\n            padding: 10px;\n            margin-top: 10px;\n\n            outline: none;\n            border: none;\n            border-radius: 10px;\n            background-color: #f1f2f6;\n            box-shadow: inset -3px -2px 7px 0 #fff, \n                        inset 3px 3px 7px -2px #c4ceda;\n            color: #446079;\n        }\n\n        button{\n            width: 150px;\n            height: 35px;\n            margin: 30px 0px;\n\n            border: none;\n            border-radius: 10px;\n            transition: .3s box-shadow linear,\n                        .2s color linear,\n                        .3s opacity linear;\n            background-color: #f1f2f6;\n            box-shadow: -14px -14px 20px 0 #fff, \n                        inset 1px 1px 1px 0 #fff, \n                        3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                        -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                        0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), \n                        -2px -2px 14px 4px #fff, \n                        3px 3px 20px 10px rgba(176, 196, 219, 0.52), \n                        3px 3px 15px 0 #c4ceda;\n\n            &:hover{\n                color: #f50;\n            }\n\n            &:active{\n                color: #f50;\n                box-shadow: inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), \n                            inset -3px -3px 5px 0 #fff, \n                            inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), \n                            inset 1px 1px 16px -13px #6f8197;\n            }\n        }\n    }\n\n    .search{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        height: 85px;\n\n        color: #162946;\n        margin: 30px;\n        padding: 15px;\n        border-radius: 10px;\n        background-color: #f1f2f6;\n        box-shadow: -14px -14px 20px 0 #fff, \n                    inset 1px 1px 1px 0 #fff, \n                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), \n                    -2px -2px 14px 4px #fff, \n                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), \n                    3px 3px 15px 0 #c4ceda;\n        input{\n            height: 35px;\n            width: 100%;\n            padding: 10px;\n            margin-top: 10px;\n\n            outline: none;\n            border: none;\n            border-radius: 10px;\n            background-color: #f1f2f6;\n            box-shadow: inset -3px -2px 7px 0 #fff, \n                        inset 3px 3px 7px -2px #c4ceda;\n            color: #446079;\n        }\n    }\n\n    .contacts{\n        width: 350px;\n\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 5px;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: lightgray;\n            border-radius: 15px;\n        }\n        \n        color: #162946;\n        margin: 30px;\n        padding: 15px;\n        border-radius: 10px;\n        background-color: #f1f2f6;\n        box-shadow: -14px -14px 20px 0 #fff, \n                    inset 1px 1px 1px 0 #fff, \n                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), \n                    -2px -2px 14px 4px #fff, \n                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), \n                    3px 3px 15px 0 #c4ceda;\n        ul{\n            padding: 10px;\n\n            li{\n                display: flex;\n                align-items: center;\n\n                width: 100%;\n                height: 40px;\n                padding: 0px 10px;\n                margin: 15px 0px;\n\n                border-radius: 10px;\n                box-shadow: \n                            -10px -10px 20px 0 #fff, \n                            inset 1px 1px 1px 0 #fff, \n                            3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                            -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                            0 -10px 20px 0 hsla(0, 0%, 100%, 0.6), \n                            3px 3px 15px 0 #c4ceda\n                            ;\n                button{\n                    margin-left: auto;\n                    padding: 5px 10px;\n                    border: none;\n                    border-radius: 5px;\n                    transition: .3s box-shadow linear,\n                                .2s color linear,\n                                .3s opacity linear;\n                    background-color: #f1f2f6;\n                    box-shadow: \n                                inset 1px 1px 1px 0 #fff, \n                                3px 3px 6px 0 rgba(185, 202, 216, 0.64), \n                                -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), \n                                0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), \n                                -2px -2px 14px 4px #fff, \n                                3px 3px 20px 10px rgba(176, 196, 219, 0.52), \n                                3px 3px 15px 0 #c4ceda;\n\n                    &:hover{\n                        color: #f50;\n                    }\n\n                    &:active{\n                        color: #f50;\n                        box-shadow: inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), \n                                    inset -3px -3px 5px 0 #fff, \n                                    inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), \n                                    inset 1px 1px 16px -13px #6f8197;\n                    }\n                }\n            }\n        }\n    }\n\n"])));function w(){return(0,s.jsxs)(v,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(l,{}),(0,s.jsx)(b,{})]})}}}]);
//# sourceMappingURL=332.1b573801.chunk.js.map