//HTMl
function git操作命令() {
    // # 在当前目录新建一个Git代码库
    // $ git init

    // # 新建一个目录，将其初始化为Git代码库
    // $ git init [project-name]

    // # 下载一个项目和它的整个代码历史
    // $ git clone [url]
    // # 显示当前的Git配置
    // $ git config --list

    // # 编辑Git配置文件
    // $ git config -e [--global]

    // # 设置提交代码时的用户信息
    // $ git config [--global] user.name "[name]"
    // $ git config [--global] user.email "[email address]"
    // # 添加指定文件到暂存区
    // $ git add [file1] [file2] ...

    // # 添加指定目录到暂存区，包括子目录
    // $ git add [dir]

    // # 添加当前目录的所有文件到暂存区
    // $ git add .

    // # 添加每个变化前，都会要求确认
    // # 对于同一个文件的多处变化，可以实现分次提交
    // $ git add -p

    // # 删除工作区文件，并且将这次删除放入暂存区
    // $ git rm [file1] [file2] ...

    // # 停止追踪指定文件，但该文件会保留在工作区
    // $ git rm --cached [file]

    // # 改名文件，并且将这个改名放入暂存区
    // $ git mv [file-original] [file-renamed]
    // # 提交暂存区到仓库区
    // $ git commit -m [message]

    // # 提交暂存区的指定文件到仓库区
    // $ git commit [file1] [file2] ... -m [message]

    // # 提交工作区自上次commit之后的变化，直接到仓库区
    // $ git commit -a

    // # 提交时显示所有diff信息
    // $ git commit -v

    // # 使用一次新的commit，替代上一次提交
    // # 如果代码没有任何新变化，则用来改写上一次commit的提交信息
    // $ git commit --amend -m [message]

    // # 重做上一次commit，并包括指定文件的新变化
    // $ git commit --amend [file1] [file2] ...
    // # 列出所有本地分支
    // $ git branch

    // # 列出所有远程分支
    // $ git branch -r

    // # 列出所有本地分支和远程分支
    // $ git branch -a

    // # 新建一个分支，但依然停留在当前分支
    // $ git branch [branch-name]

    // # 新建一个分支，并切换到该分支
    // $ git checkout -b [branch]

    // # 新建一个分支，指向指定commit
    // $ git branch [branch] [commit]

    // # 新建一个分支，与指定的远程分支建立追踪关系
    // $ git branch --track [branch] [remote-branch]

    // # 切换到指定分支，并更新工作区
    // $ git checkout [branch-name]

    // # 切换到上一个分支
    // $ git checkout -

    // # 建立追踪关系，在现有分支与指定的远程分支之间
    // $ git branch --set-upstream [branch] [remote-branch]

    // # 合并指定分支到当前分支
    // $ git merge [branch]

    // # 选择一个commit，合并进当前分支
    // $ git cherry-pick [commit]

    // # 删除分支
    // $ git branch -d [branch-name]

    // # 删除远程分支
    // $ git push origin --delete [branch-name]
    // $ git branch -dr [remote/branch]
    // # 列出所有tag
    // $ git tag

    // # 新建一个tag在当前commit
    // $ git tag [tag]

    // # 新建一个tag在指定commit
    // $ git tag [tag] [commit]

    // # 删除本地tag
    // $ git tag -d [tag]

    // # 删除远程tag
    // $ git push origin :refs/tags/[tagName]

    // # 查看tag信息
    // $ git show [tag]

    // # 提交指定tag
    // $ git push [remote] [tag]

    // # 提交所有tag
    // $ git push [remote] --tags

    // # 新建一个分支，指向某个tag
    // $ git checkout -b [branch] [tag]
    // # 显示有变更的文件
    // $ git status

    // # 显示当前分支的版本历史
    // $ git log

    // # 显示commit历史，以及每次commit发生变更的文件
    // $ git log --stat

    // # 搜索提交历史，根据关键词
    // $ git log -S [keyword]

    // # 显示某个commit之后的所有变动，每个commit占据一行
    // $ git log [tag] HEAD --pretty=format:%s

    // # 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
    // $ git log [tag] HEAD --grep feature

    // # 显示某个文件的版本历史，包括文件改名
    // $ git log --follow [file]
    // $ git whatchanged [file]

    // # 显示指定文件相关的每一次diff
    // $ git log -p [file]

    // # 显示过去5次提交
    // $ git log -5 --pretty --oneline

    // # 显示所有提交过的用户，按提交次数排序
    // $ git shortlog -sn

    // # 显示指定文件是什么人在什么时间修改过
    // $ git blame [file]

    // # 显示暂存区和工作区的代码差异
    // $ git diff

    // # 显示暂存区和上一个commit的差异
    // $ git diff --cached [file]

    // # 显示工作区与当前分支最新commit之间的差异
    // $ git diff HEAD

    // # 显示两次提交之间的差异
    // $ git diff [first-branch]...[second-branch]

    // # 显示今天你写了多少行代码
    // $ git diff --shortstat "@{0 day ago}"

    // # 显示某次提交的元数据和内容变化
    // $ git show [commit]

    // # 显示某次提交发生变化的文件
    // $ git show --name-only [commit]

    // # 显示某次提交时，某个文件的内容
    // $ git show [commit]:[filename]

    // # 显示当前分支的最近几次提交
    // $ git reflog

    // # 从本地master拉取代码更新当前分支：branch 一般为master
    // $ git rebase [branch]
    // $ git remote update  --更新远程仓储
    // # 下载远程仓库的所有变动
    // $ git fetch [remote]

    // # 显示所有远程仓库
    // $ git remote -v

    // # 显示某个远程仓库的信息
    // $ git remote show [remote]

    // # 增加一个新的远程仓库，并命名
    // $ git remote add [shortname] [url]

    // # 取回远程仓库的变化，并与本地分支合并
    // $ git pull [remote] [branch]

    // # 上传本地指定分支到远程仓库
    // $ git push [remote] [branch]

    // # 强行推送当前分支到远程仓库，即使有冲突
    // $ git push [remote] --force

    // # 推送所有分支到远程仓库
    // $ git push [remote] --all
    // # 恢复暂存区的指定文件到工作区
    // $ git checkout [file]

    // # 恢复某个commit的指定文件到暂存区和工作区
    // $ git checkout [commit] [file]

    // # 恢复暂存区的所有文件到工作区
    // $ git checkout .

    // # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    // $ git reset [file]

    // # 重置暂存区与工作区，与上一次commit保持一致
    // $ git reset --hard

    // # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    // $ git reset [commit]

    // # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    // $ git reset --hard [commit]

    // # 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    // $ git reset --keep [commit]

    // # 新建一个commit，用来撤销指定commit
    // # 后者的所有变化都将被前者抵消，并且应用到当前分支
    // $ git revert [commit]

    // # 暂时将未提交的变化移除，稍后再移入
    // $ git stash
    // $ git stash pop

}
function npm与yarn() {
    // Yarn的优点？
    // 速度快 。速度快主要来自以下两个方面：
    // 1.并行安装：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，
    // 也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。
    // 2.离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。
    
    // 安装版本统一：为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。
    // 每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件

}
function 块级行级() {
    // 块级元素：div。P。Hi。Ul。Li，特点：垂直分布，宽度自适应，占满父元素的剩余空间
    // 行级元素：span，a,img,input，style，特点：横着分布，不能设置宽高。宽度由内容撑开，但是img可以设置宽高
    //  
    // 行内元素主要有：<span>、<a>、<b>、<img>、<br>、<button>、<strong>、<textarea>、<select>
    // 块级元素主要有：<div>、<ul>、<li>、<p>、<fieldset>、<form>、<h1>、<h2>、<h3>、<h4>、<h5>、<h6>、<hr>、
    // <iframe>、<ol>、<pre>、<table>、<tr>、<td>
    // 行内元素可以通过display:block转为块级元素。另外块级元素的margin和padding都正常，行内元素左右maring和左右padding正常，上下不识别，
    // 也就是说不能通过margin-top和padding-top来改变行高。
}
function HTML() {
    // 1，有关HTML的语义化，你的理解：html中自带了一些标签，这些标签有特定含义，比如H1-H6代表标题、p代表段落、img代表图片、html5里也推出了一些新的标签：header、footer、nav这些标签都有特定的含义，使用的时候应该尽量按照它的语义来使用
    // 好处：1.别人阅读你的代码的时候能够根据标签才出来你的用意，有利于程序员阅读，便于团队开发和维护
    // 2.浏览器读取方便
    // 3.有利于搜索引擎优化（SEO：Search Engine Optimization）（比如说会根据标签来搜索，可能重点会搜索h1）
    // 4、有一些标签默认会有一些样式，如果浏览器禁止了CSS样式还可以达到突出样式的效果，比如h1
    // 你如何理解HTML结构的语义化
    // 去掉或样式丢失的时候能让页面呈现清晰的结构： 
    // 1.html本身是没有表现的，我们看到例如<h1>是粗体，字体大小2em，加粗；<strong>是加粗的，不要认为这是html的表现，这些其实html默认的css样式在起作用，所以去掉或样式丢失的时候能让页面呈现清晰的结构不是语义化的HTML结构的优点，但是浏览器都有有默认样式，默认样式的目的也是为了更好的表达html的语义，可以说浏览器的默认样式和语义化的HTML结构是不可分割的。屏幕阅读器（如果访客有视障）会完全根据你的标记来“读”你的网页.
    // 2.例如,如果你使用的含语义的标记,屏幕阅读器就会“逐个拼出”你的单词,而不是试着去对它完整发音.
    // PDA、手机等设备可能无法像普通电脑的浏览器一样来渲染网页（通常是因为这些设备对CSS的支持较弱）.
    // 3.使用语义标记可以确保这些设备以一种有意义的方式来渲染网页.理想情况下,观看设备的任务是符合设备本身的条件来渲染网页.语义标记为设备提供了所需的相关信息,就省去了你自己去考虑所有可能的显示情况（包括现有的或者将来新的设备）.例如,一部手机可以选择使一段标记了标题的文字以粗体显示.而掌上电脑可能会以比较大的字体来显示.无论哪种方式一旦你对文本标记为标题,您就可以确信读取设备将根据其自身的条件来合适地显示页面.
    // 搜索引擎的爬虫也依赖于标记来确定上下文和各个关键字的权重. 
    // 4.过去你可能还没有考虑搜索引擎的爬虫也是网站的“访客”,但现在它们他们实际上是极其宝贵的用户.没有他们的话,搜索引擎将无法索引你的网站,然后一般用户将很难过来访问.你的页面是否对爬虫容易理解非常重要,因为爬虫很大程度上会忽略用于表现的标记,而只注重语义标记. 
    // 5.因此,如果页面文件的标题被标记,而不是,那么这个页面在搜索结果的位置可能会比较靠后.除了提升易用性外,语义标记有利于正确使用CSS JavaScript,因为其本身提供了许多“钩钩”来应用页面的样式与行为.SEO主要还是靠你网站的内容和外部链接的。
    // 便于团队开发和维护 
    // 6.W3C给我们定了一个很好的标准，在团队中大家都遵循这个标准，可以减少很多差异化的东西，方便开发和维护，提高开发效率，甚至实现模块化开发。
    
    // 什么是SEO？
    // SEO（Search Engine Optimization），汉译：搜索引擎优化。搜索引擎优化是一种利用搜索引擎的搜索规则来提高目的网站在有关搜索引擎内的排名的方式。所谓“针对搜索引擎作最佳化的处理”，是指为了要让网站更容易被搜索引擎接受。深刻理解是：通过SEO这样一套基于搜索引擎的营销思路，为网站提供生态式的自我营销解决方案，让网站在行业内占据领先地位，从而获得品牌收益。SEO可分为站外SEO和站内SEO两种。
    // 谈谈以前端角度出发做好SEO需要考虑什么
    // 1、了解搜索引擎如何抓取网页（如何抓取：关键词的提取）和如何索引网页你需要知道一些搜索引擎的基本工作原理，各个搜索引擎之间的区别，搜索机器人（SE robot 或叫 web crawler）如何进行工作，搜索引擎如何对搜索结果进行排序等等。
    // 2、Meta标签优化
    // 主要包括主题（Title)，网站描述(Description)，和关键词（Keywords）。还有一些其它的隐藏文字比如Author（作者），Category（目录），Language（编码语种）等。
    // 3、如何选取关键词并在网页中放置关键词
    // 搜索就得用关键词。关键词分析和选择是SEO最重要的工作之一。首先要给网站确定主关键词（一般在5个上下），然后针对这些关键词进行优化，包括关键词密度（Density），相关度（Relavancy），突出性（Prominency）等等。
    // 4、了解主要的搜索引擎
    // 虽然搜索引擎有很多，但是对网站流量起决定作用的就那么几个。比如英文的主要有Google，Yahoo，Bing等；中文的有百度，搜狗，有道等。
    // 不同的搜索引擎对页面的抓取和索引、排序的规则都不一样。还要了解各搜索门户和搜索引擎之间的关系，比如AOL网页搜索用的是Google的搜索技术，MSN用的是Bing的技术。
    // 5、主要的互联网目录
    // Open Directory自身不是搜索引擎，而是一个大型的网站目录，他和搜索引擎的主要区别是网站内容的收集方式不同。目录是人工编辑的，主要收录网站主页；搜索引擎是自动收集的，除了主页外还抓取大量的内容页面。
    // 6、按点击付费的搜索引擎
    // 搜索引擎也需要生存，随着互联网商务的越来越成熟，收费的搜索引擎也开始大行其道。最典型的有Overture和百度，当然也包括Google的广告项目Google Adwords。越来越多的人通过搜索引擎的点击广告来定位商业网站，这里面也大有优化和排名的学问，你得学会用最少的广告投入获得最多的点击。
    // 7、搜索引擎登录
    // 网站做完了以后，别躺在那里等着客人从天而降。要让别人找到你，最简单的办法就是将网站提交（submit）到搜索引擎。如果你的是商业网站，主要的搜索引擎和目录都会要求你付费来获得收录（比如Yahoo要299美元），但是好消息是（至少到目前为止）最大的搜索引擎Google目前还是免费，而且它主宰着60％以上的搜索市场。
    // 8、链接交换和链接广泛度（Link Popularity）
    // 网页内容都是以超文本（Hypertext）的方式来互相链接的，网站之间也是如此。除了搜索引擎以外，人们也每天通过不同网站之间的链接来Surfing（“冲浪”）。其它网站到你的网站的链接越多，你也就会获得更多的访问量。更重要的是，你的网站的外部链接数越多，会被搜索引擎认为它的重要性越大，从而给你更高的排名。
    // 9、标签的合理使用

}
function HTML5() {
    function 语义化标签() {
        // 新增了语义化的标签：header\nav\footer
        <article></article> //定义页面独立的内容区域。
        <nav></nav> //定义导航链接的部分。
        <command></command>//定义命令按钮，比如单选按钮、复选框或按钮
        <header></header>
        <section></section>//定义文档中的节（section、区段）。
        <footer></footer>
    }
    function canvas() {
        // HTML5 <canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.
        // <canvas> 标签只是图形容器，您必须使用脚本来绘制图形。
        // <canvas>简单实例如下:
        <canvas id="myCanvas" width="200" height="100"></canvas>
        // canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：
        <script>
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.fillStyle="#FF0000";
            ctx.fillRect(0,0,150,75);
        </script>
    }
    function 拖放(){
        // 拖放是一种常见的特性，即抓取对象以后拖到另一个位置。在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。
        // 设置元素为可拖放

        // 首先，为了使元素可拖动，把 draggable 属性设置为 true ：
        // <img draggable="true">
        // 拖动什么 - ondragstart 和 setData()
        // 放到何处 - ondragover
        // 进行放置 - ondrop
    }
    function 音频视频() {
        // <audiocontrols>
        // <sourcesrc="horse.ogg"type="audio/ogg">
        // <sourcesrc="horse.mp3"type="audio/mpeg">
        // 您的浏览器不支持 audio 元素。
        // </audio>

        // <videowidth="320"height="240"controls>
        // <sourcesrc="movie.mp4"type="video/mp4">
        // <sourcesrc="movie.ogg"type="video/ogg">
        // 您的浏览器不支持Video标签。
        // </video>
    }
    function input新属性() {
        // color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week
    }
    function form新属性() {
        // <datalist> 元素规定输入域的选项列表。
        // <datalist> 属性规定 form 或 input 域应该拥有自动完成功能。当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项：
        // 使用 <input> 元素的列表属性与 <datalist> 元素绑定.

        autocomplete//自动完成
        novalidate //属性规定当提交表单时不对其进行验证。
    }
    function 选择器() {
        // 新增了新的选择器：querySelector\querySelectorAll\getElementByClassName
    }
    function web存储() {
        sessionStorage—客户端数据存储，只能维持在当前会话范围内。
        sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

        localStorage—客户端数据存储，能维持在多个会话范围内。
        localStorage 对象存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。

        session是服务器端的会话，登陆成功把用户信息存在session里面，然后在进行操作的时候先判断是否登录，
        服务器辨别不同的session，客户端与服务器端建立连接后，
        服务器端在cookie里面存一个sessionID的码。Session在底层原理会用到cookie

        cookie数据始终在同源的http请求中携带
        而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
        所以cookie只适合保存很小的数据
        cookie数据不能超过4k，同时因为每次http请求都会携带cookie
        cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

        sessionStorage不在不同的浏览器窗口中共享
        localStorage在所有同源窗口中都是共享的
        cookie也是在所有同源窗口中都是共享的
    }
    function websocket() {
        WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
        在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。
        两者之间就直接可以数据互相传送。
        浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，
        连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。
        当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，
        并通过 onmessage 事件来接收服务器返回的数据。以下 API 用于创建 WebSocket 对象。

         Websocket：基于TCP/IP协议的，双向的、全双工的数据连接
               双向的：客户端、服务器端
               全双工：数据的发送与接收，两者同步进行

        在讲Websocket之前，我就顺带着讲下 long poll 和 ajax轮询 的原理。
        ajax轮询的原理非常简单，让浏览器隔个几秒就发送一次请求，询问服务器是否有新信息。
        long poll 其实原理跟 ajax轮询 差不多，都是采用轮询的方式，
        不过采取的是阻塞模型（一直打电话，没收到就不挂电话），
        也就是说，客户端发起连接后，如果没消息，
        就一直不返回Response给客户端。直到有消息才返回，返回完之后，客户端再次建立连接，周而复始。 

        Upgrade: websocket
        Connection: Upgrade
        // 这个就是Websocket的核心了，告诉 Apache 、 Nginx 等服务器：注意啦，我发起的是Websocket协议，快点帮我找到对应的助理处理~不是那个老土的HTTP。

        Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
        Sec-WebSocket-Protocol: chat, superchat
        Sec-WebSocket-Version: 13
        首先， Sec-WebSocket-Key 是一个 Base64 encode 的值，这个是浏览器随机生成的，告诉服务器：泥煤，不要忽悠窝，我要验证尼是不是真的是Websocket助理。

        然后， Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同URL下，不同的服务所需要的协议。简单理解：今晚我要服务A，别搞错啦~

        最后， Sec-WebSocket-Version 是告诉服务器所使用的 Websocket Draft （协议版本），在最初的时候，Websocket协议还在 Draft 阶段，
        各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么Firefox和Chrome用的不是一个版本之类的，当初Websocket协议太多可是一个大难题。。
        不过现在还好，已经定下来啦~大家都使用的一个东西~ 脱水： 服务员，我要的是13岁的噢→_→

        然后服务器会返回下列东西，表示已经接受到请求， 成功建立Websocket啦！
        HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
        Sec-WebSocket-Protocol: chat

 
    } 
    function JSON(){
        // 新增加了一些json的新的方法：parse\stringify（对象拷贝，先把对象转化成字符串，再转化成json）
    }
    function addCookie(key, val, expires){//expires表示过期天数
        var str = key + "=" + val;
        if(expires){
        var date = new Date();
        date.setDate(date.getDate() + expires);
        str += ";expires=" + date.toUTCString();//toUTCString 把date转化为string
        }
        document.cookie = str;
    }

}
function 前端优化() {
    // 1.尽可能的减少http请求数,网速相同的条件下，下载一个100KB的图片比下载两个50KB的图片要快。所以，请减少HTTP请求
    // 减少对DOM的操作
    // 修改和访问DOM元素会造成页面的Repaint和Reflow，
    // 考虑大量DOM元素中循环的性能开销，在循环结束时一次性写入。

    // 2.将CSS和JS放到外部文件中引用，CSS放头，JS放尾
    // JavaScript代码执行时，不能同时做其它事情，即<script>每次出现都会让页面等待脚本的解析和执行（不论JavaScript是内嵌的还是外链的），
    // JavaScript代码执行完成后，才继续渲染页面。这个也就是JavaScript的阻塞特性。
    // 因为这个阻塞的特点，建议把JavaScript代码放到<body>标签以前，这样既能有效的防止JavaScript的阻塞，又能使得页面的HTML结构能更快的释放。
    // HTML规范清楚指出CSS要放包含在页面的<head>区域内

    // 3. 适当使用图片预加载和懒加载去加载图片
    // 懒加载：当页面被请求时，只加载可视区域的图片，其它部分的图片则不加载，只有这些图片出现在可视区域时才会动态加载这些图片
    // 如何判断是否出现在可视区域内吗？ 那就是你可以获取当前img的相对于文档顶的偏移距离减去scrollTop的距离， 
    // 然后和浏览器窗口高度在进行比较，如果小于浏览器窗口则出现在了可视区域内了， 反之，则没有。
    // 预加载：用不用都加载，轮播图的时候先把所有图片都加载出来，可以让用户有更好的体验。

    // 4.压缩图片和使用图片Spirit技术
    // 基本原理：
    // 注：其实压缩图片和图片精灵是两个方面的技术，可是既然都是关于图片的优化还是放到一块吧。
    // 现在由于工作的细分，专业的前端工程师已经少有机会去切图了，可是关于图片压缩还是得略微了解，一般图片压缩的方式有：
    // 1.缩小图片分辨率；
    // 2.改变图片格式；
    // 3.降低图片保存质量。

    // 5.减少dom的重排（回流）和重绘
    // 回流与重绘
    // 注：Repaint 和 Reflow 也就是重绘和重排，
    // 基本原理：
    // Repaint（重绘）就是在一个元素的外观被改变，但没有改变布局（宽高）的情况下发生，如改变visibility、outline、背景色等等。
    // Reflow（重排）就是DOM的变化影响到了元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效，
    // 浏览器会验证DOM树上的所有其它结点的visibility属性，这也是Reflow低效的原因。
    // 如：改变窗囗大小、改变文字大小、内容的改变、浏览器窗口变化，style属性的改变等等。
    // 如果Reflow的过于频繁，CPU使用率就会上涨，
    // 减少性能影响的办法：
    // 上面提到通过设置style属性改变结点样式的话，每设置一次都会导致一次reflow，
    // 所以最好通过设置class的方式；　有动画效果的元素，它的position属性应当设为fixed或absolute，
    // 这样不会影响其它元素的布局；如果功能需求上不能设置position为fixed或absolute，那么就权衡速度的平滑性。
    // 重排一定会导致重绘，重绘不一定会重排，重排对性能影响更大。
    // 总之，因为 Reflow 有时确实不可避免，所以只能尽可能限制Reflow的影响范围。
    // 浏览器会先创建DOM树，根据CSS规则（解析CSS规则树）创建渲染树，display=none会出现在渲染树当中。        
    // 浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，
    // 等队列中的操作到了一定的数量或者到了一定的时间间隔，
    // 浏览器就会flush队列，进行一个批处理。
    // 这样就会让多次的回流、重绘变成一次回流重绘。
    // 虽然有了浏览器的优化，但有时候我们写的一些代码可能会强制浏览器提前flush队列，这样浏览器的优化可能就起不到作用了。
    // 当你请求向浏览器请求一些 style信息的时候，就会让浏览器flush队列，比如：
    //  offsetTop, offsetLeft, offsetWidth, offsetHeight
    //  scrollTop/Left/Width/Height
    //  clientTop/Left/Width/Height
    //  width,height
   
    // 6.注意控制Cookie大小和污染
    // 因为Cookie是本地的磁盘文件，每次浏览器都会去读取相应的Cookie，
    // 所以建议去除不必要的Coockie，使Coockie体积尽量小以减少对用户响应的影响；
    // 使用Cookie跨域操作时注意在适应级别的域名上设置coockie以便使子域名不受其影响
    // Cookie是有生命周期的，所以请注意设置合理的过期时间，合理地Expire时间和不要过早去清除coockie，都会改善用户的响应时间。

    // 7.适当的使用CSS3动画代替传统的定位
    // CSS3动画会开启GPU加速
    // 利用事件委托为相同的子元素事件绑定，委托给父元素
}
function 移动端() {
    // 300ms延迟由来
    // 300 毫秒延迟的主要原因是解决双击缩放(double tap to zoom)。双击缩放，顾名思义，即用手指在屏幕上快速点击两次，
    // iOS 自带的 Safari 浏览器会将网页缩放至原始比例。 那么这和 300 毫秒延迟有什么联系呢？ 
    // 假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，
    // 当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。
    // 因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 
    // 鉴于iPhone的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，
    // 包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。

    // 解决方案:
    // （1）添加viewpoint meta标签
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    字段名称	    类型	                    描述
    width	number | device-width	控制 viewport 的宽度
    height	number | device-width	控制 viewport 的宽度
    initial-scale	device-width	初始缩放比例，也即是当页面第一次 load 的时候缩放比例
    maximum-scale	number	        允许用户缩放到的最大比例
    minimum-scale	number	        允许用户缩放到的最小比例
    user-scalable	yes | no	    用户是否可以手动缩放


    // （2）FastClick
    // 移动端事件触发顺序：在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend -->click。
    // fastclick.js的原理是：FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉



    // 点击穿透原理及解决
    //     PC网页上的大部分操作都是用鼠标的，即响应的是鼠标事件，包括mousedown、mouseup、mousemove和click事件。一次点击行为，可被拆解成：mousedown -> mouseup -> click 三步。

    // 　　手机上没有鼠标，所以就用触摸事件去实现类似的功能。touch事件包含touchstart、touchmove、touchend，注意手机上并没有tap事件。手指触发触摸事件的过程为：touchstart -> touchmove -> touchend。

    // 　　手机上没有鼠标，但不代表手机不能响应mouse事件（其实是借助touch去触发mouse事件）。也就是说在移动端的click事件可以拆解为：touchstart -> touchmove -> touchend -> click。

    // 　　浏览器在 touchend 之后会等待约 300ms ，如果没有 tap 行为，则触发 click 事件。 而浏览器等待约 300ms 的原因是，判断用户是否是双击（double tap）行为，双击过程中就不适合触发 click 事件了。 由此可以看出 click 事件触发代表一轮触摸事件的结束。

    // 因此，点击穿透的现象就容易理解了，
    // 在这 300ms 以内，因为上层元素隐藏或消失了，
    // 由于 click 事件的滞后性，同样位置的 DOM 元素触发了 click 事件（如果是 input 则触发了 focus 事件）。在代码中，给我们的感觉就是 target 发生了飘移

    // 解决:
    // 只用touch
    // 最简单的解决方案，完美解决点击穿透问题
    // 把页面内所有click全部换成touch事件（touchstart 、’touchend’、’tap’）， 需要特别注意 a标签，a标签的href也是click，需要去掉换成js控制的跳转，
    // 或者直接改成span + tap控制跳转。如果要求不高，不在乎滑走或者滑进来触发事件的话，span + touchend就可以了，毕竟tap需要引入第三方库
    // 不用a标签其实没什么，移动app开发不用考虑SEO，即便用了a标签，一般也会去掉所有默认样式，不如直接用span

}
function 获取浏览器信息() {
    // appVersion 属性可返回浏览器的平台和版本信息。该属性是一个只读的字符串。
    document.write("版本信息: " + navigator.appVersion);
}

