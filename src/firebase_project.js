export default class data_project {
	constructor() {
		this.init()
	}
	init() {
		this.getData();
	}

	getData() {
		return [{
				title: 'スタディサプリ',
				date: '2018/09 ~ 2020/01',
				label: ['html', 'scss', 'jQuery', 'vue.js'],
				image: 'project_1_pc.png',
				info: 'エンハンス、リニューアルと対応',
				detail: {
					language: 'html,scss,jQuery,vue.js',
					scale: '大規模案件',
					term: '2018/09 ~ 2020/01',
					url: 'https://shingakunet.com/',
					development: ['gulp', 'git', 'svn'],
				},
			},
			{
				title: 'リクナビ新卒1',
				date: '2017/04 ~ 2018/02',
				label: ['html', 'scss', 'jQuery'],
				image: 'project_2_pc.png',
				info: 'エンハンス、リニューアルと対応',
				detail: {
					language: 'html,scss,jQuery,vue.js',
					scale: '大規模案件',
					term: '2017/04 ~ 2018/02',
					url: 'https://job.rikunabi.com/',
					development: ['webpack,git'],
				},
			},
			{
				title: 'スタディサプリ',
				date: '2018/09 ~ 2020/01',
				label: ['html', 'scss', 'jQuery', 'vue.js'],
				image: 'project_1_pc.png',
				info: 'エンハンス、リニューアルと対応',
				detail: {
					language: 'html,scss,jQuery,vue.js',
					scale: '大規模案件',
					term: '2018/09 ~ 2020/01',
					url: 'https://shingakunet.com/',
					development: ['gulp,git,svn'],
				},
			},
			{
				title: 'リクナビ新卒2',
				date: '2017/04 ~ 2018/02',
				label: ['html', 'scss', 'jQuery'],
				image: 'project_2_pc.png',
				info: 'エンハンス、リニューアルと対応',
				detail: {
					language: 'html,scss,jQuery,vue.js',
					scale: '大規模案件',
					term: '2017/04 ~ 2018/02',
					url: 'https://job.rikunabi.com/',
					development: ['webpack,git'],
				},
			},
		]
	}
}
