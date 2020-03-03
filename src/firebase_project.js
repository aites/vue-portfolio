export default class data_project {
	constructor() {
		this.init()
	}
	init() {
		this.getData();
	}

	getData() {
		return [{
				title: 'スタディサプリ進路',
				date: '2018/09 ~ 2020/01',
				label: ['html', 'velocity', 'scss', 'jQuery', 'vue.js', 'npm', 'gulp', 'git', 'svn', 'apache', 'Adobe XD'],
				image: 'project_1_pc.png',
				info: `エンハンス対応とリニューアル対応を行ってきました。
				エンハンス業務では、既存の画面の修正対応、新規キャンペーンページの作成、KARTEでの短期間ABテストの実施コンテンツ作成
				リニューアル業務では、bright coveの提供する動画のあるページのマークアップ対応、API取得データの提案
				を行っていました。
				フロントエンドというポジションでしたが、基本的に自分でスケジュール管理・調整や用件の確認・情報収集、案件変更などをデザイナーやバックエンドの方に共有など、ディレクション的なことを行うことが必要な現場です。`,
				detail: {
					language: ['html', 'velocity', 'scss', 'jQuery', 'vue.js'],
					scale: '大規模案件',
					term: '2018/08 ~ 2020/01',
					url: 'https://shingakunet.com/',
					development: ['npm', 'gulp', 'git', 'svn', 'apache', 'Adobe XD'],
				},
			},
			{
				title: 'リクナビ企業側',
				date: '2018/02 ~ 2020/07',
				label: ['html', 'css', 'scss', 'javaScript', 'jQuery', 'npm', 'gulp', 'git'],
				image: 'project_2_pc.png',
				info: '古いブラウザ対応（IE）に対応したマークアップ対応を行いました。ディレクターの方と初めて一緒に業務を行いました。',
				detail: {
					language: ['html', 'css', 'scss', 'javaScript', 'jQuery'],
					scale: '大規模案件',
					term: '2018/09 ~ 2020/01',
					url: 'https://job.rikunabi.com/',
					development: ['npm', 'gulp', 'git'],
				},
			},
			{
				title: 'リクナビ新卒',
				date: '2017/04 ~ 2018/02',
				label: ['html', 'css', 'scss', 'javaScript', 'jQuery'],
				image: 'project_2_pc.png',
				info: 'エンハンス対応を行いました。未経験のため、先輩の方とOJTの形で実装を進めていきました。要件確認を設計者の方と相談して対応しました。',
				detail: {
					language: ['html', 'css', 'scss', 'javaScript', 'jQuery'],
					scale: '大規模案件',
					term: '2017/04 ~ 2018/02',
					url: 'https://job.rikunabi.com/',
					development: ['npm', 'webpack', 'git', 'PhotoShop'],
				},
			},
			{
				title: 'デジタルハリウッド STUDIO横浜',
				date: '2016/08 ~ 2017/04',
				label: ['html', 'css', 'scss', 'javaScript', 'jQuery', 'Illustrator', 'PhotoShop', 'apache'],
				image: 'project_3.jpg',
				info: 'デジタルハリウッド STUDIO横浜に半年間通い、その後自習ルームで制作活動をしていました。',
				detail: {
					language: ['html', 'css', 'scss', 'javaScript', 'jQuery'],
					scale: '社会人スクール',
					term: '2017/04 ~ 2018/02',
					url: 'https://school.dhw.co.jp/school/yokohama/',
					development: ['Illustrator', 'PhotoShop', 'apache'],
				},
			},
		]
	}
}
