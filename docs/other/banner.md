# 狀態圖

## 使用於[巴哈姆特哈拉區](https://forum.gamer.com.tw/B.php?bsn=18673)

#### 1. 從[伺服器資訊頁的狀態圖標籤頁](/player/ServerInfo#狀態圖)，選擇一張喜歡的圖片
![Banner1](/images/banner_1.png)

#### 2. 右鍵複製網頁產生的直接連結網址
![Banner2](/images/banner_2.png)  

#### 3. 切換至【巴哈姆特編輯器】，左上角「插入圖片」並選擇「網址」並貼上上一步驟複製的網址
![Banner3](/images/banner_3.png)

#### 4. 切換回【伺服器介紹】，複製介紹網址

:::: code-group
::: code-group-item 網址格式
```:no-line-numbers
https://www.mc-list.xyz/伺服器註冊編號/info
```
:::
::::
![Banner4](/images/banner_4.png)

#### 5. 切換至【巴哈姆特編輯器】並等待圖片讀取完畢後，滑鼠拉動選取圖片，點選輔助工具欄的連結按鈕
![Banner5](/images/banner_5.png)

#### 6. 將第 4 步驟的網址貼上，兩個都貼
![Banner7](/images/banner_7.png)

#### 切換至原始碼，確認狀態圖是否符合以下格式

```md:no-line-numbers
[url=https://www.mc-list.xyz/伺服器註冊編號/info][img=https://image.mc-list.xyz/banner/圖片編號-伺服器註冊編號.png][/url]
```

::: danger 非常非常重要的警告
如果你變更了**字體、大小、粗、斜體、刪除線**只要是任何有改到文字顯示的  
請重新確認狀態圖的連結是否有被變更，這是巴哈姆特編輯器的 BUG，會因為這樣導致被刪文
:::

## 把圖片放到自己的網頁上

::: tip 
- 放置在自己網頁伺服器上，頻繁更新時，請記得清除[快取](https://zh.wikipedia.org/wiki/缓存)
- 若無法清除快取，請在圖片網址 `.png` 的後方輸入 `?tmp=1` 或隨機查詢字串。
:::

:::: code-group
::: code-group-item HTML 格式
```html:no-line-numbers
<a href="https://www.mc-list.xyz/伺服器註冊編號/info" target="_blank">
    <img src="https://image.mc-list.xyz/banner/圖片編號-伺服器註冊編號.png" />
</a>
```
:::
::::
