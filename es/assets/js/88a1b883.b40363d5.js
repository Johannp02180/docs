"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return a?r.createElement(f,s(s({ref:t},h),{},{components:a})):r.createElement(f,s({ref:t},h))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={},s="Cache Disk",o={unversionedId:"legacy/FAQ/cache-disk",id:"legacy/FAQ/cache-disk",title:"Cache Disk",description:"Important! This page is a basic introduction to the Unraid Cache",source:"@site/docs/legacy/FAQ/cache-disk.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/cache-disk",permalink:"/es/legacy/FAQ/cache-disk",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/cache-disk.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Parity",permalink:"/es/legacy/FAQ/Parity"},next:{title:"Checking and fixing file systems",permalink:"/es/legacy/FAQ/check-disk-filesystems"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Adding a cache disk to the array",id:"adding-a-cache-disk-to-the-array",level:2},{value:"Cache settings",id:"cache-settings",level:2},{value:"Speed",id:"speed",level:2},{value:"Perceived write speed increases",id:"perceived-write-speed-increases",level:3},{value:"Actual write speed increases",id:"actual-write-speed-increases",level:3},{value:"The Mover",id:"the-mover",level:2},{value:"Other uses for a cache disk",id:"other-uses-for-a-cache-disk",level:2},{value:"Warm spare",id:"warm-spare",level:3},{value:"Running other software on top of Unraid",id:"running-other-software-on-top-of-unraid",level:3},{value:"Scratch space",id:"scratch-space",level:3},{value:"Disadvantages of a cache disk",id:"disadvantages-of-a-cache-disk",level:2},{value:"&#39;Wasted&#39; HDD and HDD slot",id:"wasted-hdd-and-hdd-slot",level:3},{value:"Short-term risk of data loss",id:"short-term-risk-of-data-loss",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Amount of data",id:"amount-of-data",level:3}],h={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cache-disk"},"Cache Disk"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important!")," This page is a basic introduction to the Unraid Cache\ndrive, but was written for v4 and v5. There is no mention of\nDockers, VM's, or Cache Pools. For v6 users, this page serves as an\nintroduction, but you should also check these resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forums.unraid.net/forum/index.php?topic=48508"},"FAQ")," -\nlook for the ",(0,n.kt)("em",{parentName:"li"},"Cache Drive/Pool")," section, has a number of related\nprocedures"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forums.unraid.net/forum/index.php?topic=56005"},"How to add a cache drive, replace a cache drive, and create a\ncache pool")," -\na nice video guide")),(0,n.kt)("p",null,"The cache disk feature of Unraid greatly increases the perceived\nperformance of the system when writing data to a parity-protected array.\nIt is particularly useful for users who write data to the array on a\nregular basis, and can also be used as a scratch disc for certain\napplications. The feature was introduced in version 4.3."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A cache disk is a hard drive that is not part of the normal\nparity-protected array. When a cache disk exists in the system, it is\nvisible as a disk share named 'cache' (provided disk shares are being\nexported). You may read data from or write data to the cache share just\nas you would any other disk share. As the cache disk is outside of the\nparity-protected array, writes will be much faster, but of course if\nthis disk fails, all its data may be lost."),(0,n.kt)("p",null,"The real power of a cache disk is realized when User Shares are enabled.\nThe cache disk may be automatically 'included' in every user share.\nHence any object -- a file or directory - created on a user share is\ncreated on the cache disk (provided that enough space is available).\nTherefore, when you browse the files on a user share, the listings will\ntransparently include objects on the cache disk as well as those on the\nother data disks."),(0,n.kt)("p",null,"In order to prevent the cache disk from filling up, a utility called the\n'mover' will move objects from the cache disk to the array proper. You\ncan set a schedule that defines when the mover will 'wake up'. The\ndefault schedule is to wake up at 3:40AM every day."),(0,n.kt)("p",null,"As there is a lag between the time objects are created on the cache\ndisk, and when they are moved to the array, it may be desirable to\ndisable the cache disk for certain shares. Each user share therefore has\nthe option to disable the use of the cache disk for that share."),(0,n.kt)("h2",{id:"adding-a-cache-disk-to-the-array"},"Adding a cache disk to the array"),(0,n.kt)("p",null,"In order to create a cache disk using the GUI:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the array"),(0,n.kt)("li",{parentName:"ol"},'Click on "Disk" at the top.'),(0,n.kt)("li",{parentName:"ol"},"Look at the very bottom of the page in the Disk Devices section for\na disk 'slot' labeled Cache (the very last slot)."),(0,n.kt)("li",{parentName:"ol"},"Select any disk not in the array into that slot."),(0,n.kt)("li",{parentName:"ol"},"Start the array")),(0,n.kt)("h2",{id:"cache-settings"},"Cache settings"),(0,n.kt)("p",null,"This section is present on the Share Settings page when user shares are\nenabled, and a cache disk is present and formatted."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Min. free space")," specifies the minimum amount of free space that must\nexist on the Cache disk in order for the user share file system to\ncreate objects on the Cache disk. If there is less than this amount of\nfree space then the object will be created on the array instead."),(0,n.kt)("p",null,":   Main article: ",(0,n.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/storage-management"},"Storage Management")),(0,n.kt)("h2",{id:"speed"},"Speed"),(0,n.kt)("h3",{id:"perceived-write-speed-increases"},"Perceived write speed increases"),(0,n.kt)("p",null,"The emphasis here is on 'perceived'. The real, behind-the-scenes write\nspeed of your Unraid server is unchanged by the addition of a cache\ndrive. A cache drive simply grants you the fastest transfer that your\nhardware will allow by deferring the inevitable parity calculation until\na later time (3:40 am server time, by default)."),(0,n.kt)("h3",{id:"actual-write-speed-increases"},"Actual write speed increases"),(0,n.kt)("p",null,"How much of a write speed improvement can you expect to see from using a\ncache drive? That depends on your hardware. Slower hardware will of\ncourse result in slower transfer speeds. Assuming that you have Gigabit\nLAN (GigE) capable network controllers on both sides of the transfer\n(the client PC and the Unraid server), a Gigabit LAN router or switch,\nappropriate network cables (Cat5e or Cat6), and modern SATA I or better\nhard drives, then you should see write speeds in the following ranges:"),(0,n.kt)("p",null,"These numbers represent average transfer speeds when writing data to\nUnraid:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Without a cache drive:")," Unraid 4.5.3 - average 20-30 MB/s, peak\nreported ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=5496.msg51190#msg51190"},"40\nMB/s"),"*"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"With a cache drive:")," Unraid 4.5.3 - average 50-60 MB/s, peak reported\n",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=5754.msg120084#msg120084"},"101\nMB/s"),"*"),(0,n.kt)("p",null,"So generally speaking, a server with a cache drive has write speeds\n",(0,n.kt)("strong",{parentName:"p"},"2-3x faster")," than the same server without a cache drive."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note: These figures (especially the averages) are based upon\npersonal observations by Rajahal and upon reports from other\nreputable sources in these forums.")),(0,n.kt)("h2",{id:"the-mover"},"The Mover"),(0,n.kt)("p",null,"The Mover is a utility that runs periodically to move files off the\ncache disk and onto parity-protected data disk(s). If Mover logging is\nenabled, the mover will record all its activity to the system log."),(0,n.kt)("p",null,"By default the mover is scheduled to run every day at 3:40AM. This may\nbe changed by defining your own Mover schedule string in crontab format."),(0,n.kt)("p",null,"If the mover finds no files to move, and the disks are spun-down, the\ndisks will not spin up. Conversely, file(s) will only be moved if they\nare not open for reading/writing -- they will move the next night, when\nthey are no longer open."),(0,n.kt)("p",null,":   Main article: ",(0,n.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/storage-management"},"Storage Management")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The mover will not move any top-level directories which begin with a\n'.' character. Such directories will not exist in normal use, but\nan advanced user may use this knowledge to create directories which\nwon't get moved.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The mover will not move any files that exist in the root of the\ncache disk. Such files will not exist in normal use, but an advanced\nuser may use this knowledge to create files which won't get moved\n(for example, a swap file).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The mover is just a script called '/usr/local/sbin/mover' which\ninvokes 'find' to traverse the cache disk and move files to the\narray using the 'mv' command. Advanced users may edit this script\nto fine-tune the mover. For example, it's possible to set\nconditions such as 'move only files older than N days', or 'only\nmove files greater than N bytes in size', etc. Refer to the script\nitself and the 'man' page of the 'find' command."))),(0,n.kt)("h2",{id:"other-uses-for-a-cache-disk"},"Other uses for a cache disk"),(0,n.kt)("h3",{id:"warm-spare"},"Warm spare"),(0,n.kt)("p",null,"The purpose of a 'warm spare' is to minimize the amount of time that\nyour array is without parity protection after a drive failure. A warm\nspare is a hard drive that you have installed in your server to prepare\nfor the eventuality of one of your other hard drives failing. It\nrequires that the warm spare drive be as large or larger than your\nparity drive and your largest data drive"),(0,n.kt)("p",null,"When a drive does eventually fail, you simply stop the array (via the\nMain page), unassign the dead drive (via the Devices page), assign the\nwarm spare (also on the Devices page), and then start the array (back on\nthe Main page). At this point, your data from the dead drive will be\nautomatically rebuilt onto your warm spare - this will take many hours,\nbut your array and all your data is still available for use during this\ntime (though performance will likely be degraded)."),(0,n.kt)("p",null,"In the classic application, a Warm Spare sits in your server\npre-installed (therefore taking up a SATA/PATA slot and using a small\namount of power), but constantly spun down and unused (as it is not\nassigned to a disk slot in Unraid)."),(0,n.kt)("p",null,"However, why not use a warm spare as a cache drive while you wait around\nfor another drive to fail? This application will of course add a bit of\nwear and tear to your warm spare, but nothing outside the scope of\nordinary use."),(0,n.kt)("h3",{id:"running-other-software-on-top-of-unraid"},"Running other software on top of Unraid"),(0,n.kt)("p",null,"As a cache drive is outside of the parity-protected array, it can be\nused for alternate software and Unraid add-ons that need to read and\nwrite data often."),(0,n.kt)("h3",{id:"scratch-space"},"Scratch space"),(0,n.kt)("p",null,"The cache disk can be used as scratch space for torrent client(s), news\nclients or web servers. The advantage here is that, for most of the day,\nonly the one cache disk in the array needs to be spun up. Otherwise, at\nleast two drives - parity and one data -- will be spun up."),(0,n.kt)("h2",{id:"disadvantages-of-a-cache-disk"},"Disadvantages of a cache disk"),(0,n.kt)("h3",{id:"wasted-hdd-and-hdd-slot"},"'Wasted' HDD and HDD slot"),(0,n.kt)("p",null,"One of your hard drives and SATA/PATA slots is dedicated to your cache\ndrive, instead of long-term data storage"),(0,n.kt)("h3",{id:"short-term-risk-of-data-loss"},"Short-term risk of data loss"),(0,n.kt)("p",null,"If your cache drive dies, it will take all of the data currently\nresiding on it to the grave. While it is possible to run ReiserFS data\nrecovery software on your dead cache drive, there is still a good\npossibility of permanent data loss."),(0,n.kt)("p",null,"By default, the mover script will run once a day at 3:40 am. If you are\nconcerned about data loss, you can edit the script so that it runs more\nfrequently and at different times."),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"The two key factors to consider to when choosing a hard drive to be your\ncache disk are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your intended purpose."),(0,n.kt)("li",{parentName:"ul"},"Amount of data")),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Increased perceived write speed:")," You will want a drive that is as\nfast as possible. For the fastest possible speed, you'll want an SSD\n(which has the added benefit of being low power) or a 10,000 rpm drive.\nIf you are on a tighter budget, a 7200 rpm drive such as a WD Black will\ndo fine. Unless you write a lot of very small files, the size of the\nhard drive's cache (8, 16, 32, 64 mb etc.) won't matter much. You can\nalso eek a bit more performance out of a slower drive by short stroking\nit (meaning confine it to only the outside sectors, which are higher\ndensity and can therefore be written to and read from faster), but this\nis of course an advanced maneuver."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"As a Warm Spare:")," you will want a drive that is the same size or\nlarger than your parity disk. This drive can be any speed you choose,\njust remember that in the event of a parity rebuild (if your parity disk\ndies) or a rebuild from parity (if a data disk dies), the process will\nproceed at the speed of your slowest disk."),(0,n.kt)("h3",{id:"amount-of-data"},"Amount of data"),(0,n.kt)("p",null,"The final consideration in choosing a cache drive is to think about the\namount of data you expect to pass through it. If you write ","~","10 GBs per\nday, then any drive 10 GB or larger will do (a 30 GB SSD may be a good\nfit in this case). If you write 100 GB in one day every few weeks, then\nyou will want a cache drive that is larger than 100 GB. If you attempt a\ndata transfer that is larger than the size of your cache drive, the\ntransfer will fail."))}u.isMDXComponent=!0}}]);