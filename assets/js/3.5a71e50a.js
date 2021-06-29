(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{364:function(t,a,s){t.exports=s.p+"assets/img/qovery-create-project.b4c65510.png"},365:function(t,a,s){t.exports=s.p+"assets/img/qovery-configure-project.4df2105b.png"},366:function(t,a,s){t.exports=s.p+"assets/img/qovery-create-application.248ff17f.png"},367:function(t,a,s){t.exports=s.p+"assets/img/qovery-select-github-project.c0090d95.png"},368:function(t,a,s){t.exports=s.p+"assets/img/qovery-application-type-choice.15d228da.png"},369:function(t,a,s){t.exports=s.p+"assets/img/qovery-database-choice.55dcfa67.png"},370:function(t,a,s){t.exports=s.p+"assets/img/qovery-database-configuration.8c2fcf88.png"},371:function(t,a,s){t.exports=s.p+"assets/img/qovery-deployment-summary.8d2877ba.png"},385:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploy-run-with-qovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-run-with-qovery"}},[t._v("#")]),t._v(" Deploy & run with Qovery")]),t._v(" "),e("h2",{attrs:{id:"how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works ?")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.qovery.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qovery"),e("OutboundLink")],1),t._v(" is a startup that offers free hosting for your project (free server & a free database) with an amazingly simple way to deploy: you push your code to git and Qovery handles the rest.")]),t._v(" "),e("p",[t._v("This is how we use it:")]),t._v(" "),e("ul",[e("li",[t._v("Create a project on github.")]),t._v(" "),e("li",[t._v("Create an account on Qovery.")]),t._v(" "),e("li",[t._v("Tell Qovery which repo to use and what kind of database you need.")]),t._v(" "),e("li",[t._v("Push code to github!")])]),t._v(" "),e("p",[t._v("From now on, everytime you will push your code to github, Qovery will package and deploy it to your server.")]),t._v(" "),e("h2",{attrs:{id:"create-your-bot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-bot"}},[t._v("#")]),t._v(" Create your bot")]),t._v(" "),e("h3",{attrs:{id:"create-clone-the-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-clone-the-repository"}},[t._v("#")]),t._v(" Create & clone the repository")]),t._v(" "),e("p",[t._v("On my github account "),e("code",[t._v("straumat")]),t._v(", I created a private project named "),e("code",[t._v("qovery-test")]),t._v(".")]),t._v(" "),e("p",[t._v("The first step is to retrieve the project from Github on your computer:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:straumat/qovery-test.git\n")])])]),e("h3",{attrs:{id:"create-the-bot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-bot"}},[t._v("#")]),t._v(" Create the bot")]),t._v(" "),e("p",[t._v("Create a simple trading bot using one of Cassandre archetypes:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("mvn -B archetype:generate -DarchetypeGroupId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tech.cassandre.trading.bot "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DarchetypeArtifactId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cassandre-trading-bot-spring-boot-starter-basic-archetype "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DarchetypeVersion"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(".0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DgroupId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.example "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DartifactId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("qovery-test "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-Dversion"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("-SNAPSHOT "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-Dpackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.example\n")])])]),e("h3",{attrs:{id:"configure-the-bot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-bot"}},[t._v("#")]),t._v(" Configure the bot")]),t._v(" "),e("h4",{attrs:{id:"database-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-connection"}},[t._v("#")]),t._v(" Database connection")]),t._v(" "),e("p",[t._v("Edit "),e("code",[t._v("src/main/resources/application.properties")]),t._v(" to configure the database:, we will use environment variables that qovery will pass to our application:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Exchange configuration.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.driver-class-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("kucoin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("cassandre.crypto.bot@gmail.com")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.passphrase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("cassandre")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5df8eea30092f40009cb3c6a")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.secret")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5f6e91e0-796b-4947-b75e-eaa5c06b6bed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Modes.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.modes.sandbox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.modes.dry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Exchange API calls rates (ms or standard ISO 8601 duration like 'PT5S').")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.rates.account")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("PT1S")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.rates.ticker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("PT1S")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cassandre.trading.bot.exchange.rates.trade")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("PT1S")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Database configuration.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.driver-class-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("org.postgresql.Driver")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:postgresql://${QOVERY_DATABASE_QOVERY_TEST_HOST}:5432/${QOVERY_DATABASE_QOVERY_TEST_DATABASE_NAME}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${QOVERY_DATABASE_QOVERY_TEST_USERNAME}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${QOVERY_DATABASE_QOVERY_TEST_PASSWORD}")]),t._v("\n")])])]),e("h3",{attrs:{id:"add-the-postgresql-driver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-postgresql-driver"}},[t._v("#")]),t._v(" Add the PostgreSQL driver")]),t._v(" "),e("p",[t._v("To connect to a PostgreSQL server, you need to add the JDBC driver to your project. Edit your pom.xml and add:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.postgresql"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("postgresql"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("42.2.17"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"configure-jar-final-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-jar-final-name"}},[t._v("#")]),t._v(" Configure jar final name")]),t._v(" "),e("p",[t._v("To make things more simple to build the Docker image required by qovery, we add this in our pom in the build section:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("finalName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("qovery-test"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("finalName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("This will ensure that the jar created by the maven process will have the name "),e("code",[t._v("qovery-test")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),e("p",[t._v("When pushed to Github, qovery will retrieve your sources and build the Dockerfile at the root of your project.")]),t._v(" "),e("p",[t._v("This is our Dockerfile, it has two steps:")]),t._v(" "),e("ul",[e("li",[t._v("First, we use a maven docker image to build our application and creates a spring boot jar.")]),t._v(" "),e("li",[t._v("Second, we use an openjdk11 image, and we put our jar in it.")])]),t._v(" "),e("div",{staticClass:"language-dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install maven and copy project for compilation.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" maven:3.6.3-openjdk-11-slim "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" build")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /build  ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy just pom.xml (dependencies and dowload them all for offline access later - cache layer).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" pom.xml .")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mvn dependency:go-offline -B")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy source files and compile them (.dockerignore should handle what to copy).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ../.. .")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mvn -DskipTests=true package spring-boot:repackage")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Creates our image.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" adoptopenjdk/openjdk11 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" runnable")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token options"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("build")])]),t._v(" /build/target/qovery-test.jar app.jar")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Djava.security.egd=file:/dev/./urandom"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-jar"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.jar"')]),t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"push-to-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push-to-github"}},[t._v("#")]),t._v(" Push to github")]),t._v(" "),e("p",[t._v("The last step is to commit and push the project to Github:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" qovery-test\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -M main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])]),e("h2",{attrs:{id:"configure-qovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-qovery"}},[t._v("#")]),t._v(" Configure Qovery")]),t._v(" "),e("p",[t._v("Connect to "),e("a",{attrs:{href:"https://www.qovery.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qovery"),e("OutboundLink")],1),t._v(" and signup, then go to the project menu and click on "),e("code",[t._v("create a new project")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:s(364),alt:"qovery - Create a project"}})]),t._v(" "),e("p",[t._v("Enter your project name ("),e("code",[t._v("qovery-test")]),t._v("):")]),t._v(" "),e("p",[e("img",{attrs:{src:s(365),alt:"qovery - Configure the project"}})]),t._v(" "),e("p",[t._v("Now, create an application with the name ("),e("code",[t._v("qovery-test-app")]),t._v(") and choose "),e("code",[t._v("I have an application")]),t._v(" on the next screen:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(366),alt:"qovery - Create an application"}})]),t._v(" "),e("p",[t._v("Then, select the github project you want to deploy to Qovery:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(367),alt:"qovery - Select Github project"}})]),t._v(" "),e("p",[t._v("Choose the type of application you have (java):")]),t._v(" "),e("p",[e("img",{attrs:{src:s(368),alt:"qovery - Select application type"}})]),t._v(" "),e("p",[t._v("Choose the type of database (PostgreSQL):")]),t._v(" "),e("p",[e("img",{attrs:{src:s(369),alt:"qovery - Select database type"}})]),t._v(" "),e("p",[t._v("Choose the name of the database ("),e("code",[t._v("qovery-test-database")]),t._v("):")]),t._v(" "),e("p",[e("img",{attrs:{src:s(370),alt:"qovery - Configure database"}})]),t._v(" "),e("p",[t._v("Now, check everything is ok the summary page and press create !")]),t._v(" "),e("p",[e("img",{attrs:{src:s(371),alt:"qovery - Deployment summary"}})]),t._v(" "),e("p",[t._v("Qovery will now connect to your repo, creates a configuration file, creates your server and your database, retrieve your sources, build the docker image and run it ! That's it.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Qovery added a configuration file named "),e("code",[t._v(".qovery.yml")]),t._v(" at the root of your repository.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);