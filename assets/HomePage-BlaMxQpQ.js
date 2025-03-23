import{j as m,f as G,g as Q,r as R,u as X,a as J,_ as k,c as F,s as V,b as S,d as Y,k as N,l as re,m as De,B as ee,R as Ee,L as We}from"./index-BuoBi4U3.js";import{u as Ae,B as ue,_ as Ue,b as pe,T as ae}from"./Typography-Bx1ZZ8VV.js";import{s as Be,S as fe,l as He}from"./bookmarkletLoader-RkFg8PvA.js";import{u as Ve,f as qe,a as Ke,O as Ge,F as Qe,I as Xe,b as je,S as Pe,c as _e,M as me}from"./Select-kN2uB_ks.js";import{c as Je,P as Ye}from"./Paper-CZkiuE2n.js";import{B as ve}from"./Button-hf8vB64D.js";import"./listItemTextClasses-cUh3ni16.js";import"./useSlotProps-L6c3BBUY.js";import"./useTheme-BlVARqJ5.js";import"./dividerClasses-hKp-LgJZ.js";const Ze=Je(m.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function et(e){return Q("MuiChip",e)}const x=G("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),tt=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],ot=e=>{const{classes:t,disabled:r,size:a,color:n,iconColor:g,onDelete:u,clickable:s,variant:d}=e,h={root:["root",d,r&&"disabled",`size${S(a)}`,`color${S(n)}`,s&&"clickable",s&&`clickableColor${S(n)}`,u&&"deletable",u&&`deletableColor${S(n)}`,`${d}${S(n)}`],label:["label",`label${S(a)}`],avatar:["avatar",`avatar${S(a)}`,`avatarColor${S(n)}`],icon:["icon",`icon${S(a)}`,`iconColor${S(g)}`],deleteIcon:["deleteIcon",`deleteIcon${S(a)}`,`deleteIconColor${S(n)}`,`deleteIcon${S(d)}Color${S(n)}`]};return Y(h,et,t)},rt=V("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{color:a,iconColor:n,clickable:g,onDelete:u,size:s,variant:d}=r;return[{[`& .${x.avatar}`]:t.avatar},{[`& .${x.avatar}`]:t[`avatar${S(s)}`]},{[`& .${x.avatar}`]:t[`avatarColor${S(a)}`]},{[`& .${x.icon}`]:t.icon},{[`& .${x.icon}`]:t[`icon${S(s)}`]},{[`& .${x.icon}`]:t[`iconColor${S(n)}`]},{[`& .${x.deleteIcon}`]:t.deleteIcon},{[`& .${x.deleteIcon}`]:t[`deleteIcon${S(s)}`]},{[`& .${x.deleteIcon}`]:t[`deleteIconColor${S(a)}`]},{[`& .${x.deleteIcon}`]:t[`deleteIcon${S(d)}Color${S(a)}`]},t.root,t[`size${S(s)}`],t[`color${S(a)}`],g&&t.clickable,g&&a!=="default"&&t[`clickableColor${S(a)})`],u&&t.deletable,u&&a!=="default"&&t[`deletableColor${S(a)}`],t[d],t[`${d}${S(a)}`]]}})(({theme:e,ownerState:t})=>{const r=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return k({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${x.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:r,fontSize:e.typography.pxToRem(12)},[`& .${x.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${x.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${x.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${x.icon}`]:k({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&k({color:e.vars?e.vars.palette.Chip.defaultIconColor:r},t.color!=="default"&&{color:"inherit"})),[`& .${x.deleteIcon}`]:k({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:N(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:N(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:N(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:N(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>k({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:N(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:N(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>k({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${x.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${x.avatar}`]:{marginLeft:4},[`& .${x.avatarSmall}`]:{marginLeft:2},[`& .${x.icon}`]:{marginLeft:4},[`& .${x.iconSmall}`]:{marginLeft:2},[`& .${x.deleteIcon}`]:{marginRight:5},[`& .${x.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:N(e.palette[t.color].main,.7)}`,[`&.${x.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:N(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:N(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${x.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:N(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),at=V("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:r}=e,{size:a}=r;return[t.label,t[`label${S(a)}`]]}})(({ownerState:e})=>k({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function ge(e){return e.key==="Backspace"||e.key==="Delete"}const nt=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiChip"}),{avatar:n,className:g,clickable:u,color:s="default",component:d,deleteIcon:h,disabled:z=!1,icon:f,label:T,onClick:I,onDelete:b,onKeyDown:o,onKeyUp:i,size:l="medium",variant:p="filled",tabIndex:y,skipFocusWhenDisabled:$=!1}=a,v=J(a,tt),c=R.useRef(null),C=Ae(c,r),j=O=>{O.stopPropagation(),b&&b(O)},P=O=>{O.currentTarget===O.target&&ge(O)&&O.preventDefault(),o&&o(O)},D=O=>{O.currentTarget===O.target&&(b&&ge(O)?b(O):O.key==="Escape"&&c.current&&c.current.blur()),i&&i(O)},L=u!==!1&&I?!0:u,U=L||b?ue:d||"div",E=k({},a,{component:U,disabled:z,size:l,color:s,iconColor:R.isValidElement(f)&&f.props.color||s,onDelete:!!b,clickable:L,variant:p}),M=ot(E),B=U===ue?k({component:d||"div",focusVisibleClassName:M.focusVisible},b&&{disableRipple:!0}):{};let W=null;b&&(W=h&&R.isValidElement(h)?R.cloneElement(h,{className:F(h.props.className,M.deleteIcon),onClick:j}):m.jsx(Ze,{className:F(M.deleteIcon),onClick:j}));let H=null;n&&R.isValidElement(n)&&(H=R.cloneElement(n,{className:F(M.avatar,n.props.className)}));let w=null;return f&&R.isValidElement(f)&&(w=R.cloneElement(f,{className:F(M.icon,f.props.className)})),m.jsxs(rt,k({as:U,className:F(M.root,g),disabled:L&&z?!0:void 0,onClick:I,onKeyDown:P,onKeyUp:D,ref:C,tabIndex:$&&z?-1:y,ownerState:E},B,v,{children:[H||w,m.jsx(at,{className:F(M.label),ownerState:E,children:T}),W]}))});function it(e){return Q("MuiCard",e)}G("MuiCard",["root"]);const lt=["className","raised"],st=e=>{const{classes:t}=e;return Y({root:["root"]},it,t)},ct=V(Ye,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),dt=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiCard"}),{className:n,raised:g=!1}=a,u=J(a,lt),s=k({},a,{raised:g}),d=st(s);return m.jsx(ct,k({className:F(d.root,n),elevation:g?8:void 0,ref:r,ownerState:s},u))});function ut(e){return Q("MuiCardActions",e)}G("MuiCardActions",["root","spacing"]);const pt=["disableSpacing","className"],ft=e=>{const{classes:t,disableSpacing:r}=e;return Y({root:["root",!r&&"spacing"]},ut,t)},mt=V("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>k({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),vt=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiCardActions"}),{disableSpacing:n=!1,className:g}=a,u=J(a,pt),s=k({},a,{disableSpacing:n}),d=ft(s);return m.jsx(mt,k({className:F(d.root,g),ownerState:s,ref:r},u))});function gt(e){return Q("MuiCardContent",e)}G("MuiCardContent",["root"]);const ht=["className","component"],bt=e=>{const{classes:t}=e;return Y({root:["root"]},gt,t)},yt=V("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Ct=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiCardContent"}),{className:n,component:g="div"}=a,u=J(a,ht),s=k({},a,{component:g}),d=bt(s);return m.jsx(yt,k({as:g,className:F(d.root,n),ownerState:s,ref:r},u))});function xt(e){return Q("MuiFormHelperText",e)}const he=G("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var be;const St=["children","className","component","disabled","error","filled","focused","margin","required","variant"],It=e=>{const{classes:t,contained:r,size:a,disabled:n,error:g,filled:u,focused:s,required:d}=e,h={root:["root",n&&"disabled",g&&"error",a&&`size${S(a)}`,r&&"contained",s&&"focused",u&&"filled",d&&"required"]};return Y(h,xt,t)},$t=V("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${S(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})(({theme:e,ownerState:t})=>k({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${he.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${he.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),Tt=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiFormHelperText"}),{children:n,className:g,component:u="p"}=a,s=J(a,St),d=Ve(),h=qe({props:a,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),z=k({},a,{component:u,contained:h.variant==="filled"||h.variant==="outlined",variant:h.variant,size:h.size,disabled:h.disabled,error:h.error,filled:h.filled,focused:h.focused,required:h.required}),f=It(z);return m.jsx($t,k({as:u,ownerState:z,className:F(f.root,g),ref:r},s,{children:n===" "?be||(be=m.jsx("span",{className:"notranslate",children:"​"})):n}))});function kt(e){return Q("MuiTextField",e)}G("MuiTextField",["root"]);const Rt=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],zt={standard:Xe,filled:Qe,outlined:Ge},Ot=e=>{const{classes:t}=e;return Y({root:["root"]},kt,t)},jt=V(_e,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Pt=R.forwardRef(function(t,r){const a=X({props:t,name:"MuiTextField"}),{autoComplete:n,autoFocus:g=!1,children:u,className:s,color:d="primary",defaultValue:h,disabled:z=!1,error:f=!1,FormHelperTextProps:T,fullWidth:I=!1,helperText:b,id:o,InputLabelProps:i,inputProps:l,InputProps:p,inputRef:y,label:$,maxRows:v,minRows:c,multiline:C=!1,name:j,onBlur:P,onChange:D,onFocus:L,placeholder:U,required:E=!1,rows:M,select:B=!1,SelectProps:W,type:H,value:w,variant:O="outlined"}=a,te=J(a,Rt),oe=k({},a,{autoFocus:g,color:d,disabled:z,error:f,fullWidth:I,multiline:C,required:E,select:B,variant:O}),ne=Ot(oe),A={};O==="outlined"&&(i&&typeof i.shrink<"u"&&(A.notched=i.shrink),A.label=$),B&&((!W||!W.native)&&(A.id=void 0),A["aria-describedby"]=void 0);const _=Ke(o),q=b&&_?`${_}-helper-text`:void 0,ce=$&&_?`${_}-label`:void 0,we=zt[O],de=m.jsx(we,k({"aria-describedby":q,autoComplete:n,autoFocus:g,defaultValue:h,fullWidth:I,multiline:C,name:j,rows:M,maxRows:v,minRows:c,type:H,value:w,id:_,inputRef:y,onBlur:P,onChange:D,onFocus:L,placeholder:U,inputProps:l},A,p));return m.jsxs(jt,k({className:F(ne.root,s),disabled:z,error:f,fullWidth:I,ref:r,required:E,color:d,variant:O,ownerState:oe},te,{children:[$!=null&&$!==""&&m.jsx(je,k({htmlFor:_,id:ce},i,{children:$})),B?m.jsx(Pe,k({"aria-describedby":q,id:_,labelId:ce,value:w,input:de},W,{children:u})):de,b&&m.jsx(Tt,k({id:q},T,{children:b}))]}))});var ye=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function _t(e,t){return!!(e===t||ye(e)&&ye(t))}function Mt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function ie(e,t){t===void 0&&(t=Mt);var r,a=[],n,g=!1;function u(){for(var s=[],d=0;d<arguments.length;d++)s[d]=arguments[d];return g&&r===this&&t(s,a)||(n=e.apply(this,s),g=!0,r=this,a=s),n}return u}var Ft=typeof performance=="object"&&typeof performance.now=="function",Ce=Ft?function(){return performance.now()}:function(){return Date.now()};function xe(e){cancelAnimationFrame(e.id)}function Lt(e,t){var r=Ce();function a(){Ce()-r>=t?e.call(null):n.id=requestAnimationFrame(a)}var n={id:requestAnimationFrame(a)};return n}var le=-1;function Se(e){if(e===void 0&&(e=!1),le===-1||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),le=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return le}var K=null;function Ie(e){if(e===void 0&&(e=!1),K===null||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var a=document.createElement("div"),n=a.style;return n.width="100px",n.height="100px",t.appendChild(a),document.body.appendChild(t),t.scrollLeft>0?K="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?K="negative":K="positive-ascending"),document.body.removeChild(t),K}return K}var Nt=150,wt=function(t,r){return t};function Dt(e){var t,r=e.getItemOffset,a=e.getEstimatedTotalSize,n=e.getItemSize,g=e.getOffsetForIndexAndAlignment,u=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,d=e.initInstanceProps,h=e.shouldResetStyleCacheOnItemSizeChange,z=e.validateProps;return t=function(f){Ue(T,f);function T(b){var o;return o=f.call(this,b)||this,o._instanceProps=d(o.props,pe(o)),o._outerRef=void 0,o._resetIsScrollingTimeoutId=null,o.state={instance:pe(o),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof o.props.initialScrollOffset=="number"?o.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},o._callOnItemsRendered=void 0,o._callOnItemsRendered=ie(function(i,l,p,y){return o.props.onItemsRendered({overscanStartIndex:i,overscanStopIndex:l,visibleStartIndex:p,visibleStopIndex:y})}),o._callOnScroll=void 0,o._callOnScroll=ie(function(i,l,p){return o.props.onScroll({scrollDirection:i,scrollOffset:l,scrollUpdateWasRequested:p})}),o._getItemStyle=void 0,o._getItemStyle=function(i){var l=o.props,p=l.direction,y=l.itemSize,$=l.layout,v=o._getItemStyleCache(h&&y,h&&$,h&&p),c;if(v.hasOwnProperty(i))c=v[i];else{var C=r(o.props,i,o._instanceProps),j=n(o.props,i,o._instanceProps),P=p==="horizontal"||$==="horizontal",D=p==="rtl",L=P?C:0;v[i]=c={position:"absolute",left:D?void 0:L,right:D?L:void 0,top:P?0:C,height:P?"100%":j,width:P?j:"100%"}}return c},o._getItemStyleCache=void 0,o._getItemStyleCache=ie(function(i,l,p){return{}}),o._onScrollHorizontal=function(i){var l=i.currentTarget,p=l.clientWidth,y=l.scrollLeft,$=l.scrollWidth;o.setState(function(v){if(v.scrollOffset===y)return null;var c=o.props.direction,C=y;if(c==="rtl")switch(Ie()){case"negative":C=-y;break;case"positive-descending":C=$-p-y;break}return C=Math.max(0,Math.min(C,$-p)),{isScrolling:!0,scrollDirection:v.scrollOffset<C?"forward":"backward",scrollOffset:C,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._onScrollVertical=function(i){var l=i.currentTarget,p=l.clientHeight,y=l.scrollHeight,$=l.scrollTop;o.setState(function(v){if(v.scrollOffset===$)return null;var c=Math.max(0,Math.min($,y-p));return{isScrolling:!0,scrollDirection:v.scrollOffset<c?"forward":"backward",scrollOffset:c,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._outerRefSetter=function(i){var l=o.props.outerRef;o._outerRef=i,typeof l=="function"?l(i):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=i)},o._resetIsScrollingDebounced=function(){o._resetIsScrollingTimeoutId!==null&&xe(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=Lt(o._resetIsScrolling,Nt)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},function(){o._getItemStyleCache(-1,null)})},o}T.getDerivedStateFromProps=function(o,i){return Et(o,i),z(o),null};var I=T.prototype;return I.scrollTo=function(o){o=Math.max(0,o),this.setState(function(i){return i.scrollOffset===o?null:{scrollDirection:i.scrollOffset<o?"forward":"backward",scrollOffset:o,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},I.scrollToItem=function(o,i){i===void 0&&(i="auto");var l=this.props,p=l.itemCount,y=l.layout,$=this.state.scrollOffset;o=Math.max(0,Math.min(o,p-1));var v=0;if(this._outerRef){var c=this._outerRef;y==="vertical"?v=c.scrollWidth>c.clientWidth?Se():0:v=c.scrollHeight>c.clientHeight?Se():0}this.scrollTo(g(this.props,o,i,$,this._instanceProps,v))},I.componentDidMount=function(){var o=this.props,i=o.direction,l=o.initialScrollOffset,p=o.layout;if(typeof l=="number"&&this._outerRef!=null){var y=this._outerRef;i==="horizontal"||p==="horizontal"?y.scrollLeft=l:y.scrollTop=l}this._callPropsCallbacks()},I.componentDidUpdate=function(){var o=this.props,i=o.direction,l=o.layout,p=this.state,y=p.scrollOffset,$=p.scrollUpdateWasRequested;if($&&this._outerRef!=null){var v=this._outerRef;if(i==="horizontal"||l==="horizontal")if(i==="rtl")switch(Ie()){case"negative":v.scrollLeft=-y;break;case"positive-ascending":v.scrollLeft=y;break;default:var c=v.clientWidth,C=v.scrollWidth;v.scrollLeft=C-c-y;break}else v.scrollLeft=y;else v.scrollTop=y}this._callPropsCallbacks()},I.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&xe(this._resetIsScrollingTimeoutId)},I.render=function(){var o=this.props,i=o.children,l=o.className,p=o.direction,y=o.height,$=o.innerRef,v=o.innerElementType,c=o.innerTagName,C=o.itemCount,j=o.itemData,P=o.itemKey,D=P===void 0?wt:P,L=o.layout,U=o.outerElementType,E=o.outerTagName,M=o.style,B=o.useIsScrolling,W=o.width,H=this.state.isScrolling,w=p==="horizontal"||L==="horizontal",O=w?this._onScrollHorizontal:this._onScrollVertical,te=this._getRangeToRender(),oe=te[0],ne=te[1],A=[];if(C>0)for(var _=oe;_<=ne;_++)A.push(R.createElement(i,{data:j,key:D(_,j),index:_,isScrolling:B?H:void 0,style:this._getItemStyle(_)}));var q=a(this.props,this._instanceProps);return R.createElement(U||E||"div",{className:l,onScroll:O,ref:this._outerRefSetter,style:k({position:"relative",height:y,width:W,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:p},M)},R.createElement(v||c||"div",{children:A,ref:$,style:{height:w?"100%":q,pointerEvents:H?"none":void 0,width:w?q:"100%"}}))},I._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var o=this.props.itemCount;if(o>0){var i=this._getRangeToRender(),l=i[0],p=i[1],y=i[2],$=i[3];this._callOnItemsRendered(l,p,y,$)}}if(typeof this.props.onScroll=="function"){var v=this.state,c=v.scrollDirection,C=v.scrollOffset,j=v.scrollUpdateWasRequested;this._callOnScroll(c,C,j)}},I._getRangeToRender=function(){var o=this.props,i=o.itemCount,l=o.overscanCount,p=this.state,y=p.isScrolling,$=p.scrollDirection,v=p.scrollOffset;if(i===0)return[0,0,0,0];var c=u(this.props,v,this._instanceProps),C=s(this.props,c,v,this._instanceProps),j=!y||$==="backward"?Math.max(1,l):1,P=!y||$==="forward"?Math.max(1,l):1;return[Math.max(0,c-j),Math.max(0,Math.min(i-1,C+P)),c,C]},T}(R.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Et=function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},Wt=Dt({getItemOffset:function(t,r){var a=t.itemSize;return r*a},getItemSize:function(t,r){var a=t.itemSize;return a},getEstimatedTotalSize:function(t){var r=t.itemCount,a=t.itemSize;return a*r},getOffsetForIndexAndAlignment:function(t,r,a,n,g,u){var s=t.direction,d=t.height,h=t.itemCount,z=t.itemSize,f=t.layout,T=t.width,I=s==="horizontal"||f==="horizontal",b=I?T:d,o=Math.max(0,h*z-b),i=Math.min(o,r*z),l=Math.max(0,r*z-b+z+u);switch(a==="smart"&&(n>=l-b&&n<=i+b?a="auto":a="center"),a){case"start":return i;case"end":return l;case"center":{var p=Math.round(l+(i-l)/2);return p<Math.ceil(b/2)?0:p>o+Math.floor(b/2)?o:p}case"auto":default:return n>=l&&n<=i?n:n<l?l:i}},getStartIndexForOffset:function(t,r){var a=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(a-1,Math.floor(r/n)))},getStopIndexForStartIndex:function(t,r,a){var n=t.direction,g=t.height,u=t.itemCount,s=t.itemSize,d=t.layout,h=t.width,z=n==="horizontal"||d==="horizontal",f=r*s,T=z?h:g,I=Math.ceil((T+a-f)/s);return Math.max(0,Math.min(u-1,r+I-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function At(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Me=At,Ut=typeof re=="object"&&re&&re.Object===Object&&re,Bt=Ut,Ht=Bt,Vt=typeof self=="object"&&self&&self.Object===Object&&self,qt=Ht||Vt||Function("return this")(),Fe=qt,Kt=Fe,Gt=function(){return Kt.Date.now()},Qt=Gt,Xt=/\s/;function Jt(e){for(var t=e.length;t--&&Xt.test(e.charAt(t)););return t}var Yt=Jt,Zt=Yt,eo=/^\s+/;function to(e){return e&&e.slice(0,Zt(e)+1).replace(eo,"")}var oo=to,ro=Fe,ao=ro.Symbol,Le=ao,$e=Le,Ne=Object.prototype,no=Ne.hasOwnProperty,io=Ne.toString,Z=$e?$e.toStringTag:void 0;function lo(e){var t=no.call(e,Z),r=e[Z];try{e[Z]=void 0;var a=!0}catch{}var n=io.call(e);return a&&(t?e[Z]=r:delete e[Z]),n}var so=lo,co=Object.prototype,uo=co.toString;function po(e){return uo.call(e)}var fo=po,Te=Le,mo=so,vo=fo,go="[object Null]",ho="[object Undefined]",ke=Te?Te.toStringTag:void 0;function bo(e){return e==null?e===void 0?ho:go:ke&&ke in Object(e)?mo(e):vo(e)}var yo=bo;function Co(e){return e!=null&&typeof e=="object"}var xo=Co,So=yo,Io=xo,$o="[object Symbol]";function To(e){return typeof e=="symbol"||Io(e)&&So(e)==$o}var ko=To,Ro=oo,Re=Me,zo=ko,ze=NaN,Oo=/^[-+]0x[0-9a-f]+$/i,jo=/^0b[01]+$/i,Po=/^0o[0-7]+$/i,_o=parseInt;function Mo(e){if(typeof e=="number")return e;if(zo(e))return ze;if(Re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ro(e);var r=jo.test(e);return r||Po.test(e)?_o(e.slice(2),r?2:8):Oo.test(e)?ze:+e}var Fo=Mo,Lo=Me,se=Qt,Oe=Fo,No="Expected a function",wo=Math.max,Do=Math.min;function Eo(e,t,r){var a,n,g,u,s,d,h=0,z=!1,f=!1,T=!0;if(typeof e!="function")throw new TypeError(No);t=Oe(t)||0,Lo(r)&&(z=!!r.leading,f="maxWait"in r,g=f?wo(Oe(r.maxWait)||0,t):g,T="trailing"in r?!!r.trailing:T);function I(c){var C=a,j=n;return a=n=void 0,h=c,u=e.apply(j,C),u}function b(c){return h=c,s=setTimeout(l,t),z?I(c):u}function o(c){var C=c-d,j=c-h,P=t-C;return f?Do(P,g-j):P}function i(c){var C=c-d,j=c-h;return d===void 0||C>=t||C<0||f&&j>=g}function l(){var c=se();if(i(c))return p(c);s=setTimeout(l,o(c))}function p(c){return s=void 0,T&&a?I(c):(a=n=void 0,u)}function y(){s!==void 0&&clearTimeout(s),h=0,a=d=n=s=void 0}function $(){return s===void 0?u:p(se())}function v(){var c=se(),C=i(c);if(a=arguments,n=this,d=c,C){if(s===void 0)return b(d);if(f)return clearTimeout(s),s=setTimeout(l,t),I(d)}return s===void 0&&(s=setTimeout(l,t)),u}return v.cancel=y,v.flush=$,v}var Wo=Eo;const Ao=De(Wo),Uo=[{id:"productivity",name:"Productivity Tools",icon:"🚀"},{id:"debugging",name:"Debugging & Development",icon:"🛠️"},{id:"security",name:"Security & Privacy",icon:"🔒"}],Bo=Ee.memo(({bookmarklet:e,style:t})=>m.jsx(ee,{style:t,sx:{p:1},children:m.jsxs(dt,{sx:{height:"100%",display:"flex",flexDirection:"column",transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}},tabIndex:0,"aria-label":`Bookmarklet: ${e.name}`,children:[m.jsxs(Ct,{sx:{flexGrow:1},children:[m.jsxs(ae,{variant:"h6",component:"h2",children:[e.icon," ",e.name]}),m.jsx(ae,{variant:"body2",color:"text.secondary",sx:{mb:2},children:e.description}),m.jsx(nt,{label:e.category,size:"small",sx:{mr:1}})]}),m.jsxs(vt,{children:[m.jsx(ve,{component:"a",href:e.code,size:"small",color:"primary",draggable:"true","aria-label":`Drag ${e.name} to bookmarks`,children:"Drag to Bookmarks"}),m.jsx(ve,{component:We,to:`/bookmarklet/${e.id}`,size:"small","aria-label":`Learn more about ${e.name}`,children:"Learn More"})]})]})})),er=()=>{const[e,t]=R.useState([]),[r,a]=R.useState([]),[n,g]=R.useState(!0),[u,s]=R.useState(""),[d,h]=R.useState("");R.useEffect(()=>{(async()=>{try{const T=await He();t(T),a(T)}catch(T){console.error("Error loading bookmarklets:",T)}finally{g(!1)}})()},[]);const z=R.useMemo(()=>Ao((f,T)=>{let I=e;f&&(I=Be(f,I)),T&&(I=I.filter(b=>b.category===T)),a(I)},300),[e]);return R.useEffect(()=>{z(u,d)},[u,d,z]),n?m.jsxs(ee,{sx:{py:4},children:[m.jsx(fe,{variant:"text",width:"30%",height:40}),m.jsx(ee,{sx:{mt:2},children:[...Array(6)].map((f,T)=>m.jsx(fe,{variant:"rectangular",height:200,sx:{mb:2}},T))})]}):m.jsxs(ee,{sx:{py:4},children:[m.jsx(ae,{variant:"h4",component:"h1",gutterBottom:!0,children:"BookmarkletKit Packager"}),m.jsxs(ee,{sx:{display:"flex",gap:2,mb:4},children:[m.jsx(Pt,{fullWidth:!0,variant:"outlined",label:"Search Bookmarklets",value:u,onChange:f=>s(f.target.value),"aria-label":"Search bookmarklets",inputProps:{"aria-label":"Search bookmarklets"}}),m.jsxs(_e,{sx:{minWidth:200},children:[m.jsx(je,{id:"category-select-label",children:"Filter by Category"}),m.jsxs(Pe,{labelId:"category-select-label",value:d,label:"Filter by Category",onChange:f=>h(f.target.value),"aria-label":"Filter by category",children:[m.jsx(me,{value:"",children:"All Categories"}),Uo.map(f=>m.jsx(me,{value:f.id,children:f.name},f.id))]})]})]}),r.length===0?m.jsx(ae,{variant:"body1",color:"text.secondary",sx:{textAlign:"center",mt:4},children:"No bookmarklets found matching your criteria."}):m.jsx(Wt,{height:600,width:"100%",itemCount:r.length,itemSize:250,itemData:r,children:({index:f,style:T})=>m.jsx(Bo,{bookmarklet:r[f],style:T})})]})};export{er as default};
//# sourceMappingURL=HomePage-BlaMxQpQ.js.map
