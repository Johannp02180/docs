"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={},o="Replacing a Data Drive",l={unversionedId:"legacy/FAQ/replacing-a-data-drive",id:"legacy/FAQ/replacing-a-data-drive",title:"Replacing a Data Drive",description:"This page describes how to replace an Unraid array data drive. Why",source:"@site/docs/legacy/FAQ/replacing-a-data-drive.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/replacing-a-data-drive",permalink:"/legacy/FAQ/replacing-a-data-drive",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/replacing-a-data-drive.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"The Parity Swap Procedure",permalink:"/legacy/FAQ/parity-swap-procedure"},next:{title:"Replacing Multiple Data Drives with a Single Larger Drive",permalink:"/legacy/FAQ/replacing-multiple-data-drives"}},p={},d=[{value:"Important Notes",id:"important-notes",level:2},{value:"The procedure",id:"the-procedure",level:2},{value:"The procedure for Unraid v4",id:"the-procedure-for-unraid-v4",level:2}],s={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"replacing-a-data-drive"},"Replacing a Data Drive"),(0,n.kt)("p",null,"This page describes how to replace an Unraid array data drive. Why\nwould you want to do that? Any number of reasons..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The drive has failed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The drive has been acting strange or reporting errors, and you\nthink it might be failing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The drive is old or past its warranty period")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The drive is small or full, and you need more storage space")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The drive has bad sectors and you want to pull it and replace it so\nyou can Preclear/test/fix it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"You just bought a new monster of a drive, and want it in the array")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Any other reason you can think of"))),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have purchased a replacement drive, we always recommend\nPreclearing the replacement drive first, to make sure it's a good\ndrive that won't fail for a few years at least. The Preclearing is\nnot strictly necessary, as replacement drives don't have to be\ncleared, they are going to be completely overwritten. But\nPreclearing new drives one to three times provides a thorough test\nof the drive, eliminates 'infant mortality' failures.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"It's always good to have a prepared and tested replacement drive\nalready on hand!")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Important! You cannot replace a drive with one that is LARGER than\nthe parity drive!")," If your replacement drive is larger than the\nparity drive, then proceed to ",(0,n.kt)("a",{parentName:"p",href:"/legacy/FAQ/parity-swap-procedure"},"The parity swap\nprocedure"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Unraid does not require the replacement drive to be the same size as\nthe old drive being replaced. It CANNOT be smaller, but it CAN be a\nlarger drive, up to the size of the parity drive. If too large,\nUnraid has a special two-step 'Parity Swap' procedure (often\ncalled the 'swap-disable') that will use a larger than parity\ndrive to first upgrade the parity drive then replace the old drive\nwith the old parity drive.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are here because you have a disabled drive, and you have\nalready checked the syslog and SMART report (or got instruction from\nthe Unraid forums), and are SURE that the drive is good, then you\ncan use the procedures below to rebuild it onto itself (below,\nconsider the 'old drive' to be the 'new drive'). There is a\nsimilar procedure just for this though -",">"," ",(0,n.kt)("a",{parentName:"p",href:"/unraid-os/manual/storage-management#rebuilding-a-drive-onto-itself"},"Re-enable the\ndrive"),"."))),(0,n.kt)("h2",{id:"the-procedure"},"The procedure"),(0,n.kt)("p",null,":   ",(0,n.kt)("em",{parentName:"p"},"If you are running a very old version of Unraid, such as v4.7 or\nolder, skip down to the next section.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the array"),(0,n.kt)("li",{parentName:"ol"},"Unassign the old drive if still assigned ",(0,n.kt)("em",{parentName:"li"},"(to unassign, set it to\n",(0,n.kt)("strong",{parentName:"em"},"No Device"),")")),(0,n.kt)("li",{parentName:"ol"},"Power down"),(0,n.kt)("li",{parentName:"ol"},"[ Optional ]"," Pull the old drive ",(0,n.kt)("em",{parentName:"li"},"(you may want to leave it\ninstalled for Preclearing or testing)")),(0,n.kt)("li",{parentName:"ol"},"Install the new drive"),(0,n.kt)("li",{parentName:"ol"},"Power on"),(0,n.kt)("li",{parentName:"ol"},"Assign the new drive in the slot of the old drive"),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Main")," -",">"," ",(0,n.kt)("strong",{parentName:"li"},"Array Operation")," section"),(0,n.kt)("li",{parentName:"ol"},"Put a check in the ",(0,n.kt)("strong",{parentName:"li"},"Yes, I'm sure")," checkbox (next to the\ninformation indicating the drive will be rebuilt), and click the\n",(0,n.kt)("strong",{parentName:"li"},"Start")," button"),(0,n.kt)("li",{parentName:"ol"},"The rebuild will begin, with hefty disk activity on all drives, lots\nof writes on the new drive and lots of reads on all other drives")),(0,n.kt)("p",null,":   ",(0,n.kt)("em",{parentName:"p"},"All of the contents of the old drive will be copied onto the new\ndrive, making it an exact replacement, except possibly with more\ncapacity than the old drive.")),(0,n.kt)("h2",{id:"the-procedure-for-unraid-v4"},"The procedure for Unraid v4"),(0,n.kt)("p",null,":   ",(0,n.kt)("em",{parentName:"p"},"This section is only for old versions of Unraid, such as v4.7 or\nolder. If you are running v5 or v6 of Unraid, then go back to the\nprevious section.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the array"),(0,n.kt)("li",{parentName:"ol"},"Power down"),(0,n.kt)("li",{parentName:"ol"},"Replace hard drive with new drive."),(0,n.kt)("li",{parentName:"ol"},"Turn on"),(0,n.kt)("li",{parentName:"ol"},"Replaced drive appears with blue dot"),(0,n.kt)("li",{parentName:"ol"},'Tick the "I\'m sure" checkbox, and press "Start will bring the\narray on-line, start Data-Rebuild, and then expand the file\nsystem."'),(0,n.kt)("li",{parentName:"ol"},'Hefty disk activity and main page will show lots of reading on "the\nother" disks and writing on new disk as data is being rebuilt.'),(0,n.kt)("li",{parentName:"ol"},"End")))}u.isMDXComponent=!0}}]);