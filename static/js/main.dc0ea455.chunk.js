(this["webpackJsonpportfolio-react-router"]=this["webpackJsonpportfolio-react-router"]||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/aboutLogo.1cc4294e.JPG"},51:function(e,t,a){e.exports=a.p+"static/media/portfolio1.e1db45f0.jpg"},54:function(e,t,a){e.exports=a(90)},59:function(e,t,a){},60:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(59),a(60),a(8)),o=a(1),s=a(16),m=a(17);function d(){var e=Object(s.a)(["\n text-align:center;\n margin-bottom:10px;\n h2{\n    font-weight:400;\n    text-transform:capitalize;\n    letter-spacing:0.3rem;\n}\n.first{\n  \n}\n .underline{\n     width:40px;\n     margin:0 auto;\n    border:1px solid;\n }\n"]);return d=function(){return e},e}function p(e){return r.a.createElement(u,{className:"title",style:{color:e.color}},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"first"},r.a.createElement("div",{className:"underline"})))}var u=m.a.div(d()),h=a(47),E=a.n(h),f=a(27),g=a(48),b=a(49),k=a(53),v=a(52),y=[{id:1,link:"Home",path:"/",scrolling:"Home"},{id:2,link:"About",path:"/about",scrolling:"About"},{id:3,link:"Skills",path:"/skills",scrolling:"Skills"},{id:4,link:"Project",path:"/project",scrolling:"Project"},{id:5,link:"Weather",path:"/weather",scrolling:"Weather"}],N=[{id:1,title:"HTML5",percent:"ninety",number:"90%"},{id:2,title:"CSS3",percent:"ninety",number:"90%"},{id:3,title:"JAVASCRIPT",percent:"eighty",number:"80%"},{id:4,title:"REACT",percent:"eighty",number:"80%"},{id:5,title:"BOOTSTRAP",percent:"fifty",number:"50%"},{id:6,title:"NODE JS",percent:"eighty",number:"80%"},{id:7,title:"PYTHON",percent:"eighty",number:"80%"},{id:8,title:"POSTGRE-SQL",percent:"ninety",number:"90%"},{id:9,title:"MONGODB",percent:"eighty",number:"80%"},{id:10,title:"DJANGO",percent:"seventy",number:"70%"}],w=[{id:1,title:"FINANCE",percent:"ninety",number:"90%"},{id:2,title:"BUSINESS DEVELOPMENT",percent:"ninety",number:"90%"},{id:3,title:"MARKETING",percent:"eighty",number:"80%"},{id:4,title:"DRIVING",percent:"eighty",number:"80%"}],x=[{id:1,extlink:"https://ireneyap68.github.io/P1-Dice-Movement-Game/",img:"/photos/p1.png",title:"Mini Game App",cat:"HTML/CSS/Javascript"},{id:2,extlink:"https://irene-horos-secret-note.herokuapp.com/",img:"/photos/p2.png",title:"Lifestyle App",cat:"Node.js, PostgreSQL"},{id:3,extlink:"https://exit-code-zero.herokuapp.com/",img:"/photos/p3.png",title:"Social Media App",cat:"React, MongoDB"},{id:4,extlink:"https://yicha.herokuapp.com",img:"/photos/p4.png",title:"Online e-commerce App",cat:"Python, Django"}],S=[{id:1,title:"MALAY",percent:"ninety",number:"90%"},{id:2,title:"ENGLISH",percent:"seventy",number:"70%"},{id:3,title:"CHINESE",percent:"ninety",number:"90%"},{id:4,title:"THAI",percent:"fifty",number:"50%"}],j=r.a.createContext(),C=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sidebarOpen:!1,closeLinks:!1,links:y,headerShow:!1,devSkills:N,otherSkills:w,projects:x,languages:S,backMode:!1,setClass:JSON.parse(localStorage.getItem("Mode")),filterProjects:x,projectsBtnNames:["All","React","Html-Css"]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen}),console.log("clik")},e.handleClose=function(){!0===e.state.sidebarOpen&&e.setState({sidebarOpen:!1})},e.handleMode=function(){e.setState({backMode:!e.state.backMode})},e.scrollEffect=function(){window.scrollY>50?e.setState({headerShow:!0}):e.setState({headerShow:!1})},e.darkMode=function(){!0===JSON.parse(localStorage.getItem("Mode"))?e.setState({setClass:!1},(function(){localStorage.setItem("Mode",JSON.stringify(!1))})):e.setState({setClass:!0},(function(){localStorage.setItem("Mode",JSON.stringify(!0))}))},e.projectsBtns=function(t){console.log(t.target.value);var a=[];a="All"===t.target.value?e.state.projects:e.state.projects.filter((function(e){return e.cat===t.target.value})),e.setState({filterProjects:a})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollEffect)}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{handleSidebar:this.handleSidebar,handleClose:this.handleClose,scrollEffect:this.scrollEffect,handleMode:this.handleMode,darkMode:this.darkMode,projectsBtns:this.projectsBtns})},this.props.children)}}]),a}(n.Component),O=j.Consumer;function A(){return r.a.createElement(O,null,(function(e){var t=e.setClass;return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"container"},r.a.createElement(p,{title:"About",color:t?"#fefefe":"grey"}),r.a.createElement("div",{className:"about-center"},r.a.createElement("div",{className:"about-logo"},r.a.createElement("img",{src:E.a,alt:"aboutlogo"})),r.a.createElement("div",{className:t?"about-texts dark-mode-white":"about-texts"},r.a.createElement("div",{className:t?"dark-mode-orange":"profile"},r.a.createElement("h1",null,"My profile")),r.a.createElement("div",{className:"name"},r.a.createElement("p",null,r.a.createElement("span",{className:t?"dark-mode-orange":""})," First Name: Ai Lieng | Last Name: Yap")),r.a.createElement("div",{className:"adress"},r.a.createElement("p",null,r.a.createElement("span",{className:t?"dark-mode-orange":""},"Address:")," Antioch, California 94509")),r.a.createElement("div",{className:"email"},r.a.createElement("p",null,r.a.createElement("span",{className:t?"dark-mode-orange":""},"Email:")," ",r.a.createElement("a",{href:"mailto:ireneyap68@gmail.com",className:t?"dark-mode-mail":""},"ireneyap68@gmail.com"))),r.a.createElement("div",{className:"website"},r.a.createElement("p",null,r.a.createElement("span",{className:t?"dark-mode-orange":""},"Website:")," www.ireneyap68.com(under construction)")),r.a.createElement("div",{className:t?"about-media dark-mode-orangeBack":"about-media"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-youtube-square"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/odysseas-kolas-275582113/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://www.facebook.com/odyseas.kolas",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.twitter.com/odyssea11677554",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter"}))))),r.a.createElement("div",{className:t?"dark-mode-lightWhite generally":"generally"},r.a.createElement("span",{className:t?"dark-mode-orange":""},"Generally,"),r.a.createElement("p",null,"I graduated from Segi College, Malaysia in major Business Administration.I worked in my field from business development till finance management since many years. The software development came to my life when I wanted to create something for myself...and that was...it became my hobby and then I started my software engineering bootcamp to dive in the skills that I like so much. Below you will see my overall skills that i have in all fields in my life. "),r.a.createElement("div",{className:"certificates"},r.a.createElement("h4",null,"My certificates:"),r.a.createElement("p",null,"* Degree as ",r.a.createElement("b",null,"Business Administration"),"  from Malaysia."),r.a.createElement("p",null,"* Many certificates ",r.a.createElement("b",null," from the oil and gas field.")),r.a.createElement("p",null,"* Certificates in responsive websites,",r.a.createElement("b",null," html, css, javascript,   jquery, react.js, Bootstrap")," from ",r.a.createElement("b",{style:{color:"green"}},"General Assembly"))))))}))}function M(){return r.a.createElement(O,null,(function(e){var t=e.setClass;return r.a.createElement("div",{className:"skills"},r.a.createElement("div",{className:"container"},r.a.createElement(p,{title:" Skills",color:t?"white":"grey"}),r.a.createElement("div",{className:"skills-center"},r.a.createElement("div",{className:"skills-web"},r.a.createElement("h4",{className:t?"dark-mode-orange":""},"Software Dev skills :"),e.devSkills.map((function(e){return r.a.createElement("li",{key:e.id,className:t?"dark-mode-lightWhite":""},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:t?"newBar bar":"bar"},r.a.createElement("span",{className:e.percent},r.a.createElement("p",null,e.number))))}))),r.a.createElement("div",{className:"skills-other"},r.a.createElement("h4",{className:t?"dark-mode-orange":""},"Other skills:"),e.otherSkills.map((function(e){return r.a.createElement("li",{key:e.id,className:t?"dark-mode-lightWhite":""},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:t?"newBar bar":"bar"},r.a.createElement("span",{className:e.percent},r.a.createElement("p",null,e.number))))}))),r.a.createElement("div",{className:"skills-other"},r.a.createElement("h4",{className:t?"dark-mode-orange":""},"Languages:"),e.languages.map((function(e){return r.a.createElement("li",{key:e.id,className:t?"dark-mode-lightWhite":""},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:t?"newBar bar":"bar"},r.a.createElement("span",{className:e.percent},r.a.createElement("p",null,e.number))))}))))))}))}function B(){return r.a.createElement(O,null,(function(e){var t=e.setClass;return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"container"},r.a.createElement(p,{title:"projects",color:t?"#fefefe":"grey"}),r.a.createElement("div",{className:"projects-center"},e.filterProjects.map((function(e){return r.a.createElement("div",{className:t?"newBorder single-project":"single-project",key:e.id},r.a.createElement("a",{href:e.extlink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.img,alt:""}),"CLICK AND TRY"),r.a.createElement("p",null,e.title," creating by : ",e.cat))})))))}))}var I=a(26),L=a(50),P=a.n(L);function T(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"weather-name"},"Weather for ",e.weather.name),r.a.createElement("hr",null),r.a.createElement("p",null,"Currently temperature: ",9*(e.weather.main.temp-273.15)/5+32," degree "),r.a.createElement("p",null,"Highest of the day: ",9*(e.weather.main.temp_max-273.15)/5+32," degree "),r.a.createElement("p",null,"Lowest of the day: ",9*(e.weather.main.temp_min-273.15)/5+32," degree"))}function W(){var e=Object(n.useState)(""),t=Object(I.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),c=Object(I.a)(i,2),o=c[0],s=c[1];return r.a.createElement("div",{class:"jumbotron"},r.a.createElement("h1",{class:"display-4"},"\ud83c\udf26\u2744\ufe0f Find Weather in your American Area \u2600\ufe0f\u26c8"),r.a.createElement("div",{class:"card text-center"},o?r.a.createElement(T,{weather:o}):null,r.a.createElement("p",null,"Enter your zipcode to find current weather in your area! "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t="http://api.openweathermap.org/data/2.5/weather?zip=".concat(a,",us&appid=052f26926ae9784c2d677ca7bc5dec98");P.a.get(t).then((function(e){s(e.data)})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",{htmlFor:"zip"},"Zipcode: "),r.a.createElement("input",{type:"text",id:"zip",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Find Weather"}))))}var D=a(9);function R(){var e=Object(s.a)(["\n \nposition:sticky !important;\ntop:0 !important;\nz-index:6;\nbackground:",";\ntransition:",";\nopacity:",";\n.logoBtn img{\n    display:block;\n    padding:0px 0;\n    width:100px;\n    height:50px;\n  \n    padding:2px;\n}\n.header-container{\n   \n   \n    width:100%;\n    z-index:5;\n  \n}\n.bar{\n    width:35px;\n    margin:5px ;\n    padding:2px;\n    background:#fff;\n}\n.btn{\n    border:1px solid #f6f6f6;\n    display:inline-block;\n    cursor: pointer;\n}\n.logoBtn{\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    border-bottom:1px solid grey;\n    padding:10px;\n}\n.links{\n    transition:all 0.5s ease-in-out;\n    position:fixed;\n    top:76px;\n    bottom:0;\n    left:0;\n    right:0;\n    background:rgba(0,0,0,0.9);\n    width:400px;\n   \n    transform:",";\n    \n    \n}\n.links li a{\n    color:#fff;\n    text-transform:capitalize;\n    padding:10px;\n    display:block;\n    transition:all 0.5s ease-in;\n    border:1px solid transparent;\n    border-bottom:1px solid transparent;\n    font-size:18px;\n}\n.links li a:hover{\n    color:#41e1b3;\n    padding:10px 25px;\n    border-bottom:1px solid #049fe1;\n    background:rgba(0,0,0,1);\n}\n.headerTexts{\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    flex-direction:column;\n    min-height:inherit;\n    text-align:center;\n    padding:0 5px;\n}\n/* responsive version */\n@media screen and (min-width:660px){\n    .links{\n    transition:all 0s ease-in-out !important ;  \n    \n}\n.links li a{\n   /* transition:none; */\n}\n}\n@media screen and (min-width:664px){\n   \n .header-container{\n  \n    margin:0 auto;\n    \n    width:100%;\n   \n    }\n.btn{\n    display:none;\n}\n nav{\n    display:flex;\n    justify-content:space-between;\n    padding:0px 0;\n    max-width:1180px;\n    margin:0 auto;\n    position:relative;\n}\n   \n .links{\n     transition:all 0s ease-in-out !important;\n    display:flex;\n    margin-right:10px;\n    justify-content:space-between;\n    align-items:center;\n    position:relative;\n    top:auto;\n    background:transparent;\n    width:auto;\n    transform:",";\n }\n .links li a:hover{\n    padding:10px;\n    border:1px solid #049fe1;\n    background:transparent;\n    margin:0 2px;\n}\n.links li a{\n    margin:0px 2px;\n   \n    font-size:18px;\n    display:inline-block;\n    height:auto;\n}\n.logoBtn{\n   border-bottom:0 ;\n}\n}\n@media screen and (min-width:960px){\n.logoBtn img{\n    display:block;\n    padding:0px 0;\n   \n    \n}\n}\n"]);return R=function(){return e},e}function H(){return r.a.createElement(O,null,(function(e){var t=e.sidebarOpen,a=e.handleSidebar,n=e.handleClose,l=e.links,i=e.headerShow;return r.a.createElement(G,{className:e.setClass?"dark-nav":"",show:t,posit:i},r.a.createElement("div",{className:"header-container"},r.a.createElement("nav",null,r.a.createElement("div",{className:"logoBtn"},r.a.createElement(D.b,{to:"/",onClick:n},"PORTFOLIO | IRENE YAP | FULLSTACK SOFTWARE ENGINEER"),r.a.createElement("div",{className:"btn",onClick:a},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"}))),r.a.createElement("ul",{className:"links ",onClick:n},l.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(D.b,{to:"/",onClick:function(){return t=e.scrolling,void c.scroller.scrollTo(t,{duration:1500,delay:100,smooth:!0,offset:-80});var t}},e.link))}))))))}))}var G=m.a.div(R(),(function(e){return e.posit?"rgba(0,0,0,0.7)":"#666666"}),(function(e){return e.posit?"all 0.5s ease-in-out":"all 0s ease-in-out"}),(function(e){return e.posit?"1":"0.9"}),(function(e){return e.show?"translate(%)":"translate(-100%)"}),(function(e){return e.show,"translate(0)"})),z=a(51),J=a.n(z),F=a(18),Y=a.n(F);function _(){return r.a.createElement(O,null,(function(e){var t=e.setClass,a=e.darkMode;return r.a.createElement("section",{className:"header"},r.a.createElement("img",{src:J.a,alt:"img"}),r.a.createElement("div",{className:"inside-container"},r.a.createElement("div",{className:"texts"},r.a.createElement(Y.a,{right:!0,delay:500,duration:2e3,cascade:!0},r.a.createElement("h1",null,"Hello, I am Irene Yap")),r.a.createElement(Y.a,{left:!0,cascade:!0,delay:2e3,duration:2e3},r.a.createElement("h1",null,"Full-Stack Software Engineer ")),r.a.createElement(Y.a,{bottom:!0,delay:4e3,duration:3e3},r.a.createElement("a",{href:"mailto:ireneyap68@gmail.com",className:"contactBtn"},"Contact")))),r.a.createElement("div",{className:"btnMode"},r.a.createElement("div",{className:t?"btnIcons newBtnIcons":"  btnIcons",onClick:a},r.a.createElement("i",{className:"fas fa-moon"}),r.a.createElement("div",{className:t?"newBall ball":"  ball"}),r.a.createElement("i",{className:"fas fa-sun"}))))}))}var q=function(){return r.a.createElement(O,null,(function(e){var t=e.setClass;return r.a.createElement("div",{className:t?"dark-mode-black":"App"},r.a.createElement(H,null),r.a.createElement(c.Element,{name:"Home"},r.a.createElement(o.a,{exact:!0,path:"/",component:_})),r.a.createElement("div",{className:"basic"},r.a.createElement(c.Element,{name:"About"},r.a.createElement(o.a,{exact:!0,path:"/",component:A})),r.a.createElement(c.Element,{name:"Skills"},r.a.createElement(o.a,{exact:!0,path:"/",component:M})),r.a.createElement(c.Element,{name:"Project"},r.a.createElement(o.a,{exact:!0,path:"/",component:B})),r.a.createElement(c.Element,{name:"Weather"},r.a.createElement(o.a,{exact:!0,path:"/",component:W}))))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D.a,null,r.a.createElement(C,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.dc0ea455.chunk.js.map