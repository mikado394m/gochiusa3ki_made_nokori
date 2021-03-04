import moment from 'moment'

import siteConfig from './site-config.json'

export default {
	...siteConfig,
	episodes: [
		'track-01 「スピードアップ」',
		'track-02 「Final Opinion」',
		'track-03 「Do！It！Happy大冒険！」',
		'track-04 「オレ達は深紅色のI’mJOKERで(中略)OBENTO MAGNUM」',
		'track-05 「きゅきゅきゅん♥ハートシェイカーなain’t nobody STOP」',
		'track-06 「乙女陽炎」',
		'track-07 「パステージ」',
		'track-08 「ランナーズハイ!!」',
		'track-09 「EMPIRE DOMINATOR」',
		'track-10 「キミはボクのプリンセス☆」',
		'track-11 「」',
		'track-12 「」',
	],
	channels: new Map([
		['tokyomx', {
			name: 'TOKYO MX',
			time: new Map([
				[1, moment('2021-01-07T22:00:00')]
			])
		}],
		['bsfuji', {
			name: 'BSフジ',
			time: new Map([
				[1, moment('2021-01-08T01:05:00')]
			])
		}],
		['suntv', {
			name: 'サンテレビ',
			time: new Map([
				[1, moment('2021-01-09T00:30:00')]
			])
		}],
		['uhb', {
			name: '北海道文化放送',
			time: new Map([
				[1, moment('2021-01-08T02:20:00')],
				[2, moment('2021-01-08T01:50:00')]
			])
		}],
		['atx', {
			name: 'AT-X',
			time: new Map([
				[1, moment('2021-01-11T22:30:00')]
			])
		}],
	]),
	defaultChannelId: 'tokyomx'
}
