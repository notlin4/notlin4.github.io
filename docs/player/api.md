# API
::: danger
目前暫時關閉 API 服務
:::
::: tip
年久失修，我甚至已經忘記它的存在了
:::
[`/user/api`](https://www.mc-list.xyz/user/api)

## 功能
目前只能拿所有伺服器的列表，沒了

::: warning 需要授權
此功能需要[登入帳號](https://www.mc-list.xyz/user)後[取得 API Key](https://www.mc-list.xyz/user/api)才可以使用。  
:::
Base URL
```:no-line-numbers
https://api.mc-list.xyz/
```

Request Body (僅接受 `multipart/form-data` & `application/x-www-form-urlencoded`)
|key|type|value|require|
|:------|:------|:------|:------|
|type|string|serverList|true|
|apikey|string|your key|true|
|limit|integer|10|false|

Response
:::: code-group
::: code-group-item 成功
```json:no-line-numbers
{
    "statusCode": 0,
    "limit": 7,
    "result": [
        {
            "name": "無名氏伺服器",
            "ip": "amssv.club",
            "version": "1.16.5",
            "vote": 7,
            "status": 1,
            "players": {
                "online": 24,
                "max": 30
            },
            "tags": [
                "生存",
                "飛行",
                "領地",
                "防噴",
                "香草"
            ],
            "createTime": "1970/01/01 08:00:00",
            "icon": ""
        }
    ]
}
```
:::
::: code-group-item 失敗
```json:no-line-numbers
{
	"statusCode": 1,
	"errorMessage": "API Key 錯誤。"
}
```
:::
::::

## 速率限制
10,000 / 日