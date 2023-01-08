/* eslint-disable no-unused-vars */
//engilsh
const {prefix, owner} = require('../config.js'), emojis = require('../emojis.json'), e = emojis;
module.exports = {
	create: {
		EXAMPLES: `/create duration:1m winners:1 prize:Нітро \n /create duration:1m winners:1 prize:Нітро channel:#general \n /create duration:1m winners:1 prize:Нітро required_role:@Vip`,
		perms: `${ e.error } У вас немає права \`MANAGE_MESSAGES\`, Ви можете встановити роль для створення та управління розіграшами від вашого гільдії за допомогою наступної команди \`/setrole\`!.`,
		duration: `${ e.error } Будь ласка, введіть припустимий \`time\`\n> Наприклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`!`,
		argswinners: `${ e.error } Введіть \`число переможців!\`\n> Наприклад: \`1\`, \`2\`, **...**, \`10\` `,
		prizee: `${ e.error } Будь ласка, введіть \`prize\` менше аніж **50 символів**`,
		good: `${ e.success } **Готово, \`розіграш\` було успішно \`створено\`**`,
		errorlink: `${ e.error } Будь ласка, введіть коректне **LINK OF GUILD** або \`щось пішло не так\``,
		notinserver: `${ e.error } Хей! Я не з цього **сервера**, ви можете \`додати мене\` **[натиснувши тут](https://discord.com/api/oauth2/authorize?client_id=598564396691750933&permissions=8&scope=applications.commands%20bot)**`,
		view: `Посилання на розіграш:`
	},
	drop: {
		EXAMPLES: `/drop winners:1 prize:Подарункова картка \n /drop winners:1 prize:Подарункова картка channel:#general`,
		dropstart: `${ e.success } **Готово, \`розіграш\` було успішно \`створено\`**`,
		viewdrop: `Посилання на drop:`
	},
	delete: {
		EXAMPLES: `/delete => \`виберіть id розіграшу\``,
		option1: value => `Приз в розіграші: ${ value.prize }`,
		option2: value => `Id розіграшу: ${ value.messageId }`,
		fordelete: `${ e.for } **Для видалення розіграшу:**`,
		done: giveawayid => `${ e.success } Розіграш видалено \n${ e.hash } GiveawayID: \`${ giveawayid }\``,
		errmod: `${ e.error } Виникла помилка!`
	},
	edit: {
		EXAMPLES: `/edit value:Winners new_value:5 => \`введіть id розіграшу\` \n /edit value:Prize new_value:5$ paypal => \`введіть id розіграшу\` \n /edit value:duration new_value:1d => \`введіть id розіграшу\``,
		pr: messageID => `${ e.success } Приз розіграшу був оновлений. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		wi: messageID => `${ e.success } Кількість переможців в розіграші була оновлена. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		ti: messageID => `${ e.success } Час розіграшу був оновлений. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		errmod: `${ e.error } Виникла помилка!`,
		ending: ' Закінчення ',
		foredit: `${ e.for } **Для редагування розіграшу:**`
	},
	end: {
		EXAMPLES: `/end => \`введіть id розіграшу\``,
		errmod: `${ e.error } Виникла помилка!`,
		good: messageID => `${ e.success } Розіграш був закінчений. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		forend: `${ e.for } **Для закінчення розіграшу:**`
	},
	pause: {
		EXAMPLES: `/pause => \`введіть id розіграшу\``,
		forpause: `${ e.for } **Для тимчасової зупинки розіграшу:**`,
		done: messageID => `${ e.success } Готово, розіграш було тимчасово призупинено. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		errmod: `${ e.error } Виникла помилка!`
	},
	resume: {
		EXAMPLES: `/resume => \`введіть id розіграшу\``,
		autodes: `Автоматично продовжити після:`,
		forresume: `${ e.for } **Для продовження розіграшу:**`,
		done: messageID => `${ e.success } Готово, розіграш продовжено. \n${ e.hash } GiveawayID: \`${ messageID }\``,
		errmod: `${ e.error } Виникла помилка!`
	},
	reroll: {
		EXAMPLES: `/reroll => \`введіть id розіграшу\``,
		startat: `Починається`,
		forreroll: `${ e.for } **Для повторного розіграшу:**`,
		good: ':tada: Нові переможці: {winners}! Вітаємо!',
		parts: `${ e.error } На цей розіграш не вистачило учасників, яких я не можу вибрати!`,
		errmod: `${ e.error } Виникла помилка!`
	},
	messages: {
		giveaway: `${ e.gift } **РОЗІГРАШ ПОЧАВСЬ** ${ e.gift }`,
		giveawayEnded: `${ e.end } **РОЗІГРАШ ЗАВЕРШЕНО** ${ e.end }`,
		dropstart: `${ e.drpstart } **ДРОП ПОЧАВСЬ** ${ e.drpstart }`,
		dropend: `${ e.drpend } **ДРОП ЗАКІНЧИВСЬ** ${ e.drpend }`,
		content1: `**Нажміть на ${ e.bot_logo } для участі!**`,
		content2: `・${ e.winners } Переможці: **\`{winners}\`**`,
		content3: `・${ e.duration } Тривалість: **{time}**`,
		hostedBy: `・${ e.host } Від: {hostedBy}`,
		req: `${ e.requirements } Вимоги:`,
		rolereq: `・${ e.rolereq } Роль: <@&{rolereq}>`,
		serverreq: (servername, serverrequired) => `・${ e.serverreq } Гільдія: [${ servername }](${ serverrequired })`,
		drop: `・${ e.first } Будьте першим, хто приймає участь ${ e.bot_logo }`,
		end1: `**Розіграш завершено!**`,
		end2: `・${ e.prize } Приз:** \`{prize}\`**`,
		end3: `・${ e.win } Переможці: {winners}`,
		drpend: `**Дроп завершено!**`,
		novalid1: `**Розіграш відмінено!**`,
		novalid2: `・${ e.warning } Причина: \`Не вистачає учасників :/\``,
		embedFooter: 'ManageGift • Закінчивсь',
		dropfooter: 'ManageGift • Дроп',
		novalidfoo: 'ManageGift • Завершено',
		winners: 'Переможці 🎉',
		approved1: `${ e.approved } | Вхід підтверджено!`,
		approved2: `**Вашу заявку на участь у [цей розіграш]({messageURL}) схвалено!** \n \n > **Ви маєте шанс на перемогу! ${ e.bot_logo }**`,
		denied1: `${ e.denied } | Вхід відхилено!`,
		denied2: `**В участі в [цьому розіграші]({messageURL}) відмовлено!" \n \n > **Будь ласка, ознайомтеся з умовами розіграшу!** ${ e.requirements }`,
		dm1: `**Вітаємо {winner}! ${ e.bot_logo }**`,
		dm2: `・Ви виграли ${ e.gift }:`,
		dm3: `・Від ${ e.host }:`,
		winMessage: `${ e.bot_logo } | Вітаємо, {winners}! Ви виграли **{this.prize}**!`
	},
	setdm: {
		EXAMPLES: `/setdm status:on \n /setdm status:off`,
		doneon: `${ e.success } | пряме повідомлення про переможця правильно активовано${ e.online }!.`,
		doneoff: `${ e.success } | повідомлення про прямого переможця коректно деактивовано${ e.dnd }!.`
	},
	setmention: {
		EXAMPLES: `/setmention status:on \n /setmention status:off`,
		mon: `${ e.success } | команда setmention правильно активована${ e.online }!.`,
		moff: `${ e.success } | команда setmention правильно деактивована${ e.dnd }!`
	},
	setrole: {
		EXAMPLES: `/setrole role role_value:@Manager \n /setrole status status_value:on \n /setrole status status_value:off`,
		setrlebedore: `${ e.error } | Будь ласка, виберіть роль, перш ніж активувати або деактивувати її..`,
		roledone: role => `${ e.success } | Ролевий менеджер встановлений: ||<@&${ role.id }>||, та \`активований\``,
		ron: `${ e.success } | Рольовий менеджер правильно активовано${ e.online }!`,
		roff: `${ e.success } | Рольовий менеджер коректно деактивовано${ e.dnd }!`
	},
	config: {
		EXAMPLES: `/configuration`,
		configuration: 'Конфігурація:',
		status: `статус: `,
		language: `мова ${ e.lang }`,
		mentiont: `setmention ${ e.mention }`,
		setdmt: `setdm ${ e.dm }`,
		setrolet: `setrole ${ e.role }`,
		setrolede: `роль: `,
		norole: `\`Роль відсутня\``
	},
	invite: {
		EXAMPLES: `/invite`,
		main: 'Агов, ви хочете запросити нашого бота?',
		disc: `> **Ви можете запросити нашого бота, натиснувши кнопку \`Запросити\` нижче.**\n\n > **Ви можете отримати доступ до посилань \`веб-сайту\`, \`сервера підтримки\` та \`голосування\` **\`\`\`через кнопки внизу\`\`\``
	},
	ping: {
		EXAMPLES: `/ping`,
		pingmsg: (messagePing, apiPing, status) => `> **Статус**: ${ status } \n > ${ e.ping } **Пінгування повідомлення**: \`${ messagePing }\` - ${ e.api } **Пінг API**: \`${ apiPing }\``
	},
	stats: {
		EXAMPLES: `/stats`,
		title: 'ManageGift\'s Інформація:',
		creator: `${ e.owner } • Розробник:__`,
		stats: `${ e.stats } • Статистика:__`,
		stat: '`Серверів:`',
		set: '`Користувачів:`',
		ver: `${ e.ver } • __Журнал змін:__`,
		ram: `${ e.ram } • __RAM__`,
		on: `${ e.online } • __Аптайм__`,
		startat: '**Розпочато в**: ',
		for: '**онлайн** ',
		moreinfo: `${ e.info } • Більше інфо:__`,
		comd: '`Всього команд:`',
		giv: '`Усього розіграшів:`',
		acgiv: '`Активні розіграші:`'
	},
	help: {
		EXAMPLES: `/help \n /help create \n /help ping`,
		title: 'Огляд документації:',
		disc: '• Тут ви можете знайти всі `ManageGift команди` \n • Будь ласка, виберіть `категорію` знизу',
		giveawaycmd: `Команди розіграшу - (8)`,
		configcmd: `Конфігураційні команди - (4)`,
		infocmd: `Інформаційні команди - (4)`,
		ownerbot: `Команди власника бота - (1)`,
		cancel: 'Повернутися на головну',
		link: `${ e.link } Посилання:`,
		web: `${ e.link } Веб-сайт ManageGift`,
		inv: `${ e.add } Запросити ManageGift's`,
		vote: `${ e.vote } Проголосувати за ManageGift`,
		sup: `${ e.supp } Приєднатися до серверу підтримки`,
		errcmd: `${ e.error } **Не вдалося знайти команду з цією \`назвою\`**`,
		cmd_title: cmd => `Допомога: ${ cmd }`,
		cmd_usage: `${ e.usage } Використання:`,
		cmd_examples: `${ e.example } Приклади:`,
		cmd_description: `${ e.description } Опис:`,
		cmd_categorie: `${ e.categorie } Група:`
	},
	givcmd: {
		givtit: `${ e.page } Категорії: \`Розіграші\``,
		givfind: '```fix\nТут ви можете знайти всі команди роздачі: ```**Необхідні дозволи:** \n `MANAGE_MESSAGES` або `Set Role` (Встановити роль)',
		createe: `> \`Почати розіграш в вашій гільдії!\``,
		dropee: `> \`Створити дроп розіграшу в своїй гільдії!\``,
		deletee: `> \`Видалити розіграш в вашій гільдії!\``,
		editt: `> \`Відредагувати розіграв в вашій гільдії!\``,
		endd: `> \`Завершити розіграш в вашій гільдії!\``,
		pausee: `> \`Тимчасово призупити розіграш в вашійгільдії!\``,
		rerolll: `> \`Вибрати нових переможців розіграшу в вашій гільдії!\``,
		resumeee: `> \`Продовжити розіграш в вашій гільдії!\``
	},
	cnfgcmd: {
		cnfgtit: `${ e.page } Категорії: \`Налаштування\``,
		cnfgfind: '```fix\nТут ви можете знайти всі команди налаштування: ```**Необхідні дозволи:** \n `MANAGE_MESSAGES`',
		setlangg: `> \`Змінити мову бота в вашій гільдії!\``,
		setdmm: `> \`Активуйте або деактивуйте переможне особисте повідомлення переможцю у вашій гільдії!\``,
		setmentionn: `> \`Активуйте або деактивуйте сповіщення про розпочату розіграш у вашій гільдії!\``,
		setrolee: `> \`Активуйте або деактивуйте рольового менеджера у своїй гільдії!\``
	},
	infocmd: {
		infotit: `${ e.page } Категорії: \`Інформація\``,
		infofind: '```fix\nТут ви можете знайти всі інформаційні команди:```',
		helpp: `> \`Отримати команду бота\``,
		invitee: `> \`Отримати запрошення бота\``,
		pingg: `> \`Показати пінг бота\``,
		statss: `> \`Показати статистику бота\``,
		configg: `> \`Відобразити поточну конфігурацію бота\``
	},
	owner: {
		tit: `${ e.page } Категорії: \`Власник\``,
		ownerfind: '```fix\nТут ви можете знайти всі команди власника:```',
		blacklistt: `> \`Додавання, видалення або отримання списку, користувачів і гільдій в чорному списку\``
	},
	otherUser: `${ e.error } Ви не можете **редагувати**, **закінчувати** чи **видаляти** цей \`розіграш\`, тому що ви не є \`хостом\` поточного розіграшу!`,
	lang: { perms: `${ e.error } У вас немає права \`MANAGE_MESSAGES\`` },
	lastchance: { content: `${ e.warning } **ОСТАННІЙ ШАНС ДЛЯ ПРИЄДНАННЯ!** ${ e.warning }` },
	pauseoptions: {
		content: `${ e.pause } **РОЗІГРАШ ПРИЗУПИНЕНО!** ${ e.pause }`,
		autostart: autotime => `\`Продовження розіграшу після:\` ${ autotime }`
	},
	already: {
		enb: `${ e.afk } | Сталася помилка. Ця команда вже може бути \`ввімкнена\``,
		dis: `${ e.afk } | Сталася помилка. Ця команда вже може бути \`вимкнена\``
	},
	selectmenu: { choose: `Будь ласка, виберіть розіграш` },
	collector: {
		time: `${ e.timeout }**Час вийшов! Спробуйте знову.**`,
		btntime: `Час вийшов!`
	},
	cancel: {
		option1: `Скасувати`,
		option2: `Скасувати обране`,
		cancelled: `${ e.success } Скасовано`
	},
	cmd: {
		cooldown: `${ e.error } | **Ви повинні зачекати \`4 секунди\` ${ e.timeout } щоб мати можливість запустити цю команду знову!**`,
		owneronly: `${ e.error } | Тільки власник ManageGift може виконувати ці команди!`,
		botperm: `${ e.error } | Я не маю права **\`Адміністратор\`** для виконання цієї команди.`
	},
	blacklist: {
		user: ureason => `${ e.warning } **Ви не можете використовувати команди ManageGift Bot** \n \`\`\`Причина: ${ ureason }\`\`\` \n**Якщо ви думаєте, що це помилка або щось таке, не соромтеся і відправте своє заперечення в [підтримку](https://discord.gg/7XfV4Md)**`,
		guild: sreason => `${ e.warning } **Цей сервер знаходиться в чорному списку, ви не можете використовувати будь-яку команду**\n \`\`\`Причина: ${ sreason }\`\`\` \n**Якщо ви думаєте, що це помилка або щось таке, не соромтеся і відправте своє заперечення в [підтримку](https://discord.gg/7XfV4Md)**`
	},
	enterserver: { thx: 'Дякуємо, що додали мене до вашої гільдії!' },
	moved: {
		update: `${ e.news } Оновлення!`,
		slash: 'З версії `v4.0.0`, **ManageGiftt** переписаний на **слєш-команди**! Будь ласка, введіть /help для перегляду всіх команд!'
	}
};