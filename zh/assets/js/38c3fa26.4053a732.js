"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={},a="Transferring Files Within the Unraid Server",s={unversionedId:"legacy/FAQ/transferring-files-within-the-unraid-server",id:"legacy/FAQ/transferring-files-within-the-unraid-server",title:"Transferring Files Within the Unraid Server",description:"If you are using Windows Explorer to move files between drives, you are",source:"@site/docs/legacy/FAQ/transferring-files-within-the-unraid-server.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/transferring-files-within-the-unraid-server",permalink:"/zh/legacy/FAQ/transferring-files-within-the-unraid-server",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/transferring-files-within-the-unraid-server.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Transferring Files from a Network Share to Unraid",permalink:"/zh/legacy/FAQ/transferring-files-from-a-network-share-to-unraid"},next:{title:"Understanding SMART Reports",permalink:"/zh/legacy/FAQ/understanding-smart-reports"}},l={},d=[{value:"Midnight Commander - Easy to Use GUI Tool",id:"midnight-commander---easy-to-use-gui-tool",level:2},{value:"Move Files Overnight",id:"move-files-overnight",level:2},{value:"Unix Commands",id:"unix-commands",level:2},{value:"Copying files",id:"copying-files",level:3},{value:"Moving files",id:"moving-files",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Wildcards",id:"wildcards",level:3}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transferring-files-within-the-unraid-server"},"Transferring Files Within the Unraid Server"),(0,r.kt)("p",null,"If you are using Windows Explorer to move files between drives, you are\nactually copying the files TWICE across the network, from the Unraid\nserver to your Windows machine, and back again. For copying a few files,\nthis is not a problem. But if you are moving a lot of data, here are\nfaster methods."),(0,r.kt)("h2",{id:"midnight-commander---easy-to-use-gui-tool"},"Midnight Commander - Easy to Use GUI Tool"),(0,r.kt)("p",null,"Use Midnight Commander and PuTTY instead. Type mc at the command prompt\nin a telnet/PuTTy session to start the GUI. Midnight Commander is built\ninto Unraid v4.3 and up. For earlier versions, and a link to PuTTY (an\nalternative to Telnet that allows use of a mouse within ",(0,r.kt)("strong",{parentName:"p"},"mc"),"), see\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=1341.0"},"this thread"),").\nMidnight Commander is a Linux console tool, and needs to be run from\neither the physical console on your Unraid server, or from a Telnet\nconsole on your desktop station. For more information, see the\n",(0,r.kt)("a",{parentName:"p",href:"/zh/legacy/FAQ/terminal-access#telnet"},"Telnet")," page, which includes information on\n",(0,r.kt)("a",{parentName:"p",href:"/zh/legacy/FAQ/terminal-access#PuTTY"},"PuTTY"),"."),(0,r.kt)("h2",{id:"move-files-overnight"},"Move Files Overnight"),(0,r.kt)("p",null,"If you go to the Unraid server and run Midnight Commander from there,\nyou can use it to move a bunch of files overnight. But if you use ",(0,r.kt)("strong",{parentName:"p"},"mc"),"\nfrom a Telnet prompt from your Windows (or other) workstation, you will\nhave to leave the computer on and the Telnet session open until the disk\noperations are complete. If the Telnet session ends, so does the copy or\nmove operation."),(0,r.kt)("p",null,'But with a little knowledge of Unix commands, you can easily start\nmoving files around your Unraid server and then shut down Telnet and\nyour workstation. The key is the "nohup" command (nohup means "no\n',"[don't]",' hang up"). If you put "nohup" before any command and an\nampersand (&) afterwards, the command will run in the background until\nit is complete. Your command prompt will return immediately.'),(0,r.kt)("p",null,"So, for example, if you wanted to move a bunch of movies from Disk1 to\nDisk2, you could use this command from a Telnet (PuTTY or otherwise)\nprompt ",".",".."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nohup mv /mnt/disk1/Movies/* /mnt/disk2/Movies &")),(0,r.kt)("p",null,"Do a quick check to see that files are starting to appear in the\ndestination folder to make sure you didn't have a typo in the command,\nand then exit from the Telnet session. The files will continue to be\nmoved as fast as Unraid can move them, and use ZERO network bandwidth.\nMake sure it is complete before shutting down your Unraid server, as\ncopying hundreds of gigs can take a long time to complete even at the\nfastest speed."),(0,r.kt)("p",null,'nohup can also be used with the "cp" (copy) command (see Unix Commands\nsection below)'),(0,r.kt)("p",null,'nohup creates a log file called \'nohup.out\' with the command output.\nThe basic "mv" command doesn\'t create any output, but "cp" outputs\nthe name of each file it copies. If you use "cp" to copy a LOT of\nsmall files (300,000+), you risk having nohup.out get quite large -\nlarge enough to fill up your Unraid server ramdisk - not a good thing.'),(0,r.kt)("h2",{id:"unix-commands"},"Unix Commands"),(0,r.kt)("p",null,"There are two effective methods available to move files from one drive\nto another from within Unraid (v4.x and later)."),(0,r.kt)("h3",{id:"copying-files"},"Copying files"),(0,r.kt)("p",null,"1",")"," Copy the files from disk# (where '#' is the number of the disk in\nUnraid)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp\xa0-r\xa0/mnt/disk#\xa0/mnt/disk#")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp\xa0-r\xa0/mnt/disk4\xa0/mnt/disk8")),(0,r.kt)("p",null,"Copies all contents of disk4 to disk8. All files/directories on disk4\nremain."),(0,r.kt)("p",null,"Note the above example will create a dir named 'disk4' on disk8 with\nthe contents underneath it. The original file date/time stamps will not\nbe preserved."),(0,r.kt)("p",null,"See below for syntax to copy the root directory names only with all\nfiles underneath them and preserve the original file date/time stamps."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"-r")," option causes the ",(0,r.kt)("strong",{parentName:"p"},"cp")," command to copy directories\nrecursively. It is not necessary with a simple file copy."),(0,r.kt)("p",null,"If you want to follow along as the copy proceeds, add the ",(0,r.kt)("strong",{parentName:"p"},"-v")," option\n(requesting verbose output)."),(0,r.kt)("p",null,"To copy the root directory names only and everything under them,\npreserve the original file date/time stamps and log the output to a text\nfile on the flash drive in a format readable by an editor like windows\nnotepad use this syntax:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cp\xa0-r\xa0-v\xa0-p\xa0/mnt/disk4/*\xa0/mnt/disk8\xa0|\xa0todos\xa0>\xa0/boot/disk1copy.txt")),(0,r.kt)("h3",{id:"moving-files"},"Moving files"),(0,r.kt)("p",null,"2",")"," Move the contents of disk1 to disk2 using the mv command"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mv\xa0/mnt/disk#/\xa0/mnt/disk#")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mv\xa0/mnt/disk1\xa0/mnt/disk4")),(0,r.kt)("p",null,"Moves all contents from disk1 to disk4. All files/directories on disk1\nare now gone."),(0,r.kt)("p",null,"Caution: Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<b>"),"{=html}move",(0,r.kt)("inlineCode",{parentName:"p"},"</b>"),"{=html} command may be\npotentially dangerous as it will copy to the destination drive and then\ndelete your data file(s) from the source drive. In the interest of\nmaximum safety, you may want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"<b>"),"{=html}copy",(0,r.kt)("inlineCode",{parentName:"p"},"</b>"),"{=html}\ninstead."),(0,r.kt)("h3",{id:"quotes"},"Quotes"),(0,r.kt)("p",null,'If you want to copy or move entire folders from one drive to another,\nand the folder names have spaces in them, you need to use "quotes"\naround the folder name, as in this example:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'mv\xa0/mnt/disk2/"The\xa0Empire\xa0Strikes\xa0Back"\xa0/mnt/disk3')),(0,r.kt)("p",null,"In the above example, the entire folder called ",(0,r.kt)("strong",{parentName:"p"},"The Empire Strikes\nBack")," would be moved from Disk 2 to Disk 3 with the same sub-folder\nstructure."),(0,r.kt)("h3",{id:"wildcards"},"Wildcards"),(0,r.kt)("p",null,"Wildcards are available as well. For example, if you want to copy all of\nthe files from Disk 2 over to Disk 3, use the ",(0,r.kt)("strong",{parentName:"p"},"mv")," command like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mv\xa0/mnt/disk2/*\xa0/mnt/disk3")),(0,r.kt)("p",null,"In this example, all files and folders on Disk 2 would be relocated over\nto Disk 3 in the exact same folder structure as it was on Disk 2."))}p.isMDXComponent=!0}}]);