//CSS
function pxRemEm区别(){
    px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的

    em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
    EM特点:
    1. em的值并不是固定的；
    2. em会继承父级元素的字体大小。

    rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。
    这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，
    但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，
    通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
    目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，
    就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。

    选择使用什么字体单位主要由你的项目来决定，如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用

    在这里为大家提供一个px,em,rem单位转换工具
    地址：http://pxtoem.com/


}
function 清除浮动(){
    // 1、父级div定义伪类：after和zoom
    // 2.在结尾处添加空div标签clear:both
    // 3.父级div定义height
    // 4.父级div定义overflow:hidden
    // 5.父级div定义overflow:auto
    // 6.父级div也一起浮动
    // 7.父级div定义display:table
    // 8、结尾处加br标签clear:both

}
function 盒模型() {
    // DOCTYPE是文档类型，
    // 完整定义DOCTYPE，会触发标准模式，
    // 如果DOCTYPE缺失在ie6,ie7,ie8下将会触发怪异模式
    // 标准盒模型的宽度就是width，怪异模式下的盒模型是width+padding+border
    // 标准模式与怪异模式的区别 
    // 2） 行内元素的垂直对齐：标准模式对齐至基线，怪异模式对齐至底部 
    // 3） 怪异模式中，IE6/7/8都不认识!important声明 
    // 4） 设置行内元素的高宽： 在Standards模式下，给等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。 
    // 5） 使用margin:0 auto在standards模式下可以使元素水平居中，但在怪异模式下却会失效。
    // 当box-sizing
    // content-box---标准
    // border-box---怪异
    // 弹性盒模型，做流式布局
    // 弹1性盒模型，  display：-webkit-flex：  flex：1；flex：2；flex：3
    // 则各占一份两份三份~新语法。若设置了父元素的宽度，则在老的语法中display：box；  
    // box-flex：1,2,3则也是各占。若子元素有一个有固定宽度，则按比例分布剩余的部分。
    // #div1{
    //     display:-webkit-box;
    //     }
    // #div1 div:nth-child(1){
    //     -webkit-box-flex:1;
    // }

}
function 响应式设计() {
    // 媒体查询，设置页面样式随屏幕宽度的变化而变化
    function viewport(){
         // <meta name=“viewport” content=“width=device-width'=  //可视窗口浏览器的宽度=设备的宽度（如果不加这句话在所有的移动端设备的宽度都是980）
        // , initial-scale＝1.0,
        // user-scalable=no  //不允许用户缩放,
        // maximum-scale=1.0 //大的缩放系数, 
        // minimum-scale=1.0 //小的缩放系数”
        // >
        手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，
        通常这个虚拟的“窗口”（viewport）比屏幕宽，
        这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），
        用户可以通过平移和缩放来看网页的不同部分。
        移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

        如果不显示地设置viewport，那么width的默认为980。
        如果页面的所有元素宽度都小于980，此时width为980，如果页面最宽的位置超过980，
        那么width等于最大宽度。总之，默认能将整个页面从左到右显示出来。
        如果设置了viewport，比如，只单纯地设置了user-scalable=no，
        例如<meta name="viewport" content="user-scalable=no" />，
        那么ios下width还是按980显示（即默认就会通过dpi缩放），
        但android和winphone下却不会再缩放了，浏览器分辨率和真实设置分辨率一致。
      

    }
   

    // 响应式设计原则
    // 1.移动优先：在设计的初期就要考虑页面如何在多终端展示
    // 2.渐进式增强，平稳退化：充分发挥硬件设备的最大功能

    // 实现响应式布局的方法：
    // 1.CSS3 - Media Query（最简单的方式）
    // 2.借助原生的JS（成本高，不推荐）
    // 3.第三方开源框架 bootstrap（可以很好的浏览器响应式布局的设计）

}
function CSS3() {
    function 选择器() {
        1）E:last-child 匹配父元素的最后一个子元素E。
        2）E:nth-child(n)匹配父元素的第n个子元素E。 
        3）E:nth-last-child(n) CSS3 匹配父元素的倒数第n个子元素E。
    }
    function 阴影() {
         // text-shawow
        // box-shadow：水平 垂直 模糊 颜色
    }
    function 边框圆角() {
        // 1、圆角：border-radius
        // 2、边框
        // （1）边框图片：border-image
        // （2）边框颜色 border-colors（火狐下）``
    }
    function 背景() {
        background-clip //规定背景的绘制区域。
        background-origin //规定背景图片的定位区域。
        background-size//规定背景图片的尺寸。
    }
    function 渐变() {
        // 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
        // background: linear-gradient(direction, color-stop1, color-stop2,...);
        // background-image:-webkit-gradient(linear,0% 0%,100% 0%,from(#2A8BBE),to(#FE280E));
        // 这里 linear 表示线性渐变，从左到右，由蓝色（#2A8BBE）到红色（#FE280E）的渐变。效果图如下：

        // 径向渐变（Radial Gradients）- 由它们的中心定义
        // background: radial-gradient(center, shape size, start-color,...,last-color);

    }
    function 动画() {
        变形transform（只有变形没有动画）
        // 旋转rotate(围绕x、y、z三个方向)、
        // 缩放scale（水平，垂直）、
        // 位移translate(比 position 效率高，translateX translateY translateZ,逗号分隔)
        // transform-origin  允许您更改转化元素位置

        过渡transition（只要改变值就动，过度比较平滑）：做动画的属性(width, all)，动画执行时间，动画形式，延迟时间
        // （给一个初值，初值一改变就执行动画）
        // -webkit-transition-property: all;  规定应用过渡的 CSS 属性的名称。
        // -webkit-transition-duration: 2s;   定义过渡效果花费的时间。默认是 0。
        // -webkit-transition-timing-function: ease;   规定过渡效果的时间曲线。默认是 "ease"。
        // -webkit-transition-delay:1s;   规定过渡效果何时开始。默认是 0。
        // -webkit-
        // -moz-

        动画animation（调用了就动）：动画名称animation-name、执行时间animation-duration、
        @keyframes规则是创建动画。 @keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。
        例子:{
            当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：
            @keyframes myfirst
            {
            0%{background: red;}
            25%{background: yellow;}
            50%{background: blue;}
            100%{background: green;}
            }
        }
        // animation-name   规定 @keyframes 动画的名称。
        // animation-duration   规定动画完成一个周期所花费的秒或毫秒。默认是 0。  
        // animation-timing-function   规定动画的速度曲线。默认是 "ease"。
        // animation-delay  规定动画何时开始。默认是 0。
        // animation-iteration-count  规定动画被播放的次数。默认是 1。
        // animation-direction   规定动画是否在下一周期逆向地播放。默认是 "normal"。
        // animation-play-state  规定动画是否正在运行或暂停。默认是 "running"。
        
    }
    function 自定义字体() {
        // css3提供的@font-face来实现个性化字体了
        // 但是说@font-face是css3中的新特性是不准确的，因为在css2中就已经支持了这一特性，ie浏览器当时也已经支持它了，只是其他浏览器还不支持

        // 第一：我们需要在css中引入@font-face，在里面使用font-family设置自己想要取的字体名称，这里我取作myFont（当然也可以是yourFont等等等等）。
        // 第二：我们需要下载自己喜欢的字体。
        // 第三：下载之后，通过解压缩得到文件，并通过字体转换工具，转换为兼容IE的eot格式。
        //         比如使用src:url("rajdhani-bold.ttf"),url("rajdhani-bold.eot");
        //         即可将字体引入，其中url为相对路径或者是绝对路径。
        // 第四：这时，我们就可以在css中通过font-family来加入自己的个性化字体了。

        // @font-face{
        //     font-family:myFont;
        //     src:url('rajdhani-bold.ttf')，url('rajdhani-bold.eot');
        // }
        // p{
        //     font-family: myFont;
        // }
    
    }
    function 弹性盒模型() {
        resize：none | both | horizontal | vertical | inherit
        box-sizing: content-box | border-box | inherit
        outline:outline-color outline-style outline-width outine-offset

        resize属性指定一个元素是否应该由用户去调整大小。
        box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。
        outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

        display	          |  指定 HTML 元素盒子类型。
        flex-direction	  |  指定了弹性容器中子元素的排列方式
        justify-content	  |  设置弹性盒子元素在主轴（横轴）方向上的对齐方式。
        align-items	      |  设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
        flex-wrap	      |  设置弹性盒子的子元素超出父容器时是否换行。
        align-content	  |  修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐
        flex-flow	      |  flex-direction 和 flex-wrap 的简写
        order	          |  设置弹性盒子的子元素排列顺序。
        align-self	      |  在弹性子元素上使用。覆盖容器的 align-items 属性。
        flex	          |  设置弹性盒子的子元素如何分配空间。
        // 弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。
        // 弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。
        // 弹性容器内包含了一个或多个弹性子元素。

        /*flex-direction的值有:                       弹性子元素的排列方式
            row：横向从左到右排列（左对齐），默认的排列方式。
            row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
            column：纵向排列。
            column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
        */

        /*justify-content属性                    弹性子元素在父容器中的位置
             flex-start：从左到右排列
             flex-end：从右到左排列
             center：中间开始排列
             space-between：平分
             space-around：平分，且两边占1/2
         */


         /*align-items 属性:侧轴（纵轴）方向上的对齐方式。            设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式
             flex-start： 顶部开始
             flex-end： 低部开始
             center 居中
             baseline 弹性盒子元素的行内轴与侧轴为同一条
             stretch
        */

        /*flex-wrap 属性                    定弹性盒子的子元素换行方式
            nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
            wrap - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
            wrap-reverse -反转 wrap 排列。
        */

        /*order 属性
               用整数值来定义排列顺序，数值小的排在前面。可以为负值
        */

        /*margin 属性
              完美居中
            margin: auto
        */

        /*flex 属性用于指定弹性子元素如何分配空间。
            比例分配
        */
    }
    function 媒体查询() {
        1. 使用媒体类型
        <linkrel="stylesheet"type="text/css"href="site.css"media="screen"/>
        <linkrel="stylesheet"type="text/css"href="print.css"media="print"/>

        2. 媒体查询规则
        @media all and(min-width:800px){...}
        @media all 是媒体类型，也就是说，将此 CSS 应用于所有媒体类型。
        (min-width:800px) 是包含媒体查询的表达式，如果浏览器的最小宽度为 800 像素，则会告诉浏览器只运用下列 CSS。

        3. and 条件
        @media(min-width:800px)and(max-width:1200px)and(orientation:portrait){...}

        4. or 关键词
        @media(min-width:800px)or(orientation:portrait){...}

        5. 使用 not
        @media(not min-width:800px){...}

    }
}
function 元素居中() {
    // 方法一 
    思路：显示设置父元素为：table，子元素为：cell-table，这样就可以使用vertical-align: center，
    // 优点：父元素（parent）可以动态的改变高度（table元素的特性）
    // 缺点：IE8以下不支持
    // .box1{
    //     display: table-cell;
    //     vertical-align: middle;
    //     text-align: center;        
    // }
    // <div class="box box1">
    //     <span>垂直居中</span>
    // </div>

    // 方法二 
    思路：子元素绝对定位，距离顶部 50%，左边50%，然后使用css3 transform:translate(-50%; -50%)
    // 优点：高大上,可以在webkit内核的浏览器中使用
    // 缺点：不支持IE9以下不支持transform属性

    // 方法三：
    思路：使用css3 flex布局 里外两个元素,给外面的元素设置以下三个属性,里面的不用设置
    // .parent{
    //     display: flex;
    //     justify-content: center;
    //     align-items: center; 
    // }

    // 方法四：
    思路:或者父元素display:flex,子元素直接margin:auto;完美解决

    //  兼容ie６的水平垂直居中
    // 1. 水平居中
    // margin:0 auto; 是最常用的让DIV容器居中的方法。margin作用于块级元素，而是否作用于其他内联元素因浏览器不同而不同，此处可能为内联元素，所以避免使用。 
    // text-align:center; 可以让绝大多数的对象居中对齐，并且这个属性也获得了几乎全部浏览器的支持。
    // 实际上，这个属性定义的是块级对象内部文字的对齐方式，内部的文字或者图像一般是内联对象

    // 2. 垂直居中
    // 垂直居中，对于固定高度的容器使用负margin的方法有效，对于高度不固定的情形使用 vertical-align 属性，
    // 它定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。
    // 这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。

}
function 两列布局() {
    <div class="left"></div>
    <div class="main"></div>
    1、float+block+margin：
    // .left {
    //     float: left;
    //     width: 100px;
    // }
    // .main {
    //     margin-left: 110px;
    //     width: 100%;
    // } 
    2、float+BFC：
    // .left {
    //     float: left;
    //     margin-right: 10px;
    //     width: 100px;
    // }
    // .main {
    //     overflow: hidden; //或overflow：auto
    // }

    // 2table（父元素display: table;子元素display:table-cell）
    // 3外边距（右侧marginleft） 
    // 4左侧绝对定位 
    // 5弹性盒模型（父元素display: flex;子元素flex-grow: 1;）

    // 两列布局：左侧固定，右侧自适应，左侧宽高固定右侧不能浮动（块级元素），然后设置margin-left把左侧让出来。
    // 三列布局：左右固定，中间自适应，dom结构，先左右后中间 
    // 浮动高度塌陷：元素浮动之后父元素的高度会塌陷，有两种方法解决：1、如果父元素的高度是固定的，那就把高度写死
}
function css兼容性() {
    透明度问题，
    // 1. 标准浏览器(0-1)---------opacity:0.2，	IE -----------------(0-100);filter:  alpha(opacity=20);
    2、IE6不支持display：inline－block 
    // 4，IE6中浮动式产生一个双边距的问题：把元素的display:inline
    // 5，IE6之间的浏览器不支持min-height，解决：加一个_height:200px;
    7. 被点击过的超链接不再具有hover、active了
    //    解决：把：hover ：visit之类的里面的样式设置成一样的
    //    CSS属性排列顺序 Link-Visit-Hover-Active
    // 8、 IE中有一个3像素BUG，当一个元素浮动，另一个元素和他并列是会有一个3像素的边距，给左边浮动的元素加一个_margin-right :3px来解决。负值往右，正值往左  

    9.  IE6只支持 a标签的：hover，不支持其他标签的：hover
    10. IE6不支持png24的透明（png透明）
}
function css性能() {
    // 加载性能
    // 这个方面相关的 best practice 太多了，
    // 比如不要用 import 啊，压缩啊等等，主要是从减少文件体积、减少阻塞加载、提高并发方面入手的，
    // 任何 hint 都逃不出这几个大方向。
    // 渲染性能
    // 渲染性能是 CSS 优化最重要的关注对象。
    // 页面渲染 junky 过多？
    // 看看是不是大量使用了 text-shadow？是不是开了字体抗锯齿？
    // CSS 动画怎么实现的？合理利用 GPU 加速了吗？
    // 这个方面搜索一下 CSS render performance 或者 CSS animation performance 也会有一堆一堆的资料可供参考。

    // 避免使用@import
    // 外部的CSS文件中使用@import会使得页面在加载时增加额外的延迟。
    // 一个CSS文件first.css包含了以下内容：@import url(“second.css”)。
    // 浏览器先把first.css下载、解析和执行后，发现及处理第二个文件second.css。
    // 简单的 解决方法是使用<link>标记来替代@import，并行下载CSS文件，从而加快页面加载速度.

    // 避免通配选择器
    // 在学习CSS初期，我们在做网页的时候经常会使用*{margin：0；padding：0;}，以此来消除标签的默认布局和不同浏览器对于同一个标签的渲染。
    // 而我们有时候会看到reset的写法。body,p,h1,h2,h3,h4,h5,input,select,textarea,table{margin：0；padding：0;}
    // 这些人为什么要这么写，下面的内容我们会得到答案
    // 例：#header > a {font-weight:blod;}
    // CSS选择器是从右到左进行规则匹配。所以在浏览器中这条语句实现为：
    // 浏览器遍历页面中所有的a元素——>其父元素的id是否为header。
    // 例：#header  a {font-weight:blod;}
    // 这个例子比上一个消耗的时间更多
    // 遍历页面中所有a元素——>向其上级遍历直到根节点
    // 例：.selected * {color: red;}
    // 匹配文档中所有的元素——>分别向上逐级匹配class为selected的元素，直到文档的根节点
    // 所以我们应该避免使用通配选择器。

    // 避免类正则的属性选择器
    // 正则表达式匹配会比基于类别的匹配会慢很多。大部分情况下我们应尽量避免使用 *=， |=， ^=， $=， 和 ~=语法的属性选择器。

    // 移除无匹配的样式

    // 避免单规则的属性选择器
    // 浏览器匹配所有的元素——>检查是否有href属性并且herf属性值等于”#index”——>分别向上逐级匹配class为selected的元素，直到文档的根节点。
}
function sassless() {
    // 1.编译环境不一样 Sass的安装需要Ruby环境，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出css到浏览器，
    // 也可以在开发环节使用Less，然后编译成css文件，直接放到项目中。 

    // 2.变量符不一相，less是@，而scss是$,而且它们的作用域也不一样，less是块级作用域 

    // 3.输出设置，Less没有输出设置，sass提供4种输出选项，nested,compact,compressed和expanded nested：
    // 嵌套缩进的css代码(默认) expanded：展开的多行css代码 compact：简洁格式的css代码 compressed：压缩后的css代码 

    // 4.sass支持条件语句，可以使用if{}else{},for{}循环等等，而less不行 

    // 5.引用外部css文件，sass引用外部文件必须以_开头，文件名如果以下划线_形状，sass会认为该文件是一个引用文件，
    // 不会将其编译为css文件。less引用外部文件和css中的@import没什么差异。 

    // 6.sass和less的工具库不同。sass有工具库Compass, 简单说，sass和Compass的关系有点像Javascript和jQuery的关系,
    // Compass是sass的工具库。在它的基础上，封装了一系列有用的模块和模板，补充强化了sass的功能。
    // less有UI组件库Bootstrap,Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分源码就是采用less语法编写。 

    // 总结：不管是sass，还是less，都可以视为一种基于CSS之上的高级语言，其目的是使得CSS开发更灵活和更强大，
    // sass的功能比less强大,基本可以说是一种真正的编程语言了，less则相对清晰明了,易于上手,
    // 对编译环境要求比较宽松。考虑到编译sass要安装Ruby,而Ruby官网在国内访问不了,个人在实际开发中更倾向于选择less。

}
function BFC() {
    // BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。
    // 具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。
    // 通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

    // 触发 BFC
    // 只要元素满足下面任一条件即可触发 BFC 特性：
    // body 根元素
    // 浮动元素：float 除 none 以外的值
    // 绝对定位元素：position (absolute、fixed)
    // display 为 inline-block、table-cells、flex
    // overflow 除了 visible 以外的值 (hidden、auto、scroll)

    // 同一个 BFC 下外边距会发生折叠
    // BFC 可以包含浮动的元素（清除浮动）
    // BFC 可以阻止元素被浮动元素覆盖
}
function css继承(){
    不可继承的：display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi。

    所有元素可继承：visibility和cursor。
    
    内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction。
    
    块状元素可继承：text-indent和text-align。
    
    列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
    
    表格元素可继承：border-collapse。
}

