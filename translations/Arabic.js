/* eslint-disable no-unused-vars */
//engilsh
const {prefix, owner} = require('../config.js'), emojis = require('../emojis.json'), e = emojis;
module.exports = {
	create: {
		EXAMPLES: `/create duration:1m winners:1 prize:نترو \n /create duration:1m winners:1 prize:نترو channel:#العام \n /create duration:1m winners:1 prize:نترو required_role:@الداعمين`,
		perms: `${ e.error } ليس لديك صَلاحية \`MANAGE_MESSAGES\`، يمكنك تحديد رتبة لإنشاء وإدارة هداياك في سيرفرك باستخدام الأمر التالي \`/setrole\`!.`,
		duration: `${ e.error } يرجى إدخال وقت \`time\` صحيح!\n> مثال: \`1d (1 day)\`, \`1h (1 hour)\`, \`1m (1 minute)\`!`,
		argswinners: `${ e.error } اكتب \`عدد الفائزين!\`\n> مثال: \`1\`, \`2\` **...** \`10\` `,
		prizee: `${ e.error } الرجاء وضع \`جائزة\` لا تتضمن أكثر من **50 حرف**`,
		good: `${ e.success } **تم إنشاء هبتك بنجاح!**`,
		errorlink: `${ e.error } الرجاء إدخال **رابط خادم (سيرفر)** صالح أو \`ربما هنالك خطأ ما\`.`,
		notinserver: `${ e.error } مرحباً! أنا لست في هذا **الخادم (السيرفر)**، يمكنك \`إضافتي\` عن طريق **[النقر هنا](https://discord.com/api/oauth2/authorize?client_id=598564396691750933&permissions=8&scope=applications.commands%20bot)**`,
		view: `رابط الهبة:`
	},
	drop: {
		EXAMPLES: `/drop winners:1 prize:نترو \n /drop winners:1 prize:نترو channel:#العام`,
		dropstart: `${ e.success } **تم إنشاء هبتك بنجاح!**`,
		viewdrop: `رابط الدروب:`
	},
	delete: {
		EXAMPLES: `/delete => \`اختيار هدية معرف \``,
		option1: value => `جائزة الهَبَّة: ${ value.prize }`,
		option2: value => `معرف الهبة:${ value.messageId }`,
		fordelete: `${ e.for } **لحذف الهبة:**`,
		done: giveawayid => `${ e.success } تم حذف الهدية بنجاح! \n${ e.hash } معرف الهبة: \`${ giveawayid }\``,
		errmod: `${ e.error } حدث خطأ ما!`
	},
	edit: {
		EXAMPLES: `  /edit value:Winners new_value:5 => \`إختر معرف الهبة\` \n /edit value:Prize new_value:5$ بايبال => \`إختر معرف الهبة\` \n /edit value:duration new_value:1d => \`إختر معرف الهبة\``,
		pr: messageID => `${ e.success } تم تحديث جائزة الهبة بنجاح. \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		wi: messageID => `${ e.success } تم تحديث الفائز(ة) بالهبة بنجاح. \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		ti: messageID => `${ e.success } تم تحديث مدة الهبة بنجاح. \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		errmod: `${ e.error } حدث خطأ ما!`,
		ending: ' النهاية ',
		foredit: `${ e.for } ** لتحرير الهبة:**`
	},
	end: {
		EXAMPLES: `/end => \`اختيار معرف هدية \``,
		errmod: `${ e.error } حدث خطأ ما!`,
		good: messageID => `${ e.success } تم إنهاء الهبة بنجاح. \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		forend: `${ e.for } ** لإنهاء الهبة:**`
	},
	pause: {
		EXAMPLES: `/pause => \`اختيار معرف هدية \``,
		forpause: `${ e.for } **لتوقيف الهبة:**`,
		done: messageID => `${ e.success } تم توقيف الهدية بنجاح! \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		errmod: `${ e.error } حدث خطأ ما!`
	},
	resume: {
		EXAMPLES: `/resume => \`اختيار معرف هدية \``,
		autodes: `التشغيل التلقائي بعد:`,
		forresume: `${ e.for } **لاستئناف الهبة:**`,
		done: messageID => `${ e.success } تم استئناف الهدية بنجاح! \n${ e.hash } معرف الهبة: \`${ messageID }\``,
		errmod: `${ e.error } حدث خطأ ما!`
	},
	reroll: {
		EXAMPLES: `/reroll => \`اختيار معرف هدية \``,
		startat: `البدء في`,
		forreroll: `${ e.for } **لإعادة تحديد الفائز بالهبة:**`,
		good: ':tada: الفائز(ة/ون) جديد: {winners}! تهانينا!',
		parts: `${ e.error } لم يكن هناك عدد كاف من المشاركين في هذه الهبة لذلك لا يمكنني تحديد الفائز!`,
		errmod: `${ e.error } حدث خطأ ما!`
	},
	messages: {
		giveaway: `${ e.gift } **بدأت الهبة** ${ e.gift }`,
		giveawayEnded: `${ e.end } **انتهت الهبة** ${ e.end }`,
		dropstart: `${ e.drpstart } **بدء الـ DROP** ${ e.drpstart }`,
		dropend: `${ e.drpend } **إنتهى الـ DROP** ${ e.drpend }`,
		content1: `**إضغط على ${ e.bot_logo } للمشاركة والدخول في السحب!**`,
		content2: `・${ e.winners } الفائز(ة/ون): **\` {winners}\`**`,
		content3: `・${ e.duration } المدة: **{time}**`,
		hostedBy: `・${ e.host } بواسطة: {hostedBy}`,
		req: `${ e.requirements } الشروط:`,
		rolereq: `・${ e.rolereq } الرتبة: <@&{rolereq}>`,
		serverreq: (servername, serverrequired) => `・${ e.serverreq } الخادم: [${ servername }](${ serverrequired })`,
		drop: `・${ e.first } كن أول من يضغط على ${ e.bot_logo }`,
		end1: `**انتهت الهبة!**`,
		end2: `・${ e.prize } الجائزة: **\` {prize}\`**`,
		end3: `・${ e.win } الفائز(ة/ون): {winners}`,
		drpend: `**انتهى الـ DROP!**`,
		novalid1: `**تم إلغاء الهبة!**`,
		novalid2: `・${ e.warning } السبب: \` لا يوجد عدد كاف من المشاركين :/ \``,
		embedFooter: 'ManageGift • تنتهي في',
		dropfooter: 'ManageGift • Drop!',
		novalidfoo: 'ManageGift • إنتهت',
		winners: 'الفائز(ة/ون) 🎉',
		approved1: `${ e.approved } تمت الموافقة على دخولك للسحب!`,
		approved2: `**دخولك [لهذه الهدايا]({messageURL}) قد تمت الموافقة عليه!** \n \n > **لديك الآن فرصة للفوز! ${ e.bot_logo }**`,
		denied1: `${ e.denied } | تم رفضك دخولك للسحب!`,
		denied2: `**Your entry to [This Giveaway]({messageURL}) has been denied!** \n \n > **Please review the Giveaway Requirements!** ${ e.requirements }`,
		dm1: `**Congratulations {winner}! ${ e.bot_logo }**`,
		dm2: `・You Won ${ e.gift }:`,
		dm3: `・Hosted By ${ e.host }:`,
		winMessage: `${ e.bot_logo } | Congratulations, {winners}! You won **{this.prize}**!`
	},
	setdm: {
		EXAMPLES: `/setdm status:on \n /setdm status:off`,
		doneon: `${ e.success } | direct winner message correctly activated${ e.online }!.`,
		doneoff: `${ e.success } | direct winner message correctly deactivated${ e.dnd }!.`
	},
	setmention: {
		EXAMPLES: `/setmention status:on \n /setmention status:off`,
		mon: `${ e.success } | setmention command correctly activated${ e.online }!.`,
		moff: `${ e.success } | setmention command correctly deactivated${ e.dnd }!`
	},
	setrole: {
		EXAMPLES: `/setrole role role_value:@Manager \n /setrole status status_value:on \n /setrole status status_value:off`,
		setrlebedore: `${ e.error } | Please choose a role before activating or deactivating it..`,
		roledone: role => `${ e.success } | Role manager is set: ||<@&${ role.id }>||, And \`activated\``,
		ron: `${ e.success } | Role manager correctly activated${ e.online }!`,
		roff: `${ e.success } | Role manager correctly deactivated${ e.dnd }!`
	},
	config: {
		EXAMPLES: `/configuration`,
		configuration: 'Configuration:',
		status: `status: `,
		language: `language ${ e.lang }`,
		mentiont: `setmention ${ e.mention }`,
		setdmt: `setdm ${ e.dm }`,
		setrolet: `setrole ${ e.role }`,
		setrolede: `role: `,
		norole: `\`No role\``
	},
	invite: {
		EXAMPLES: `/invite`,
		main: 'Hey, you want to invite our bot?',
		disc: `> **You can invite our bot by pressing the \`Invite\` button below.**\n\n > **You can access the \`webiste\` links, \`support server\` and \`vote\`** \`\`\`through the buttons at the bottom\`\`\``
	},
	ping: {
		EXAMPLES: `/ping`,
		pingmsg: (messagePing, apiPing, status) => `> **Status**: ${ status } \n > ${ e.ping } **Message ping**: \`${ messagePing }\` - ${ e.api } ** API ping**: \`${ apiPing }\``
	},
	stats: {
		EXAMPLES: `/stats`,
		title: 'ManageGift\'s Information:',
		creator: `${ e.owner } • __Creator:__`,
		stats: `${ e.stats } • __Statistics:__`,
		stat: '`Servers:`',
		set: '`Users:`',
		ver: `${ e.ver } • __Changelog:__`,
		ram: `${ e.ram } • __RAM__`,
		on: `${ e.online } • __Uptime__`,
		startat: '**Started At**: ',
		for: '**online for** ',
		moreinfo: `${ e.info } • __MoreInfos:__`,
		comd: '`Total Commands:`',
		giv: '`All Giveaways:`',
		acgiv: '`Active Giveaways:`'
	},
	help: {
		EXAMPLES: `/help \n /help create \n /help ping`,
		title: 'Help Documents Overview:',
		disc: '• Here you can find all `ManageGift Commands` \n • Please select a `category` from below',
		giveawaycmd: `Giveaway commands - (8)`,
		configcmd: `Config commands - (4)`,
		infocmd: `Info commands - (4)`,
		ownerbot: `Owner bot commands - (1)`,
		cancel: 'Back to the home page',
		link: `${ e.link } Links:`,
		web: `${ e.link } ManageGift's Website`,
		inv: `${ e.add } Invite ManageGift's`,
		vote: `${ e.vote } Vote For ManageGift's`,
		sup: `${ e.supp } Join The Support Server`,
		errcmd: `${ e.error } **Couldn't find command with that \`name\`**`,
		cmd_title: cmd => `Help: ${ cmd }`,
		cmd_usage: `${ e.usage } Usage:`,
		cmd_examples: `${ e.example } Examples:`,
		cmd_description: `${ e.description } Description:`,
		cmd_categorie: `${ e.categorie } Group:`
	},
	givcmd: {
		givtit: `${ e.page } Categories: \`Giveaway\``,
		givfind: '```fix\nHere you can find all Giveaway Commands:```**Required permissions:** \n `MANAGE_MESSAGES` or `Set Role`',
		createe: `> \`Start a giveaway in your guild!\``,
		dropee: `> \`Create a giveaway drop in your guild!\``,
		deletee: `> \`Delete a giveaway in your guild!\``,
		editt: `> \`Edit a giveaway in your guild!\``,
		endd: `> \`End a giveaway in your guild!\``,
		pausee: `> \`Pause a giveaway in your guild!\``,
		rerolll: `> \` Choose new winner(s) of a giveaway in your guild!\``,
		resumeee: `> \`resume a giveaway in your guild!\``
	},
	cnfgcmd: {
		cnfgtit: `${ e.page } Categories: \`Config\``,
		cnfgfind: '```fix\nHere you can find all Config Commands:```**Required permissions:** \n `MANAGE_MESSAGES`',
		setlangg: `> \`Change the bot's language in your guild!\``,
		setdmm: `> \`Activate or Deactivate the winning dm message to the winner in your guild!\``,
		setmentionn: `> \`Activate or Deactivate the started giveaway mention alert in your guild!\``,
		setrolee: `> \`Activate or Deactivate the role manager in your guild!\``
	},
	infocmd: {
		infotit: `${ e.page } Categories: \`Info\``,
		infofind: '```fix\nHere you can find all Info Commands:```',
		helpp: `> \`Get the bot command\``,
		invitee: `> \`Get the bot invitation link\``,
		pingg: `> \`Show the bot ping\``,
		statss: `> \`Show bot statistics\``,
		configg: `> \`Display the current configuration of the bot\``
	},
	owner: {
		tit: `${ e.page } Categories: \`Owner\``,
		ownerfind: '```fix\nHere you can find all Owner Commands:```',
		blacklistt: `> \`Add or remove or get list, users & guilds in blacklist\``
	},
	otherUser: `${ e.error } You cannot **edit**, **end** or **delete** this \`giveaway\`, since you are not the \`host\`!`,
	lang: { perms: `${ e.error } You do not have permission \`MANAGE_MESSAGES\`` },
	lastchance: { content: `${ e.warning } **LAST CHANCE TO ENTER !** ${ e.warning }` },
	pauseoptions: {
		content: `${ e.pause } **THIS GIVEAWAY IS PAUSED !** ${ e.pause }`,
		autostart: autotime => `\`Auto Start After:\` ${ autotime }`
	},
	already: {
		enb: `${ e.afk } | An error occurred. This command may already be \`enabled\``,
		dis: `${ e.afk } | An error occurred. This command may already be \`disabled\``
	},
	selectmenu: { choose: `Please Choose a Giveaway` },
	collector: {
		time: `${ e.timeout }**Time is out! try again.**`,
		btntime: `Time is out!`
	},
	cancel: {
		option1: `Cancel`,
		option2: `Cancel the selection`,
		cancelled: `${ e.success } Cancelled`
	},
	cmd: {
		cooldown: `${ e.error } | **You must wait \`4 second(s)\` ${ e.timeout } to be able to run this command again!**`,
		owneronly: `${ e.error } | Only the owner of ManageGift can do these commands!`,
		botperm: `${ e.error } | I don't have **\`Administrator\`** permission to execute this command.`
	},
	blacklist: {
		user: ureason => `${ e.warning } **You cannot use ManageGift Bot commands** \n \`\`\`Reason: ${ ureason }\`\`\` \n**If you think this is a mistake or something like that, do not hesitate and submit your objection in the [Support Server](https://discord.gg/7XfV4Md)**`,
		guild: sreason => `${ e.warning } **This server is in the blacklist, you cannot use any command on it**\n \`\`\`Reason: ${ sreason }\`\`\` \n**If you think this is a mistake or something like that, do not hesitate and submit your objection in the [Support Server](https://discord.gg/7XfV4Md)**`
	},
	enterserver: { thx: 'Thank you for adding me to your guild !' },
	moved: {
		update: `${ e.news } Update!`,
		slash: 'From version `v4.0.0` onwards **ManageGift** moved to **slash commands**! Please type `/help` to see all commands!'
	}
};