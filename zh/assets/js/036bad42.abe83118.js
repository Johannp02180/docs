"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},l="Setup Sleep (S3) and Wake on Lan (WOL)",i={unversionedId:"legacy/FAQ/setup-sleep-and-wake-on-lan",id:"legacy/FAQ/setup-sleep-and-wake-on-lan",title:"Setup Sleep (S3) and Wake on Lan (WOL)",description:"The following are my notes for setting up my Unraid server to sleep to",source:"@site/docs/legacy/FAQ/setup-sleep-and-wake-on-lan.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/setup-sleep-and-wake-on-lan",permalink:"/zh/legacy/FAQ/setup-sleep-and-wake-on-lan",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/setup-sleep-and-wake-on-lan.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Setting Up CPU and Board Temperature Sensing",permalink:"/zh/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing"},next:{title:"Shrink Array",permalink:"/zh/legacy/FAQ/shrink-array"}},s={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-sleep-s3-and-wake-on-lan-wol"},"Setup Sleep (S3) and Wake on Lan (WOL)"),(0,r.kt)("p",null,"The following are my notes for setting up my Unraid server to sleep to\nS3 state and then wake up to Magic Packet. This is a 'For Beginners, By\nBeginners' effort - there's very little original work here. I just\ntried to piece together whatever I needed from various threads on the\nUnraid forums. My server uses a Foxconn A7GM-S AMD 780G/SB700 based\nmotherboard, and I am running Unraid 4.4.2. In general, I think the\nbelow is procedurally correct - although different motherboards will\nhave different capabilities and driver concerns. Also - all computers\nwith access to my Unraid server are Windows machines, I do not know how\nany of this would change if accessing from a machine with a different\nOS. The following assumes the use of a Windows machine."),(0,r.kt)("p",null,"1","."," BIOS settings for S1 / S3 sleep state"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review BIOS settings on Unraid server for allowable sleep states."),(0,r.kt)("li",{parentName:"ul"},'On my motherboard, the setting is "ACPI Suspend Type" and provides\noption to either suspend to S1 or S3 sleep state. Select S3.')),(0,r.kt)("p",null,"2","."," BIOS settings for WOL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Review BIOS settings on Unraid server for "Resume by" options.'),(0,r.kt)("li",{parentName:"ul"},'My motherboard has a setting for "Resume by LAN". It can be enabled\nor disabled. You need to enable "Resume by LAN".')),(0,r.kt)("p",null,"3","."," Double check NIC WOL settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boot Unraid server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the Terminal on the WebUI (present in v6, one of the buttons in\nthe upper right corner, or fall-back to ",(0,r.kt)("a",{parentName:"p",href:"/zh/legacy/FAQ/terminal-access"},"SSH or Telnet")," and type ",(0,r.kt)("inlineCode",{parentName:"p"},"ethtool\neth0")," from the command line")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You're looking to confirm that the setting for \"Wake-on\" includes\n'g' . . . which is the option for allowing Wake on Magic Packet.\nWe're essentially confirming the BIOS settings from Step 2 above.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The results of my ",(0,r.kt)("strong",{parentName:"p"},"ethtool eth0")," command are as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@Tower:~# ethtool eth0\nSettings for eth0:\nSupported ports: [ TP MII ]\nSupported link modes:   10baseT/Half 10baseT/Full\n                        100baseT/Half 100baseT/Full\n                        1000baseT/Half 1000baseT/Full\nSupports auto-negotiation: Yes\nAdvertised link modes:  10baseT/Half 10baseT/Full\n                        100baseT/Half 100baseT/Full\n                        1000baseT/Half 1000baseT/Full\nAdvertised auto-negotiation: Yes\nSpeed: 1000Mb/s\nDuplex: Full\nPort: MII\nPHYAD: 0\nTransceiver: internal\nAuto-negotiation: on\nSupports Wake-on: pumbg\nWake-on: g\nCurrent message level: 0x00000033 (51)\nLink detected: yes\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the wake-on setting does not include 'g', you can set it\nmanually by typing the following at the server command line:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ethtool -s eth0 wol g\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If necessary, you can add the above line to your 'go' script, but\nI've not had a problem with my machine keeping the setting once it\nis set and the appropriate Wake on LAN setting is enabled in BIOS."))),(0,r.kt)("p",null,"4","."," Download ",(0,r.kt)("strong",{parentName:"p"},"wolcmd")," executable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"http://www.depicus.com/wake-on-lan/wake-on-lan-cmd.aspx"},"Depicus 'Wake on\nLan'"),"\npage, select ",(0,r.kt)("strong",{parentName:"li"},"Download")," button near the bottom"),(0,r.kt)("li",{parentName:"ul"},"I placed the file in ",(0,r.kt)("em",{parentName:"li"},"C:","\\","Program Files","\\","WOLcmd")," (location becomes\nimportant in next step)"),(0,r.kt)("li",{parentName:"ul"},"There are other Magic Packet tools available, this is just one that\nI found simple to deal with.")),(0,r.kt)("p",null,"5","."," Generate ",(0,r.kt)("strong",{parentName:"p"},"Wakeup.bat")," batch file (or download mine from\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=3657.msg39076#msg39076"},"here"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"My batch file is simply two lines"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change folder directory as necessary depending on where you\nsaved wolcmd.exe.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the MAC address of your Unraid server in the second line\ninstead of 'MAC'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd c:\\program files\\wolcmd\nwolcmd MAC 255.255.255.255 255.255.255.255\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Place the batch file on your desktop for easy access.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy of my batch file attached to ",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=3657.msg39076#msg39076"},"this Unraid forum\npost")))),(0,r.kt)("p",null,"6","."," Manually test sleep and WOL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spin-down drives (I'm not certain that this is required. I did\nforce sleep from the active state (spinning) once before and got a\nparity check on wake-up. I'll test some more.)"),(0,r.kt)("li",{parentName:"ul"},"Telnet to server and enter ",(0,r.kt)("inlineCode",{parentName:"li"},"echo 3 >/proc/acpi/sleep"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure server sleeps"))),(0,r.kt)("li",{parentName:"ul"},"Execute ",(0,r.kt)("strong",{parentName:"li"},"Wakeup.bat")," file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure server wakes up"))),(0,r.kt)("li",{parentName:"ul"},"Repeat / test until comfortable")),(0,r.kt)("p",null,"Note: Some people have reported that their system misbehaves on the\nsecond or later sleep, so you should test sleep and wake-up for a while\nand make sure everything is correct. In fact, I just noticed that waking\nup from S3 sleep, my system does not negotiate a gigabit connection and\nI go from 1000Mb/s to 100Mb/s after the initial sleep. So I have a\nlittle more work to do -- I'm guessing a Linux driver issue?"),(0,r.kt)("p",null,"7","."," Record hard drive references (sda, sdb, etc)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From Unraid 'Devices' page, make note of the hard drive references\nin your system. You're building a list of hard drives in the system\nfor use in the sleep script.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"I am currently only using two SATA drives, so my drive\nreferences are: ",(0,r.kt)("strong",{parentName:"li"},"sda")," and ",(0,r.kt)("strong",{parentName:"li"},"sdb"))))),(0,r.kt)("p",null,"8","."," Generate sleep script, or download mine from\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=3657.msg39076#msg39076"},"here")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I copied OMV's sleep script verbatim from ",(0,r.kt)("a",{parentName:"li",href:"https://forums.unraid.net/forum/index.php?topic=3657"},"this Unraid forum\nthread"),", and\nthen edited the lines shown below in bold:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\ndrives="/dev/sda /dev/sdb"\ntimeout=5\ncount=5\nwhile [ 1 ]\ndo\n hdparm -C $drives | grep -q active\n if [ $? -eq 1 ]\n then\n  count=$[$count-1]\n else\n  count=$timeout\n fi\n if [ $count -le 0 ]\n then\n  # Do pre-sleep activities\n  sleep 5\n  # Go to sleep\n  echo 3 > /proc/acpi/sleep\n  # Do post-sleep activities\n  # Force NIC into gigabit mode\n  # (might be needed forgets about gigabit when it wakes up)\n  ethtool -s eth0 speed 1000\n  # Force a DHCP renewal (shouldn\'t be used for static-ip boxes)\n  /sbin/dhcpcd -n\n  sleep 5\n count=$timeout\nfi\n # Wait a minute\n echo COUNT $count\n sleep 60\ndone\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"timeout=5 and count=5 are programmable timers to set the delay from\nspin-down until sleep. This sets the delay to five minutes after\nspin down, OMV's original script was 15 minutes."),(0,r.kt)("li",{parentName:"ul"},"drives= line needs to be edited to reflect the drives that you want\nto be checked for status (idle or spinning). Again, my server only\nhas two drives (",(0,r.kt)("strong",{parentName:"li"},"sda")," and ",(0,r.kt)("strong",{parentName:"li"},"sdb"),"), so I edited accordingly. Be\naware that this drive list can change when upgrading Unraid or\nmodifying your hardware. It can even change from one boot to the\nnext. For example, your flash drive may be assigned ",(0,r.kt)("strong",{parentName:"li"},"sdc")," on one\nboot, but ",(0,r.kt)("strong",{parentName:"li"},"sdd")," on the next boot, with one of your hard drives\nassigned to ",(0,r.kt)("strong",{parentName:"li"},"sdd")," the first time, and ",(0,r.kt)("strong",{parentName:"li"},"sdc")," the next time."),(0,r.kt)("li",{parentName:"ul"},"Copy of my ",(0,r.kt)("strong",{parentName:"li"},"s3.sh")," sleep script attached to ",(0,r.kt)("a",{parentName:"li",href:"https://forums.unraid.net/forum/index.php?topic=3657.msg39076#msg39076"},"this Unraid forum\npost"))),(0,r.kt)("p",null,"9","."," Save script onto flash drive in specified location"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I titled my sleep script ",(0,r.kt)("strong",{parentName:"li"},"s3.sh")," and saved in ",(0,r.kt)("strong",{parentName:"li"},"/boot/custom/bin"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:"),' "boot" is ',(0,r.kt)("em",{parentName:"p"},"already")," the name of the root directory of\nyour flash device. So, if you save your script as per this example, do\n",(0,r.kt)("strong",{parentName:"p"},"not"),' create another "boot" directory. Doing so will cause Unraid to\nlose track of your config directory and your entire configuration will\nbe lost (unless previously backed up elsewhere.)'),(0,r.kt)("p",null,"10","."," Edit 'go' file to call script"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I added the following lines to my go script to initiate the sleep\nscript during boot:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Execute s3.sh sleep script\nfromdos < /boot/custom/bin/s3.sh | at now + 1 minute\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you adjust file directory structure as necessary depending\nupon where you saved your ",(0,r.kt)("strong",{parentName:"li"},"s3.sh")," script.")),(0,r.kt)("p",null,"11","."," Re-boot / test"),(0,r.kt)("p",null,"Good luck!"))}m.isMDXComponent=!0}}]);