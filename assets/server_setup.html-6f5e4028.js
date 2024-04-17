import{_ as l,M as s,p as a,q as i,R as e,t as n,N as t,a1 as o}from"./framework-5866ffd3.js";const h={},d=o('<h1 id="自架伺服器" tabindex="-1"><a class="header-anchor" href="#自架伺服器" aria-hidden="true">#</a> 自架伺服器</h1><p>這篇文章會教你如何在自己的電腦上架設伺服器</p><h2 id="前置作業" tabindex="-1"><a class="header-anchor" href="#前置作業" aria-hidden="true">#</a> 前置作業</h2><h3 id="下載伺服器軟體" tabindex="-1"><a class="header-anchor" href="#下載伺服器軟體" aria-hidden="true">#</a> 下載伺服器軟體</h3><p>根據自己的需求下載伺服器軟體，例如：Forge、Fabric、Spigot、Paper、Purpur 等</p><h3 id="建立啟動批次檔" tabindex="-1"><a class="header-anchor" href="#建立啟動批次檔" aria-hidden="true">#</a> 建立啟動批次檔</h3><p>如果您使用的伺服器軟體不是 Forge 或 Fabric，預設是不會產生啟動批次檔的，而每次都要輸入一長串指令是非常累的，因此，讓我們建立啟動批次檔吧！</p>',7),_={href:"https://flags.sh",target:"_blank",rel:"noopener noreferrer"},c=e("li",null,"輸入伺服器啟動檔案的檔案名稱",-1),u=e("li",null,"選擇你使用的作業系統",-1),p=e("li",null,"按左下方的按鈕來下載腳本，以後僅需開啟這個指令碼即可啟動伺服器！",-1),g=e("blockquote",null,[e("p",null,"提示：記憶體建議配置 4 GiB～8 GiB，過多的記憶體反而會拖累伺服器效能！ 提示：建議不要開啟圖形化使用者介面（GUI），你可以使用命令提示字元管理你的伺服器！")],-1),f=e("h3",{id:"公開伺服器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#公開伺服器","aria-hidden":"true"},"#"),n(" 公開伺服器")],-1),m=e("p",null,"以下提供幾種方式讓你的朋友加入伺服器",-1),b=e("ul",null,[e("li",null,[e("strong",null,"ngrok 免費版"),n(" 現在會限制流量，不適合架設伺服器，因此不建議使用它。")])],-1),k={id:"radmin-vpn-推薦",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#radmin-vpn-推薦","aria-hidden":"true"},"#",-1),x={href:"https://www.radmin-vpn.com/tw/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.radmin-vpn.com/tw/",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,"注意，因為它會造成許多問題，請勿使用 Hamachi 連線！")],-1),I=e("li",null,"建立一個網路，並記住網路名稱與密碼",-1),E=e("li",null,[n("請你的朋友在他的電腦上也安裝 "),e("strong",null,"Radmin VPN")],-1),B=e("li",null,"把網路名稱與密碼分享給朋友，讓他加入",-1),N=e("li",null,[n("請朋友在應用程式中複製主機的 "),e("strong",null,"虛擬 IP 位址"),n("，輸入到遊戲中即可開始遊戲！")],-1),F=e("h4",{id:"連接埠轉送",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#連接埠轉送","aria-hidden":"true"},"#"),n(" 連接埠轉送")],-1),V={href:"https://zh.wikipedia.org/wiki/%E8%B7%AF%E7%94%B1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},G=o("<li>開啟 <strong>命令提示字元</strong> 或 <strong>PowerShell</strong>，輸入 <code>ipconfig</code> 然後按下 Enter 鍵</li><li>複製目前使用網路的 <strong>閘道</strong>，輸入到瀏覽器的網址列中即可存取路由器管理介面</li><li>複製目前使用網路的 <strong>IPv4 位址</strong></li><li>登入後找到「連接埠轉發」（Port Forwarding） <ul><li>輸入剛才複製的 <strong>IPv4 位址</strong></li><li>連接埠（Port）設為 <strong>25565</strong></li><li>選擇 TCP 協定</li></ul></li>",4),R={href:"https://canyouseeme.org/",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"外網 IP 位址",-1),q=e("li",null,[n("將剛才複製的 "),e("strong",null,"外網 IP 位址"),n(" 分享給朋友，輸入到遊戲中即可開始遊戲！")],-1),y=e("h4",{id:"使用模組",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用模組","aria-hidden":"true"},"#"),n(" 使用模組")],-1),A={href:"https://essential.gg/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://modrinth.com/mod/p2p",target:"_blank",rel:"noopener noreferrer"},H={href:"https://modrinth.com/mod/e4mc",target:"_blank",rel:"noopener noreferrer"},L={href:"https://modtinth.com/world-host",target:"_blank",rel:"noopener noreferrer"};function T(z,M){const r=s("ExternalLinkIcon");return a(),i("div",null,[d,e("ol",null,[e("li",null,[n("前往 "),e("a",_,[n("指令碼建立工具"),t(r)])]),c,u,p]),g,f,m,b,e("h4",k,[P,n(),e("a",x,[n("Radmin VPN"),t(r)]),n("（推薦）")]),e("ol",null,[e("li",null,[n("前往 "),e("a",w,[n("官網"),t(r)]),n(" 下載軟體並安裝 "),v]),I,E,B,N]),F,e("p",null,[n("需求：你需要擁有自家"),e("a",V,[n("路由器"),t(r)]),n("的管理權限，並且家中有實體 IP 位址")]),e("ol",null,[G,e("li",null,[n("至 "),e("a",R,[n("canyouseeme"),t(r)]),n(" 確認自己的 "),S]),q]),y,e("ol",null,[e("li",null,[n("雙方皆須安裝 "),e("ul",null,[e("li",null,[e("a",A,[n("Essential"),t(r)])]),e("li",null,[e("a",C,[n("P2P"),t(r)])])])]),e("li",null,[n("僅需開服者在用戶端安裝 "),e("ul",null,[e("li",null,[e("a",H,[n("e4mc"),t(r)])]),e("li",null,[e("a",L,[n("World Host"),t(r)])])])])])])}const W=l(h,[["render",T],["__file","server_setup.html.vue"]]);export{W as default};
