"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},i="Getting Started",s={unversionedId:"quickstart/getting-started",id:"quickstart/getting-started",title:"Getting Started",description:"Goal",source:"@site/../docs/quickstart/getting-started.md",sourceDirName:"quickstart",slug:"/quickstart/getting-started",permalink:"/quickstart/getting-started",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/quickstart/getting-started.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Goal",id:"goal",level:2},{value:"Start Airbyte",id:"start-airbyte",level:2},{value:"Set up your preferences",id:"set-up-your-preferences",level:2},{value:"Set up your first connection",id:"set-up-your-first-connection",level:2},{value:"Create a source",id:"create-a-source",level:3},{value:"Create a destination",id:"create-a-destination",level:3},{value:"Create connection",id:"create-connection",level:3},{value:"Check the logs of your first sync",id:"check-the-logs-of-your-first-sync",level:2},{value:"Check the data of your first sync",id:"check-the-data-of-your-first-sync",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"During this getting started tutorial, we are going to replicate currencies closing price into a JSON file."),(0,o.kt)("h2",{id:"start-airbyte"},"Start Airbyte"),(0,o.kt)("p",null,"First of all, make sure you have Docker and Docker Compose installed. Then run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose -f docker-compose.yaml up\n")),(0,o.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,o.kt)("h2",{id:"set-up-your-preferences"},"Set up your preferences"),(0,o.kt)("p",null,"You should see an onboarding page. Enter your email if you want updates about Airbyte and continue."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(28040).Z,width:"1704",height:"1780"})),(0,o.kt)("h2",{id:"set-up-your-first-connection"},"Set up your first connection"),(0,o.kt)("h3",{id:"create-a-source"},"Create a source"),(0,o.kt)("p",null,"The source we are creating will pull data from an external API. It will replicate the closing price of currencies compared to USD since the specified start date."),(0,o.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might have to wait ~30 seconds before the fields show up because it is the first time you're using Airbyte."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(14904).Z,width:"902",height:"838"})),(0,o.kt)("h3",{id:"create-a-destination"},"Create a destination"),(0,o.kt)("p",null,"The destination we are creating is a simple JSON line file, meaning that it will contain one JSON object per line. Each objects will represent data extracted from the source."),(0,o.kt)("p",null,"The resulting files will be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/airbyte_local/json_data")),(0,o.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might have to wait ~30 seconds before the fields show up because it is the first time you're using Airbyte."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98933).Z,width:"926",height:"869"})),(0,o.kt)("h3",{id:"create-connection"},"Create connection"),(0,o.kt)("p",null,"When we create the connection, we can select which data stream we want to replicate. We can also select if we want an incremental replication. The replication will run at the specified sync frequency."),(0,o.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(76048).Z,width:"889",height:"824"})),(0,o.kt)("h2",{id:"check-the-logs-of-your-first-sync"},"Check the logs of your first sync"),(0,o.kt)("p",null,"After you've completed the onboarding, you will be redirected to the source list and will see the source you just added. Click on it to find more information about it. You will now see all the destinations connected to that source. Click on it and you will see the sync history."),(0,o.kt)("p",null,"From there, you can look at the logs, download them, force a sync and adjust the configuration of your connection."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45989).Z,width:"1122",height:"830"})),(0,o.kt)("h2",{id:"check-the-data-of-your-first-sync"},"Check the data of your first sync"),(0,o.kt)("p",null,"Now let's verify that this worked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /tmp/airbyte_local/json_data/_airbyte_raw_exchange_rate.jsonl\n")),(0,o.kt)("p",null,"You should see one line for each day that was replicated."),(0,o.kt)("p",null,"If you have ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,o.kt)("inlineCode",{parentName:"a"},"jq"))," installed, let's look at the evolution of ",(0,o.kt)("inlineCode",{parentName:"p"},"EUR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /tmp/airbyte_local/test_json/_airbyte_raw_exchange_rate.jsonl | \njq -c '.data | {date: .date, EUR: .EUR }'\n")),(0,o.kt)("p",null,"And there you have it. You've pulled data from an API directly into a file and all of the actual configuration for this replication only took place in the UI."),(0,o.kt)("h2",{id:"thats-it"},"That's it!"),(0,o.kt)("p",null,"This is just the beginning of using Airbyte. We support a large collection of sources and destinations. You can even contribute your own."),(0,o.kt)("p",null,"If you have any questions at all, please reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We\u2019re still in alpha, so if you see any rough edges or want to request a connector you need, please create an issue on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or leave a thumbs up on an existing issue."),(0,o.kt)("p",null,"Thank you and we hope you enjoy using Airbyte."))}d.isMDXComponent=!0},28040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/airbyte_get-started-65cd1be85b5b9e0816a8557536ea976d.png"},76048:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_connection-3b7f21d8b148e17c6ea4dc43f047bb2d.png"},98933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_destination-870ddcdd25c38f87fc0f4a7b21b4a04b.png"},45989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_history-e6ddc655d4b6a48908514193e8968113.png"},14904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_source-6336f13023dbf5e778081cdc0cb84777.png"}}]);