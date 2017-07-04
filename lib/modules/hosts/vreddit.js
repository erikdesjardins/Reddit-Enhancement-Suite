/* @flow */

import { Host } from '../../core/host';

export default new Host('vreddit', {
	name: 'v.redd.it',
	domains: ['v.redd.it'],
	attribution: false,
	detect: ({ pathname }) => pathname.slice(1),
	handleLink(href, id) {
		return {
			type: 'VIDEO',
			controls: false,
			loop: true,
			muted: true,
			dash: true,
			sources: [{
				source: `https://v.redd.it/${id}/DASHPlaylist.mpd`,
			}],
		};
	},
});
