import{I as p,J as R,g as C,f as E,r as T,u as L,a as A,_ as s,j as P,s as B,c as N,d as D,K as m,M as w}from"./index-D1EtQeTk.js";function q(e,t=0,i=1){return R(e,t,i)}function M(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(t);return i&&i[0].length===1&&(i=i.map(n=>n+n)),i?`rgb${i.length===4?"a":""}(${i.map((n,o)=>o<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function k(e){if(e.type)return e;if(e.charAt(0)==="#")return k(M(e));const t=e.indexOf("("),i=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(p(9,e));let n=e.substring(t+1,e.length-1),o;if(i==="color"){if(n=n.split(" "),o=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(p(10,o))}else n=n.split(",");return n=n.map(r=>parseFloat(r)),{type:i,values:n,colorSpace:o}}function U(e){const{type:t,colorSpace:i}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((o,r)=>r<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${i} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function $(e,t){return e=k(e),t=q(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,U(e)}function O(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(e){return parseFloat(e)}function z(e){return C("MuiSkeleton",e)}E("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=["animation","className","component","height","style","variant","width"];let d=e=>e,h,g,f,b;const j=e=>{const{classes:t,variant:i,animation:n,hasChildren:o,width:r,height:a}=e;return D({root:["root",i,n,o&&"withChildren",o&&!r&&"fitContent",o&&!a&&"heightAuto"]},z,t)},K=w(h||(h=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),H=w(g||(g=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),W=B("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],i.animation!==!1&&t[i.animation],i.hasChildren&&t.withChildren,i.hasChildren&&!i.width&&t.fitContent,i.hasChildren&&!i.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const i=O(e.shape.borderRadius)||"px",n=_(e.shape.borderRadius);return s({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:$(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${i}/${Math.round(n/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&m(f||(f=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),K),({ownerState:e,theme:t})=>e.animation==="wave"&&m(b||(b=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),H,(t.vars||t).palette.action.hover)),J=T.forwardRef(function(t,i){const n=L({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:a="span",height:c,style:v,variant:I="text",width:x}=n,l=A(n,F),u=s({},n,{animation:o,component:a,variant:I,hasChildren:!!l.children}),S=j(u);return P.jsx(W,s({as:a,ref:i,className:N(S.root,r),ownerState:u},l,{style:s({width:x,height:c},v)}))}),G=[{id:"flow-run-logs",name:"flow run logs",description:"Bookmarklet to open Flow run logs",category:"productivity",code:'!function(){const o=window.location.pathname.match(/\\/apps\\/flow\\/activity\\/([^\\/\\?]+)/);if(!o)return void alert("Not a Flow activity page");const t=o[1],n=new URLSearchParams;n.set("workflow_run_logs[run_id]",t),n.set("operation","View");const a="https://flow.shopifycloud.com/internal/support/workflow_run_logs?"+n.toString();window.open(a,"_blank")}();',repository:"https://github.com/DamionR/BookmarkletKit.git",readme:`# @bookmarkletkit/flow-run-logs

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet provides one-click access to the Flow run logs page for the *current* Flow activity you're viewing in the Shopify admin. It eliminates the need to manually navigate through the support tools.

## Usage

1. **Navigate** to a Flow activity page within the Shopify admin. This is the page where you see the details of a specific Flow run.
2. **Click** the "Flow Run Logs" bookmarklet in your browser's bookmarks bar.
3. **Instant Access:** The corresponding Flow run logs page on \`flow.shopifycloud.com\` will open in a new tab, giving you immediate access to the detailed logs.

## How it Works

The bookmarklet works by:

1. **Extracting the Run ID:** It intelligently extracts the unique \`run_id\` from the current page's URL.
2. **Constructing the Logs URL:** It uses the extracted \`run_id\` to build the correct URL for the Flow run logs page.
3. **Opening in a New Tab:** It opens the constructed URL in a new tab, keeping your current Flow activity page open.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in \`dist/index.min.js\`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name, such as "Flow Run Logs".
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

\`\`\`bash
cd /Users/damionrashford/BookmarkletKit/bookmarklets/flow-run-logs
npm install
npm run build
\`\`\`

This will regenerate both unminified and minified versions in the \`dist\` directory.

## Contributing

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/DamionR/BookmarkletKit).

## License

This project is licensed under the MIT License.
`},{id:"pii-remover",name:"pii remover",description:"Bookmarklet to redact PII from copied text",category:"productivity",code:'!function(){if(window.piiRedactorRunning)return void("function"==typeof showSettingsPanel&&showSettingsPanel());const e="true"===localStorage.getItem("piiRedactorRunning");window.piiRedactorRunning=!0,localStorage.setItem("piiRedactorRunning","true");const t="tab-"+Math.random().toString(36).substr(2,9),n=document.createElement("div");n.style.display="none",n.setAttribute("data-pii-redactor-tab",t),document.body.appendChild(n),window.addEventListener("beforeunload",(function(){document.querySelectorAll("[data-pii-redactor-tab]").length>1||localStorage.removeItem("piiRedactorRunning")})),window.piiRedactorSettings={redactionLevel:"medium",showNotifications:!0,redactEmails:!0,redactPhones:!0,redactCreditCards:!0,redactSSNs:!0,redactAddresses:!0,redactNames:!0};try{const e=localStorage.getItem("piiRedactorSettings");e&&(window.piiRedactorSettings={...window.piiRedactorSettings,...JSON.parse(e)})}catch(e){}const i=["Sensitive Information","Credit Card","Social Security Number","SSN","EIN","PII","API Key","Access Token","United States","New York","Los Angeles","Customer Service","Technical Support","Human Resources"];function o(){const e={redactionLevel:document.getElementById("redaction-level").value,showNotifications:document.getElementById("show-notifications").checked,redactEmails:document.getElementById("redact-emails").checked,redactPhones:document.getElementById("redact-phones").checked,redactCreditCards:document.getElementById("redact-credit-cards").checked,redactSSNs:document.getElementById("redact-ssns").checked,redactAddresses:document.getElementById("redact-addresses").checked,redactNames:document.getElementById("redact-names").checked};window.piiRedactorSettings={...window.piiRedactorSettings,...e};try{localStorage.setItem("piiRedactorSettings",JSON.stringify(window.piiRedactorSettings))}catch(e){}const t=document.getElementById("pii-redactor-settings-panel");t&&(t.style.display="none"),l("Settings saved!")}window.showSettingsPanel=function(){let e=document.getElementById("pii-redactor-settings-panel");e?e.style.display="block":(e=document.createElement("div"),e.id="pii-redactor-settings-panel",e.style.cssText="\\n            position: fixed;\\n            top: 50%;\\n            left: 50%;\\n            transform: translate(-50%, -50%);\\n            background: white;\\n            border-radius: 8px;\\n            box-shadow: 0 4px 20px rgba(0,0,0,0.2);\\n            padding: 20px;\\n            width: 350px;\\n            max-width: 90%;\\n            z-index: 10000;\\n            font-family: Arial, sans-serif;\\n        ",e.innerHTML=`\\n            <h2 style="margin-top: 0; color: #008060; font-size: 18px;">PII Redactor Settings</h2>\\n            \\x3c!-- Settings controls remain unchanged --\\x3e\\n            <div style="margin-bottom: 15px;">\\n                <label style="display: block; font-weight: bold; margin-bottom: 5px;">Redaction Level:</label>\\n                <select id="redaction-level" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">\\n                    <option value="low" ${"low"===window.piiRedactorSettings.redactionLevel?"selected":""}>Low - Only obvious PII</option>\\n                    <option value="medium" ${"medium"===window.piiRedactorSettings.redactionLevel?"selected":""}>Medium - Standard protection</option>\\n                    <option value="high" ${"high"===window.piiRedactorSettings.redactionLevel?"selected":""}>High - Aggressive redaction</option>\\n                </select>\\n            </div>\\n            \\x3c!-- Other settings controls... --\\x3e\\n        `,document.body.appendChild(e),document.getElementById("save-settings").addEventListener("click",o),document.getElementById("close-settings").addEventListener("click",(()=>{e.style.display="none"})))};const d=function(e){setTimeout((()=>{navigator.clipboard.readText().then((e=>{const t=function(e){if(!e)return e;let t=e;const n=[{type:"EMAIL",regex:/\\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\\b/g},{type:"PHONE",regex:/(?:\\+?\\d{1,3}[\\s-]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}\\b/g},{type:"CREDIT-CARD",regex:/\\b(?:\\d{4}[-\\s]?){3}\\d{4}\\b/g},{type:"SSN",regex:/\\b\\d{3}[-]?\\d{2}[-]?\\d{4}\\b/g}];return window.piiRedactorSettings.redactAddresses&&n.push({type:"ADDRESS",regex:/\\b\\d{1,5}[ ]+(?:[A-Za-z0-9.-]+[ ]+){1,3}(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St|Way)\\b/gi}),window.piiRedactorSettings.redactNames&&n.push({type:"NAME",regex:/\\b(?:Mr\\.|Mrs\\.|Ms\\.|Dr\\.|Prof\\.)\\s+[A-Z][a-z]+(?:\\s+[A-Z][a-z]+)+\\b/g}),n.forEach((({type:e,regex:n})=>{(window.piiRedactorSettings["redact"+e.charAt(0)+e.slice(1).toLowerCase()+"s"]||"ADDRESS"===e||"NAME"===e)&&(t=t.replace(n,(t=>{for(let e of i)if(t.includes(e))return t;return`[REDACTED-${e}]`})))})),t}(e);t!==e&&(navigator.clipboard.writeText(t),window.piiRedactorSettings.showNotifications&&l("PII detected and redacted!"))})).catch(console.error)}),100)};document.addEventListener("copy",d,!0);const r=document.createElement("div");r.id="pii-redactor-indicator",r.style.cssText="\\n        position: fixed;\\n        bottom: 20px;\\n        right: 20px;\\n        background: #008060;\\n        color: white;\\n        padding: 8px 12px;\\n        border-radius: 4px;\\n        font-family: Arial, sans-serif;\\n        font-size: 12px;\\n        z-index: 9999;\\n        display: flex;\\n        align-items: center;\\n        box-shadow: 0 2px 5px rgba(0,0,0,0.2);\\n        cursor: pointer;\\n    ";const a=document.createElement("div");a.style.cssText="\\n        width: 8px;\\n        height: 8px;\\n        background: #4ade80;\\n        border-radius: 50%;\\n        margin-right: 8px;\\n        animation: pulse 2s infinite;\\n    ";const c=document.createElement("style");c.textContent="\\n        @keyframes pulse {\\n            0% { opacity: 1; }\\n            50% { opacity: 0.5; }\\n            100% { opacity: 1; }\\n        }\\n    ",document.head.appendChild(c),r.appendChild(a),r.appendChild(document.createTextNode("PII Protection Active")),r.addEventListener("click",window.showSettingsPanel);const s=document.createElement("div");if(s.style.cssText="\\n        margin-left: 8px;\\n        cursor: pointer;\\n        font-size: 14px;\\n    ",s.textContent="×",s.title="Disable PII Protection",s.addEventListener("click",(function(e){e.stopPropagation(),window.piiRedactorRunning=!1,localStorage.removeItem("piiRedactorRunning"),r.remove(),c.remove(),document.removeEventListener("copy",d,!0);const t=document.getElementById("pii-redactor-settings-panel");t&&t.remove(),n.remove(),alert("PII Protection disabled")})),r.appendChild(s),document.body.appendChild(r),!e){const e=document.createElement("div");e.style.cssText="\\n            position: fixed;\\n            top: 20px;\\n            right: 20px;\\n            background: #008060;\\n            color: white;\\n            padding: 15px;\\n            border-radius: 4px;\\n            font-family: Arial, sans-serif;\\n            font-size: 14px;\\n            z-index: 9999;\\n            opacity: 0.95;\\n            transition: opacity 0.5s;\\n            max-width: 300px;\\n            box-shadow: 0 2px 10px rgba(0,0,0,0.2);\\n        ",e.innerHTML="\\n            <strong>PII Protection Activated</strong><br>\\n            Your clipboard is now being monitored for sensitive information.\\n            Copied text containing PII will be automatically redacted.\\n        ",document.body.appendChild(e),setTimeout((()=>{e.style.opacity="0",setTimeout((()=>e.remove()),500)}),5e3)}function l(e,t=!1){if(!window.piiRedactorSettings.showNotifications)return;const n=document.createElement("div");n.style.cssText=`\\n            position: fixed;\\n            bottom: 60px;\\n            right: 20px;\\n            background: ${t?"#ff4d4f":"#008060"};\\n            color: white;\\n            padding: 10px 15px;\\n            border-radius: 4px;\\n            font-family: Arial, sans-serif;\\n            font-size: 14px;\\n            z-index: 9999;\\n            opacity: 0.9;\\n            transition: opacity 0.5s;\\n        `,n.textContent=e,document.body.appendChild(n),setTimeout((()=>{n.style.opacity="0",setTimeout((()=>n.remove()),500)}),3e3)}}();',repository:"https://github.com/DamionR/BookmarkletKit.git",readme:`# @bookmarklet-maker/pii-remover

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet automatically redacts Personally Identifiable Information (PII) from your clipboard when you copy text. It's designed to protect sensitive data while you're working, sharing information, or taking screenshots. It features a settings panel for customization and works seamlessly across multiple browser tabs.

## Features

* **Automatic PII Redaction:** Redacts PII from copied text *before* it's placed on your clipboard.
* **Configurable Redaction Levels:** Choose from "Low," "Medium," or "High" redaction levels.
* **Customizable PII Types:** Select which types of PII to redact:
  * Email addresses
  * Phone numbers
  * Credit card numbers
  * Social Security Numbers (SSNs)
  * Addresses
  * Names
* **Settings Panel:** User-friendly settings panel for customization.
* **Real-time Clipboard Monitoring:** Actively monitors clipboard and redacts PII in real time.
* **Multi-Tab Awareness:** Works correctly even with multiple browser tabs open.
* **Visual Indicator:** Discreet indicator shows that PII protection is active.
* **Whitelist:** Built-in whitelist prevents accidental redaction of common terms.
* **Notifications:** Optional alerts when PII is detected and redacted.
* **Cross-browser Compatibility:** Works in Chrome, Firefox and Safari.

## Usage

1. **Activate:** Click the "PII Remover" bookmarklet in your browser's bookmarks bar.
2. **Copy Text:** Copy text from any webpage as you normally would.
3. **Automatic Redaction:** The bookmarklet automatically redacts detected PII.
4. **Paste:** Paste the redacted text wherever you need it.
5. **Settings:** Click the green indicator to customize redaction behavior.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in \`dist/index.min.js\`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name (e.g., "PII Redactor").
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

cd /Users/damionrashford/BookmarkletKit/bookmarklets/bookmarklet-pii-remover
npm install
npm run build

This regenerates both unminified and minified versions in the \`dist\` directory.

## Contributing

If you find a bug or have a suggestion, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.`},{id:"request-id-observe",name:"request id observe",description:"Bookmarklet to open Observe investigation from a Request ID",category:"productivity",code:`!function(){var e,t=document.querySelectorAll('[class*="request-id"],[id*="request-id"],[class*="error-details"],[id*="error-details"]');if(Array.from(t).some((function(t){var r=t.textContent.match(/Request[\\s-]*ID:?[\\s:]*([a-f0-9-]+)/i);return!!r&&(e=r[1],!0)})),!e){var r=document.querySelector('meta[name="request-id"],meta[name="RequestId"]');r&&(e=r.getAttribute("content"))}if(!e){var s=document.body.innerText.match(/Request[\\s-]*ID:?[\\s:]*([a-f0-9-]+)/i);s&&(e=s[1])}if(e){var a="https://observe.shopify.io/a/observe/investigate/requests?any_id="+e;window.open(a,"_blank")}else alert("No Request ID found")}();`,repository:"https://github.com/DamionR/BookmarkletKit.git",readme:`# @bookmarklet-maker/request-id-observe

[![Bookmarklet Status](https://img.shields.io/badge/status-ready-brightgreen.svg)](https://shields.io/)

This bookmarklet provides a quick and easy way to jump directly to the Observe investigation page for a given Request ID found on *any* webpage. It's particularly useful for debugging and troubleshooting issues within the Shopify ecosystem.

## Usage

1. **Navigate** to a webpage that might contain a Request ID (error page, debugging page, etc.)
2. **Click** the "Request ID Observe" bookmarklet in your browser's bookmarks bar.
3. **Instantly Investigate:** If a Request ID is found, the corresponding Observe investigation page will open in a new tab. If no Request ID is found, you'll see a brief alert message.

## How it Works

The bookmarklet scans the current webpage for a Request ID, checking the following locations in order:

1. **DOM Elements:** Elements with class names or IDs containing "request-id" or "error-details".
2. **Meta Tags:** \`<meta>\` tags with the \`name\` attribute set to "request-id" or "RequestId".
3. **Page Content:** As a fallback, it searches the entire text content of the page.

Once a Request ID is found, the bookmarklet constructs the appropriate Observe URL and opens it in a new tab.

## Installation

1. **Copy the Minified Code:** The ready-to-use bookmarklet code is in \`dist/index.min.js\`.
2. **Create a New Bookmark:** In your web browser, create a new bookmark.
3. **Paste the Code:** In the "URL" field of the new bookmark, paste the minified code.
4. **Name the Bookmark:** Give your bookmark a descriptive name, such as "Request ID Observe".
5. **Save:** Save the bookmark.

## Building from Source

This package is part of the BookmarkletKit monorepo. You can build it individually:

cd /Users/damionrashford/BookmarkletKit/bookmarklets/bookmarklet-request-id-observe
npm install
npm run build

This will regenerate both unminified and minified versions in the \`dist\` directory.

## Contributing

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.`}];async function V(){const e=G.map(t=>({...t,category:y(t.name,t.readme||""),icon:Z(y(t.name,t.readme||"")),usage:Y(t.readme||"")}));return Promise.resolve(e)}function y(e,t){const i=e.toLowerCase(),n=t.toLowerCase();return i.includes("security")||n.includes("privacy")?"security":i.includes("debug")||i.includes("dev")||n.includes("development")?"debugging":"productivity"}function Z(e){switch(e){case"security":return"🔒";case"debugging":return"🛠️";default:return"🚀"}}function Y(e){const t=e.match(/## How it Works([\s\S]*?)##/);return t?t[1].trim().replace(/\n/g," ").substring(0,200):"No usage details available."}function Q(e,t){return t.filter(i=>i.name.toLowerCase().includes(e.toLowerCase())||i.description.toLowerCase().includes(e.toLowerCase())||i.category.toLowerCase().includes(e.toLowerCase()))}export{J as S,V as l,Q as s};
//# sourceMappingURL=bookmarkletLoader-DVlSp4lh.js.map