//JS
function 数组的一些操作() {
    // 有一串乱序的数组，排序
    // return a-b;

    // 有一串按顺序排列的数组，打乱顺序
    // return 0.5 – Math.random();

    // shift:从数组中把第一个元素删除，并返回这个元素的值。
    // unshift: 在数组的开头添加一个或更多元素，并返回新的长度
    // push:在数组的中末尾添加元素，并返回新的长度
    // pop:从数组中把最后一个元素删除，并返回这个元素的值。

    // split() join()?
    // 前者是切割成数组的形式，
    // 后者是将数组转换成字符串

    // slice() 方法可从已有的数组中返回选定的元素。
    // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

}
function 严格模式() {
    // 全局变量必须显式声明
    // 禁止this关键字指向全局对象，构造函数必须new
    // 函数不能有重名的参数
    // 禁止使用with语句
    // arguments.callee();

    // - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    // 　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
    // 　　- 提高编译器效率，增加运行速度；
    // 　　- 为未来新版本的Javascript做好铺垫。
}
function js数据类型() {
    // js的基本数据类型五种（存在于栈里面）
    // number    string(加双引号或者单引号)  boolean(true/false) undefined  null

    // 3种引用类型（存在于堆里面):
    // 内置对象;
    // 自定义对象;
    // dom对象;

    // 函数声明会覆盖变量声明，但不会覆盖变量赋值。
}
function js创建对象的方法() {
    // 1. 对象直接量
    var obj1 = {}; //空对象

    var obj2 = {
        name: "ys",
        age: 12
    };
    var obj3 = {
        name: "ys",
        age: 12,
        like: {
            drink: "water",
            eat: "food"
        }
    };
    // 2.new创建对象
    var obj1 = new Object();
    var obj2 = new Array();
    var obj3 = new Date();
    var obj4 = new RegExp("ys");

    // 3.自定义对象
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    var obj1 = new Person("ys", 12);

    // 4.Object.create()创建
    // 该方法有两个参数，我就只解释下第一参数，第二个参数不常用（对对象的属性进行进一步描述） 
    // 第一个参数：传入要继承的原型（prototype）对象 
    // 怎样理解这句话呢？
    var obj1 = Object.create({
        name: "ys",
        age: 12
    });
    console.log(obj1); //{}
    console.log(obj1.age); //12
    // obj1为{}，为什么可以访问到属性值呢？我们理解下第一个参数的意义“传入要继承的原型对象”
    // console.log(obj1.__proto__);  //Object {name: "ys", age: 12}
    // 对象本身为空，但是原型链上数据不为空，存在obj1.age，所以可以访问到

}
function js创建类的方法() {
    //工厂方式
    function Car() {
        var ocar = new Object;
        ocar.color = 'blue'
        ocar.doors = 4;
        ocar.showColor = function () {
            document.write(this.color)
        };
        return ocar;
    }
    var car1 = Car();
    var car2 = Car();
    //构造方式
    function Car(color, door) {
        this.color = color;
        this.doors = door;
        this.showColor = function () {
            alert(this.color)
        };
    }
    var car1 = new Car('red', 4);
    var car2 = new Car('blue', 4);

    //原型方式
    function Car() {}
    Car.prototype.color = 'red';
    Car.prototype.doors = 4;
    Car.prototype.showColor = function () {
        alert(this.color);
    }
    var car1 = new Car();
    var car2 = new Car();
    //原型原型方式
    function Car(color, door) {
        this.color = color;
        this.doors = door;
        this.arr = new Array('aa', 'bb');
        if (typeof Car._initialized == undefined) {
            Car.prototype.showColor = function () {
                alert(this.color);
            };
            Car._initialized = true;
        }
    }




}
function 构造函数和原型链() {
    // 构造函数：是一种特殊的方法、主要用来创建对象时初始化对象，
    // 总与new运算符一起使用，创建对象的语句中构造函数的函数名必须与类名完全相同。
    // 与普通函数相比只能由new关键字调用，构造函数是类的标示
    // 通过new创建一个对象的时候，函数内部有哪些改变???
    // 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。 
    // 2、属性和方法被加入到 this 引用的对象中。
    // 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

    js里所有的对象都有__proto__属性(对象，函数)，指向构造该对象的构造函数的原型。
    只有函数function才具有prototype属性。这个属性是一个指针，指向原型对象
    原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。

    function出来的函数会自动添加一个prototype原型对象( 他上面的属性和方法只有一份并且所有实例共享)
    object对象都有内置的原型对象__proto__注意是两个_(我在这里吃过亏哈哈)
    并且obj.__proto__指向它的构造函数的prototype对象
    obj.__proto__就是一个(地址)根据它可以找到它构造函数的prototype对象
    obj.__proto__=itsConstructor.prototype
    这样当obj的里面没有你想要的属性和方法的时候，它会顺着原型链一级一级向上查找，直到找到你想要的方法时或者为null时才停止

    function new() {
        function test(){}
        // new 干了四件事
        // 1.var obj={}；
        // 2.obj.__proto__=test.prototype;
        // 3.test.call(obj); 
        // 4把obj的地址赋值给等式左边的变量
    }

}
function js实现继承的方法() {
    // 1.使用对象冒充实现继承
    // 2. 采用call、Apply方法改变函数上下文实现继承
    // 定义一个动物类
    function Animal(name) {
        // 属性
        this.name = name || 'Animal';
        // 实例方法
        this.sleep = function () {
            console.log(this.name + '正在睡觉！');
        }
    }
    // 原型方法
    Animal.prototype.eat = function (food) {
        console.log(this.name + '正在吃：' + food);
    };

    // 1、原型链继承
    function Cat() {}
    Cat.prototype = new Animal();
    Cat.prototype.name = 'cat';
    //　Test Code
    var cat = new Cat();
    console.log(cat.name);
    console.log(cat.eat('fish'));
    console.log(cat.sleep());
    console.log(cat instanceof Animal); //true 
    console.log(cat instanceof Cat); //true
    // 特点：
    // 1. 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
    // 2. 父类新增原型方法/原型属性，子类都能访问到
    // 3. 简单，易于实现
    // 缺点：
    // 1. 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
    // 2. 无法实现多继承
    // 3. 来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
    // 4. 创建子类实例时，无法向父类构造函数传参


    // 2、构造继承
    function Cat(name) {
        Animal.call(this);
        this.name = name || 'Tom';
    }
    // Test Code
    var cat = new Cat();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // false
    console.log(cat instanceof Cat); // true
    //   特点：
    //   1. 解决了1中，子类实例共享父类引用属性的问题
    //   2. 创建子类实例时，可以向父类传递参数
    //   3. 可以实现多继承（call多个父类对象）
    //   缺点：
    //   1. 实例并不是父类的实例，只是子类的实例
    //   2. 只能继承父类的实例属性和方法，不能继承原型属性/方法
    //   3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能


    // 3、实例继承
    function Cat(name) {
        var instance = new Animal();
        instance.name = name || 'Tom';
        return instance;
    }
    // Test Code
    var cat = new Cat();
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat); // false
    // 特点：
    // 1. 不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
    // 缺点：
    // 1. 实例是父类的实例，不是子类的实例
    // 2. 不支持多继承


}
function js提供的异步模式() {
    // 方法1：回调函数，优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。

    // 方法2：时间监听，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。

    // 方法3：发布/订阅，性质与“事件监听”类似，但是明显优于后者。

    // 方法4：Promises对象，是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。
}
function ES6() {
    //      let 定义变量
    //      没有变量提升             不可以重复定义  
    //      临时失效区              块级作用域
    
    //     const 代表一个值的 常量索引
    //     换句话说，变量的名字在内存中的指针不能够改变
    //     但是指向这个变量的值 可能 改变。
    
    
    // 解构赋值语法是一个 Javascript 表达式，这使得可以将值从数组或属性从对象提取到不同的变量中。
    // 箭头函数
    // 1.函数体内this对象就是定义时所在的对象,而不是使用时所在的对象
    // 2.不可以当做构造函数,不可以使用new命令,否则会抛出一个错误
    // 3.不可以使用arguments对象,该对象在函数体内不存在,如果要用,可以使用rest
    
    // set:
    // set类似于数组,但是成员的值都是唯一的,没有重复的值
    
    // map:
    // map类似于对象,也是键值对的集合,但是键的范围不限于字符串,各种类型的值都可以当做键值
    
    // class
    // 类,对象
    // constructor(),
    // 类和模块的内部默认就是严格模式
    // extends()
    
    // promise:
    // Promise 是一个对象
    // Promise的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。
    // 从它可以获取异步操作的消息。Promise 提供统一的 API，
    // 各种异步操作都可以用同样的方法进行处理。
    // Promise实例生成以后，可以用then方法
    // 分别制定Resolved状态和Rejected状态的回调函数：
    // catch是用于指定发生错误时的回调函数。
    // （建议不要在then的第二个参数写rejected状态，
    // 总是使用catch）
    
    // 不管是then或者catch返回的都是一个新的Promise实例！
    // 而每个Primise实例都有最原始的Pending（进行中）到Resolve（已完成），
    // 或者Pending（进行中）到Reject（已失败）的过程
    
    // Symbol:
    // ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
    // 重新复习下新知识：基本数据类型有6种：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
    // 这里新添加了一种：Symbol
    // 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象
    // Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
    // Symbol值不能与其他类型的值进行运算
    // Symbol值作为对象属性名时，不能用点运算符
    // Symbol值作为属性名时，该属性还是公开属性，不是私有属性。
    // 这个有点类似于java中的protected属性（protected和private的区别：在类的外部都是不可以访问的，在类内的子类可以继承protected不可以继承private）
    // 但是这里的Symbol在类外部也是可以访问的，只是不会出现在for...in、for...of循环中，
    // 也不会被Object.keys()、Object.getOwnPropertyNames()返回。但有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名

    // generator:
    // generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
    // 函数在执行过程中，如果没有遇到return语句（函数末尾如果没有return，就是隐含的return undefined;），控制权无法交回被调用的代码。

    // generator跟函数很像，定义如下：

    function* foo(x) {
        yield x + 1;
        yield x + 2;
        return x + 3;
    }
    // generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次

    // 要编写一个产生斐波那契数列的函数，可以这么写：
    function fib(max) {
        var
            t,
            a = 0,
            b = 1,
            arr = [0, 1];
        while (arr.length < max) {
            [a, b] = [b, a + b];
            arr.push(b);
        }
        return arr;
    }
    
    // 测试:
    fib(5); // [0, 1, 1, 2, 3]
    fib(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    // 函数只能返回一次，所以必须返回一个Array。但是，如果换成generator，就可以一次返回一个数，不断返回多次。用generator改写如下：
    function* fib(max) {
        var
            t,
            a = 0,
            b = 1,
            n = 0;
        while (n < max) {
            yield a;
            [a, b] = [b, a + b];
            n ++;
        }
        return;
    }
    for (var x of fib(10)) {
        console.log(x); // 依次输出0, 1, 1, 2, 3, ...
    }
    // generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码
    try {
        r1 = yield ajax('http://url-1', data1);
        r2 = yield ajax('http://url-2', data2);
        r3 = yield ajax('http://url-3', data3);
        success(r3);
    }
    catch (err) {
        handle(err);
    }
    // 看上去是同步的代码，实际执行是异步的
    
    
}
function JS的垃圾回收机制(){
    1\在js中定义的全局变量是不会被销毁的，因为我们随时都可能会用到这个变量，所以不能被销毁。
    2\但是在函数中定于的变量就不一定了，而且由于在函数的定义的变量的生命周期在执行完这个函数就销毁的原因自然就保存不了上一次的值。

    1、如果一个对象不被引用，那么这个对象就会被GC回收；
　　 2、如果两个对象互相引用，但是没有被第3个对象所引用，那么这两个互相引用的对象也会被回收。
// Js具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。
// JS中最常见的垃圾回收方式是标记清除。
// 工作原理：是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。
// 工作流程：
// 1.    垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。
// 2.    去掉环境中的变量以及被环境中的变量引用的变量的标记。
// 3.    再被加上标记的会被视为准备删除的变量。
// 4.    垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。

// 引用计数 方式
// 工作原理：跟踪记录每个值被引用的次数。
// 工作流程：
// 1.    声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1。
// 2.    同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1.
// 3.    当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减1.
// 4.    当引用次数变成0时，说明没办法访问这个值了。
// 5.    当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。

// 什么情况会引起内存泄漏？
// 1.    意外的全局变量引起的内存泄漏。
// 原因：全局变量，不会被回收。
// 解决：使用严格模式避免。
// 2.    闭包引起的内存泄漏
// 原因：闭包可以维持函数内局部变量，使其得不到释放。
// 解决：将事件处理函数定义在外部，解除闭包,或者在定义事件处理函数的外部函数中，删除对dom的引用。
// 3.    没有清理的DOM元素引用
// 原因：虽然别的地方删除了，但是对象中还存在对dom的引用
// 解决：手动删除。
// 4.    被遗忘的定时器或者回调
// 原因：定时器中有dom的引用，即使dom删除了，但是定时器还在，所以内存中还是有这个dom。
// 解决：手动删除定时器和dom。
// 5.    子元素存在引用引起的内存泄漏
// 原因：div中的ul li  得到这个div，会间接引用某个得到的li，那么此时因为div间接引用li，即使li被清空，也还是在内存中，并且只要li不被删除，他的父元素都不会被删除。
// 解决：手动删除清空。



}
function js一些乱码七糟的东西() {
    function 0.1 + 0.2 != 0.3() {
        // 首先声明这不是bug，原因在与十进制到二进制的转换导致的精度问题！其次这几乎出现在很多的编程语言中：
        // C/C++,Java,Javascript中，准确的说：
        // “使用了IEEE 754浮点数格式”来存储浮点类型(float 32,double 64)的任何编程语言都有这个问题
    }
    function 类数组() {
        // 拥有length属性，其它属性（索引）为非负整数
        // 不具有数组所具有的方法

        // 类数组对象转化为数组
        Array.prototype.slice.call(arguments)
        Array.prototype.slice.call(arguments, 0)
        [].slice.call (arguments)
        [].slice.call (arguments, 0)

        Array.from(arguments)

        // 原生JavaScript转换
        var length = arguments.length;
        var arr = [];
        for (var i = 0; i < length; i++) {
          arr.push(arguments[i]);
          return arr;
        }
    }
    function 包装对象() {
        // 为什么 string instanceof string返回false
        // 在读取字符串的时候会创建一个对象，但是这个对象只是临时的，
        // 所以我们称它为临时对象，学术名字叫包装对象，说它临时，
        // 是因为我们在读取它的属性的时候，js会把这个string字符串通过new String()方式创建一个字符串对象，
        // 一旦引用结束，这个对象就被销毁了。
    }
    function JavaScript如何判断一个对象是否为数组(){
        1) arr instanceof Array返回true

        2) arr.constructor == Array返回true
        说明：使用instanceof和constructor判断数组类型的问题在于，它假定只有一个运行环境，如果网页中包含多个框架，
        那么实际上存在两个以上不同的全局执行环境，进而存在两个不同版本的Array构造函数，
        如果从一个框架向另一个框架传入一个数组，
        那么传入的数组与第二个框架中原生创建的数组分别具有各自不同的构造函数，
        也就是说，object.constructor == Array 会返回false。

        原因：Array属于引用型数据，传递过程仅仅是引用地址的传递，
        每个页面的Array原生对象所引用的地址是不一样的，
        在子页面声明的Array所对应的构造函数，是子页面的Array对象，
        父页面进行判断时使用的Array并不等于子页面的Array。

        
        
        3) Array.isArray(arr)方法返回true
        ES5新增了Array.isArray()方法，这个方法的目的是：最终确定一个值是否是数组，不管它是在哪个全局环境创建的。
        
        4) Object.prototype.toString.call(arr) === "[object Array]"返回true,
        这是最简单的判断一个对象是否为数组的方法
    }


}
function js实现深拷贝(){
    function copy(arr){
        // 第二种方法 var obj=arr.constructor==Array?[]:{};
    　　 var obj= arr instanceof Array?[]:{}
        for(var i in arr){
            if(typeof arr[i]==="object"){
                obj[i]=copy(arr[i]);
            }else{
                obj[i]=arr[i];
            }
        }
        return obj;
    }
}
function typeScript(){
    // TypeScript的设计目的应该是解决JavaScript的“痛点”：
    // 弱类型和没有命名空间，导致很难模块化，
    // 不适合开发大型程序。另外它还提供了一些语法糖来帮助大家更方便地实践面向对象的编程。
    TypeScript可以实现类，接口，枚举，泛型，方法重载等，用简洁的语法丰富了JavaScript的使用。

    一. 编译时的强类型
    TypeScript设计了一套类型机制来保证编译时的强类型判断。
    最简单的，你可以申明变量的类型，那么任何其他类型的赋值将会引起编译错误。
    例如
    var foo: string;
    foo = true; //error: Cannot convert 'boolean' to string
    有意思的是，类似于C#的var变量声明，TypeScript会对赋值的变量进行类型推断
    例如
    var bar = 0;
    bar = ''; //error: Cannot convert 'string' to 'number'

    function 语法糖() {
        简单的说，语法糖就是一种便捷写法。例如：input.map(item => item + 1);
        他表示的意思是input.map(function (item) {
            return item + 1;
          });
        通过例子你可以看出来，语法糖的使用其实就是让我们的写的代码更简单，看起来也更容易理解。
    }
}

