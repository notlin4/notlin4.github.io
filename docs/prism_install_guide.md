# 如何安裝 Prism Launcher
這篇教學會教你如何安裝 Prism Launcher。


### 安裝
一、使用瀏覽器下載及安裝
1. 前往 [Adoptium 官網](https://adoptium.net/temurin/releases/?os=windows&arch=x64&package=jdk) 下載 Java。

    > 提示：可以在左上角選擇 Java 版本！

    以下是所有 Minecraft 版本所需的 Java 版本：

    | Minecraft 版本 | Java 版本 |
    | --- | --- |
    | 1.20.5 或以上 | Java 21 |
    | 1.17 ~ 1.20.4 | Java 17 |
    | 1.16.5 或以下 | Java 8 |

    > 提示：請盡量安裝 JDK，高版本的 JRE 可能不穩定！

2. 前往 [官網](https://prismlauncher.org/download) 下載安裝程式。
    * 請選擇 `Installer (.exe)`
   開啟安裝程式並安裝 Prism Launcher。

二、使用 winget 安裝
1. 開啟命令提示字元並輸入 `winget search Adoptium`。
2. 選擇適合的版本並安裝。範例： `winget install EclipseAdoptium.Temurin.17.JDK`
3. 輸入 `winget install Prismlauncher.Prismlauncher` 安裝 Prism Launcher。

### 使用
1. 設定 Prism Launcher
    * 在 Java 清單中選擇上述表格中的 Java 版本
    * 記憶體建議配置 4096～8192 MiB，由於 Java 的特性，分配太多反而會對效能造成反效果！

2. 建立一個實例
    * 選擇版本和載入器後，按「OK」
    * 按「編輯」後即可開始安裝模組，最後按「啟動」會被要求登入 Mircosoft 帳號。

> 由 Tsaitou7361 於 2024/4/9 撰寫
