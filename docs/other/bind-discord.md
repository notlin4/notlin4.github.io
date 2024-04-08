# 綁定 Discord
[`/user`](https://www.mc-list.xyz/user)

::: warning 需要登入
此功能需要[登入帳號](https://www.mc-list.xyz/user)才可以使用
:::

前往[我的伺服器](https://www.mc-list.xyz/user)後，點選「點我進行 Discord 綁定」  
![Discord Bind](/images/bind_discord.png)

完成驗證後，機器人就會將您自動加入我們的 [Discord 社群](https://discord.gg/VaQAY2s)，因為 Discord 限制，所以必須與機器人在同個社群才能進行傳送通知。  

綁定後將會透過機器人 `Minecraft 伺服器列表#5483` 傳送所有通知（除伺服器報表）。若重新按下按鈕將可以解除綁定狀態。

::: tip 注意事項
- 若收不到通知，請檢查是否開啟伺服器私訊。  
- 大頭貼使用來自 [Gravatar](https://www.gravatar.com/)。
:::

## 設定通知
前往 [Discord 社群](https://discord.gg/VaQAY2s) 於側邊攔會員列表中找到 `Minecraft 伺服器列表#5483`  
對他點開私訊並使用斜線指令

:::: code-group
::: code-group-item 設定指令
```:no-line-numbers
/notification alert [類別] [開啟/關閉]
```
:::
::: code-group-item 查看設定
```:no-line-numbers
/notification setting
```
:::
::::

## 退出伺服器
退出伺服器後，您之後將無法正常收到通知，可以選擇 [重新加入](https://discord.gg/VaQAY2s) 或是 [解除綁定](https://www.mc-list.xyz/user)。

### 類別
::: tip 注意！
所有通知類別**預設皆為開啟**
:::

#### :loudspeaker: 伺服器營運提醒
當伺服器離線超過 6 個小時的當下，您就會收到一則告知您在我們網頁上登記的連線位置被偵測離線。此通知只會發送一次。

#### :loudspeaker: 伺服器列表狀態變更
當發佈在伺服器列表的伺服器列表顯示出了變更，您將會收到一則通知，告知您的伺服器變更狀況。每次變更只會發送一次。

#### :incoming_envelope: 伺服器評價通知
當伺服器在詳細頁面收到評價之後，您就會收到評價通知。

#### :warning: 廣告失效通知
【廣告投放】廣告在過期 7 天前會收到通知續費，若沒有續費廣告將會不進行輪播。

#### :credit_card: 廣告付款通知
【廣告投放】付款成功、失敗、逾期，您就會收到訂單相關通知。

#### :white_check_mark: 廣告通過審核通知
【廣告投放】當廣告經過管理員審核通過後，您就會收到通知，並附上失效時間。
  
![Bot Image](/images/bot.png)