//框架
function jquery() {
    // 1.jquery的选择器非常强大，除了支持标准的CSS选择器之外，还支持一些自带的伪类选择器，
    // 2.提供了大量的方法（API函数），帮我们简化DOM操作，
    // 3.还可以支持链式操作（连点的操作，只有方法能链式操作）
    // 函数立即调用减少全局变量的污染；
    // 文档就绪函数也是，在函数内部声明的变量不会污染到全局，还要等到body结构全部加载完毕再执行
    // 对一个事件多次绑定addeventlistener（原生的）可以不覆盖
    // jq取到的会变成jq对象，可以使用jq方法，不能使用原生方法，不过可以通过转换以后使用原生方法。

    // Jq中 attr 和 prop 有什么区别
    // 对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
    // 对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
    //     隐式迭代。
    $('#btn').click(function () {
        //隐式迭代。。
        $('p').text('为了新中国').css('background', 'blue');
    });
    //      获取元素P，在传统的dom写法中getElementsByTagName 发现没有方法名Elements 是复数形式。
    //    也就是说获得的应该是一个集合。
    //    我们知道设置集合中元素的属性，那必须的迭代啊。（就是遍历一下啊）
    //    但是Jquery中不需要遍历可以直接设置。  

    // 将一个jq对象转化为dom对象？
    // 方法一：
    // jQuery对象是一个数据对象，可以通过[index]的方法，来得到相应的DOM对象。 
    // 如：var $v =$("#v") ; //jQuery对象 
    // var v=$v[0]; //DOM对象 
    // alert(v.checked) //检测这个checkbox是否被选中 

    // 方法二：
    // jQuery本身提供，通过.get(index)方法，得到相应的DOM对象 
    // 如：var $v=$("#v"); //jQuery对象 
    // var v=$v.get(0); //DOM对象 
    // alert(v.checked) //检测这个checkbox是否被选中


    // 封装过添加事件和移除事件
    function addEvent(elem, type, handler) {
        if (elem.addEventListener) { //能力检测, 标准浏览器   
            elem.addEventListener(type, handler, false);
        } else if (elem.attachEvent) { //ie         
            elem[type + handler] = function () {
                handler.call(elem);
            };
            elem.attachEvent('on' + type, elem[type + handler]);
        }
    }
    function removeEvent(elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, elem[type + handler]);
        }
    }
}
function RequireJs() {
    // RequireJS有两个主要方法(method): define()和require()。

    // define()的回调函数需要有一个返回值作为这个模块定义。
    // 这些类似被定义的模块叫作AMD (异步模块定义)


    // 原理：data-main属性加载入口文件，在底层动态创建script标签，用正则表达式匹配加载的入口文件名，动态的创建标签，动态的加载。
    // 底层是动态创建script标签来加载js文件，异步加载，使用的是async（异步的）。底层通过正则解析字符串，找require。


    // 动态加载js的原理：
    // var   document.createElement(oScript);
    // oScript.src=index;
    // Document.body.appendChild();
    // 动态创建script标签来加载js文件
    // 异步：不用等待。在script里面加上async

    <script src="require.js"  data-main="xxx.js"></script>
    // xxx.js是入口文件，页面级的JS，比如index.js，可以不写.js，直接写index
    require(['a'],function(add2){
        alert(add2(4+5));
    });

        
    define(function(){
        function add(a,b){
        return a + b;
        }
        return add
    });

    // 模块与函数的区别：模块是粒度更大的代码的抽象和封装?

    // AMD依赖前置require.js  AMD 是提前执行    AMD 推崇依赖前置   AMD 推崇复用接口    异步模块定义
    // CMD 依赖就近sea.js     CMD 是延迟执行    CMD 推崇依赖就近   CMD 推崇单用接口    通用模块定义


}
function WebPack() {
    // 分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等）
    // ，并将其转换和打包为合适的格式供浏览器使用。

    // webpack的配置文件会暴露出一个对象，格式如下：

　　　　module.exports = {
　　　　　　//配置项
　　　　}

// 常用配置项将要说明
// entry:        打包的入口文件，一个字符串或者一个对象
// output:       配置打包的结果，一个对象
// fileName：    定义输出文件名，一个字符串
// path：        定义输出文件路径，一个字符串
// module:       定义对模块的处理逻辑，一个对象
// loaders：     定义一系列的加载器，一个数组
// 　　　　　　　　[
// 　　　　　　　　　　{
// 　　　　　　　　　　　　test:正则表达式，用于匹配到的文件
// 　　　　　　　　　　　　loader/loaders：字符串或者数组，处理匹配到的文件。如果只需要用到一个模块加载器则使用　　　　　　　　　　　　　　　　　
//                     loader：string，如果要使用多个模块加载器，则使用loaders：array
// 　　　　　　　　　　　　include:字符串或者数组，指包含的文件夹
// 　　　　　　　　　　　　exclude：字符串或者数组，指排除的文件夹
// 　　　　　　　　　　}
// 　　　　　　　　]
// resolve:影响对模块的解析，一个对象
// extensions：自动补全识别后缀，是一个数组
// plugins:定义插件，一个数组

// 例子:
// module.exports = {
//     entry:{
//         one:"./app/one.js",
//         two:"./app/two.js"
//     },
//     output:{
//         path:"./build/",
//         filename:"[name].js"
//     },
//     module:{
//         loaders:[
//             {
//                 test:/.*\.css$/,
//                 loaders:["style","css"],
//                 exclude:'./node_modules/'
//             }
//         ]
//     },
//     resolve:{
//         extensions:['','.css','.js','jsx']
//     }
// };




}
function Vue(){
    function 数据双向绑定(){
        // 数据劫持和发布订阅一起实现的数据双向绑定
        // 把一个普通 Javascript 对象传给 Vue 实例的 data 选项，
        // Vue 将遍历此对象所有的属性，
        // 并使用 Object.defineProperty 把这些属性全部转为 getter/setter。
        // Object.defineProperty 是仅 ES5 支持，且无法 shim 的特性，
        // 这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因。
        Object.defineProperty
        var Book = {}
        var name = '';
        Object.defineProperty(Book, 'name', {
        set: function (value) {
            name = value;
            console.log('你取了一个书名叫做' + value);
        },
        get: function () {
            return '《' + name + '》'
        }
        })
        
        Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
        console.log(Book.name);  // 《vue权威指南》
        // 它是es5一个方法，可以直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 
        // 并返回这个对象，对象里目前存在的属性描述符有两种主要形式：
        // 数据描述符和存取描述符。
        // 数据描述符是一个拥有可写或不可写值的属性。
        // 存取描述符是由一对 getter-setter 函数功能来描述的属性。
        // 描述符必须是两种形式之一；不能同时是两者
    }
    function newVue(){
        // new 关键字在 JavaScript 中代表实例化一个对象，而 Vue 实际上是一个类，就是一个 Function。 源码在 src/core/instance/index.js 中
        function Vue (options) {
            if (process.env.NODE_ENV !== 'production' &&
              !(this instanceof Vue)
            ) {
              warn('Vue is a constructor and should be called with the `new` keyword')
            }
            this._init(options)
          }
        // 可以看到 Vue 通过 new 关键字初始化，然后会调用 this._init 方法， 在 src/core/instance/init.js 中:

        Vue.prototype._init = function (options?: Object) {
            const vm: Component = this
            // a uid
            vm._uid = uid++
        
            let startTag, endTag
            /* istanbul ignore if */
            if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
              startTag = `vue-perf-start:${vm._uid}`
              endTag = `vue-perf-end:${vm._uid}`
              mark(startTag)
            }
        
            // a flag to avoid this being observed
            vm._isVue = true
            // merge options
            if (options && options._isComponent) {
              // optimize internal component instantiation
              // since dynamic options merging is pretty slow, and none of the
              // internal component options needs special treatment.
              initInternalComponent(vm, options)
            } else {
              vm.$options = mergeOptions(
                resolveConstructorOptions(vm.constructor),
                options || {},
                vm
              )
            }
            /* istanbul ignore else */
            if (process.env.NODE_ENV !== 'production') {
              initProxy(vm)
            } else {
              vm._renderProxy = vm
            }
            // expose real self
            vm._self = vm
            initLifecycle(vm)
            initEvents(vm)
            initRender(vm)
            callHook(vm, 'beforeCreate')
            initInjections(vm) // resolve injections before data/props
            initState(vm)
            initProvide(vm) // resolve provide after data/props
            callHook(vm, 'created')
        
            /* istanbul ignore if */
            if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
              vm._name = formatComponentName(vm, false)
              mark(endTag)
              measure(`vue ${vm._name} init`, startTag, endTag)
            }
        
            if (vm.$options.el) {
              vm.$mount(vm.$options.el)
            }
          }
        
        // Vue 初始化只要就是干了这几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等。
        // 初始化的最后，检测到如果有 el 属性，则调用 vm.$mount 方法挂载 vm，挂载的目标就是把模板渲染成最终的 DOM。


    }
    function v-model原理(){
        // 其实在vue中，在使用v-model绑定数据之后，既绑定了数据，又添加了事件监听，这个事件就是input事件
        // <input v-model="something"></input>
        // 这不过是以下示例的语法糖
        // <input
        //     v-bind:value="something"
        //     v-on:input="something = $event.target.value">
         /* 这就解释了为什么在input元素使用v-model绑定数据后，可以实现双向绑定，因为输入的时候会触发元素的input事件      */


    }
    computed(){
        // 计算属性将被混入到vue实例中,
        // 所有的getter和setter的this上下文自动地绑定为vue实例
        // 就算属性的结果会被缓存,除非依赖的响应式属性变化才会重新计算
    }
    watch(){
        // 一个对象,键是需要观察的表达式,值是对应回调函数

    }
    组件通信(){
        1.父子组件通信--->父向子{
            // 父组件通过v-model绑定index到子组件上，而通过v-model绑定的数据在子组件中默认的key是value，
            // 所以在props上用value取值，最后通过点击事件执行$emit,而$emit上触发的事件是input，
            // 前面我们说过v-model绑定的事件是input，从而在子组件上触发了父组件的input事件，而在触发事件的时候可以传值，
            // 所以就实现了父子组件数据双向绑定，如果用的是v-bind，还需要自己去定义事情，所以使用v-model可以减少代码量

            // 父组件:
            // 1.import son from './son.js' 引入子组件 son

            // 2.在components : {"son"} 里注册所有子组件名称
            
            // 3.在父组件的template应用子组件, <son></son>
            
            // 4.如果需要传递数据给子组件,就在template模板里写 <son :num="number"></son>

            // 子组件:
            // 1.用props接受数据,就可以直接使用数据

            // 2.子组件接受到的数据,不能去修改。如果你的确需要修改,可以用计算属性,或者把数据赋值给子组件data里的一个变量
        } 
        2.父子组件通信--->子向父{
            // 父组件:
            // 在template里定义事件

            // 在methods里写函数,监听子组件的事件触发
            // 子组件:
            // 在数据变化后,用$emit触发即可
        }
        3.eventBus:{
            import Vue from 'vue'
            new Vue({
                  el: '#app',
                  components: { App }, 
                  template: '<App/>',
                  data(){    
                    return {
                      Bus : new Vue()
                    }
                  }
                })
            // 通过在根组件,也就是#app组件上定义了一个所有组件都可以访问到的组件
            // 给app组件添加Bus属性 (这样所有组件都可以通过this.$root.Bus访问到它,而且不需要引入任何文件)

            // 2.在组件1里,this.$root.Bus.$emit触发事件
            emitincrement(){
                this.number++
                this.$root.Bus.$emit('eventName', this.number)
            },

            // 3.在组件2里,this.$root.Bus.$on监听事件
            mounted(){    
                this.$root.Bus.$on('eventName', value => {        
                    this.number = value
                        console.log('busEvent');
                   })
            }
        }
        4.利用localStorage或者sessionStorage
        5. 利用Vuex:{
            初始化VueX
            {
                // 新建一个store文件夹（这个不是必须的），并在文件夹下新建store.js文件，文件中引入我们的vue和vuex
                import Vue from 'vue';
                import Vuex from 'vuex';
                Vue.use(Vuex);
                //初始化数据
                const state = {
                count: 0
                };
                var vuexStore = new Vuex.Store({
                state
                });
                // 使用 export default 封装，让外部可以访问
            }
            在需要使用的组件中引入store.js,并使用
            {
                // 这里有3中方法去得到VueX里面的值 
                1.// 使用this获取或通过computed的计算属性直接赋值
                {
                    import store from "../store/store.js";
                    export default {
                    store,//使用
                    data(){
                        return{
                        //取值
                        count:this.$store.state.count
                        }
                    }
                    };
                    //或则
                    computed:{
                        count(){
                            return this.$store.state.count;
                        }
                    }
                }
                2.//通过mapState的对象来赋值
                {
                    import {mapState} from 'vuex';
                    computed:mapState({
                    //理解为传入state对象，修改state.count属性
                    count:state=>state.count  
                    })
                }
                3.//通过mapState的数组来赋值
                {
                    computed:mapState(["count"])
                }
            }           
            创建改变状态的方法-->mutations
            {
                import Vue from 'vue'
                import Vuex from 'vuex'
                Vue.use(Vuex);
                
                const state = {
                  count: 0
                };
                //改变状态的方法
                const mutations = {
                  add(state) {
                    state.count++;
                  },
                  mul(state) {
                    state.count--;
                  }
                };
                var vuexStore = new Vuex.Store({
                  state,
                  mutations //引入
                });
                
                // 使用 export default 封装，让外部可以访问
                
            }
            使用改变状态的方法
            {
                // 在需要使用的组件中
                // <button @click="$store.commit('add')">add</button>

            }
            使用getters的方式更新数据
            {
                const getters = {
                    count:function(state){
                      return state.count +=100;
                    }
                };
                var vuexStore = new Vuex.Store({
                    state,
                    mutations,
                    getters
                });       

                // 组件中导入mapGetters，并使用
                // 1.导入
                // import { mapGetters } from 'vuex';
                // 2.在methods中加入
                // ...mapGetters(["count"])
                // 3.在页面中使用
                // <button @click="count()">mapGetters模式的点击事件</button>

            }
            actions异步修改状态
            {
                1.在store中创建方法 
                - context：上下文对象，这里你可以理解称store本身 
                - {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了
                const actions ={
                    addAction(context){
                      context.commit('add',10)
                    },
                    reduceAction({commit}){
                      commit('reduce')
                    }
                }
                2.组件中import导入mapActions
                    import { mapActions } from 'vuex';
                3.methods中加入mapActions
                    ...mapActions(['addAction','reduceAction'])
                4.页面中使用
                    // <button @click="addAction">mapActions模式点击事件</button>
            }

            State
            // State负责存储整个应用的状态数据，一般需要在使用的时候在跟节点注入store对象，后期就可以使用this.$store.state直接获取状态
            {
                //store为实例化生成的
                import store from './store'

                new Vue({
                el: '#app',
                store,
                render: h => h(App)
                })
                // 这个store可以理解为一个容器，包含着应用中的state等。实例化生成store的过程是：
                const mutations = {...};
                const actions = {...};
                const state = {...};

                Vuex.Store({
                state,
                actions,
                mutation
                });
                // 后续在组件中使用的过程中，如果想要获取对应的状态你就可以直接使用this.$store.state获取，
                // 当然，也可以利用vuex提供的mapState辅助函数将state映射到计算属性中去，如
                {
                    //我是组件
                    import {mapState} from 'vuex'

                    export default {
                    computed: mapState({
                        count: state => state.count
                    })
                    }
                }
            }
            Mutations
            //Mutations的中文意思是“变化”，利用它可以更改状态，本质就是用来处理数据的函数，
            // 其接收唯一参数值state。store.commit(mutationName)是用来触发一个mutation的方法。
            // 需要记住的是，定义的mutation必须是同步函数，否则devtool中的数据将可能出现问题，使状态改变变得难以跟踪。
            {
                const mutations = {
                    mutationName(state) {
                      //在这里改变state中的数据
                    }
                  }
                //   在组件中触发：
                //我是一个组件
                export default {
                    methods: {
                    handleClick() {
                        this.$store.commit('mutationName')
                    }
                    }
                }
                // 或者使用辅助函数mapMutations直接将触发函数映射到methods上，这样就能在元素事件绑定上直接使用了。如：
                import {mapMutations} from 'vuex'
                //我是一个组件
                export default {
                methods: mapMutations([
                    'mutationName'
                ])
                }
            }

            Actions
            //Actions也可以用于改变状态，不过是通过触发mutation实现的，重要的是可以包含异步操作。
            // 其辅助函数是mapActions与mapMutations类似，也是绑定在组件的methods上的。
            // 如果选择直接触发的话，使用this.$store.dispatch(actionName)方法
            {
            //定义Actions
                const actions = {
                    actionName({ commit }) {
                    //dosomething
                    commit('mutationName')
                    }
                }

            //在组件中使用
                import {mapActions} from 'vuex'
                //我是一个组件
                export default {
                methods: mapActions([
                    'actionName',
                ])
                }
            }
//
            Getters
            // 有些状态需要做二次处理，就可以使用getters。
            // 通过this.$store.getters.valueName对派生出来的状态进行访问。
            // 或者直接使用辅助函数mapGetters将其映射到本地计算属性中去。
            {
                const getters = {
                    strLength: state => state.aString.length
                  }
                  //上面的代码根据aString状态派生出了一个strLength状态
                //在组件中使用
                import {mapGetters} from 'vuex'
                //我是一个组件
                export default {
                computed: mapGetters([
                    'strLength'
                ])
                }
            }
        }

    }
    动态组件(){
        // 有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：
        // 上述内容可以通过 Vue 的 <component> 元素加一个特殊的 is 特性来实现：
        // <component v-bind:is="currentTabComponent"></component>
        // 在上述示例中，currentTabComponent 可以包括

        // 已注册组件的名字，或
        // 一个组件的选项对象
    }
    Vue组件注册可分为全局注册和局部注册
    全局注册(){
        需在初始化根实例之前注册组件
        //html
        <div id="example">
        <my-component></my-component>
        </div>
        // 注册
        Vue.component('my-component', {
        template: '<div>A custom component!</div>'
        })
        // 创建根实例
        new Vue({
        el: '#example'
        })
    }
    局部注册(){
        // 通过Vue 实例/组件的实例选项 components 注册仅在其作用域中可用的组件。这种封装也适用于其它可注册的 Vue 功能，比如指令
        var Child = {
            template: '<div>A custom component!</div>'
          }
          
          new Vue({
            // ...
            components: {
              // <my-component> 将只在父组件模板中可用
              'my-component': Child
            }
          })
          
    }
    function 与react对比() {
        // Vue中的props更灵活，对于class和Style特性，采用合并的策略，
        // 并且需要在子组件中显示声明props，相同的地方是都有props验证，单项prop数据流
        // props是可以动态变化的，子组件也实时更新，在react中官方建议props要像纯函数那样，输入输出一致对应，而且不太建议通过props来更改视图
        // 子组件一般要显示地调用props选项来声明它期待获得的数据。而在react中不必需，另两者都有props校验机制
        // 每个Vue实例都实现了事件接口，方便父子组件通信，小型项目中不需要引入状态管理机制，而react必需自己实现
        // 多了指令系统，让模版可以实现更丰富的功能，而React只能使用JSX语法
        // Vue增加的语法糖computed和watch，而在React中需要自己写一套逻辑来实现
    }
    function vue与JQ() {
        // jQuery是使用选择器（$）选取DOM对象，对其进行赋值、取值、事件绑定等操作，
        // 其实和原生的HTML的区别只在于可以更方便的选取和操作DOM对象，而数据和界面是在一起的。
        // 比如需要获取label标签的内容：$("lable").val();,它还是依赖DOM元素的值。 
        // Vue则是通过Vue对象将数据和View完全分离开来了。对数据进行操作不再需要引用相应的DOM对象，
        // 可以说数据和View是分离的，他们通过Vue对象这个vm实现相互的绑定。这就是传说中的MVVM。
    }
    function MVVM() {
        // 1. 低耦合。View可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，
        // 当View变化的时候Model可以不变，当Model变化的时候View也可以不变。  
        // 2. 可重用性。可以把一些视图的逻辑放在ViewModel里面，让很多View重用这段视图逻辑。   
        // 3.独立开发。开发人员可以专注与业务逻辑和数据的开发(ViewModel)。
        //   设计人员可以专注于界面(View)的设计。   
        // 4. 可测试性。可以针对ViewModel来对界面(View)进行测试
    }
    function 生命周期() {
        // beforeCreate
        组件实例刚被创建,组件属性计算之前,如data属性等
        // created
        组件实例创建完成,属性已绑定,但dom还未生成,$el属性还不存在
        // beforeMount
        模板编译/挂载之前
        // mounted
        模板编译/挂载之后
        // beforeUpdate
        组件更新之前
        // updated
        组件更新之后
        // beforeDestroy
        组件销毁前调用
        // destroyed
        组件销毁后调用

        beforecreate : 举个栗子：可以在这加个loading事件 
        created ：在这结束loading，还做一些初始化，实现函数自执行 
        mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
        beforeDestroy： 你确认删除XX吗？ 
        destroyed ：当前组件已被删除，清空相关内容
    }

}
function React(){
    // React组件没有全局注册和局部注册的概念，官方推荐以ES6的class来创建组件，调用通过import导入组件实例
    import React from "react";
    class Demo extends React.Component {
        constructor(props) {
            super(props);
            // 设置 initial state
            this.state = {
                text: props.initialValue || 'placeholder'
            };
            // ES6 类中函数必须手动绑定，也可在调用的时候绑定，或者通过箭头函数
            this.handleChange = this.handleChange.bind(this); 
        }

        handleChange(event) {
            this.setState({
                text: event.target.value
            });
        }
        render() {
            return (
                <div>
                    Type something:
                    <input onChange={this.handleChange}
                value={this.state.text} />
                </div>
            );
        }
    }
    export default Demo;


    // Reac的props更多的相对state而言，只有props无state的组件叫无状态组件，即在组件的定义中可以只有一个render方法，无生命周期概念，组件不用实例化。
    // 父组件更新子组件的props，在子组件接收到新的props时, 通过在componentWillReceiveProps()生命周期中执行this.setState()来更新视图，但不会引起第二次渲染。

    React父子组件通信(){
        // React实例没有事件接口，一般会通过引入一个第三方插件来实现，但是父子组件的通信可以通过props来实现，在父组件中传递callback的prop形式，然后在子组件中触发此回调
        // 子组件
        // class Child  extends Component { 
        //     handle (e) {    
        //     //回调函数传递参数给父组件
        //     this.props.onChange(e.target.value);
        //     }
        //     render(){
        //     return(
        //         <input type="text" onChange={this.handle.bind(this)}>
        //         )
        //     }
        // }
        
        {/* //父组件 */}
        // class Parent extends Component{ 
        //     constructor(props){
        //     super(props);
        //     this.handleChildChange=this.handleChildChange.bind(this);
        //     }
        //     handleChildChange(value){
        //     if(value){
        //             this.setState({value:value});
        //     }
        //     }
        
        //     render() {
        //         return (
        //         < Child onChange={this.handleChildChange} ></Child>
        //             )
        //     }
        // }
    }
    
    function 生命周期() {
        // Mounting：已插入真实 DOM
        // Updating：正在被重新渲染
        // Unmounting：已移出真实 DOM
        // 生命周期的方法有：
        // componentWillMount 在渲染前调用,在客户端也在服务端。
        // componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
        // componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
        // shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
        // 可以在你确认不需要更新组件时使用。
        // componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
        // componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
        // componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
    }
  

}
function nodeJs(){
    // 可以设置中间件来响应 HTTP 请求。
    // 定义了路由表用于执行不同的 HTTP 请求动作

    // express内部维护一个函数数组，
    // 这个函数数组表示在发出响应之前要执行的所有函数，也就是中间件数组，每一次use以后，
    // 传进来的中间件就会推入到数组中，执行完毕后调用next方法执行函数的下一个函数，如果没用调用，调用就会终止。
    function express() {  
        var express = require('express')
        var app = express()
        app.get('/',(req,res)=>{
            res.send('Hello Express!')
        })
        app.listen(3000)
    }
    // Koa会把多个中间件推入栈中，与express不同，koa的中间件是所谓的洋葱型模型
    function koa(){
        const Koa = require('koa');
        const app = new Koa();
        // x-response-time
        app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
        });

        // logger
        app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}`);
        });

        // response
        app.use(ctx => {
        ctx.body = 'Hello World';
        });

        app.listen(3000);
        // 每一个中间件就类似每一层洋葱圈，上面例子中的第一个中间件 "x-response-time" 就好比洋葱的最外层，第二个中间件 "logger" 就好比第二层，
        // 第三个中间件 "response" 就好比最里面那一层，所有的请求经过中间件的时候都会执行两次。
    }
}
function 关于跨域() {
    // 同源策略
    // 是一种约定，
    // 它是浏览器最核心也最基本的安全功能，
    // 如果缺少了同源策略，则浏览器的正常功能可能都会受到影响

    // 一个完整的URL包括模式（或称协议）、服务器名称（或IP地址）、路径和文件名。

    // 有三个标签允许跨域加载，浏览器不会限制
    // <img src=""> 
    // 但是，图片提供方可以通过判断请求url是否属于公司内部域名，来确定是否返回正确图片（比如百度图片设置，仅百度可见），以此来做防盗链处理 
    // <img>可以用来打点统计，统计网站可能是其他域

    // <link href=""> 
    // 链接css

    // <script src=""></script> 
    // 链接js

    // <link>和<script>可以使用cdn，cdn也是其他域

    端口号不同(){
        // 需要通过后台proxy来解决，具体方式如下：
        // a、在发起方的域下创建proxy程序
        // b、发起方的js调用本域下的proxy程序
        // c、proxy将请求发送给接收方并获取相应数据
        // d、proxy将获得的数据返回给发起方的js
    }
    协议不同(){
         // 需要通过后台proxy来解决，具体方式如下：
        // a、在发起方的域下创建proxy程序
        // b、发起方的js调用本域下的proxy程序
        // c、proxy将请求发送给接收方并获取相应数据
        // d、proxy将获得的数据返回给发起方的js
    }
    域名不同(){
        // jsonp的核心则是动态添加<script>标签来调用服务器 提供的js脚本。
        // 使用script标签实现跨域访问，可在url中指定回调函数，获取JSON数据并在指定的回调函数中执行jquery实现jsop。
        // 缺点：只支持GET方式的jsonp实现，是一种脚本注入行为存在一定的安全隐患。如果返回的数据格式有问题或者返回失败了，并不会报错。

        // 2  iframe 是一个标签 后面有src属性
        // src调用其他的域

        // 3 服务器代理方式
        // 后端是不存在跨域的

        // 4 postmessage（对象，哪个域 不用具体写哪个文件）
        // （html5提供的一种新方式）


    }
    主域和子域(){
    //     1、document.domain+iframe（只能解决情况1）：
    //     a、在发起方页面和接收方页面设置document.domain，并将值设为父域的主域名(window.location.hostname)
    //     b、在发起方页面创建一个隐藏的iframe，iframe的源是接收方页面
    //     c、根据浏览器的不同，通过iframe.contentDocument || iframe.contentWindow.document来获得接收方页面的内容
    //     d、通过获得的接收方页面的内容来与接收方进行交互
    //     这种方法有个缺点，就是当一个域被攻击时，另一个域会有安全漏洞出现。
    //     src是不存在跨域的

    }
}
function AJAX() {
    // 1)客户端产生js的事件
    // 2)创建XMLHttpRequest对象
         对XMLHttpRequest进行配置()
    // 4)通过AJAX引擎发送异步请求
    // 5)服务器端接收请求并且处理请求，返回html或者xml内容
    // 6)XML调用一个callback()处理响应回来的内容
    // 7)页面局部刷新
        //readyState
//     0：未初始化状态：此时，已经创建了一个XMLHttpRequest对象
//     1：载入：已经调用send方法,正在发送请求
//     2：载入完成：send方法执行完成,已经接收到全部相应内容
//     3：交互：正在解析响应内容
//     4：完成：
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.onreadtstatechange = function () {
            if (xhr.readystate == 4) {
                //响应内容解析完成，可以在客户端调用了
                if (xhr.status == 200) {
                    //客户端的请求成功了
                    alert(xhr.responseText);
                }
            }
        }
        xhr.send(null);
        //status
        //2xx:表示成功处理请求
        //3xx:需要重定向,浏览器直接跳转
        //4xx:客户端请求错误,如:404
        //5xx:服务器端错误

}

//杂
function 获取dom对象的方法() {
    // 1：docuemt.getElementById();
    // 2: context.getElementsByTagName()
    // 3: conText.getElementsByClassName();
    // 4: context,getElementByName();
    // 5: document,querySelector(Selector); 返回第一个元素  ES5
    // 6：document,querySelectorAll(Selector) 返回一个数组   ES5


}
function BOM对象() {
    window对象。
    弹框类的方法。前面省略window
    alert('提示信息')
    confirm("确认信息")
    prompt("弹出输入框")
    open("url地址"，“_black或_self”，“新窗口的大小”）
    close()  关闭当前的网页
    定时器，清除定时器。
    setTimeout(函数，时间) 只执行一次
    setInterval(函数，时间) 无限执行
    clearTimeout(定时器名称) 清除定时器
    location对象：
    location.herf = 'url地址'
    hash 返回#号后面的字符串，不包含散列，则返回空字符串。
    host 返回服务器名称和端口号
    pathname 返回目录和文件名。 /project/test.html
    search 返回？号后面的所有值。
    port 返回URL中的指定的端口号，如URL中不包含端口号返回空字符串
    portocol 返回页面使用的协议。 http:或https:
    Navigator对象：
    查看浏览器的版本所有信息的对象。
    screen对象：
    height: 获取整个屏幕的高。
    width : 获取整个屏幕的宽。
    availHeight: 整个屏幕的高减去系统部件的高
    availWidth : 整个屏幕的宽减去系统部件的宽
    history对象：
    back() 返回上一页。
    forward() 返回下一页。
    go(“参数”) -1表示上一页，1表示下一页。
}
function 事件模型() {
    // DOM0级事件模型是早期的事件模型，所有的浏览器都是支持的
    // dom0中，一个dom对象只能注册一个同类型的函数，因为注册多个同类型的函数的话，就会发生覆盖，之前注册的函数就会无效。


    // 在DOM2级中使用addEventListener和removeEventListener来注册和解除事件（IE8及之前版本不支持）。
    // 这种函数较之之前的方法好处是一个dom对象可以注册多个相同类型的事件，不会发生事件的覆盖，会依次的执行各个事件函数。
    // 首先我们要知道addEventListenr的第一个参数是事件名称，与DOM0级不同的是没有”on“，另外第三个参数代表捕获还是冒泡，true代表捕获事件，false代表冒泡事件。
    // 正常的情况下，我们在不添加stopPropagation函数时，首先应该执行inner，然后执行outer，但是当我们在inner的事件函数中添加了stopPropagation函数之后，
    // 执行完inner的事件函数之后，就不会在执行outer的事件函数了，也可以理解为事件冒泡到inner之后就消失了，因此也就不会在执行接下来的事件函数了。
    // 由于事件捕获阶段没有可以阻止事件的函数，所以一般都是设置为事件冒泡。
    // 事件流：从页面中接收事件的顺序。也就是说当一个事件产生时，这个事件的传播过程，就是事件流。

    // IE中的事件流叫事件冒泡；事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（文档）。
    // 对于html来说，就是当一个元素产生了一个事件，它会把这个事件传递给它的父元素，父元素接收到了之后，还要继续传递给它的上一级元素，
    // 就这样一直传播到document对象（亲测现在的浏览器到window对象，只有IE8及下不这样

    // 事件捕获是不太具体的元素应该更早接受到事件，而最具体的节点应该最后接收到事件。他们的用意是在事件到达目标之前就捕获它；
    // 也就是跟冒泡的过程正好相反，以html的click事件为例，document对象（DOM级规范要求从document开始传播，
    // 但是现在的浏览器是从window对象开始的）最先接收到click事件的然后事件沿着DOM树依次向下传播，一直传播到事件的实际目标；    



    // 标准浏览器中
    // ele.addEventListener('click',function(){},false// true就是事件捕获)
    // IE中：不支持事件捕获ele.attachEvent ('onclick',function(){});

    // 事件冒泡1，子元素的事件会向上传播，传播到父元素身上。
    // ele.addEventListener('click',function(){},false//false就是事件冒泡)
    // 如何取消事件冒泡：
    // 标准浏览器：e.stopPropagation;
    // IE:window.event.cancelBubble=true;
    // 从里往外来 false，浏览器的默认行为，直到document为止
    // 利用事件冒泡，解决后生成元素的事件绑定问题，叫做事件委托或者事件代理。
    // 不是所有的事件都能冒泡，例如：blur、focus、load、unload

    // 添加事件监听：
    // 标准浏览器：  3个参数
    //   addEventListener(事件类型click，事件处理function(  e  ) {
    // e.stopPropagation(); //阻止事件传播，点击子元素就不会冒泡到父元素上了
    // }, // 事件冒泡false／ 事件捕获true );
    // IE：2个参数，不支持第3个参数，只能是事件冒泡
    //    attachEvent(事件类型onclick ， 事件处理函数function(){
    //   window.event.cancelBubble = true;  //  阻止事件传播，点击子元素就不会冒泡到父元素上了
    // } ) ;
    // 移除事件监听：
    //    标准浏览器：removeEventListener(事件类型 ,  事件处理函数 ,  false );
    //    IE：detachEvent(事件类型，事件处理函数);

}
function 面向对象的一些知识() {
    // 1\封装：  一个类封装了数据以及操作数据的代码逻辑体。定义了数据的可访问属性（私有、公有）
    // 2\继承 ： 可以让一个类型获取另外一个类型的属性的方式。分为实现继承和接口继承
    // 3\多态 ： 类实例的一个方法在不同情形下有不同的表现形式，即不同的外在行为。使具有不同的内部结构的对象可以共享相同的外部接口。

    // 1\单一功能原则 ： 每个类型（包括接口和抽象）功能要求单一，只负责一件事情
    //                开放封闭原则：一个软件实体应该对扩展开发，对修改关闭。可扩展但是不可更改。
    //                核心：用抽象构建框架，用实现类实现扩展。
    // 2\替换原则（里氏代换原则）：子类能够替换父类，出现在父类能够出现的任何地方
    //                 当使用继承时，尽量遵循历史替换原则，尽量不要去重写或者重载父类的方法，以免破坏整个继承体系的 。因为父类在定义或者实现某些方法时，规定了必须遵守的规则和契约。
 
    // 3\依赖原则： 具体依赖抽象，上层依赖下层。核心思想是面向接口编程。
    //            两个模块之间依赖的应该是抽象（接口或抽象类）而不是细节。细节（实现类）依赖于抽象。
    //            依赖原则基于的事实：相对于实现类的多变性，抽象的东西要稳定得多，基于抽象的构架也比基于实现的架构更加稳定，且扩展性更高

    // 4\接口分离原则：模块间要通过具体接口分离开，而不是通过类强耦合。例如A类对B类的依赖，可以抽象接口I，B实现I，A类依赖I来实现。但是抽象接口必须功能最小化（与单一功能原则有点不谋而合）。

    // 5\迪米特原则：最小依赖原则，一个类对其他类尽可能少的了解，只与朋友通信。降低耦合
    //             依赖原则告诉我们要面向接口编程；
    //             接口分离原则告诉我们设计接口的时候功能要单一；
    //             里式替换告诉我们不要破坏继承体系，而是去扩展；
    //             单一功能原则告诉实现类要功能单一。
    //             开放封闭原则则是总纲，对扩展开放，对修改封闭。


    // 重写-----------如果子对象觉得父对象继承来的方法不好用，可在本地定义同名自有方法，覆盖父对象的方法。
    // 重载-----------是类的内部的方法构型上的不同，是发生在同一个类里面的。同一个函数名称，参数不同的多个方法，实现同一类型的功能。

}
function 闭包() {
    // 一个外部函数里面套一个内部函数，内部函数调用外部函数的局部变量，当外部函数执行完之后，变量不会释放；外部函数和内部函数结束的时间不一样，如果外部函数执行完之后，变量不想被释放，
    // 优点，变量不会被释放，
    // 缺点：会占据内存，手动释放变量。
    //    造成内存泄漏：
    // setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
    // 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
    // 防止内存泄露：
    // 1、不要动态绑定事件；
    // 2、不要在动态添加，或者会被动态移除的dom上绑事件，用事件冒泡在父容器监听事件；
    // 3、如果要违反上面的原则，必须提供destroy方法，保证移除dom后事件也被移除，这点可以参考Backbone的源代码，做的比较好；
    // 4、单例化，少创建dom，少绑事件。
    function foo(x) {
        var tmp = 3;
        return function (y) {
            alert(x + y + (++tmp));
        }
    }
    var bar = foo(2); // bar 现在是一个闭包
    bar(10);
//示例
    var btnList = document.getElementsByClassName("btn"),
      len = btnList.length;
        for（var i = 0;i<len;i++）{
            (function(j){
                    btnList[j].onclick = function(){
                    console.log("第"+j+"个按钮被点击到了")
                }   
            })(i)
        } 
    // for循环每一次都执行一个 IIEF （自执行函数），每一次变量 i 被当做参数传到IIEF中去 ， 
    // 那么这个自执行函数中创建了一个变量，参数 j 然后元素节点 btnList 绑定一个onclick事件，
    // 执行函数里面需要用到这个参数 j ，但是你又没点 ，
    // 那么这个遍历 j 就没有被清理 ， 就一直在参数里面被保存着 ， 
    // 每一个IIEF都做一样的事情 ， 所以这个时候就产生了闭包 ， 变量 j 并没有被回收，依然在等待你使用。
1.
function fn(){
    var num = 0;
    return function(){
        num+=1;
        console.log(num);　　　
    };
}
var f = fn();
f(); //1
f(); //2
2.　
function fn(){
    var num = 5;
    num+=1;
    alert(num);
 }　　
fn(); //6
fn(); //6
3.
function fn(){
    var num = 0;
    return function(){
    num+=1;
    alert(num);　　　
    };　　
}
var f = fn();
fn(); //1
fn(); //2
    
}
function 原型链() {
    // 在JavaScript中,一共有两种类型的值,原始值和对象值.
    // 每个对象都有一个内部属性[[prototype]],我们通常称之为原型.
    // 原型的值可以是一个对象,也可以是null.
    // 如果它的值是一个对象,则这个对象也一定有自己的原型.这样就形成了一条线性的链,我们称之为原型链. 

    // 访问一个对象的原型可以使用ES5中的
    Object.getPrototypeOf()
    // 方法,
    // 或者ES6中的__proto__属性. 
    // 原型链的作用是用来实现继承,比如我们新建一个数组,数组的方法就是从数组的原型上继承而来的。

    // 原型链是JavaScript中继承的主要方法。
    // 每个构造函数都拥有一个原型对象，
    // 函数的原型对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针proto，
    // 该指针指向上一层的原型对象，而上一层的原型对象的结构依然类似，
    // 这样利用proto一直指向Object的原型对象上，而Object的原型对象用Object.prototype.proto = null表示原型链的最顶端，
    // 如此变形成了javascript的原型链继承，同时也解释了为什么所有的javascript对象都具有Object的基本方法。

    // 在prototype上定义的属性方法为所有实例共享，所有实例皆引用到同一个对象，单一实例对原型上的属性进行修改，也会影响到所有其他实例。
}
function defer和async() {
    // 没有 defer 或 async，浏览器会立即加载并执行指定的脚本 
    // 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行   script.js 的执行要在网络加载完毕之后
    // 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
}
function 关于this指向() {
    // 一个函数是直接调用的，this指向window。
    //哪个对象调用了函数,函数里面的this就指向谁
    // 实际上this的最终指向的是那个调用它的对象
    //但是在箭头函数里面this指向的是定义时的对象而不是调用时的对象

    // 如果一个函数中有this，
    // 但是它没有被上一级的对象所调用，
    // 那么this指向的就是window，
    // 严格版中的默认的this不再是window，而是undefined

    // this表示当前对象，如果在全局作用范围内使用this，则指代当前页面对象window； 
    // 如果在函数中使用this，则this指代什么是根据运行时此函数在什么对象上被调用。 
    // 我们还可以使用apply和call两个全局方法来改变函数中this的具体指向。
    // prototype本质上还是一个JavaScript对象。 并且每个函数都有一个默认的prototype属性。

    function 模拟实现call() {
        将函数设为对象的属性
        执行该函数
        删除该函数
        var foo = {
            value: 1
        };
        function bar() {
            console.log(this.value);
        }
        // 第一步
        foo.fn = bar
        // 第二步
        foo.fn()
        // 第三步
        delete foo.fn
        // 对于后面的参数:
        // 我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里。
        // 以上个例子为例，此时的arguments为：
        // arguments = {
        //      0: foo,
        //      1: 'kevin',
        //      2: 18,
        //      length: 3
        // }
        // 因为arguments是类数组对象，所以可以用for循环
        var args = [];
        for(var i = 1, len = arguments.length; i < len; i++) {
            args.push('arguments[' + i + ']');
        }
        // 执行后 args为 [foo, 'kevin', 18]

        // 不定长的参数问题解决了，我们接着要把这个参数数组放到要执行的函数的参数里面去。
        // 我们这次用 eval 方法拼成一个函数，类似于这样：
        eval('context.fn(' + args +')')
        // 这里 args 会自动调用 Array.toString() 这个方法。
        Function.prototype.call2 = function(context) {
            context.fn = this;
            var args = [];
            for(var i = 1, len = arguments.length; i < len; i++) {
                args.push('arguments[' + i + ']');
            }
            eval('context.fn(' + args +')');
            delete context.fn;
        }

        // this 参数可以传 null，当为 null 的时候，视为指向 window
        Function.prototype.call2 = function (context) {
            var context = context || window;
            context.fn = this;
            var args = [];
            for(var i = 1, len = arguments.length; i < len; i++) {
                args.push('arguments[' + i + ']');
            }
            var result = eval('context.fn(' + args +')');
            delete context.fn
            return result;
        }      
        



    }
    function 模拟实现apply() {
        Function.prototype.apply = function (context, arr) {
            var context = Object(context) || window;
            context.fn = this;
            var result;
            if (!arr) {
                result = context.fn();
            }
            else {
                var args = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                    args.push('arr[' + i + ']');
                }
                result = eval('context.fn(' + args + ')')
            }
         
            delete context.fn
            return result;
        }         

    }
    function 模拟实现bind() {
        // bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数
        Function.prototype.bind2 = function (context) {
            if (typeof this !== "function") {
            throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var self = this;
            var args = Array.prototype.slice.call(arguments, 1);
            var fNOP = function () {};
            var fBound = function () {
                var bindArgs = Array.prototype.slice.call(arguments);
                self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
            }
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
            return fBound;
        }
        
    }
    ----------------------------------
    1.
    function a(){
        var user = "追梦子";
        console.log(this.user); //undefined
        console.log(this); //Window
    }
    a();
    2.
    var o = {
        user:"追梦子",
        fn:function(){
            console.log(this.user);  //追梦子
        }
    }
    o.fn();
    3.
    var o = {
        user:"追梦子",
        fn:function(){
            console.log(this.user); //追梦子
        }
    }
    window.o.fn();
    // 这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
    4.
    var o = {
        a:10,
        b:{
            a:12,
            fn:function(){
                console.log(this.a); //undefined
                console.log(this); //window
            }
        }
    }
    var j = o.b.fn;
    j();
    // this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的，
    // 例子4中虽然函数fn是被对象b所引用，但是在将fn赋值给变量j的时候并没有执行所以最终指向的是window，
    // 这和例子3是不一样的，例子3是直接执行了fn。

    5.
    function fn(){  
        this.user = '追梦子';  
        return {};  
    }
    var a = new fn;  
    console.log(a.user); //undefined

    function fn(){  
        this.user = '追梦子';  
        return undefined;
    }
    var a = new fn;  
    console.log(a.user); //追梦子
    // 如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。
    // 还有一点就是虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊。
    function fn(){  
        this.user = '追梦子';  
        return null;
    }
    var a = new fn;  
    console.log(a.user); //追梦子   
    ----------------------------------
    function b() {
        return function () {
            return this;
        }
    }
    console.log(b()()); //This:指向windows

    function c() {
        return {
            s: function () {
                return this;
            }
        }
    }
    console.log(c().s()); //This:指向s


}
function get与post() {
    // 1、get用于获取数据，post用于提交数据。
    // 2、Get参数有长度限制（受限于url长度，具体的数值取决于浏览器和服务器的限制），而post无限制
    // GET幂等，POST不幂等
    // 幂等是指同一个请求方法执行多次和仅执行一次的效果完全相同。
    
}
function 关于http和tcpIp() {
    // 说出几个http协议状态码?
    // 200, 201, 302, 304, 400, 404, 500
    // 200：请求成功
    // 201：请求成功并且服务器创建了新的资源
    // 302：服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。
    // 304：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。
    // 客户端是怎么知道这些内容没有更新的呢？其实这并不是客户端的事情，而是你服务器的事情，大家都知道服务器可以设置缓存机制，这个功能是为了提高网站的访问速度，
    // 当你发出一个GET请求的时候服务器会从缓存中调用你要访问的内容，这个时候服务器就可以判断这个页面是不是更新过了，如果未更新过那么他会给你返回一个304状态码。
    // 400：服务器不理解请求的语法。
    // 404：请求的资源（网页等）不存在
    // 500： 内部服务器错误

    // 1xx：指示信息--表示请求已接收，继续处理。
    // 2xx：成功--表示请求已被成功接收、理解、接受。
    // 3xx：重定向--要完成请求必须进行更进一步的操作。
    // 4xx：客户端错误--请求有语法错误或请求无法实现。
    // 5xx：服务器端错误--服务器未能实现合法的请求。

    //     http——超文本传输协议资源
    // 　　https——用安全套接字层传送的超文本传输协议  解决 流量劫持和隐私数据劫持。
    // 　　ftp——文件传输协议
    // 　　mailto——电子邮件地址
    // 　　ldap——轻型目录访问协议搜索
    // 　　file——当地电脑或网上分享的文件
    // 　　news——Usenet新闻组
    // 　　gopher——Gopher协议
    // 　　telnet——Telnet协议

        // http请求中的常用头（请求头）的含义：
        // Accept：告诉服务器，客户端支持的数据类型。
        // Host：客户机通过这个头告诉服务器，想访问的主机名。
        // Referer:客户机通过这个头告诉服务器，它是从哪个资源来访问服务器的。（一般用于防盗链）
        // Cookie：客户机通过这个头告诉服务器，可以向服务器带数据。

    function https() {
        // 二、HTTP和HTTPS协议的区别
        // 1、https协议需要到证书颁发机构（Certificate Authority，简称CA）申请证书，一般免费证书很少，需要交费。  
        // 2、http是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。  
        // 3、http和https使用的是完全不同的连接方式，使用的端口也不一样,前者是80,后者是443。 
        // 4、http的连接很简单,是无状态的 。 
        // 5、HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议， 要比http协议安全。
    
        // 从上面可看出，HTTPS和HTTP协议相比提供了
        // 数据完整性：内容传输经过完整性校验
        // 数据隐私性：内容经过对称加密，每个连接生成一个唯一的加密密钥
        // 身份认证：第三方无法伪造服务端（客户端）身份
        // 其中，数据完整性和隐私性由TLS Record Protocol保证，身份认证由TLS Handshaking Protocols实现。

        // 握手的时候使用的非对称加密算法 ，用来加密握手之后的请求和应答
        // 传输信息的时候使用的对称加密，
        // 保证数据的完整性用的是hash算法(数字签名)

        // HTPS的工作过程
        // 1.客户端发送自己支持的加密规则给服务器，代表告诉服务器要进行连接了
        // 2.服务器从中选出一套加密算法和hash算法以及自己的身份信息(地址等)以证书的形式发送给浏览器，证书中包含服务器信息，加密公钥，证书的办法机构
        // 3.客户端收到网站的证书之后要做下面的事情： 
            // 1.验证证书的合法性
            // 2.如果验证通过证书，浏览器会生成一串随机数，并用证书中的公钥进行加密
            // 3.用约定好的hash算法计算握手消息，然后用生成的密钥进行加密，然后一起发送给服务器
        // 4.服务器接收到客户端传送来的信息，要求下面的事情： 
            // 1.用私钥解析出密码，，用密码解析握手消息，验证hash值是否和浏览器发来的一致
            // 2.使用密钥加密消息，回送
        // 5.如果计算法hash值一致，握手成功
   
    }
       

    function http2与1区别() {
        // 与HTTP 1.1相比，主要区别包括:

        // HTTP/2采用二进制格式而非文本格式
        // HTTP/2是完全多路复用的，而非有序并阻塞的——只需一个连接即可实现并行
        // 使用报头压缩，HTTP/2降低了开销
        // HTTP/2让服务器可以将响应主动“推送”到客户端缓存中
    }

    function 三次握手四次挥手() {
        // 1. TCP建立连接为什么需要三次握手，两次不行吗？
        //     答：在谢希仁著《计算机网络》第四版中讲“三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。
        //     “已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，
        //     而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server，
        //     本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，
        //     就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。


        // 为什么建立连接需要3次，而关闭连接需要4次？
        // 关闭连接时，当Server端收到FIN报文时，
        // 很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，。
        // 只有等到Server端所有的报文都发送完了，才能发送FIN报文，ACK和FIN不能一起发送，所以多一次。

        // 三次握手
        // A对B说：我的序号是x，我要向你请求连接；（第一次握手，发送SYN包，然后进入SYN-SEND状态）
        // B听到之后对A说：我的序号是y，期待你下一句序号是x+1的话（意思就是收到了序号为x的话，即ack=x+1），同意建立连接。（第二次握手，发送ACK-SYN包，然后进入SYN-RCVD状态）
        // A听到B说同意建立连接之后，对A说：与确认你同意与我连接（ack=y+1,ACK=1,seq=x+1）。（第三次握手，A已进入ESTABLISHED状态）
        // B听到A的确认之后，也进入ESTABLISHED状态。

        // 四次挥手
        // 1.A与B交谈结束之后，A要结束此次会话，对B说：我要关闭连接了（seq=u,FIN=1）。（第一次挥手，A进入FIN-WAIT-1）
        // 2.B收到A的消息后说：确认，你要关闭连接了。（seq=v,ack=u+1,ACK=1）（第二次挥手，B进入CLOSE-WAIT）
        // 3.A收到B的确认后,等了一段时间，因为B可能还有话要对他说。（此时A进入FIN-WAIT-2）
        // 4.B说完了他要说的话（只是可能还有话说）之后，对A说，我要关闭连接了。（seq=w, ack=u+1,FIN=1，ACK=1）(第三次挥手)
        // 5.A收到B要结束连接的消息后说：已收到你要关闭连接的消息。（seq=u+1,ack=w+1,ACK=1）(第四次挥手，然后A进入CLOSED)
        // 6.B收到A的确认后，也进入CLOSED。

    }

    function tcpUdp() {
        // TPC／UDP协议是传输层协议，有状态，主要解决数据如何在网络中传输。
        // HTTP是应用层协议，无状态，主要解决如何包装数据。
        // 最显著的特点是客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。
        // Socket是对TCP的封装，它相当于一个调用接口，通过Socket，使用TCP协议。
        // UDP和TCP协议的主要区别:
        // TCP面向连接的，在正式收发数据前，必须和对方建立可靠的连接。
        // UDP面向非连接的，它不与对方建立连接，而是直接就把数据包发送过去。 适用于一次只传送少量数据、对可靠性要求不高的应用环境
        //  
        // TCP                    UDP 
        // 面向连接             	 面向非连接 
        // 可靠                     不可靠 
        // 传输大量数据      		  少量数据 
        // 慢                       快
        //  
    }
    function 为什么tcp就是可靠的() {
        // [1] 确认和重传机制
        // 建立连接时三次握手同步双方的“序列号 + 确认号 + 窗口大小信息”，是确认重传、流控的基础
        // 传输过程中，如果Checksum校验失败、丢包或延时，发送端重传

        // [2] 数据排序
        // TCP有专门的序列号SN字段，可提供数据re-order

        // [3] 流量控制
        // 窗口和计时器的使用。TCP窗口中会指明双方能够发送接收的最大数据量

        // [4] 拥塞控制
        // TCP的拥塞控制由4个核心算法组成。
        // “慢启动”（Slow Start）
        // “拥塞避免”（Congestion avoidance）
        // “快速重传 ”（Fast Retransmit）
        // “快速恢复”（Fast Recovery）
    }


}
function xss与crsf() {
    // Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意html标签或者javascript代码

    // XSS 跨站脚本攻击： 通过插入恶意脚本，实现对用户浏览器的控制。 
    // (1)非持久型(一次性)：用户访问一个被攻击者篡改后的链接，被植入的攻击脚本被用户浏览器执行，达到攻击目的。
    // (2)持久型：将混有恶意代码的数据存在服务器中，用户访问时触发。

    // XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。
    // CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包
    
}
function 禁止浏览器缓存的三种方法(){
    // 对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
    // 对于比较缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。
    强制缓存
    强制缓存，在缓存数据未失效的情况下，可以直接使用缓存数据，那么浏览器是如何判断缓存数据是否失效呢？
    在没有缓存数据的时候，浏览器向服务器请求数据时，服务器会将数据和缓存规则一并返回，缓存规则信息包含在响应header中。
    对于强制缓存来说，响应header中会有两个字段来标明失效规则（Expires/Cache-Control）
    使用chrome的开发者工具，可以很明显的看到对于强制缓存生效时，网络请求的情况
    // Cache-Control/Pragma这个HTTP Head字段
    // 用于指定所有缓存机制在整个请求/响应链中必须服从的指令，如果知道该页面是否为缓存，
    // 不仅可以控制浏览器，还可以控制和HTTP协议相关的缓存或代理服务器。 
    // Cache-Control请求字段被各个浏览器支持得较好，而且它的优先级也比较高，
    // 它和其他一些请求字段（如Expires）同时出现时，
    // Cache-Control会覆盖其他字段。
    // Pragma字段的作用和Cache-Control有点类似，
    // 它也是在HTTP头中包含一个特殊的指令，使相关的服务器来遵守，
    // 最常用的就是Pragma:no-cache，它和Cache-Control:no-cache的作用是一样的。
    Cache-Control
    Cache-Control 是最重要的规则。常见的取值有private、public、no-cache、max-age，no-store，默认为private。
    private:             客户端可以缓存
    public:              客户端和代理服务器都可缓存（前端的同学，可以认为public和private是一样的）
    max-age=xxx:         缓存的内容将在 xxx 秒后失效
    no-cache:            需要使用对比缓存来验证缓存数据（后面介绍）
    no-store:            所有内容都不会缓存，强制缓存，对比缓存都不会触发（对于前端开发来说，缓存越多越好，so...基本上和它说886）
    // Expires 
    // Expires通常的使用格式是Expires:Sat,25Feb201212:22:17GMT，
    // 后面跟着一个日期和时间，超过这个时间值后，缓存的内容将失效，
    // 也就是浏览器在发出请求之前检查这个页面的这个字段，
    // 看该页面是否已经过期了，过期了就重新向服务器发起请求。
    // Expires的值为服务端返回的到期时间，即下一次请求时，请求时间小于服务端返回的到期时间，直接使用缓存数据。
    // 不过Expires 是HTTP 1.0的东西，现在默认浏览器均默认使用HTTP 1.1，所以它的作用基本忽略。
    // 另一个问题是，到期时间是由服务端生成的，但是客户端时间可能跟服务端时间有误差，这就会导致缓存命中的误差。
    // 所以HTTP 1.1 的版本，使用Cache-Control替代。
    对比缓存
    对比缓存，顾名思义，需要进行比较判断是否可以使用缓存。
    浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。
    再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。

    在对比缓存生效时，状态码为304，并且报文大小和请求时间大大减少。
    原因是，服务端在进行标识比较后，只返回header部分，通过状态码通知客户端使用缓存，不再需要将报文主体部分返回给客户端。
    // Last-Modified/EtagLast-Modified字段
    服务器在响应请求时，告诉浏览器资源的最后修改时间。
    // 资源可以是静态（静态内容自动加上Last-Modified字段）或者动态的内容（如Servlet提供了一个getLastModified方法用于检查某个动态内容是否已经更新），
    // 通过这个最后修改时间可以判断当前请求的资源是否是最新的。一般服务端在响应头中返回一个Last-Modified字段，
    // 告诉浏览器这个页面的最后修改时间，如Last-Modified:Sat,25Feb201212:55:04GMT，
    // 浏览器再次请求时在请求头中增加一个If-Modified-Since:Sat,25Feb 201212:55:04GMT字段，
    // 询问当前缓存的页面是否是最新的，如果是最新的就返回304状态码，告诉浏览器是最新的，服务器也不会传输新的数据。
    
    // 与Last-Modified字段有类似功能的还有一个Etag字段，这个字段的作用是让服务端给每个页面分配一个唯一的编号，
    服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。
    // 然后通过这个编号来区分当前这个页面是否是最新的。这种方式比使用Last-Modified更加灵活，
    // 但是在后端的Web服务器有多台时比较难处理，因为每个Web服务器都要记住网站的所有资源，否则浏览器返回这个编号就没有意义了。
    
}
function import和require区别(){
    // 遵循规范
    // require 是 AMD规范引入方式
    // import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法

    // 调用时间
    // require是运行时调用，所以require理论上可以运用在代码的任何地方
    // import是编译时调用，所以必须放在文件开头

    // 本质
    // require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
    // import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require


    // 通过require引入基础数据类型时，属于复制该变量。
    // 通过require引入复杂数据类型时，数据浅拷贝该对象。
    // 出现模块之间的循环引用时，会输出已经执行的模块，而未执行的模块不输出（比较复杂）
    // CommonJS模块默认export的是一个对象，即使导出的是基础数据类型


    // 加载方式	    规范	         命令	     特点
    // 运行时加载	CommonJS/AMD	require	    社区方案，提供了服务器/浏览器的模块加载方案。非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
    // 编译时加载	ESMAScript6+	import	    语言规格层面支持模块功能。支持编译时静态分析，便于JS引入宏和类型检验。动态绑定
}


//数据结构
function 排序() {
    // 不稳定的排序: 选择排序、快速排序、希尔排序、堆排序
    // 稳定排序：冒泡排序、插入排序、归并排序、基数排序
    function 冒泡排序(arr){
        let len = arr.length;
        for (let i = 0; i <len; i++) {
            for (let j = 0; j < len-1-i; j++) {
                if (arr[j]> arr[j+1]) {
                    var temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j]  = temp
                }            
            }  
        }
        return arr
    }//最好情况:O(n)  最坏情况O(n^2)  平均情况O(n^2)
    function 快速排序(arr){
        //如果数组<=1,则直接返回
        if(arr.length<=1){return arr;}
        var pivotIndex=Math.floor(arr.length/2);
        //找基准，并把基准从原数组删除
        var pivot=arr.splice(pivotIndex,1)[0];
        //定义左右数组
        var left=[];
        var right=[];
    
        //比基准小的放在left，比基准大的放在right
        for(var i=0;i<arr.length;i++){
            if(arr[i]<=pivot){
                left.push(arr[i]);
            }
            else{
                right.push(arr[i]);
            }
        }
        //递归
        return 快速排序(left).concat([pivot],快速排序(right));
    }//最好情况:O(nlogn的对数)  最坏情况O(n^2)  平均情况O(nlogn的对数)
    function 插入排序(arr) {
        var len = arr.length;
        var preIndex, current;
        for (var i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while(preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex+1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex+1] = current;
        }
        return arr;
    }//最好情况:O(n)  最坏情况O(n^2)  平均情况O(n^2)
    function 希尔排序(arr) {
        var len = arr.length,
            temp,
            gap = 1;
        while(gap < len/3) {          //动态定义间隔序列
            gap =gap*3+1;
        }
        for (gap; gap> 0; gap = Math.floor(gap/3)) {
            for (var i = gap; i < len; i++) {
                temp = arr[i];
                for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                    arr[j+gap] = arr[j];
                }
                arr[j+gap] = temp;
            }
        }
        return arr;
    }//最好情况:O(n)  最坏情况O(n^2)  平均情况O(n^1.3)
    function 选择排序(arr) {
        var len = arr.length;
        var minIndex, temp;
        for (var i = 0; i < len - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {     //寻找最小的数
                    minIndex = j;                 //将最小数的索引保存
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }//最好情况:O(n^2)  最坏情况O(n^2)  平均情况O(n^2)

    function 归并排序(){
        function mergeSort(arr){
            // 设置终止的条件，
            if (arr.length < 2) {
              return arr;
            }
            //设立中间值
            var middle = parseInt(arr.length / 2);
            //第1个和middle个之间为左子列
            var left = arr.slice(0, middle);
            //第middle+1到最后为右子列
            var right = arr.slice(middle);
            if(left=="undefined"&&right=="undefined"){
               return false;
            }
            return merge(mergeSort(left), mergeSort(right));
          }
          
          function merge(left, right){
            var result = [];
          
            while (left.length && right.length) {
              if(left[0] <= right[0]){
                //把left的左子树推出一个，然后push进result数组里
                 result.push(left.shift());
              }else{
                //把right的右子树推出一个，然后push进result数组里
               result.push(right.shift());
              }
            }
            //经过上面一次循环，只能左子列或右子列一个不为空，或者都为空
            while (left.length){
              result.push(left.shift());
            } 
            while (right.length){
              result.push(right.shift());
            }
            return result;
          }
          // 测试数据
          var nums=[6,10,1,9,4,8,2,7,3,5]；
          mergeSort(nums);
    }//时间复杂度O(nlogn的对数)
}
function 查找() {
    function 二分查找(arr, key) {
        var low = 0,
         high = arr.length - 1;
        while(low <= high){
         var mid = parseInt((high + low) / 2);
         if(key == arr[mid]){
          return mid;
         }else if(key > arr[mid]){
          low = mid + 1;
         }else if(key < arr[mid]){
          high = mid -1;
         }else{
          return -1;
         }
        }
       };
       var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
       var result = 二分查找(arr,10);
       alert(result); // 9 返回目标元素的索引值  
       
      // 递归算法
       function 二分查找(arr,low, high, key) {
        if (low > high){
         return -1;
        }
        var mid = parseInt((high + low) / 2);
        if(arr[mid] == key){
         return mid;
        }else if (arr[mid] > key){
         high = mid - 1;
         return 二分查找(arr, low, high, key);
        }else if (arr[mid] < key){
         low = mid + 1;
         return 二分查找(arr, low, high, key);
        }
       };
       var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
       var result = 二分查找(arr, 0, 13, 10);
       alert(result); // 9 返回目标元素的索引值 


}
function 其他(){
    function 统计出现最多() {  
        var str = "zhaochucichuzuiduodezifu";
        var o = {};
        for (var i = 0, length = str.length; i < length; i++) {
//          var char = str[i];
            var char = str.charAt(i);
            if (o[char]) {  //char就是对象o的一个属性，o[char]是属性值，o[char]控制出现的次数
                o[char]++;  //次数加1
            } else {
                o[char] = 1;    //若第一次出现，次数记为1
            }
        }
        console.log(o);   //输出的是完整的对象，记录着每一个字符及其出现的次数
        //遍历对象，找到出现次数最多的字符和次数
        var max = 0;
        var maxChar = null;
        for (var key in o) {
            if (max < o[key]) {
                max = o[key];   //max始终储存次数最大的那个
                maxChar = key;  //那么对应的字符就是当前的key
            }
        }
        console.log("最多的字符是" + maxChar);
        console.log("出现的次数是" + max);
      
    }
    function 数组去重(arr) {  
        let hashTable = {};
        let data = [];
        for(let i=0,l=arr.length;i<l;i++) {
          if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
          }
        }
        return data
      
    }
    function 斐波那契(n){
        if(n <= 2){
            return 1;    
        }else{
            return 斐波那契(n-1) + 斐波那契(n-2);
        }
    }
    //但是当参数n变大时，出现浏览器假死现象。
    function 斐波那契尾递归优化(n,n1 =1,n2 = 1){
        if(n <= 2){
            return n2;    
        }else{
            return 斐波那契尾递归优化(n-1,n2,n1 + n2);
        }
    }
    function 迭代实现斐波那契(n){
        var res1 = 1;
        var n2 = 1;
        var sum = res2;
        for(var i = 2;i < n;i ++){
            sum = res1 + res2;
            res1 = res2;
            res2 = sum;
        }
        return sum;
    }
    const 闭包实现斐波那契 = function(){
        var mem = [0,1];
        var f = function(n){
            var res = mem[n];
            if(typeof res !== 'number'){
                mem[n] = f(n-1) + f(n-2);
                res = mem[n];
            }
            return res;
        }
        return f;
    }();
    //其中一种解决方案就是每次用户停止输入后，延迟超过500ms时，才去搜索此时的String，这就是防抖
    function 防抖(fn, delay) {
        // 维护一个 timer，用来记录当前执行函数状态
        let timer = null;
        return function() {
          // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
          let context = this;
          let args = arguments;
          // 清理掉正在执行的函数，并重新执行
          clearTimeout(timer);
          timer = setTimeout(function() {
            fn.apply(context, args);
          }, delay);
        }
      }
      let flag = 0; // 记录当前函数调用次数
      // 当用户滚动时被调用的函数
      function foo(){
        flag++;
        console.log('Number of calls: %d', flag);
      }
      // 在 防抖 中包装我们的函数，过 2 秒触发一次
      document.body.addEventListener('scroll', 防抖(foo, 2000));

      //另一种解决方案比 防抖 要宽松些，这时我们不想用户一味的输入，而是给用户一些搜索提示，所以在当中限制每过500ms就查询一次此时的String，这就是节流
      //原理：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。 
      // * 代码实现有两种，一种是时间戳，另一种是定时器
      function 时间戳(func, delay){
        let prev = Date.now();
        return function(){
          const context = this;
          const args    = arguments;
          const now     = Date.now();
          if(now - prev >= delay){
            func.apply(context, args);
            prev = Date.now();
          }
        }
      }
      function 定时器(func, delay){
        let timer = null;
        return function(){
          let context = this;
          let args    = arguments;
          if(!timer){
            timer = setTimeout(function(){
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        }
      }
}
function 二叉树遍历() {
    function Node(data,left,right){
        this.data=data;
        this.left=left;
        this.right=right;
    }
    function Tree(){
        this.root=null;
    }
    Tree.prototype={
        //创建二叉树
        create: function(){
            var b=new Node(2,new Node(4),new Node(5));
            var c=new Node(3,new Node(6),new Node(7));
            this.root=new Node(1,b,c);
        },
        //前序遍历
        preTravel: function(root){
            if(root==null){
                return;
            }
            console.log(root.data);
            this.preTravel(root.left);
            this.preTravel(root.right);
        },
        //中序遍历
        middleTravel: function(root){
            if(root==null){
                return;
            }
            this.middleTravel(root.left);
            console.log(root.data);
            this.middleTravel(root.right);
        },
        //后序遍历
        postTravel: function(root){
            if(root==null){
                return;
            }
            this.middleTravel(root.left);
            this.middleTravel(root.right);
            console.log(root.data);
        }    
    }
    var tree=new Tree();
    tree.create();
    tree.preTravel(tree.root);
    tree.middleTravel(tree.root);
    tree.postTravel(tree.root);

}
function 操作系统(){
    // 一个程序就是一个进程，而一个程序中的多个任务则被称为线程。进程是表示资源分配的基本单位，又是调度运行的基本单位。线程是进程中执行运算的最小单位，
    // 亦即执行处理机调度的基本单位。 进程和线程的关系
    // （1）一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。线程是操作系统可识别的最小执行和调度单位。
    // （2）资源分配给进程，同一进程的所有线程共享该进程的所有资源。同一进程中的多个线程共享代码段(代码和常量)，
    // 数据段(全局变量和静态变量)，扩展段(堆存储)。但是每个线程拥有自己的栈段，栈段又叫运行时段，用来存放所有局部变量和临时变量。
    // （3）处理机分给线程，即真正在处理机上运行的是线程。
    // （4）线程在执行过程中，需要协作同步。不同进程的线程间要利用消息通信的办法实现同步。
    // 如果把上课的过程比作进程，那么每个学生就是一个线程，他们共享教室，即线程共享进程的内存空间。每一个时刻，
    // 只能一个学生问老师问题，老师回答完毕，轮到下一个。即线程在一个时间片内占有cpu。

}
function 柯里化() {
    // 原始的加法函数
    function origPlus(a, b) {
        return a + b;
    }
    
    // 柯里化后的plus函数
    function plus(a) {
        return function(b) {
        return a + b;
        }
    }

    // 就是把接受多个参数的函数变成只接受一个参数

}

function jsonP(){
    //在js预先定义好callback()函数  
    function fun(data){
        //use data to do somethings.
    }
    //动态创建script标签，并在url中说明请求地址
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javasctipt';
    script.src = 'require.php?callback=fun';
    body.appendChild(script);
    //Script插入完成，一旦服务端有响应，传递过来的响应文本会直接被当做js代码执行。
    //假设传回的值是 fun({"name":"xiaoming"})，那么小明这个对象会被当做参数传递给早就定义好的fun()函数。

}
function CORS跨域(){
    对于客户端，我们还是正常使用xhr对象发送ajax请求。 
    唯一需要注意的是，我们需要设置我们的xhr属性withCredentials为true，不然的话，cookie是带不过去的哦，设置： xhr.withCredentials = true; 
    对于服务器端，需要在 response header中设置如下两个字段: 
    Access-Control-Allow-Origin: http://www.yourhost.com 
    Access-Control-Allow-Credentials:true 
    这样，我们就可以跨域请求接口了。
}
function autocomplete效果(){
    <script>
        $(function() {
            var availableTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"
            ];
            $( "#tags" ).autocomplete({
                source: availableTags
            });
        });
    </script>
    <input type="text" id="tags"></input>

}
function 最大公约数(){
    function gcd2(a,b){
        var result = 1;
        for(var i = 1; i <= a && i <= b; i++ ){
            if(a%i == 0 && b%i == 0 ){
                result = i;
            }
        }
        return result;
    }
}
function 正则版本号(){
    /^\d+\.\d+\.\d+$/.test('1.45.3'); // true
    /^\d+\.\d+\.\d+$/.test('1.45.0'); // true
}


// 有什么要问面试官的

function 问题(){
    // 1、问题一：你们为什么要招聘这个职位？
        // 这个问题会使得面试官开始谈论当前的项目，或者谈论前一位离职人员。无论哪种情况，都会让你了解，一些与你最密切相关的公司情况。
    // 2、问题二：你们的新员工多吗？
        // 这个问题起一个过渡作用，使得谈话导向公司内部的情况。但是，它本身也能说明一些问题。如果公司成立已经超过四年，又没有新项目，但是新员工却很多，这往往说明公司文化不是很健康。
    // 3、问题三：你们公司（团队）目前面临的最大挑战是什么？
          // 如果面试官开始谈论一些具体的技术问题，这很好；如果他的回答是项目时间紧迫，或者需要更多的资金，那你就要小心一点了，公司管理上面可能有问题。
    // 4、问题四：什么新技术（编程语言）是你们未来希望采用的？
         // 如果你申请的是技术职位，面试官恰巧又是技术负责人，那么这个问题将会非常合适。你会对公司的技术路线有所了解和准备，一旦入职，就能更好地适应公司的需要。
    // 5、问题五：在业务方面，有没有什么地方是你们不满意的，未来想要改进的？
          // 很少有公司，会百分之百满意自身的现状，即使那些状况很良好的公司也是如此。这个问题可以让你对公司管理层的关注重点和担忧之处，有所了解。
    // 6、问题六：我申请的这个职位，对公司的业务有何影响？ 就是能起到什么作用
         // 这个问题会让你了解自己在公司的角色，以及你的岗位对公司是否重要

}

function 基本功() {

    // HTML / CSS
    // JavaScript基础/进阶
    // 前端性能优化
    // 网络原理
    // 设计模式
    // 数据结构与算法
    // 操作系统
}