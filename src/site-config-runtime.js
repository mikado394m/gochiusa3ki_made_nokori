import moment from 'moment'

import siteConfig from './site-config.json'

export default {
	...siteConfig,
	episodes: [
		'1話 「スピードアップ」',
		'2話 「Final Opinion」',
		'3話 「Do！It！Happy大冒険！」',
		'4話 「オレ達は深紅色のI'mJOKERで(中略)OBENT MAGNUM」',
		'5話 「」',
		'6話 「」',
		'7話 「」',
		'8話 「」',
		'9話 「」',
		'10話 「」',
		'11話 「」',
		'12話 「」',
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
