export default class data {
	constructor() {
		this.init()
	}
	init() {
		this.getData();
	}

	getData() {
		return [{
				title: 'ボルダリング',
				text: '2016年からやっています。現在、ギリギリ4級が登れるクライマーです。南東京のボルダリングジムはいくつか行ったことがあるので、興味のある方はぜひ一度一緒に行きましょう！！',
				imageData: 'hobby/hobby_1.png',
			},
			{
				title: 'ポイント',
				text: 'PayPayやLINEPay、楽天カードなどでお得にポイントをゲットすることを探しています。お小遣いを少しでも増やしたい！！と思いで情報を集めています。',
				imageData: 'hobby/hobby_2.png',
			},
			{
				title: 'ゲーム',
				text: 'スマブラSP、シャドウバース、ポケモンを最近やっています！！とりあえずどれも上手くなりたいとは思っていますが、そこまでガチではやっていないです。',
				imageData: 'hobby/hobby_3.png',
			},
		];
	}
}
