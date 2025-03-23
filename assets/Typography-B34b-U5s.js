import{r as s,R as A,_ as P,a as G,c as M,j as N,f as ae,u as ue,s as q,M as le,g as ve,d as Ce,n as He,b as Be}from"./index-D1EtQeTk.js";const Ge=typeof window<"u"?s.useLayoutEffect:s.useEffect;function qe(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=s.useRef(e);return Ge(()=>{t.current=e}),s.useRef((...n)=>(0,t.current)(...n)).current}function ge(...e){return s.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{qe(n,t)})},e)}const be={};function Je(e,t){const n=s.useRef(be);return n.current===be&&(n.current=e(t)),n}const Ze=[];function Qe(e){s.useEffect(e,Ze)}class J{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new J}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function et(){const e=Je(J.create).current;return Qe(e.disposeEffect),e}let Z=!0,oe=!1;const tt=new J,nt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function rt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&nt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ot(e){e.metaKey||e.altKey||e.ctrlKey||(Z=!0)}function re(){Z=!1}function it(){this.visibilityState==="hidden"&&oe&&(Z=!0)}function st(e){e.addEventListener("keydown",ot,!0),e.addEventListener("mousedown",re,!0),e.addEventListener("pointerdown",re,!0),e.addEventListener("touchstart",re,!0),e.addEventListener("visibilitychange",it,!0)}function at(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Z||rt(t)}function ut(){const e=s.useCallback(r=>{r!=null&&st(r.ownerDocument)},[]),t=s.useRef(!1);function n(){return t.current?(oe=!0,tt.start(100,()=>{oe=!1}),t.current=!1,!0):!1}function a(r){return at(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:a,onBlur:n,ref:e}}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},ie(e,t)}function lt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const ye=A.createContext(null);function ct(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){var n=function(o){return t&&s.isValidElement(o)?t(o):o},a=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){a[r.key]=n(r)}),a}function pt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var a=Object.create(null),r=[];for(var o in e)o in t?r.length&&(a[o]=r,r=[]):r.push(o);var i,c={};for(var l in t){if(a[l])for(i=0;i<a[l].length;i++){var p=a[l][i];c[a[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function S(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ft(e,t){return ce(e.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:S(n,"appear",e),enter:S(n,"enter",e),exit:S(n,"exit",e)})})}function dt(e,t,n){var a=ce(e.children),r=pt(t,a);return Object.keys(r).forEach(function(o){var i=r[o];if(s.isValidElement(i)){var c=o in t,l=o in a,p=t[o],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:S(i,"exit",e),enter:S(i,"enter",e)}):!l&&c&&!d?r[o]=s.cloneElement(i,{in:!1}):l&&c&&s.isValidElement(p)&&(r[o]=s.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:S(i,"exit",e),enter:S(i,"enter",e)}))}}),r}var ht=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},mt={component:"div",childFactory:function(t){return t}},pe=function(e){lt(t,e);function t(a,r){var o;o=e.call(this,a,r)||this;var i=o.handleExited.bind(ct(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var i=o.children,c=o.handleExited,l=o.firstRender;return{children:l?ft(r,c):dt(r,i,c),firstRender:!1}},n.handleExited=function(r,o){var i=ce(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var l=P({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,c=G(r,["component","childFactory"]),l=this.state.contextValue,p=ht(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(ye.Provider,{value:l},p):A.createElement(ye.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);pe.propTypes={};pe.defaultProps=mt;function gt(e){const{className:t,classes:n,pulsate:a=!1,rippleX:r,rippleY:o,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,g]=s.useState(!1),m=M(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),y={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},h=M(n.child,d&&n.childLeaving,a&&n.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&l!=null){const b=setTimeout(l,p);return()=>{clearTimeout(b)}}},[l,c,p]),N.jsx("span",{className:m,style:y,children:N.jsx("span",{className:h})})}const R=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),bt=["center","classes","className"];let Q=e=>e,Re,Me,Ee,Te;const se=550,yt=80,Rt=le(Re||(Re=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Mt=le(Me||(Me=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Et=le(Ee||(Ee=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Tt=q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xt=q(gt,{name:"MuiTouchRipple",slot:"Ripple"})(Te||(Te=Q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),R.rippleVisible,Rt,se,({theme:e})=>e.transitions.easing.easeInOut,R.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,R.child,R.childLeaving,Mt,se,({theme:e})=>e.transitions.easing.easeInOut,R.childPulsate,Et,({theme:e})=>e.transitions.easing.easeInOut),vt=s.forwardRef(function(t,n){const a=ue({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i}=a,c=G(a,bt),[l,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const m=s.useRef(!1),y=et(),h=s.useRef(null),b=s.useRef(null),F=s.useCallback(f=>{const{pulsate:E,rippleX:T,rippleY:k,rippleSize:U,cb:W}=f;p(x=>[...x,N.jsx(xt,{classes:{ripple:M(o.ripple,R.ripple),rippleVisible:M(o.rippleVisible,R.rippleVisible),ripplePulsate:M(o.ripplePulsate,R.ripplePulsate),child:M(o.child,R.child),childLeaving:M(o.childLeaving,R.childLeaving),childPulsate:M(o.childPulsate,R.childPulsate)},timeout:se,pulsate:E,rippleX:T,rippleY:k,rippleSize:U},d.current)]),d.current+=1,g.current=W},[o]),w=s.useCallback((f={},E={},T=()=>{})=>{const{pulsate:k=!1,center:U=r||E.pulsate,fakeElement:W=!1}=E;if(f?.type==="mousedown"&&m.current){m.current=!1;return}f?.type==="touchstart"&&(m.current=!0);const x=W?null:b.current,L=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,D,I;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(L.width/2),D=Math.round(L.height/2);else{const{clientX:$,clientY:B}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round($-L.left),D=Math.round(B-L.top)}if(U)I=Math.sqrt((2*L.width**2+L.height**2)/3),I%2===0&&(I+=1);else{const $=Math.max(Math.abs((x?x.clientWidth:0)-C),C)*2+2,B=Math.max(Math.abs((x?x.clientHeight:0)-D),D)*2+2;I=Math.sqrt($**2+B**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{F({pulsate:k,rippleX:C,rippleY:D,rippleSize:I,cb:T})},y.start(yt,()=>{h.current&&(h.current(),h.current=null)})):F({pulsate:k,rippleX:C,rippleY:D,rippleSize:I,cb:T})},[r,F,y]),_=s.useCallback(()=>{w({},{pulsate:!0})},[w]),O=s.useCallback((f,E)=>{if(y.clear(),f?.type==="touchend"&&h.current){h.current(),h.current=null,y.start(0,()=>{O(f,E)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=E},[y]);return s.useImperativeHandle(n,()=>({pulsate:_,start:w,stop:O}),[_,w,O]),N.jsx(Tt,P({className:M(R.root,o.root,i),ref:b},c,{children:N.jsx(pe,{component:null,exit:!0,children:l})}))});function Ct(e){return ve("MuiButtonBase",e)}const Bt=ae("MuiButtonBase",["root","disabled","focusVisible"]),Vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Pt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:r}=e,i=Ce({root:["root",t&&"disabled",n&&"focusVisible"]},Ct,r);return n&&a&&(i.root+=` ${a}`),i},wt=q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),St=s.forwardRef(function(t,n){const a=ue({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:m=!1,LinkComponent:y="a",onBlur:h,onClick:b,onContextMenu:F,onDragLeave:w,onFocus:_,onFocusVisible:O,onKeyDown:f,onKeyUp:E,onMouseDown:T,onMouseLeave:k,onMouseUp:U,onTouchEnd:W,onTouchMove:x,onTouchStart:L,tabIndex:C=0,TouchRippleProps:D,touchRippleRef:I,type:$}=a,B=G(a,Vt),K=s.useRef(null),v=s.useRef(null),Ve=ge(v,I),{isFocusVisibleRef:fe,onFocus:Pe,onBlur:we,ref:Le}=ut(),[j,X]=s.useState(!1);p&&j&&X(!1),s.useImperativeHandle(r,()=>({focusVisible:()=>{X(!0),K.current.focus()}}),[]);const[ee,De]=s.useState(!1);s.useEffect(()=>{De(!0)},[]);const Ie=ee&&!d&&!p;s.useEffect(()=>{j&&m&&!d&&ee&&v.current.pulsate()},[d,m,j,ee]);function V(u,he,Ye=g){return H(me=>(he&&he(me),!Ye&&v.current&&v.current[u](me),!0))}const Ne=V("start",T),Fe=V("stop",F),ke=V("stop",w),$e=V("stop",U),je=V("stop",u=>{j&&u.preventDefault(),k&&k(u)}),Se=V("start",L),Oe=V("stop",W),Ue=V("stop",x),_e=V("stop",u=>{we(u),fe.current===!1&&X(!1),h&&h(u)},!1),We=H(u=>{K.current||(K.current=u.currentTarget),Pe(u),fe.current===!0&&(X(!0),O&&O(u)),_&&_(u)}),te=()=>{const u=K.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},ne=s.useRef(!1),Ke=H(u=>{m&&!ne.current&&j&&v.current&&u.key===" "&&(ne.current=!0,v.current.stop(u,()=>{v.current.start(u)})),u.target===u.currentTarget&&te()&&u.key===" "&&u.preventDefault(),f&&f(u),u.target===u.currentTarget&&te()&&u.key==="Enter"&&!p&&(u.preventDefault(),b&&b(u))}),ze=H(u=>{m&&u.key===" "&&v.current&&j&&!u.defaultPrevented&&(ne.current=!1,v.current.stop(u,()=>{v.current.pulsate(u)})),E&&E(u),b&&u.target===u.currentTarget&&te()&&u.key===" "&&!u.defaultPrevented&&b(u)});let Y=l;Y==="button"&&(B.href||B.to)&&(Y=y);const z={};Y==="button"?(z.type=$===void 0?"button":$,z.disabled=p):(!B.href&&!B.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ae=ge(n,Le,K),de=P({},a,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:m,tabIndex:C,focusVisible:j}),Xe=Pt(de);return N.jsxs(wt,P({as:Y,className:M(Xe.root,c),ownerState:de,onBlur:_e,onClick:b,onContextMenu:Fe,onFocus:We,onKeyDown:Ke,onKeyUp:ze,onMouseDown:Ne,onMouseLeave:je,onMouseUp:$e,onDragLeave:ke,onTouchEnd:Oe,onTouchMove:Ue,onTouchStart:Se,ref:Ae,tabIndex:p?-1:C,type:$},z,B,{children:[i,Ie?N.jsx(vt,P({ref:Ve,center:o},D)):null]}))});function Lt(e){return ve("MuiTypography",e)}ae("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Dt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],It=e=>{const{align:t,gutterBottom:n,noWrap:a,paragraph:r,variant:o,classes:i}=e,c={root:["root",o,e.align!=="inherit"&&`align${Be(t)}`,n&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return Ce(c,Lt,i)},Nt=q("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Be(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>P({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),xe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ft={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},kt=e=>Ft[e]||e,Ot=s.forwardRef(function(t,n){const a=ue({props:t,name:"MuiTypography"}),r=kt(a.color),o=He(P({},a,{color:r})),{align:i="inherit",className:c,component:l,gutterBottom:p=!1,noWrap:d=!1,paragraph:g=!1,variant:m="body1",variantMapping:y=xe}=o,h=G(o,Dt),b=P({},o,{align:i,color:r,className:c,component:l,gutterBottom:p,noWrap:d,paragraph:g,variant:m,variantMapping:y}),F=l||(g?"p":y[m]||xe[m])||"span",w=It(b);return N.jsx(Nt,P({as:F,ref:n,ownerState:b,className:M(w.root,c)},h))});export{St as B,Ot as T,lt as _,Ge as a,ct as b,H as c,et as d,ye as e,ut as f,qe as s,ge as u};
//# sourceMappingURL=Typography-B34b-U5s.js.map
