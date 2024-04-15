# 自架伺服器
這篇文章會教你如何在自己的電腦上架設伺服器

## 前置作業
### 下載伺服器軟體
根據自己的需求下載伺服器軟體，如：Forge、Fabric、Spigot、Paper、Purpur 等

### 建立啟動批次檔
若使用的伺服器端不是 Forge，預設是不會產生啟動批次檔的，而每次都要輸入一長串指令是非常累的，因此，讓我們建立啟動批次檔吧！
1. 前往 [腳本建立工具](https://flags.sh)
1. 輸入伺服器啟動檔案的檔案名稱
1. 選擇 Windows
1. 按左下角的按鈕下載腳本，以後僅需透過開啟這個腳本即可啟動伺服器！
> 提示：記憶體分配量建議為 4GB ~ 8GB，過多的記憶體反而會拖累伺服器效能！
> 提示：建議不要開啟 GUI (圖形化使用者介面)，你可以使用命令提示字元管理你的伺服器！

### 公開伺服器
以下提供幾種方式讓你的朋友加入伺服器
* 不建議使用 **ngrok**，因為 **ngrok 免費版** 現在會限制流量，不適合架伺服器。
#### [Radmin VPN](https://www.radmin-vpn.com/tw/) (推薦)
1. 前往 [官網](https://www.radmin-vpn.com/tw/) 下載軟體並安裝
    * 注意！不要使用 Hamachi 連線！
1. 建立一個網路，並記住網路名稱與密碼
1. 請你的朋友在他的電腦上也安裝 **Radmin VPN**
1. 把網路名稱與密碼分享給朋友，讓他加入
1. 請朋友在應用程式中複製主機的 **虛擬IP**，輸入到遊戲中即可開始遊戲！

#### 連接埠轉送
需求：你需要擁有自家[路由器](https://zh.wikipedia.org/wiki/路由器)的管理權限，並且家中有實體IP
1. 打開 **命令提示字元** 或 **Powershell**，輸入`ipconfig`按 Enter
1. 複製目前使用的網路的 **閘道**，輸入到瀏覽器的網址列中即可存取路由器管理介面
1. 複製目前使用的網路的 **IPv4 位址**
1. 登入後找到「連接埠轉發」(Port Forwarding)
    * 輸入剛才複製的 **IPv4 位址**
    * 連接埠 (Port) 設為 **25565**
    * 選擇 TCP 協定
1. 至 [canyouseeme](https://canyouseeme.org/) 確認自己的 **外網 IP**
1. 將剛才複製的 **外網 IP** 分享給朋友，輸入到遊戲中即可開始遊戲！

#### 使用模組
1. 雙方皆須安裝
    * [Essential](https://essential.gg/)
    * [P2P](https://modrinth.com/mod/p2p)
1. 僅伺服器端安裝
    * [e4mc](https://modrinth.com/mod/e4mc)
    * [World Host](https://modtinth.com/world-host)
