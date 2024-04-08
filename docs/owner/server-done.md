# 完成新增與驗證後

::: warning 需要登入
- 此功能需要[登入帳號](https://www.mc-list.xyz/user)才可以使用
- 此功能需要至少一個已驗證的伺服器才可以使用
:::

## 轉移伺服器
當伺服器註冊完成後，就可以將伺服器轉移給其他使用者（請先告知前來登入網站），轉移過程中若需要取消，請聯繫管理員處理，轉移後無法恢復。

## 重新讀取伺服器狀態
當伺服器完成驗證後，系統就會開始讀取伺服器狀態，若想即時更新伺服器的資料，就可以按下這顆按鈕。  
![Reload Server](/images/reload_status.png)

## 伺服器報表
URL: `user/log-server?伺服器編號`  
伺服器開始讀取後，系統就會同時紀錄在何時伺服器狀態及人數，可以在這邊查詢當時的資料，也會統計最高玩家數量及平均值。  
![Server Offline](/images/server_log.png)

## 投票數據
URL: `user/report-server-vote?伺服器編號`  
當伺服器完成驗證後，投票功能自動開放給玩家，可以在後台中查看玩家在您的伺服器投票支持了幾次。
::: tip 所有時間投票資料
![Vote All Time](/images/vote_all_time.png)
:::
::: tip 指定月份查詢
![Vote Months](/images/vote_months.png)
:::

## 離線通知
::: warning
必須完成[綁定 Discord](/other/bind-discord.md)
:::
![Server Offline](/images/server_offline.png)