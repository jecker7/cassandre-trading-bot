(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"position-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position-management"}},[t._v("#")]),t._v(" Position management")]),t._v(" "),e("p",[t._v("Cassandre provides a class to manage your positions automatically.")]),t._v(" "),e("h2",{attrs:{id:"long-position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#long-position"}},[t._v("#")]),t._v(" Long position")]),t._v(" "),e("p",[t._v("In your strategy, you can create a long position with the "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createLongPosition%28tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("createLongPosition()"),e("OutboundLink")],1),t._v(" method.")]),t._v(" "),e("p",[t._v("It has three parameters :")]),t._v(" "),e("ul",[e("li",[t._v("The currency pair, for example, ETH/USDT.")]),t._v(" "),e("li",[t._v("The amount, for example, 0.5 ETH.")]),t._v(" "),e("li",[t._v("The rules, for example, 100% stop gain and 50% stop loss.")])]),t._v(" "),e("p",[t._v("The first step is to create the rules you want to apply to the position thanks to the "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionRulesDTO.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PositionRulesDTO"),e("OutboundLink")],1),t._v(" class, for example:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PositionRulesDTO")]),t._v(" rules "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PositionRulesDTO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopGainPercentage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopLossPercentage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Then, you can create the position with that rule:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLongPosition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurrencyPairDTO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ETH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BTC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("At this moment, Cassandre will create a buy order of 0.5 ETH (1 ETH costs 1500 USDT), and this will cost us 750 USDT. The position status will be "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENING",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPENING"),e("OutboundLink")],1),t._v(", and when all the corresponding trades have arrived, the status will move to "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENED",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPENED"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Note: if you want to check if you have enough funds available (at least 750 USDT in our case) before creating the position, you can use the "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canBuy%28tech.cassandre.trading.bot.dto.user.AccountDTO,tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("canBuy()"),e("OutboundLink")],1),t._v(" method.")])]),t._v(" "),e("p",[t._v("From now on, for every ticker received, Cassandre will automatically calculate, with the new price, if closing the position at that price would trigger one of our two rules (100% stop gain and 50% stop loss).")]),t._v(" "),e("p",[t._v('For example, if we receive a new price of 3000 USDT for 1 ETH, Cassandre will calculate that if we sell our position right now (meaning "closing the position"), we will get 1 500 USDT, a 100% gain. As our rule is triggered, Cassandre will automatically create a selling order of our 0.5 ETH. The position status will move to '),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSING",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLOSING"),e("OutboundLink")],1),t._v(", and when all the corresponding trades have arrived, the status will move to "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSED",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLOSED"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("You can then know your exact gain on this position by calling the "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain%28%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("getGain()"),e("OutboundLink")],1),t._v(" method.")]),t._v(" "),e("h2",{attrs:{id:"short-position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#short-position"}},[t._v("#")]),t._v(" Short position")]),t._v(" "),e("p",[t._v("A "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createShortPosition(tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO)",target:"_blank",rel:"noopener noreferrer"}},[t._v("short position"),e("OutboundLink")],1),t._v(" works the opposite way. With a short position, you bet that the price will go down.")]),t._v(" "),e("p",[t._v("Let's say you create a short position on 1 ETH with this command:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShortPosition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurrencyPairDTO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ETH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BTC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Cassandre will sell 1 ETH and get 1 500 USDT and wait until the price is down enough to buy 2 ETH with 1 500 USDT.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Note: if you want to check if you have enough funds available (at 1 ETH in our case) before creating the position, you can use the "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canSell%28tech.cassandre.trading.bot.dto.util.CurrencyDTO,java.math.BigDecimal%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("canSell()"),e("OutboundLink")],1),t._v(" method.")])]),t._v(" "),e("h2",{attrs:{id:"gains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gains"}},[t._v("#")]),t._v(" Gains")]),t._v(" "),e("p",[t._v("On a position you can get the:")]),t._v(" "),e("ul",[e("li",[t._v("The lowest calculated gain with "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLowestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"}},[t._v("getLowestPrice()"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("The highest calculated gain with "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getHighestGainPrice()",target:"_blank",rel:"noopener noreferrer"}},[t._v("getHighestGainPrice()"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("The latest calculated gain with "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLatestGainPrice()",target:"_blank",rel:"noopener noreferrer"}},[t._v("getLatestGainPrice"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Once the position is closed, you can get the final gain & fees with "),e("a",{attrs:{href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain()",target:"_blank",rel:"noopener noreferrer"}},[t._v("getGain()"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);