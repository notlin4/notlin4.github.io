# 如何安裝 Prismlauncher
這篇文章將會教你如何安裝 Prismlauncher


### 安裝
一、透過瀏覽器安裝
1. 前往 [Java](https://adoptium.net/temurin/releases/?os=windows&arch=x64&package=jdk) 下載 Java

    提示: 可以在左上角選擇 Java 版本！

    以下是所有 Minecraft 版本所需的 Java 版本：

    | Minecraft 版本 | Java 版本 |
    | --- | --- |
    | 1.20.5 或以上 | Java 21 |
    | 1.17 ~ 1.20.4 | Java 17 |
    | 1.16.5 或以下 | Java 8 |

1. 前往 [官網](https://prismlauncher.org/download) 下載安裝檔
    * 請選擇 Installer (.exe)
    打開安裝檔並安裝 Prismlauncher

二、透過 winget 安裝
1. 開啟 cmd 輸入 `winget search Adoptium`
1. 選擇適合的版本並安裝。範例： `winget install EclipseAdoptium.Temurin.17.JDK`
1. 輸入 `winget install Prismlauncher.Prismlauncher` 安裝 Prismlauncher

### 使用
1. 設定 Prismlauncher
    * 在 Java 清單中選擇上述表格中的 Java 版本
    * 記憶體建議設定 4096 MB，由於 Java 的特性，分配更多會對效能優化造成反效果！

1. 建立一個實例
    * 選擇版本與載入器後，按確認
    * 按編輯後即可開始安裝模組，最後按啟動會被要求要登入微軟帳戶

> 由 Tsaitou7361 於 2024/4/9 撰寫