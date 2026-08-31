# FFXIV CHARACTER SNAPSHOT MAKER

FFXIV CHARACTER SNAPSHOT MAKER は、FINAL FANTASY XIV のスクリーンショットにキャラクター情報を組み合わせ、正方形のプロフィールスナップショットを作成する非公式Webツールです。

EORZEA PROFILE STUDIO シリーズの第3弾として制作しています。

## Version

Ver.1.01

## EORZEA PROFILE STUDIO

FFXIV向けのプロフィール・キャラクター表現Webツールをまとめたシリーズです。

### 01
FFXIV CHARACTER PROFILE CARD

### 02
FFXIV CHARACTER PORTRAIT MAKER

### 03
FFXIV CHARACTER SNAPSHOT MAKER

## 主な機能

- FFXIVスクリーンショットの読み込み
- スクリーンショットの横位置調整
- スクリーンショットの縦位置調整
- スクリーンショットの拡大
- カバーフィルム色切替
- カバーフィルム濃度調整
- 文字色切替
- フォント切替
- 情報パネル色切替
- 情報パネル透明度調整
- Lodestoneキャラクターデータ取得
- キャラクター名表示
- World / Data Center表示
- 全ジョブアイコン表示
- ジョブレベル表示
- プレイスタイル複数選択
- 5つの質問への回答
- MESSAGE入力
- 日本語 / 英語切替
- 1080 × 1080 PNG画像書き出し
- X投稿リンク
- ハッシュタグ投稿検索

## X Hashtag

#FFXIVCHARACTERSNAPSHOTMAKER

## 出力画像

生成されるスナップショットは、

1080 × 1080 px

のPNG画像です。

## Lodestone

キャラクターのLodestone URLを入力することで、キャラクター名・World / Data Center・ジョブレベル等の取得に対応しています。

Lodestoneへの直接アクセスではなく、Cloudflare Workerを中継してデータを取得します。

取得後のキャラクター名およびWorld / Data Centerは手動編集することもできます。

## Job Icons

ジョブアイコン画像は以下のディレクトリに配置します。

assets/jobs/

使用する主なファイル名：

- Paladin.png
- Warrior.png
- DarkKnight.png
- Gunbreaker.png
- WhiteMage.png
- Scholar.png
- Astrologian.png
- Sage.png
- Monk.png
- Dragoon.png
- Ninja.png
- Samurai.png
- Reaper.png
- Viper.png
- Bard.png
- Machinist.png
- Dancer.png
- BlackMage.png
- Summoner.png
- RedMage.png
- Pictomancer.png
- BlueMage.png
- Carpenter.png
- Blacksmith.png
- Armorer.png
- Goldsmith.png
- Leatherworker.png
- Weaver.png
- Alchemist.png
- Culinarian.png
- Miner.png
- Botanist.png
- Fisher.png

## ファイル構成

FFXIV-character-snapshot-maker/

- index.html
- style.css
- script.js
- README.md
- assets/
  - images/
  - jobs/

## 使用ライブラリ

画像書き出しには html2canvas を使用しています。

また、丸文字フォントとして M PLUS Rounded 1c を使用しています。

## 対応について

本ツールはPC・スマートフォンでの利用を想定しています。

ブラウザや端末、通信環境等によっては一部の機能が正常に動作しない場合があります。

特に以下の機能は利用環境の影響を受ける場合があります。

- 画像読み込み
- PNG画像書き出し
- Webフォント
- Lodestoneデータ取得
- Xへのリンク

## Disclaimer

本サイトは個人が制作・運営する非公式ツールであり、株式会社スクウェア・エニックスとは関係ありません。

本サイトの利用によって生じた損害・不利益について、制作者は責任を負いかねます。

スクリーンショットや入力内容については、各利用者の責任のもとでご利用ください。

ご利用の端末・ブラウザ・通信環境等によっては、本サイトが正常に動作しない場合があります。

FINAL FANTASY XIV および関連する名称・画像・データ等の権利は、それぞれの権利者に帰属します。

(C) SQUARE ENIX

## Creator

IDEA BY cyan_stella

X:
@cyan_stella