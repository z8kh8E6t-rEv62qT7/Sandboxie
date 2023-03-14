<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>CAdvancedPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="413"/>
        <source>Advanced Sandbox options</source>
        <translation>高级沙盒选项</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="414"/>
        <source>On this page advanced sandbox options can be configured.</source>
        <translation>本页面用于配置沙盒的高级选项</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="419"/>
        <source>Network Access</source>
        <translation>网络权限</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="427"/>
        <source>Allow network/internet access</source>
        <translation>允许网络访问</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="428"/>
        <source>Block network/internet by denying access to Network devices</source>
        <translation>通过阻止访问网络设备禁用网络权限</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="430"/>
        <source>Block network/internet using Windows Filtering Platform</source>
        <translation>通过 Windows 筛选平台 (WFP) 禁用网络权限</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="435"/>
        <source>Allow access to network files and folders</source>
        <oldsource>Allow access to network files and fodlers</oldsource>
        <translation>允许访问网络文件与文件夹</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="436"/>
        <location filename="Wizards/NewBoxWizard.cpp" line="452"/>
        <source>This option is not recommended for Hardened boxes</source>
        <oldsource>This option is not recomended for Hardened boxes</oldsource>
        <translation>不推荐加固型沙盒启用该选项</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="442"/>
        <source>Admin Options</source>
        <translation>管理员选项</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="446"/>
        <source>Make applications think they are running elevated</source>
        <translation>让应用认为自身在管理员权限下运行</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="451"/>
        <source>Allow MSIServer to run with a sandboxed system token</source>
        <translation>允许 MSIServer 在沙盒内使用系统令牌运行</translation>
    </message>
</context>
<context>
    <name>CBoxTypePage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="156"/>
        <source>Create new Sandbox</source>
        <translation>创建新沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="163"/>
        <source>A sandbox isolates your host system from processes running within the box, it prevents them from making permanent changes to other programs and data in your computer. The level of isolation impacts your security as well as the compatibility with applications, hence there will be a different level of isolation depending on the selected Box Type. Sandboxie can also protect your personal data from being accessed by processes running under its supervision.</source>
        <translation>沙盒将主机系统与在盒内运行的进程隔离开来，可以防止它们对计算机中的其它程序和数据进行永久性的改变，根据所选的沙盒类型，会有不同的隔离程度，隔离的程度影响到主机的安全性以及盒内应用程序的兼容性，此外沙盒还可以保护你的个人数据不被受监督下运行的进程的访问</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="172"/>
        <source>Enter box name:</source>
        <translation>输入沙盒名称：</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="178"/>
        <source>New Box</source>
        <translation>新建沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="190"/>
        <source>Select box type:</source>
        <oldsource>Sellect box type:</oldsource>
        <translation>选择沙盒类型：</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="193"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>数据保护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="194"/>
        <source>Security Hardened Sandbox</source>
        <translation>安全防护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="195"/>
        <source>Sandbox with Data Protection</source>
        <translation>数据保护型沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="196"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>标准隔离型沙盒(默认)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="198"/>
        <source>Application Compartment with Data Protection</source>
        <translation>数据保护型应用隔间</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="199"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>应用隔间(无隔离防护)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="215"/>
        <source>Remove after use</source>
        <translation>在结束使用后，进行移除</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="216"/>
        <source>After the last process in the box terminates, all data in the box will be deleted and the box itself will be removed.</source>
        <translation>在沙盒中所有进程结束后，沙盒中所有数据及沙盒本身将会销毁</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="221"/>
        <source>Configure advanced options</source>
        <translation>高级选项</translation>
    </message>
</context>
<context>
    <name>CCertificatePage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="193"/>
        <source>Install your &lt;b&gt;Sandboxie-Plus&lt;/b&gt; support certificate</source>
        <translation>安装你的 &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 赞助者凭据</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="194"/>
        <source>If you have a supporter certificate, please fill it into the field below.</source>
        <translation>如果你有赞助者凭据，请填入以下字段</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="216"/>
        <source>Start evaluation without a certificate for a limited period of time.</source>
        <translation>开始在没有赞助者凭据的情况下进行有限时间的试用</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="244"/>
        <source>To use &lt;b&gt;Sandboxie-Plus&lt;/b&gt; in a business setting, an appropriate &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;support certificate&lt;/a&gt; for business use is required. If you do not yet have the required certificate(s), you can get those from the &lt;a href=&quot;https://xanasoft.com/shop/&quot;&gt;xanasoft.com web shop&lt;/a&gt;.</source>
        <translation>要在商业环境中使用  &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 高级设置，需要适用于商业用途的&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;赞助者凭据&lt;/a&gt;。如果你还没有所需的凭据，可以通过&lt;a href=&quot;https://xanasoft.com/shop/&quot;&gt;xanasoft.com 网络商店&lt;/a&gt;获取凭据</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="258"/>
        <source>&lt;b&gt;Sandboxie-Plus&lt;/b&gt; provides additional features and box types exclusively to &lt;u&gt;project supporters&lt;/u&gt;. Boxes like the Privacy Enhanced boxes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;protect user data from illicit access&lt;/font&gt;&lt;/b&gt; by the sandboxed programs. If you are not yet a supporter, then please consider &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt; to ensure further development of Sandboxie and to receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;.</source>
        <translation>&lt;b&gt;Sandboxie-Plus&lt;/b&gt; 为&lt;u&gt;项目赞助者&lt;/u&gt;提供额外的沙盒类型和其它高级功能。例如“隐私增强”类型的沙盒对来自沙盒化程序非法访问用户数据的行为&lt;b&gt;&lt;font color=&apos;red&apos;&gt;提供额外的用户数据保护&lt;/font&gt;&lt;/b&gt;。如果你还不是赞助者，请考虑 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;捐赠支持此项目&lt;/a&gt;来帮助 Sandboxie 的开发工作，并以此获取&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>CCleanUpJob</name>
    <message>
        <location filename="BoxJob.h" line="36"/>
        <source>Deleting Content</source>
        <translation>正在删除内容</translation>
    </message>
</context>
<context>
    <name>CFileBrowserWindow</name>
    <message>
        <location filename="Views/FileView.cpp" line="336"/>
        <source>%1 - Files</source>
        <translation>%1 - 文件</translation>
    </message>
</context>
<context>
    <name>CFileView</name>
    <message>
        <location filename="Views/FileView.cpp" line="159"/>
        <source>Create Shortcut</source>
        <translation>创建快捷方式</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="165"/>
        <source>Recover to Any Folder</source>
        <translation>恢复到任意文件夹</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="167"/>
        <source>Recover to Same Folder</source>
        <translation>恢复到对应的目录</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="171"/>
        <source>Run Recovery Checks</source>
        <translation>运行恢复检查</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="234"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="291"/>
        <source>Create Shortcut to sandbox %1</source>
        <translation>为沙盒 %1 创建快捷方式</translation>
    </message>
</context>
<context>
    <name>CFilesPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="287"/>
        <source>Sandbox location and behavior</source>
        <oldsource>Sandbox location and behavioure</oldsource>
        <translation>沙盒位置与行为</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="288"/>
        <source>On this page the sandbox location and its behavior can be customized.
You can use %USER% to save each users sandbox to an own folder.</source>
        <oldsource>On this page the sandbox location and its behaviorue can be customized.
You can use %USER% to save each users sandbox to an own fodler.</oldsource>
        <translation>本页面用于配置沙盒位置与行为
可以使用 %USER% 来将用户拥有的沙盒存储到自身的用户目录下</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="293"/>
        <source>Sandboxed Files</source>
        <translation>沙盒化文件</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="316"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="324"/>
        <source>Virtualization scheme</source>
        <translation>虚拟化方案</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="328"/>
        <source>Version 1</source>
        <translation>版本 1</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="329"/>
        <source>Version 2</source>
        <translation>版本 2</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="335"/>
        <source>Separate user folders</source>
        <translation>区分用户文件夹</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="340"/>
        <source>Use volume serial numbers for drives</source>
        <translation>使用驱动器的卷序列号</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="345"/>
        <source>Auto delete content when last process terminates</source>
        <translation>当所有进程结束后删除所有内容</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="352"/>
        <source>Enable Immediate Recovery of files from recovery locations</source>
        <translation>启用立即恢复功能</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="387"/>
        <source>The selected box location is not a valid path.</source>
        <oldsource>The sellected box location is not a valid path.</oldsource>
        <translation>所选的沙盒存储路径是无效路径</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="392"/>
        <source>The selected box location exists and is not empty, it is recommended to pick a new or empty folder. Are you sure you want to use an existing folder?</source>
        <oldsource>The sellected box location exists and is not empty, it is recomended to pick a new or empty folder. Are you sure you want to use an existing folder?</oldsource>
        <translation>所选的沙盒存储路径是非空目录，推荐选择空文件夹或新建文件夹。确定要使用当前选择的文件夹吗？</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="397"/>
        <source>The selected box location not placed on a currently available drive.</source>
        <oldsource>The sellected box location not placed on a currently available drive.</oldsource>
        <translation>所选的沙盒存储路径所在的驱动器当前不可用</translation>
    </message>
</context>
<context>
    <name>CFinishPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="487"/>
        <source>Complete your configuration</source>
        <translation>完成你的配置</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="494"/>
        <source>Almost complete, click Finish to apply all selected options and conclude the wizard.</source>
        <translation>所有设置基本完成了，点击 &quot;完成&quot;，应用所有选定的选项，并结束此向导</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="506"/>
        <source>Keep Sandboxie-Plus up to date.</source>
        <translation>保持 Sandboxie-Plus 为最新版本</translation>
    </message>
</context>
<context>
    <name>CIntroPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="115"/>
        <source>Introduction</source>
        <translation>摘要</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="119"/>
        <source>Welcome to the Setup Wizard. This wizard will help you to configure your copy of &lt;b&gt;Sandboxie-Plus&lt;/b&gt;. You can start this wizard at any time from the Sandbox-&gt;Maintenance menu if you do not wish to complete it now.</source>
        <translation>欢迎来到设置指南，本指南将帮助配置你的 &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 副本设置。如果你不希望现在就完成向导设置，你可以从 “沙盒 -&gt; 维护”菜单中随时重新启动此向导</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="128"/>
        <source>Select how you would like to use Sandboxie-Plus</source>
        <translation>选择 Sandboxie-Plus 的用途</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="131"/>
        <source>&amp;Personally, for private non-commercial use</source>
        <translation>个人(&amp;P)，用于私人非商业用途</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="136"/>
        <source>&amp;Commercially, for business or enterprise use</source>
        <translation>商业(&amp;C)，用于企业或商业用途</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="141"/>
        <source>Note: this option is persistent</source>
        <translation>注意：此选项无法在后续的设置中重新修改</translation>
    </message>
</context>
<context>
    <name>CMonitorModel</name>
    <message>
        <location filename="Models/MonitorModel.cpp" line="147"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="148"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="149"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="150"/>
        <source>Count</source>
        <translation>总计</translation>
    </message>
</context>
<context>
    <name>CMultiErrorDialog</name>
    <message>
        <location filename="Dialogs/MultiErrorDialog.cpp" line="10"/>
        <source>Sandboxie-Plus - Error</source>
        <translation>Sandboxie-Plus - 错误</translation>
    </message>
    <message>
        <location filename="Dialogs/MultiErrorDialog.cpp" line="19"/>
        <source>Message</source>
        <translation>消息</translation>
    </message>
</context>
<context>
    <name>CNewBoxWindow</name>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="23"/>
        <source>Sandboxie-Plus - Create New Box</source>
        <translation>Sandboxie-Plus - 新建沙盒</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="31"/>
        <source>New Box</source>
        <translatorcomment>沙盒名称只能包含字母、数字和下划线，不应对此处的文本进行翻译！</translatorcomment>
        <translation>New Box</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="39"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>数据保护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="40"/>
        <source>Security Hardened Sandbox</source>
        <translation>安全防护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="41"/>
        <source>Sandbox with Data Protection</source>
        <translation>数据保护型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="42"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>标准隔离型沙盒(默认)</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="44"/>
        <source>Application Compartment with Data Protection</source>
        <translation>数据保护型应用隔间</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="45"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>应用隔间(无隔离防护)</translation>
    </message>
</context>
<context>
    <name>CNewBoxWizard</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="30"/>
        <source>New Box Wizard</source>
        <translation>新建沙盒向导</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="126"/>
        <source>The new sandbox has been created using the new &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-delete-v2&quot;&gt;Virtualization Scheme Version 2&lt;/a&gt;, if you experience any unexpected issues with this box, please switch to the Virtualization Scheme to Version 1 and report the issue, the option to change this preset can be found in the Box Options in the Box Structure group.</source>
        <oldsource>The new sandbox has been created using the new &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-delete-v2&quot;&gt;Virtualization Scheme Version 2&lt;/a&gt;, if you expirience any unecpected issues with this box, please switch to the Virtualization Scheme to Version 1 and report the issue, the option to change this preset can be found in the Box Options in the Box Structure groupe.</oldsource>
        <translation>新沙盒将按照新的 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-delete-v2&quot;&gt;虚拟化方案 2&lt;/a&gt;创建，如果您在使用该沙盒的时候遇到任何问题，请尝试切换至旧版本的虚拟化方案并反馈相应的问题，该选项可以在沙盒结构菜单中找到。</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="129"/>
        <source>Don&apos;t show this message again.</source>
        <translation>不再显示此消息</translation>
    </message>
</context>
<context>
    <name>COnDeleteJob</name>
    <message>
        <location filename="BoxJob.h" line="58"/>
        <source>OnDelete: %1</source>
        <translation>删除阶段: %1</translation>
    </message>
</context>
<context>
    <name>COnlineUpdater</name>
    <message>
        <location filename="OnlineUpdater.cpp" line="99"/>
        <source>Do you want to check if there is a new version of Sandboxie-Plus?</source>
        <translation>您是否想检查有无 Sandboxie-Plus 新版本发布？</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="100"/>
        <source>Don&apos;t show this message again.</source>
        <translation>不再显示此消息</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="209"/>
        <source>Checking for updates...</source>
        <translation>正在检查更新...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="248"/>
        <source>server not reachable</source>
        <translation>无法连接到服务器</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="249"/>
        <location filename="OnlineUpdater.cpp" line="251"/>
        <source>Failed to check for updates, error: %1</source>
        <translation>检查更新失败，错误：%1</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="404"/>
        <source>&lt;p&gt;Do you want to download the installer?&lt;/p&gt;</source>
        <translation>&lt;p&gt;是否下载此安装程序？&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="406"/>
        <source>&lt;p&gt;Do you want to download the updates?&lt;/p&gt;</source>
        <translation>&lt;p&gt;是否下载此更新包？&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="408"/>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;update page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation>&lt;p&gt;是否转跳到&lt;a href=&quot;%1&quot;&gt;更新页面&lt;/a&gt;？&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="416"/>
        <source>Don&apos;t show this update anymore.</source>
        <translation>不再显示此次更新</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="526"/>
        <source>Downloading updates...</source>
        <translation>正在下载更新...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="552"/>
        <source>invalid parameter</source>
        <translation>无效参数</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="553"/>
        <source>failed to download updated information</source>
        <oldsource>failed to download update informations</oldsource>
        <translation>无法获取更新信息</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="554"/>
        <source>failed to load updated json file</source>
        <oldsource>failed to load update json file</oldsource>
        <translation>加载已更新的 Json 文件失败</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="555"/>
        <source>failed to download a particular file</source>
        <translation>未能下载特定文件</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="556"/>
        <source>failed to scan existing installation</source>
        <translation>未能扫描现有的安装</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="557"/>
        <source>updated signature is invalid !!!</source>
        <oldsource>update signature is invalid !!!</oldsource>
        <translation>无效的更新包签名 !!!</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="558"/>
        <source>downloaded file is corrupted</source>
        <translation>下载的文件已损坏</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="559"/>
        <source>internal error</source>
        <translation>内部错误</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="560"/>
        <source>unknown error</source>
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="584"/>
        <source>Failed to download updates from server, error %1</source>
        <translation>从服务器下载更新失败，错误 %1</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="603"/>
        <source>&lt;p&gt;Updates for Sandboxie-Plus have been downloaded.&lt;/p&gt;&lt;p&gt;Do you want to apply these updates? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Sandboxie-Plus 的更新已下载。&lt;/p&gt;&lt;p&gt;是否要安装更新？本操作需要终止所有沙盒中运行的程序。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="707"/>
        <source>Downloading installer...</source>
        <translation>正在下载安装程序...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="749"/>
        <source>Failed to download installer from: %1</source>
        <translation>从 %1 下载安装程序失败</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="775"/>
        <source>&lt;p&gt;A new Sandboxie-Plus installer has been downloaded to the following location:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Do you want to begin the installation? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation>&lt;p&gt;一个新的 Sandboxie-Plus 安装程序已被下载到以下位置：&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;是否安装？本操作需要终止所有沙盒中运行的程序。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="840"/>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;info page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation>&lt;p&gt;您是否要前往&lt; &quot;%1&quot;&gt;信息页&lt;/a&gt;？&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="848"/>
        <source>Don&apos;t show this announcement in the future.</source>
        <translation>不再显示此公告</translation>
    </message>
    <message>
        <source>&lt;p&gt;There is a new version of Sandboxie-Plus available.&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;New version:&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;有新版 Sandboxie-Plus 可用，&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;新版本：&lt;/font&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="398"/>
        <source>&lt;p&gt;There is a new version of Sandboxie-Plus available.&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;&lt;b&gt;New version:&lt;/b&gt;&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;Sandboxie-Plus 存在可用的新版本，&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;&lt;b&gt;新版本: &lt;/b&gt;&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Do you want to download the latest version?&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;是否下载最新版本？&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;download page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;是否要打开&lt;a href=&quot;%1&quot;&gt;下载页面&lt;/a&gt;？&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Don&apos;t show this message anymore.</source>
        <translation type="vanished">不再显示此消息</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="274"/>
        <source>No new updates found, your Sandboxie-Plus is up-to-date.

Note: The update check is often behind the latest GitHub release to ensure that only tested updates are offered.</source>
        <translation>当前没有可用的更新, Sandboxie Plus 已是最新版本

注意: 更新检查通常落后于 GitHub Release 的版本，以确保只提供经过测试的更新</translation>
    </message>
    <message>
        <source>Downloading new version...</source>
        <translation type="vanished">正在下载新版本...</translation>
    </message>
    <message>
        <source>Failed to download update from: %1</source>
        <translation type="vanished">从 %1 下载更新包失败</translation>
    </message>
    <message>
        <source>&lt;p&gt;A Sandboxie-Plus update has been downloaded to the following location:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Do you want to begin the installation? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;Sandboxie-Plus 更新包已下载到:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;是否立即安装?(任何在沙盒中运行的程序都将被自动终止)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="956"/>
        <source>Checking for certificate...</source>
        <translation>检索凭据...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="996"/>
        <source>No certificate found on server!</source>
        <translation>未在服务器检索到凭据！</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="1001"/>
        <source>There is no updated certificate available.</source>
        <translation>目前没有可用的凭据更新</translation>
    </message>
</context>
<context>
    <name>COptionsWindow</name>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="157"/>
        <source>Sandboxie Plus - &apos;%1&apos; Options</source>
        <translation>Sandboxie Plus - &apos;%1&apos; 选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="40"/>
        <source>Enable the use of win32 hooks for selected processes. Note: You need to enable win32k syscall hook support globally first.</source>
        <translation>对选定的进程启用 Win32 钩子(注意：需要先启用全局范围的 Win32k 系统调用钩子支持)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="41"/>
        <source>Enable crash dump creation in the sandbox folder</source>
        <translation>启用在沙盒目录下创建崩溃转储文件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="42"/>
        <source>Always use ElevateCreateProcess fix, as sometimes applied by the Program Compatibility Assistant.</source>
        <translation>始终应用 ElevateCreateProcess 修复，偶尔会被程序兼容性助手(PCA)调用</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="44"/>
        <source>Enable special inconsistent PreferExternalManifest behaviour, as needed for some Edge fixes</source>
        <oldsource>Enable special inconsistent PreferExternalManifest behavioure, as neede for some edge fixes</oldsource>
        <translation>启用不一致的特殊 PreferExternalManifest 行为支持，修复 Microsoft Edge 存在的某些问题可能需要打开此选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="45"/>
        <source>Set RpcMgmtSetComTimeout usage for specific processes</source>
        <translation>为特定进程设置 RpcMgmtSetComTimeout 选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="46"/>
        <source>Makes a write open call to a file that won&apos;t be copied fail instead of turning it read-only.</source>
        <translation>使得一个禁止被复制文件的写入句柄调用失败，而不是将其变成只读</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="49"/>
        <source>Make specified processes think they have admin permissions.</source>
        <oldsource>Make specified processes think thay have admin permissions.</oldsource>
        <translation>让特定进程认为它们具有管理员权限</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="50"/>
        <source>Force specified processes to wait for a debugger to attach.</source>
        <translation>强制指定的进程等待调试器附加</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="52"/>
        <source>Sandbox file system root</source>
        <translation>沙盒文件系统根目录</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="53"/>
        <source>Sandbox registry root</source>
        <translation>沙盒注册表根目录</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="54"/>
        <source>Sandbox ipc root</source>
        <translation>沙盒 IPC 根目录</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="556"/>
        <source>Add special option:</source>
        <translation>添加特殊选项:</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="707"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="711"/>
        <source>On Start</source>
        <translation>沙盒启动阶段</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="708"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="716"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="720"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="724"/>
        <source>Run Command</source>
        <translation>执行命令</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="712"/>
        <source>Start Service</source>
        <translation>启动服务</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="715"/>
        <source>On Init</source>
        <translation>沙盒初始阶段</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="719"/>
        <source>On File Recovery</source>
        <translation>文件恢复阶段</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="723"/>
        <source>On Delete Content</source>
        <translation>内容删除阶段</translation>
    </message>
    <message>
        <source>On Delete</source>
        <translation type="vanished">删除阶段</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="734"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="756"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="767"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="778"/>
        <source>Please enter the command line to be executed</source>
        <translation>请输入需要执行的命令行</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="898"/>
        <source>Deny</source>
        <translation>拒绝(禁止)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="1003"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="19"/>
        <source>This option requires a valid supporter certificate</source>
        <translation>此选项需要一份有效的赞助者凭据</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="22"/>
        <source>Supporter exclusive option</source>
        <translation>赞助者专属选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="47"/>
        <source>Don&apos;t alter the window title</source>
        <translation>不改变窗口标题</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="48"/>
        <source>Display [#] indicator only</source>
        <translation>只显示 [#] 标记</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="49"/>
        <source>Display box name in title</source>
        <translation>标题内显示沙盒名称</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="51"/>
        <source>Border disabled</source>
        <translation>禁用边框</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="52"/>
        <source>Show only when title is in focus</source>
        <translation>仅在标题栏获取焦点时显示</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="53"/>
        <source>Always show</source>
        <translation>始终显示</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="56"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>数据保护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="57"/>
        <source>Security Hardened Sandbox</source>
        <translation>安全防护加固型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="58"/>
        <source>Sandbox with Data Protection</source>
        <translation>数据保护型沙盒</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="59"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>标准隔离型沙盒(默认)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="61"/>
        <source>Application Compartment with Data Protection</source>
        <translation>数据保护型应用隔间</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="62"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>应用隔间(无隔离防护)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="107"/>
        <source>Custom icon</source>
        <translation>自定义图标</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="159"/>
        <source>Version 1</source>
        <translation>版本 1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="160"/>
        <source>Version 2</source>
        <translation>版本 2</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="196"/>
        <source>Browse for Program</source>
        <translation>浏览程序</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="254"/>
        <source>Open Box Options</source>
        <translation>打开沙盒选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="255"/>
        <source>Browse Content</source>
        <translation>浏览内容</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="256"/>
        <source>Start File Recovery</source>
        <translation>开始恢复文件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="257"/>
        <source>Show Run Dialog</source>
        <translation>显示运行对话框</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="290"/>
        <source>Indeterminate</source>
        <translation>不确定</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="472"/>
        <location filename="Windows/OptionsGeneral.cpp" line="572"/>
        <source>Always copy</source>
        <translation>始终复制</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="473"/>
        <location filename="Windows/OptionsGeneral.cpp" line="573"/>
        <source>Don&apos;t copy</source>
        <translation>不要复制</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="474"/>
        <location filename="Windows/OptionsGeneral.cpp" line="574"/>
        <source>Copy empty</source>
        <translation>复制空的副本</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="420"/>
        <location filename="Windows/OptionsWindow.cpp" line="433"/>
        <location filename="Windows/OptionsAccess.cpp" line="24"/>
        <source>Browse for File</source>
        <translation>浏览文件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="25"/>
        <source>Browse for Folder</source>
        <translation>浏览文件夹</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="262"/>
        <source>File Options</source>
        <translation>文件选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="294"/>
        <source>Grouping</source>
        <translation>分组</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="593"/>
        <source>Search for options</source>
        <translation>搜索选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="723"/>
        <source>Box: %1</source>
        <translation>沙盒: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="724"/>
        <source>Template: %1</source>
        <translation>模板: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="725"/>
        <source>Global: %1</source>
        <translation>全局: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="726"/>
        <source>Default: %1</source>
        <translation>默认: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="903"/>
        <source>This sandbox has been deleted hence configuration can not be saved.</source>
        <translation>该沙盒已被删除，因此配置无法保存</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="950"/>
        <source>Some changes haven&apos;t been saved yet, do you really want to close this options window?</source>
        <translation>部分变更未保存，确定要关闭这个选项窗口吗？</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="700"/>
        <source>kilobytes (%1)</source>
        <translation>KB (%1)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="806"/>
        <source>Select color</source>
        <translation>选择颜色</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="881"/>
        <source>Select Program</source>
        <translation>选择程序</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="745"/>
        <source>Please enter a service identifier</source>
        <translation>请输入一个服务标识符</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="881"/>
        <source>Executables (*.exe *.cmd)</source>
        <translation>可执行文件 (*.exe *.cmd)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="885"/>
        <location filename="Windows/OptionsGeneral.cpp" line="900"/>
        <source>Please enter a menu title</source>
        <translation>请输入一个菜单标题</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="896"/>
        <source>Please enter a command</source>
        <translation>请输入一则命令</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="962"/>
        <location filename="Windows/OptionsWindow.cpp" line="980"/>
        <location filename="Windows/OptionsAccess.cpp" line="404"/>
        <location filename="Windows/OptionsAccess.cpp" line="636"/>
        <location filename="Windows/OptionsGeneral.cpp" line="505"/>
        <location filename="Windows/OptionsGeneral.cpp" line="600"/>
        <location filename="Windows/OptionsNetwork.cpp" line="170"/>
        <location filename="Windows/OptionsNetwork.cpp" line="441"/>
        <location filename="Windows/OptionsNetwork.cpp" line="533"/>
        <source>Group: %1</source>
        <translation>组: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGrouping.cpp" line="141"/>
        <source>Please enter a name for the new group</source>
        <translation>请输入新组的名称</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="973"/>
        <source>Enter program:</source>
        <translation>请输入程序：</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGrouping.cpp" line="229"/>
        <source>Please select group first.</source>
        <translation>请先选择组</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="110"/>
        <location filename="Windows/OptionsForce.cpp" line="121"/>
        <source>Process</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="110"/>
        <location filename="Windows/OptionsForce.cpp" line="121"/>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="220"/>
        <location filename="Windows/OptionsForce.cpp" line="230"/>
        <source>Select Executable File</source>
        <translation>选择可执行文件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="220"/>
        <location filename="Windows/OptionsForce.cpp" line="230"/>
        <source>Executable Files (*.exe)</source>
        <translation>可执行文件 (*.exe)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="365"/>
        <location filename="Windows/OptionsForce.cpp" line="240"/>
        <location filename="Windows/OptionsForce.cpp" line="250"/>
        <location filename="Windows/OptionsRecovery.cpp" line="128"/>
        <location filename="Windows/OptionsRecovery.cpp" line="139"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <source>Lingerer</source>
        <translation type="vanished">驻留</translation>
    </message>
    <message>
        <source>Leader</source>
        <translation type="vanished">引导</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="312"/>
        <source>Closed</source>
        <translation>封禁</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="313"/>
        <source>Closed RT</source>
        <translation>封禁 RT</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="314"/>
        <source>Read Only</source>
        <translation>只读</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="308"/>
        <source>Normal</source>
        <translation>标准</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="309"/>
        <source>Open</source>
        <translation>开放</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="310"/>
        <source>Open for All</source>
        <translation>完全开放</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="311"/>
        <source>No Rename</source>
        <translation>禁止重命名</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="315"/>
        <source>Box Only (Write Only)</source>
        <translation>仅沙盒内 (只写)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="316"/>
        <source>Ignore UIPI</source>
        <translation>忽略 UIPI</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="318"/>
        <location filename="Windows/OptionsAccess.cpp" line="335"/>
        <location filename="Windows/OptionsAccess.cpp" line="348"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="325"/>
        <source>Regular Sandboxie behavior - allow read and also copy on write.</source>
        <translation>常规沙盒行为 - 允许读取及写时复制</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="326"/>
        <source>Allow write-access outside the sandbox.</source>
        <translation>允许透写到沙盒外(仅当执行写操作的程序位于沙盒外时)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="327"/>
        <source>Allow write-access outside the sandbox, also for applications installed inside the sandbox.</source>
        <translation>允许透写到沙盒外(无论执行写操作的程序是否位于沙盒内)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="328"/>
        <source>Don&apos;t rename window classes.</source>
        <translation>禁止重命名 Windows 窗口类</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="329"/>
        <source>Deny access to host location and prevent creation of sandboxed copies.</source>
        <translation>拒绝对主机位置的访问，防止在沙盒内创建相应的副本</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="330"/>
        <source>Block access to WinRT class.</source>
        <translation>阻止对 WinRT 类的访问</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="331"/>
        <source>Allow read-only access only.</source>
        <translation>只允许只读访问</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="332"/>
        <source>Hide host files, folders or registry keys from sandboxed processes.</source>
        <translation>对沙盒内的进程隐藏主机文件、目录或注册表键值</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="333"/>
        <source>Ignore UIPI restrictions for processes.</source>
        <translation>忽略对进程的 UIPI 限制</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="342"/>
        <source>File/Folder</source>
        <translation>文件/文件夹</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="343"/>
        <source>Registry</source>
        <translation>注册表</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="344"/>
        <source>IPC Path</source>
        <translation>IPC 路径</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="345"/>
        <source>Wnd Class</source>
        <translation>窗口类</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="346"/>
        <source>COM Object</source>
        <translation>COM 组件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="353"/>
        <source>Select File</source>
        <translation>选择文件</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="353"/>
        <source>All Files (*.*)</source>
        <translation>所有文件 (*.*)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="964"/>
        <location filename="Windows/OptionsAccess.cpp" line="399"/>
        <location filename="Windows/OptionsAccess.cpp" line="632"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="535"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="610"/>
        <location filename="Windows/OptionsGeneral.cpp" line="500"/>
        <location filename="Windows/OptionsGeneral.cpp" line="596"/>
        <location filename="Windows/OptionsNetwork.cpp" line="436"/>
        <location filename="Windows/OptionsNetwork.cpp" line="529"/>
        <location filename="Windows/OptionsNetwork.cpp" line="642"/>
        <source>All Programs</source>
        <translation>所有程序</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="537"/>
        <source>COM objects must be specified by their GUID, like: {00000000-0000-0000-0000-000000000000}</source>
        <translation>COM 对象必须用其 GUID 来指定，例如：{00000000-0000-0000-0000-000000000000}</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="543"/>
        <source>RT interfaces must be specified by their name.</source>
        <translation>RT 接口必须用其名称来指定</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="557"/>
        <source>Opening all IPC access also opens COM access, do you still want to restrict COM to the sandbox?</source>
        <translation>开放 IPC 访问权限的同时也将开放 COM 的访问权限，你是否想继续在沙盒内限制 COM 接口的访问权限?</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="558"/>
        <source>Don&apos;t ask in future</source>
        <translation>此后不再询问</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="567"/>
        <source>&apos;OpenWinClass=program.exe,#&apos; is not supported, use &apos;NoRenameWinClass=program.exe,*&apos; instead</source>
        <translation>不支持 &apos;OpenWinClass=program.exe,#&apos; 配置格式，请使用 &apos;NoRenameWinClass=program.exe,*&apos; 替换</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="611"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="586"/>
        <location filename="Windows/OptionsGeneral.cpp" line="567"/>
        <location filename="Windows/OptionsGrouping.cpp" line="234"/>
        <location filename="Windows/OptionsGrouping.cpp" line="258"/>
        <location filename="Windows/OptionsNetwork.cpp" line="508"/>
        <source>Template values can not be edited.</source>
        <translation>模板值不能被编辑</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="679"/>
        <source>Template values can not be removed.</source>
        <translation>模板值无法被移除</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="vanished">排除</translation>
    </message>
    <message>
        <location filename="Windows/OptionsRecovery.cpp" line="150"/>
        <source>Please enter a file extension to be excluded</source>
        <translation>请输入一个要排除的文件扩展名</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="816"/>
        <source>Please enter a program file name</source>
        <translation>请输入一个程序文件名称</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="59"/>
        <source>All Categories</source>
        <translation>所有类别</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="98"/>
        <source>Custom Templates</source>
        <translation>自定义模板</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="99"/>
        <source>Email Reader</source>
        <translation>电子邮件客户端</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="100"/>
        <source>PDF/Print</source>
        <translation>PDF/打印</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="101"/>
        <source>Security/Privacy</source>
        <translation>安全和隐私</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="102"/>
        <source>Desktop Utilities</source>
        <translation>桌面工具</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="103"/>
        <source>Download Managers</source>
        <translation>下载程序</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="104"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="105"/>
        <source>Web Browser</source>
        <translation>网页浏览器</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="106"/>
        <source>Media Player</source>
        <translation>多媒体播放器</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="107"/>
        <source>Torrent Client</source>
        <translation>BT 种子(Torrent)客户端</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="154"/>
        <source>This template is enabled globally. To configure it, use the global options.</source>
        <translation>此模板已全局启用，如需配置，请前往全局选项</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="191"/>
        <source>Please enter the template identifier</source>
        <translation>请输入模板标识符</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="199"/>
        <source>Error: %1</source>
        <translation>错误：%1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="219"/>
        <source>Only local templates can be removed!</source>
        <translation>仅可删除本地模板！</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="223"/>
        <source>Do you really want to delete the selected local template?</source>
        <translation>确定要删除所选的本地模板吗？</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="37"/>
        <location filename="Windows/OptionsNetwork.cpp" line="563"/>
        <source>Any</source>
        <translation>任意</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="38"/>
        <location filename="Windows/OptionsNetwork.cpp" line="564"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="39"/>
        <location filename="Windows/OptionsNetwork.cpp" line="565"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="40"/>
        <location filename="Windows/OptionsNetwork.cpp" line="566"/>
        <source>ICMP</source>
        <translation>ICMP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="53"/>
        <source>Allow access</source>
        <translation>允许访问</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="54"/>
        <source>Block using Windows Filtering Platform</source>
        <translation>阻止访问 - 使用 Windows 筛选平台 (WFP)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="55"/>
        <source>Block by denying access to Network devices</source>
        <translation>阻止访问 - 通过禁止访问网络设备</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="898"/>
        <location filename="Windows/OptionsNetwork.cpp" line="148"/>
        <location filename="Windows/OptionsNetwork.cpp" line="549"/>
        <source>Allow</source>
        <translation>允许</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="149"/>
        <source>Block (WFP)</source>
        <translation>阻止 (WFP)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="150"/>
        <source>Block (NDev)</source>
        <translation>阻止 (网络设备)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="550"/>
        <source>Block</source>
        <translation>阻止</translation>
    </message>
</context>
<context>
    <name>CPopUpMessage</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="47"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="48"/>
        <source>Visit %1 for a detailed explanation.</source>
        <translation>访问 %1 以查阅详细说明</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="55"/>
        <source>Dismiss</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="56"/>
        <source>Remove this message from the list</source>
        <translation>在列表中移除此消息</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="59"/>
        <source>Hide all such messages</source>
        <translation>隐藏所有类似的消息</translation>
    </message>
</context>
<context>
    <name>CPopUpProgress</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="358"/>
        <source>Dismiss</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="359"/>
        <source>Remove this progress indicator from the list</source>
        <translation>移除列表中的该进程标识符</translation>
    </message>
</context>
<context>
    <name>CPopUpPrompt</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="100"/>
        <source>Remember for this process</source>
        <translation>记住对此进程的选择</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="110"/>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="115"/>
        <source>No</source>
        <translation>否</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="120"/>
        <source>Terminate</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="141"/>
        <source>Yes and add to allowed programs</source>
        <translation>是且添加到允许的程序</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="176"/>
        <source>Requesting process terminated</source>
        <translation>请求的进程已终止</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="181"/>
        <source>Request will time out in %1 sec</source>
        <translation>请求将在 %1 秒后超时</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="183"/>
        <source>Request timed out</source>
        <translation>请求超时</translation>
    </message>
</context>
<context>
    <name>CPopUpRecovery</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="237"/>
        <source>Recover to:</source>
        <translation>恢复到：</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="242"/>
        <source>Browse</source>
        <translation>浏览</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="243"/>
        <source>Clear folder list</source>
        <translation>清除文件夹列表</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="251"/>
        <source>Recover</source>
        <translation>恢复</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="252"/>
        <source>Recover the file to original location</source>
        <translation>恢复文件到原路径</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="255"/>
        <source>Recover &amp;&amp; Explore</source>
        <translation>恢复并浏览</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="256"/>
        <source>Recover &amp;&amp; Open/Run</source>
        <translation>恢复并打开/运行</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="258"/>
        <source>Open file recovery for this box</source>
        <translation>针对此沙盒打开文件恢复</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="266"/>
        <source>Dismiss</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="267"/>
        <source>Don&apos;t recover this file right now</source>
        <translation>目前暂不恢复此文件</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="270"/>
        <source>Dismiss all from this box</source>
        <translation>对此沙盒忽略全部</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="271"/>
        <source>Disable quick recovery until the box restarts</source>
        <translation>在沙盒重启前禁用快速恢复</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="295"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
</context>
<context>
    <name>CPopUpWindow</name>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="23"/>
        <source>Sandboxie-Plus Notifications</source>
        <translation>Sandboxie-Plus 通知</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="160"/>
        <source>Do you want to allow the print spooler to write outside the sandbox for %1 (%2)?</source>
        <translation>要允许 %1 (%2) 利用打印处理服务在沙盒外写入吗？</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="253"/>
        <source>Do you want to allow %4 (%5) to copy a %1 large file into sandbox: %2?
File name: %3</source>
        <translation>要允许 %4 (%5) 复制大文件 %1 到 %2 沙盒吗？
文件名：%3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="259"/>
        <source>Do you want to allow %1 (%2) access to the internet?
Full path: %3</source>
        <translation>要允许 %1 (%2) 访问网络吗？
完整路径：%3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="318"/>
        <source>%1 is eligible for quick recovery from %2.
The file was written by: %3</source>
        <translation>%1 可以从 %2 快速恢复
文件写入者：%3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="320"/>
        <source>an UNKNOWN process.</source>
        <translation>未知进程</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="320"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="404"/>
        <location filename="Windows/PopUpWindow.cpp" line="405"/>
        <source>UNKNOWN</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="411"/>
        <source>Migrating a large file %1 into the sandbox %2, %3 left.
Full path: %4</source>
        <translation>迁移一个大文件 %1 到沙盒 %2，剩余 %3
完整路径：%4</translation>
    </message>
</context>
<context>
    <name>CRecoveryLogWnd</name>
    <message>
        <location filename="SandManRecovery.cpp" line="301"/>
        <source>Sandboxie-Plus - Recovery Log</source>
        <translation>Sandboxie-Plus - 恢复日志</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="312"/>
        <source>Time|Box Name|File Path</source>
        <translation>时间|沙盒名称|文件路径</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="314"/>
        <source>Cleanup Recovery Log</source>
        <translation>清理恢复日志</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="324"/>
        <source>The following files were recently recovered and moved out of a sandbox.</source>
        <oldsource>the following files were recently recovered and moved out of a sandbox.</oldsource>
        <translation>以下是最近被恢复并移出沙盒的文件</translation>
    </message>
</context>
<context>
    <name>CRecoveryWindow</name>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="46"/>
        <source>%1 - File Recovery</source>
        <translation>%1 - 文件恢复</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="70"/>
        <source>File Name</source>
        <translation>文件名称</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="71"/>
        <source>File Size</source>
        <translation>文件大小</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="72"/>
        <source>Full Path</source>
        <translation>完整路径</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="106"/>
        <source>Remember target selection</source>
        <translation>记住对此目标的选择</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="112"/>
        <source>Delete everything, including all snapshots</source>
        <translation>删除所有内容，包括所有快照</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="138"/>
        <source>Original location</source>
        <translation>原始位置</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="139"/>
        <source>Browse for location</source>
        <translation>浏览位置</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="140"/>
        <source>Clear folder list</source>
        <translation>清除文件夹列表</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="180"/>
        <location filename="Windows/RecoveryWindow.cpp" line="201"/>
        <location filename="Windows/RecoveryWindow.cpp" line="549"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="245"/>
        <source>Do you really want to delete %1 selected files?</source>
        <translation>是否删除 %1 选中的文件？</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="273"/>
        <source>Close until all programs stop in this box</source>
        <translation>关闭，在沙盒内全部程序停止后再显示</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="274"/>
        <source>Close and Disable Immediate Recovery for this box</source>
        <translation>关闭并禁用此沙盒的立即恢复功能</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="294"/>
        <source>There are %1 new files available to recover.</source>
        <translation>有 %1 个新文件可供恢复</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="585"/>
        <source>There are %1 files and %2 folders in the sandbox, occupying %3 of disk space.</source>
        <oldsource>There are %1 files and %2 folders in the sandbox, occupying %3 bytes of disk space.</oldsource>
        <translation>此沙盒中共有 %1 个文件和 %2 个文件夹，占用了 %3 磁盘空间</translation>
    </message>
</context>
<context>
    <name>CSandBox</name>
    <message>
        <location filename="SandMan.cpp" line="3323"/>
        <source>Waiting for folder: %1</source>
        <translation>正在等待文件夹: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3324"/>
        <source>Deleting folder: %1</source>
        <translation>正在删除文件夹: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3325"/>
        <source>Merging folders: %1 &amp;gt;&amp;gt; %2</source>
        <translation>正在合并文件夹: %1 &amp;gt;&amp;gt; %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3326"/>
        <source>Finishing Snapshot Merge...</source>
        <translation>正在完成快照合并...</translation>
    </message>
</context>
<context>
    <name>CSandBoxPlus</name>
    <message>
        <location filename="SbiePlusAPI.cpp" line="636"/>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="647"/>
        <source>OPEN Root Access</source>
        <translation>开放 Root 根权限</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="649"/>
        <source>Application Compartment</source>
        <translation>应用隔间</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="651"/>
        <source>NOT SECURE</source>
        <translation>不安全</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="653"/>
        <source>Reduced Isolation</source>
        <translation>削弱隔离</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="655"/>
        <source>Enhanced Isolation</source>
        <translation>加强隔离</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="658"/>
        <source>Privacy Enhanced</source>
        <translation>隐私增强</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="661"/>
        <source>API Log</source>
        <translation>API 日志</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="663"/>
        <source>No INet</source>
        <translation>无网络</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="665"/>
        <source>Net Share</source>
        <translation>网络共享</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="667"/>
        <source>No Admin</source>
        <translation>无管理员</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="670"/>
        <source>Auto Delete</source>
        <translation>自动删除</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="673"/>
        <source>Normal</source>
        <translation>标准</translation>
    </message>
</context>
<context>
    <name>CSandMan</name>
    <message>
        <location filename="SandMan.cpp" line="176"/>
        <location filename="SandMan.cpp" line="1775"/>
        <source>Sandboxie-Plus v%1</source>
        <translation>Sandboxie-Plus v%1</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus release ready&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;有一个新的 Sandboxie-Plus 版本已准备就绪&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="817"/>
        <source>Click to run installer</source>
        <translation>点击以运行安装程序</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus update ready&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;有一个新的 Sandboxie-Plus 更新已准备就绪&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="821"/>
        <source>Click to apply update</source>
        <translation>点击以应用更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="824"/>
        <source>&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus update v%1 available&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;存在一个新的 Sandboxie-Plus 更新 v%1 可用&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1429"/>
        <source>No Force Process</source>
        <translation>没有必沙程序</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3218"/>
        <source>Reset Columns</source>
        <translation>重置列</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3219"/>
        <source>Copy Cell</source>
        <translation>复制此格</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3220"/>
        <source>Copy Row</source>
        <translation>复制此行</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3221"/>
        <source>Copy Panel</source>
        <translation>复制此表</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="987"/>
        <source>Time|Message</source>
        <translation>时间|消息</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="995"/>
        <source>Sbie Messages</source>
        <translation>沙盒消息</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1002"/>
        <source>Trace Log</source>
        <translation>跟踪日志</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="45"/>
        <source>Show/Hide</source>
        <translation>显示/隐藏</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="462"/>
        <location filename="SandMan.cpp" line="668"/>
        <source>&amp;Sandbox</source>
        <translation>沙盒(&amp;S)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="463"/>
        <source>Create New Box</source>
        <translation>新建沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="464"/>
        <source>Create Box Group</source>
        <translation>新建沙盒组</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="468"/>
        <location filename="SandMan.cpp" line="602"/>
        <source>Terminate All Processes</source>
        <translation>终止所有进程</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="473"/>
        <source>Disable File Recovery</source>
        <translation>禁用文件恢复</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="476"/>
        <source>Disable Message Popup</source>
        <oldsource>Disable Message PopUp</oldsource>
        <translation>禁用消息弹窗</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="404"/>
        <source>&amp;Maintenance</source>
        <translation>维护(&amp;M)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="405"/>
        <source>Connect</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="406"/>
        <source>Disconnect</source>
        <translation>断开</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="408"/>
        <source>Stop All</source>
        <translation>停止所有</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="409"/>
        <source>&amp;Advanced</source>
        <translation>高级(&amp;A)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="410"/>
        <source>Install Driver</source>
        <translation>安装驱动</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="411"/>
        <source>Start Driver</source>
        <translation>启动驱动</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="412"/>
        <source>Stop Driver</source>
        <translation>停止驱动</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="413"/>
        <source>Uninstall Driver</source>
        <translation>卸载驱动</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="415"/>
        <source>Install Service</source>
        <translation>安装服务</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="416"/>
        <source>Start Service</source>
        <translation>启动服务</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="417"/>
        <source>Stop Service</source>
        <translation>停止服务</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="418"/>
        <source>Uninstall Service</source>
        <translation>卸载服务</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="420"/>
        <source>Setup Wizard</source>
        <translation>设置指南</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="423"/>
        <source>Uninstall All</source>
        <translation>全部卸载</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="509"/>
        <location filename="SandMan.cpp" line="638"/>
        <source>Exit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="512"/>
        <location filename="SandMan.cpp" line="640"/>
        <source>&amp;View</source>
        <translation>视图(&amp;V)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="429"/>
        <source>Simple View</source>
        <translation>简易视图</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="430"/>
        <source>Advanced View</source>
        <translation>高级视图</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="435"/>
        <source>Always on Top</source>
        <translation>窗口置顶</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="519"/>
        <source>Show Hidden Boxes</source>
        <translation>显示隐藏沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="521"/>
        <source>Show All Sessions</source>
        <translation>显示所有会话的进程</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="538"/>
        <source>Refresh View</source>
        <translation>刷新视图</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="544"/>
        <source>Clean Up</source>
        <translation>清理</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="545"/>
        <source>Cleanup Processes</source>
        <translation>清理所有记录</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="547"/>
        <source>Cleanup Message Log</source>
        <translation>清理消息日志</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="548"/>
        <source>Cleanup Trace Log</source>
        <translation>清理跟踪日志</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="549"/>
        <source>Cleanup Recovery Log</source>
        <translation>清理恢复日志</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="551"/>
        <source>Keep terminated</source>
        <translation>保留终止的进程</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="571"/>
        <source>&amp;Options</source>
        <translation>选项(&amp;O)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="572"/>
        <location filename="SandMan.cpp" line="690"/>
        <source>Global Settings</source>
        <translation>全局设置</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="573"/>
        <location filename="SandMan.cpp" line="700"/>
        <source>Reset all hidden messages</source>
        <translation>重置所有已隐藏消息</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="574"/>
        <location filename="SandMan.cpp" line="701"/>
        <source>Reset all GUI options</source>
        <translation>重置所有图形界面设置选项</translation>
    </message>
    <message>
        <source>Edit ini file</source>
        <translation type="vanished">编辑配置文件</translation>
    </message>
    <message>
        <source>Reload ini file</source>
        <translation type="vanished">重载配置文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="564"/>
        <source>Trace Logging</source>
        <translation>启用跟踪日志</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="431"/>
        <source>Vintage View (like SbieCtrl)</source>
        <translation>经典视图(类似 SbieCtrl)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="441"/>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <source>Support Sandboxie-Plus with Donations</source>
        <oldsource>Support Sandboxie-Plus with a Donation</oldsource>
        <translation type="vanished">捐赠支持 Sandboxie-Plus</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="450"/>
        <source>Visit Support Forum</source>
        <translation>访问用户支持论坛</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="449"/>
        <source>Online Documentation</source>
        <translation>在线文档</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="448"/>
        <source>Contribute to Sandboxie-Plus</source>
        <translation>为 Sandboxie-Plus 贡献力量</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="452"/>
        <source>Check for Updates</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="454"/>
        <source>About the Qt Framework</source>
        <translation>关于 Qt 框架</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="455"/>
        <location filename="SandMan.cpp" line="3297"/>
        <source>About Sandboxie-Plus</source>
        <translation>关于 Sandboxie-Plus</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="465"/>
        <source>Import Box</source>
        <translation>导入沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="467"/>
        <location filename="SandMan.cpp" line="601"/>
        <source>Run Sandboxed</source>
        <translation>运行沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="485"/>
        <location filename="SandMan.cpp" line="612"/>
        <source>Is Window Sandboxed?</source>
        <oldsource>Is Window Sandboxed</oldsource>
        <translation>检查窗口是否沙盒化</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="530"/>
        <source>Show File Panel</source>
        <translation>显示文件面板</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="579"/>
        <location filename="SandMan.cpp" line="708"/>
        <source>Edit Sandboxie.ini</source>
        <translation>编辑 Sandboxie 配置文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="582"/>
        <source>Edit Templates.ini</source>
        <translation>编辑模板配置文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="584"/>
        <source>Edit Sandboxie-Plus.ini</source>
        <translation>编辑 Sandboxie-Plus 配置文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="588"/>
        <location filename="SandMan.cpp" line="711"/>
        <source>Reload configuration</source>
        <translation>重新加载配置文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="600"/>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="613"/>
        <source>Resource Access Monitor</source>
        <translation>资源访问监控</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="646"/>
        <source>Programs</source>
        <translation>程序</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="647"/>
        <source>Files and Folders</source>
        <translation>文件和目录</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="673"/>
        <source>Create New Sandbox</source>
        <translation>新建沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="674"/>
        <source>Create New Group</source>
        <translation>新建沙盒组</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="675"/>
        <source>Import Sandbox</source>
        <translation>导入沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="677"/>
        <source>Set Container Folder</source>
        <translation>设置沙盒容器目录</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="680"/>
        <source>Set Layout and Groups</source>
        <translation>设置布局和组</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="683"/>
        <source>Reveal Hidden Boxes</source>
        <translation>显示隐藏的沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="689"/>
        <source>&amp;Configure</source>
        <translation>配置(&amp;C)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="693"/>
        <source>Program Alerts</source>
        <translation>程序警报</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="695"/>
        <source>Windows Shell Integration</source>
        <translation>Windows Shell 界面集成</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="697"/>
        <source>Software Compatibility</source>
        <translation>软件兼容</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="706"/>
        <source>Lock Configuration</source>
        <translation>锁定配置</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="725"/>
        <source>Sandbox %1</source>
        <translation>沙盒 %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="747"/>
        <location filename="SandMan.cpp" line="748"/>
        <source>Cleanup</source>
        <translation>清理</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;sbie://update/package&quot; style=&quot;color: red;&quot;&gt;There is a new build of Sandboxie-Plus available&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;sbie://update/package&quot; style=&quot;color: red;&quot;&gt;Sandboxie-Plus 存在可供选择的新构建更新&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Click to install update</source>
        <translation type="vanished">应用更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="833"/>
        <source>&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Support Sandboxie-Plus on Patreon&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;在 Patreon 上捐赠 Sandboxie-Plus&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="834"/>
        <source>Click to open web browser</source>
        <translation>在浏览器打开捐赠页面</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1012"/>
        <source>Time|Box Name|File Path</source>
        <translation>时间|沙盒名称|文件路径</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="568"/>
        <location filename="SandMan.cpp" line="651"/>
        <location filename="SandMan.cpp" line="1020"/>
        <source>Recovery Log</source>
        <translation>恢复日志</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;sbie://update/package&quot; style=&quot;color: red;&quot;&gt;There is a new build of Sandboxie-Plus ready&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;sbie://update/package&quot; style=&quot;color: red;&quot;&gt;新版本的 Sandboxie-Plus 已经准备就绪&lt;/a&gt;</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;There is a new build of Sandboxie-Plus available&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;Sandboxie-Plus 存在可用的新版本&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="825"/>
        <source>Click to download update</source>
        <translation>点击下载更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1064"/>
        <source>Do you want to close Sandboxie Manager?</source>
        <translation>确定要关闭 Sandboxie 管理器？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1084"/>
        <source>Sandboxie-Plus was running in portable mode, now it has to clean up the created services. This will prompt for administrative privileges.

Do you want to do the clean up?</source>
        <translation>Sandboxie-Plus 正运行于便携模式，现在将清理所创建的服务，这将寻求管理员权限

是否确认清理？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1085"/>
        <location filename="SandMan.cpp" line="1474"/>
        <location filename="SandMan.cpp" line="1805"/>
        <location filename="SandMan.cpp" line="2382"/>
        <location filename="SandMan.cpp" line="2810"/>
        <location filename="SandMan.cpp" line="2826"/>
        <source>Don&apos;t show this message again.</source>
        <translation>不再显示此消息</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1254"/>
        <source>This box provides enhanced security isolation, it is suitable to test untrusted software.</source>
        <translation>此类沙盒提供增强的安全隔离，它适用于测试不受信任的软件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1258"/>
        <source>This box provides standard isolation, it is suitable to run your software to enhance security.</source>
        <translation>此类沙盒提供标准的隔离，它适用于以安全的方式来运行你的软件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1262"/>
        <source>This box does not enforce isolation, it is intended to be used as an application compartment for software virtualization only.</source>
        <translation>此类沙盒不执行隔离，它的目的是将一个应用程序虚拟化</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1267"/>
        <source>

This box prevents access to all user data locations, except explicitly granted in the Resource Access options.</source>
        <translation>

此类沙盒将限制沙盒内程序对沙盒外数据的访问，除非在资源访问选项中明确授权</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1343"/>
        <source>Unknown operation &apos;%1&apos; requested via command line</source>
        <translation>来自命令行的未知操作请求 &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="178"/>
        <source> - Driver/Service NOT Running!</source>
        <translation> - 驱动程序/服务未运行!</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="180"/>
        <source> - Deleting Sandbox Content</source>
        <translation> - 正在删除沙盒内容</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1541"/>
        <source>Executing OnBoxDelete: %1</source>
        <translation>在删除沙盒时执行: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1562"/>
        <source>Auto Deleting %1 Content</source>
        <translation>自动删除 %1 的内容</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1634"/>
        <source>Removed Shortcut: %1</source>
        <translation>移除快捷方式: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1713"/>
        <source>Updated Shortcut to: %1</source>
        <translation>更新快捷方式到: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1715"/>
        <source>Added Shortcut to: %1</source>
        <translation>添加快捷方式: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1747"/>
        <source>Auto deleting content of %1</source>
        <translation>自动删除 %1 的内容</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1766"/>
        <source>Auto removing sandbox %1</source>
        <translation>自动删除沙盒 %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1781"/>
        <source>%1 Directory: %2</source>
        <translation>%1 目录: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1781"/>
        <source>Application</source>
        <translation>应用程序</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1781"/>
        <source>Installation</source>
        <translation>安装</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2514"/>
        <location filename="SandMan.cpp" line="2516"/>
        <location filename="SandMan.cpp" line="3042"/>
        <source>Sandboxie-Plus - Error</source>
        <translation>Sandboxie-Plus - 错误</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2514"/>
        <source>Failed to stop all Sandboxie components</source>
        <translation>停止全部的 Sandboxie 组件失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2516"/>
        <source>Failed to start required Sandboxie components</source>
        <translation>启动所需的 Sandboxie 组件失败</translation>
    </message>
    <message>
        <source>Maintenance operation Successful</source>
        <translation type="vanished">维护操作成功</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2870"/>
        <source>Sandboxie config has been reloaded</source>
        <translation>已重载沙盒配置文件</translation>
    </message>
    <message>
        <source>&lt;p&gt;A Sandboxie-Plus update has been downloaded to the following location:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Do you want to begin the installation? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;Sandboxie-Plus 更新包已下载到:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;是否立即安装?(任何在沙盒中运行的程序都将被自动终止)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2188"/>
        <source>The supporter certificate is not valid for this build, please get an updated certificate</source>
        <translation>此赞助者凭据对该版本沙盒无效，请获取可用的新凭据</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2191"/>
        <source>The supporter certificate has expired%1, please get an updated certificate</source>
        <translation>此赞助者凭据已过期%1，请获取可用的新凭据</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2192"/>
        <source>, but it remains valid for the current build</source>
        <translation>，但它对当前构建的沙盒版本仍然有效</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2194"/>
        <source>The supporter certificate will expire in %1 days, please get an updated certificate</source>
        <translation>此赞助者凭据将在 %1 天后过期，请获取可用的新凭据</translation>
    </message>
    <message>
        <source>Checking for certificate...</source>
        <translation type="vanished">检索凭据...</translation>
    </message>
    <message>
        <source>No certificate found on server!</source>
        <translation type="vanished">未在服务器检索到凭据！</translation>
    </message>
    <message>
        <source>There is no updated certificate available.</source>
        <translation type="vanished">目前没有可用的凭据更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2141"/>
        <source>The selected feature set is only available to project supporters. Processes started in a box with this feature set enabled without a supporter certificate will be terminated after 5 minutes.&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Become a project supporter&lt;/a&gt;, and receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;</source>
        <translation>选定的特性只对项目赞助者可用。如果没有赞助者凭据，在启用该特性的沙盒里启动的进程，将在 5 分钟后被终止。&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;成为项目赞助者&lt;/a&gt;，以获得&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2977"/>
        <source>Error Status: 0x%1 (%2)</source>
        <translation>错误状态: 0x%1 (%2)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2978"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3006"/>
        <source>Failed to remove old box data files</source>
        <translation>无法删除旧沙盒中的数据文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3012"/>
        <source>The operation was canceled by the user</source>
        <translation>该操作已被用户取消</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3020"/>
        <source>Unknown Error Status: 0x%1</source>
        <translation>未知错误状态: 0x%1</translation>
    </message>
    <message>
        <source>No new updates found, your Sandboxie-Plus is up-to-date.

Note: The update check is often behind the latest GitHub release to ensure that only tested updates are offered.</source>
        <translation type="vanished">当前没有可用的更新, Sandboxie Plus 已是最新版

注意: 更新检查通常落后于 GitHub Release 的版本，以确保只提供经过测试的更新</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3270"/>
        <source>&lt;h3&gt;About Sandboxie-Plus&lt;/h3&gt;&lt;p&gt;Version %1&lt;/p&gt;&lt;p&gt;Copyright (c) 2020-2023 by DavidXanatos&lt;/p&gt;</source>
        <oldsource>&lt;h3&gt;About Sandboxie-Plus&lt;/h3&gt;&lt;p&gt;Version %1&lt;/p&gt;&lt;p&gt;Copyright (c) 2020-2022 by DavidXanatos&lt;/p&gt;</oldsource>
        <translation>&lt;h3&gt;关于 Sandboxie-Plus&lt;/h3&gt;&lt;p&gt;版本 %1&lt;/p&gt;&lt;p&gt;Copyright (c) 2020-2022 by DavidXanatos&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3278"/>
        <source>This copy of Sandboxie+ is certified for: %1</source>
        <translation>此 Sandboxie+ 副本已授权给: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3280"/>
        <source>Sandboxie+ is free for personal and non-commercial use.</source>
        <translation>Sandboxie+ 可免费用于个人和非商业用途</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3283"/>
        <source>Sandboxie-Plus is an open source continuation of Sandboxie.&lt;br /&gt;Visit &lt;a href=&quot;https://sandboxie-plus.com&quot;&gt;sandboxie-plus.com&lt;/a&gt; for more information.&lt;br /&gt;&lt;br /&gt;%3&lt;br /&gt;&lt;br /&gt;Driver version: %1&lt;br /&gt;Features: %2&lt;br /&gt;&lt;br /&gt;Icons from &lt;a href=&quot;https://icons8.com&quot;&gt;icons8.com&lt;/a&gt;</source>
        <translation>Sandboxie-Plus 是知名程序 Sandboxie 自开源以来的一个延续&lt;br /&gt;访问 &lt;a href=&quot;https://sandboxie-plus.com&quot;&gt;sandboxie-plus.com&lt;/a&gt; 来了解更多信息&lt;br /&gt;&lt;br /&gt;%3&lt;br /&gt;&lt;br /&gt;驱动版本: %1&lt;br /&gt;特性: %2&lt;br /&gt;&lt;br /&gt;图标来源: &lt;a href=&quot;https://icons8.com&quot;&gt;icons8.com&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1878"/>
        <source>Default sandbox not found; creating: %1</source>
        <translation>未找到默认沙盒，正在创建：%1</translation>
    </message>
    <message>
        <source>Do you want to check if there is a new version of Sandboxie-Plus?</source>
        <translation type="vanished">您是否想检查有无 Sandboxie-Plus 新版本发布？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="164"/>
        <source>WARNING: Sandboxie-Plus.ini in %1 cannot be written to, settings will not be saved.</source>
        <translation>警告: %1 中的 Sandboxie-Plus.ini 不能被写入，设置将不会被保存</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="470"/>
        <location filename="SandMan.cpp" line="603"/>
        <location filename="SandManTray.cpp" line="101"/>
        <source>Pause Forcing Programs</source>
        <translation>停用必沙程序规则</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="816"/>
        <source>&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus release %1 ready&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;存在一个新的 Sandboxie-Plus 版本 %1 已准备就绪&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="820"/>
        <source>&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus update %1 ready&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;存在一个新的 Sandboxie-Plus 更新 %1 已准备就绪&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1472"/>
        <source>Some compatibility templates (%1) are missing, probably deleted, do you want to remove them from all boxes?</source>
        <translation>部分兼容性模板(%1)丢失，可能已被删除，是否要在所有沙盒中移除？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1489"/>
        <source>Cleaned up removed templates...</source>
        <translation>已清理缺失的模板...</translation>
    </message>
    <message>
        <source>   -   Portable</source>
        <translation type="vanished">   -   便携版</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1802"/>
        <source>Sandboxie-Plus was started in portable mode, do you want to put the Sandbox folder into its parent directory?
Yes will choose: %1
No will choose: %2</source>
        <translation>Sandboxie-Plus 运行于便携模式，是否要将沙盒目录放到上一层目录中？
“是”将选择目录: %1
“否”将选择目录: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1918"/>
        <source>   -   NOT connected</source>
        <translation>   -   未连接</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2079"/>
        <source>The program %1 started in box %2 will be terminated in 5 minutes because the box was configured to use features exclusively available to project supporters.</source>
        <translation>在沙盒 %2 中启动的程序 %1 将在 5 分钟之后自动终止，因为此沙盒被配置为使用项目赞助者的特供功能</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2081"/>
        <source>The box %1 is configured to use features exclusively available to project supporters, these presets will be ignored.</source>
        <translation>沙盒 %1 被配置为使用项目赞助者专有的沙盒类型，这些预设选项将被忽略</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2082"/>
        <source>&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Become a project supporter&lt;/a&gt;, and receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;</source>
        <translation>&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;成为项目赞助者&lt;/a&gt;，以获得&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2110"/>
        <source>PID %1: </source>
        <translation>进程 PID %1: </translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2112"/>
        <source>%1 (%2): </source>
        <translation>%1 (%2): </translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="198"/>
        <source>Recovering file %1 to %2</source>
        <translation>恢复文件 %1 到 %2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="210"/>
        <source>The file %1 already exists, do you want to overwrite it?</source>
        <translation>文件 %1 已存在，要覆盖它吗？</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="176"/>
        <location filename="SandManRecovery.cpp" line="211"/>
        <source>Do this for all files!</source>
        <translation>对所有文件都执行此操作！</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="99"/>
        <location filename="SandManRecovery.cpp" line="156"/>
        <source>Checking file %1</source>
        <translation>正在检查文件 %1</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="107"/>
        <source>The file %1 failed a security check!<byte value="xd"/>
<byte value="xd"/>
%2</source>
        <oldsource>The file %1 failed a security check!

%2</oldsource>
        <translation type="unfinished">文件 %1 未通过安全检查!

%2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="115"/>
        <source>All files passed the checks</source>
        <translation>所有文件都通过了检查</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="175"/>
        <source>The file %1 failed a security check, do you want to recover it anyway?<byte value="xd"/>
<byte value="xd"/>
%2</source>
        <oldsource>The file %1 failed a security check, do you want to recover it anyway?

%2</oldsource>
        <translation type="unfinished">文件 %1 未通过安全检查，您要忽略警告并恢复吗？

%2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="238"/>
        <source>Failed to recover some files: 
</source>
        <translation>部分文件恢复失败: 
</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2239"/>
        <source>Only Administrators can change the config.</source>
        <translation>仅管理员可更改该配置</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2249"/>
        <source>Please enter the configuration password.</source>
        <translation>请输入配置保护密码</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2257"/>
        <source>Login Failed: %1</source>
        <translation>登录失败：%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2277"/>
        <source>Select file name</source>
        <translation>选择文件名</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2277"/>
        <source>7-zip Archive (*.7z)</source>
        <translation>7-zip 压缩包 (*.7z)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2290"/>
        <source>This name is already in use, please select an alternative box name</source>
        <oldsource>This Name is already in use, please select an alternative box name</oldsource>
        <translation>名称已占用，请选择其他沙盒名</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2304"/>
        <source>Importing: %1</source>
        <translation>正在导入：%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2322"/>
        <source>Do you want to terminate all processes in all sandboxes?</source>
        <translation>确定要终止所有沙盒中的所有进程吗？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2323"/>
        <source>Terminate all without asking</source>
        <translation>终止所有且不再询问</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2357"/>
        <source>No Recovery</source>
        <translation>没有恢复文件</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2363"/>
        <source>No Messages</source>
        <translation>没有消息</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2381"/>
        <source>Sandboxie-Plus was started in portable mode and it needs to create necessary services. This will prompt for administrative privileges.</source>
        <translation>Sandboxie-Plus 正以便携模式启动，需要创建所需的服务，这将会寻求管理员权限</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2410"/>
        <source>CAUTION: Another agent (probably SbieCtrl.exe) is already managing this Sandboxie session, please close it first and reconnect to take over.</source>
        <translation>警告：另一代理程序 (可能是 SbieCtrl.exe) 已接管当前 Sandboxie 会话，请将其关闭，然后尝试重新连接以接管控制</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2523"/>
        <source>Maintenance operation completed</source>
        <translation>维护作业完成</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2543"/>
        <source>Executing maintenance operation, please wait...</source>
        <translation>正在执行操作维护，请稍候...</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2654"/>
        <source>In the Plus UI, this functionality has been integrated into the main sandbox list view.</source>
        <translation>在 Plus 视图，此功能已被整合到主沙盒列表中</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2655"/>
        <source>Using the box/group context menu, you can move boxes and groups to other groups. You can also use drag and drop to move the items around. Alternatively, you can also use the arrow keys while holding ALT down to move items up and down within their group.&lt;br /&gt;You can create new boxes and groups from the Sandbox menu.</source>
        <translation>使用“沙盒/组”右键菜单，你可以将沙盒在沙盒组之间移动
同时，你也可以通过 Alt + 方向键或鼠标拖动来整理列表
另外，你可以通过右键菜单来新建“沙盒/组”</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2723"/>
        <source>Do you also want to reset hidden message boxes (yes), or only all log messages (no)?</source>
        <translation>请确认是否要重置已隐藏的消息框(选“是”)，或者仅重置所有日志消息(选“否”)？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2808"/>
        <source>You are about to edit the Templates.ini, this is generally not recommended.
This file is part of Sandboxie and all change done to it will be reverted next time Sandboxie is updated.</source>
        <oldsource>You are about to edit the Templates.ini, thsi is generally not recommeded.
This file is part of Sandboxie and all changed done to it will be reverted next time Sandboxie is updated.</oldsource>
        <translation>您正准备编辑模板配置文件, 但通常不推荐这么做
因为该文件是 Sandboxie 的一部分并且所有的更改会在下次更新时被重置</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2824"/>
        <source>The changes will be applied automatically whenever the file gets saved.</source>
        <translation>每次该文件被保存时，更改将自动应用</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2825"/>
        <source>The changes will be applied automatically as soon as the editor is closed.</source>
        <translation>编辑器被关闭后，更改将很快自动应用</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2980"/>
        <source>Administrator rights are required for this operation.</source>
        <translation>此操作需要管理员权限</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2981"/>
        <source>Failed to execute: %1</source>
        <translation>执行失败：%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2982"/>
        <source>Failed to connect to the driver</source>
        <translation>连接驱动程序失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2983"/>
        <source>Failed to communicate with Sandboxie Service: %1</source>
        <translation>无法与 Sandboxie 服务通信：%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2984"/>
        <source>An incompatible Sandboxie %1 was found. Compatible versions: %2</source>
        <translation>发现不兼容的 Sandboxie %1，其它兼容的版本：%2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2985"/>
        <source>Can&apos;t find Sandboxie installation path.</source>
        <translation>无法找到 Sandboxie 的安装路径</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2986"/>
        <source>Failed to copy configuration from sandbox %1: %2</source>
        <translation>复制沙盒配置 %1: %2 失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2987"/>
        <source>A sandbox of the name %1 already exists</source>
        <translation>名为 %1 的沙盒已存在</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2988"/>
        <source>Failed to delete sandbox %1: %2</source>
        <translation>删除沙盒 %1: %2 失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2989"/>
        <source>The sandbox name can not be longer than 32 characters.</source>
        <translation>沙盒名称不能超过 32 个字符</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2990"/>
        <source>The sandbox name can not be a device name.</source>
        <translation>沙盒名称不能为设备名称</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2991"/>
        <source>The sandbox name can contain only letters, digits and underscores which are displayed as spaces.</source>
        <translation>沙盒名称只能包含字母、数字和下划线(显示为空格)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2992"/>
        <source>Failed to terminate all processes</source>
        <translation>终止所有进程失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2993"/>
        <source>Delete protection is enabled for the sandbox</source>
        <translation>该沙盒已启用删除保护</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2994"/>
        <source>All sandbox processes must be stopped before the box content can be deleted</source>
        <translation>在删除沙盒内容之前，必须先停止沙盒内的所有进程</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2995"/>
        <source>Error deleting sandbox folder: %1</source>
        <translation>删除沙盒文件夹出错：%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2997"/>
        <source>A sandbox must be emptied before it can be deleted.</source>
        <translation>沙盒被删除前必须清空</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2998"/>
        <source>Failed to move directory &apos;%1&apos; to &apos;%2&apos;</source>
        <translation>移动目录 &apos;%1&apos; 到 &apos;%2&apos; 失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2999"/>
        <source>This Snapshot operation can not be performed while processes are still running in the box.</source>
        <translation>因有进程正在沙盒中运行，此快照操作无法完成</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3000"/>
        <source>Failed to create directory for new snapshot</source>
        <translation>创建新快照的目录失败</translation>
    </message>
    <message>
        <source>Installation Directory: %1</source>
        <translation type="vanished">安装目录: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1782"/>
        <source>Sandboxie-Plus Version: %1 (%2)</source>
        <translation>Sandboxie-Plus 版本: %1 (%2)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1783"/>
        <source>Current Config: %1</source>
        <translation>当前配置: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1784"/>
        <source>Data Directory: %1</source>
        <translation>数据存放目录: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1847"/>
        <source> for Personal use</source>
        <translation>个人用户</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1849"/>
        <source>   -   for Non-Commercial use ONLY</source>
        <translation>   -   仅用于非商业用途</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2182"/>
        <source>The evaluation period has expired!!!</source>
        <oldsource>The evaluation periode has expired!!!</oldsource>
        <translation>已超过评估期限！！！</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2342"/>
        <source>Please enter the duration, in seconds, for disabling Forced Programs rules.</source>
        <translation>请输入「停用必沙程序规则」的持续时间 (单位: 秒)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2518"/>
        <source>Maintenance operation failed (%1)</source>
        <translation>维护作业执行失败 (%1)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3001"/>
        <source>Failed to copy box data files</source>
        <translation>复制沙盒数据文件失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3002"/>
        <source>Snapshot not found</source>
        <translation>没有找到快照</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3003"/>
        <source>Error merging snapshot directories &apos;%1&apos; with &apos;%2&apos;, the snapshot has not been fully merged.</source>
        <translation>合并快照目录 &apos;%1&apos; 和 &apos;%2&apos; 出错，快照没有被完全合并</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3004"/>
        <source>Failed to remove old snapshot directory &apos;%1&apos;</source>
        <translation>移除旧快照的目录 &apos;%1&apos; 失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3005"/>
        <source>Can&apos;t remove a snapshot that is shared by multiple later snapshots</source>
        <translation>无法移除被多个后续快照所共享的快照</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3007"/>
        <source>You are not authorized to update configuration in section &apos;%1&apos;</source>
        <translation>您未被授权在 &apos;%1&apos; 更新配置</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3008"/>
        <source>Failed to set configuration setting %1 in section %2: %3</source>
        <translation>在 %2: %3 中设定配置设置 %1 失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3009"/>
        <source>Can not create snapshot of an empty sandbox</source>
        <translation>无法为空的沙盒创建快照</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3010"/>
        <source>A sandbox with that name already exists</source>
        <translation>已存在同名沙盒</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3011"/>
        <source>The config password must not be longer than 64 characters</source>
        <translation>配置保护密码长度不能超过 64 个字符</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3014"/>
        <source>Import/Export not available, 7z.dll could not be loaded</source>
        <translation>导入/导出不可用，无法加载 7z.dll</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3015"/>
        <source>Failed to create the box archive</source>
        <translation>无法创建沙盒存档</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3016"/>
        <source>Failed to open the 7z archive</source>
        <translation>无法打开7z存档</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3017"/>
        <source>Failed to unpack the box archive</source>
        <translation>无法解压沙盒存档</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3018"/>
        <source>The selected 7z file is NOT a box archive</source>
        <translation>所选的 7z 文件不是沙盒存档</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3044"/>
        <source>Operation failed for %1 item(s).</source>
        <translation>%1 项操作失败</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3075"/>
        <source>Do you want to open %1 in a sandboxed (yes) or unsandboxed (no) Web browser?</source>
        <translation>是否在沙盒中的浏览器打开链接 %1 ？</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3076"/>
        <source>Remember choice for later.</source>
        <translation>记住选择供之后使用</translation>
    </message>
    <message>
        <source>Checking for updates...</source>
        <translation type="vanished">正在检查更新...</translation>
    </message>
    <message>
        <source>server not reachable</source>
        <translation type="vanished">无法连接到服务器</translation>
    </message>
    <message>
        <source>Failed to check for updates, error: %1</source>
        <translation type="vanished">检查更新失败，错误：%1</translation>
    </message>
    <message>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;info page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;您是否要前往&lt; &quot;%1&quot;&gt;信息页&lt;/a&gt;？&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Don&apos;t show this announcement in the future.</source>
        <translation type="vanished">今后不再显示此公告</translation>
    </message>
    <message>
        <source>&lt;p&gt;There is a new version of Sandboxie-Plus available.&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;New version:&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;有新版 Sandboxie-Plus 可用，&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;新版本：&lt;/font&gt;&lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Do you want to download the latest version?&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;是否下载最新版本？&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;download page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation type="vanished">&lt;p&gt;是否要打开&lt;a href=&quot;%1&quot;&gt;下载页面&lt;/a&gt;？&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Don&apos;t show this message anymore.</source>
        <translation type="vanished">不再显示此消息</translation>
    </message>
    <message>
        <source>Downloading new version...</source>
        <translation type="vanished">正在下载新版本...</translation>
    </message>
    <message>
        <source>Failed to download update from: %1</source>
        <translation type="vanished">从 %1 下载更新文件时失败了</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="88"/>
        <source>The selected window is running as part of program %1 in sandbox %2</source>
        <translation>选择的窗口正作为程序 %1 的一部分，并运行在沙盒 %2 中</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="95"/>
        <source>The selected window is not running as part of any sandboxed program.</source>
        <translation>选择的窗口并未作为任何沙盒化程序的一部分而运行</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="134"/>
        <source>Drag the Finder Tool over a window to select it, then release the mouse to check if the window is sandboxed.</source>
        <translation>拖拽准星到被选窗口上，松开鼠标检查窗口是否来自沙盒化的程序</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="204"/>
        <source>Sandboxie-Plus - Window Finder</source>
        <translation>Sandboxie-Plus - 窗口探查器</translation>
    </message>
    <message>
        <location filename="main.cpp" line="120"/>
        <source>Sandboxie Manager can not be run sandboxed!</source>
        <translation>Sandboxie 管理器不能在沙盒中运行！</translation>
    </message>
</context>
<context>
    <name>CSbieModel</name>
    <message>
        <location filename="Models/SbieModel.cpp" line="158"/>
        <source>Box Group</source>
        <translation>沙盒组</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="307"/>
        <source>Empty</source>
        <translation>空</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="544"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="545"/>
        <source>Process ID</source>
        <translation>进程 ID</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="546"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="547"/>
        <source>Title</source>
        <translation>标题</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="548"/>
        <source>Info</source>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="552"/>
        <source>Path / Command Line</source>
        <translation>路径 / 命令行</translation>
    </message>
</context>
<context>
    <name>CSbieProcess</name>
    <message>
        <location filename="SbieProcess.cpp" line="59"/>
        <source>Sbie RpcSs</source>
        <translation>Sbie RPC 子系统</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="60"/>
        <source>Sbie DcomLaunch</source>
        <translation>Sbie DCOM 服务启动器</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="61"/>
        <source>Sbie Crypto</source>
        <translation>Sbie 密码学服务</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="62"/>
        <source>Sbie WuauServ</source>
        <translation>Sbie 微软自动更新服务</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="63"/>
        <source>Sbie BITS</source>
        <translation>Sbie 后台智能传输服务</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="64"/>
        <source>Sbie Svc</source>
        <translation>沙盒软件服务</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="65"/>
        <source>MSI Installer</source>
        <oldsource>Msi Installer</oldsource>
        <translation>MSI 安装程序</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="66"/>
        <source>Trusted Installer</source>
        <translation>可信安装程序</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="67"/>
        <source>Windows Update</source>
        <translation>Windows 更新</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="68"/>
        <source>Windows Explorer</source>
        <translation>Windows 资源管理器</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="69"/>
        <source>Internet Explorer</source>
        <translation>Internet Explorer</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="70"/>
        <source>Firefox</source>
        <oldsource>FireFox</oldsource>
        <translation>Firefox</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="71"/>
        <source>Windows Media Player</source>
        <translation>Windows Media Player</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="72"/>
        <source>Winamp</source>
        <oldsource>WinAmp</oldsource>
        <translation>Winamp</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="73"/>
        <source>KMPlayer</source>
        <oldsource>KM Player</oldsource>
        <translation>KMPlayer</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="74"/>
        <source>Windows Live Mail</source>
        <translation>Windows Live Mail</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="75"/>
        <source>Service Model Reg</source>
        <translation>服务模型注册表</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="76"/>
        <source>RunDll32</source>
        <translation>RunDll32</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="77"/>
        <location filename="SbieProcess.cpp" line="78"/>
        <source>DllHost</source>
        <translation>DllHost</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="79"/>
        <source>Windows Ink Services</source>
        <translation>Windows 快捷方式服务</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="80"/>
        <source>Chromium Based</source>
        <translation>基于 Chromium 的浏览器</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="81"/>
        <source>Google Updater</source>
        <translation>Google 更新程序</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="82"/>
        <source>Acrobat Reader</source>
        <translation>Acrobat Reader</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="83"/>
        <source>MS Outlook</source>
        <translation>微软 Outlook</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="84"/>
        <source>MS Excel</source>
        <translation>微软 Excel</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="85"/>
        <source>Flash Player</source>
        <translation>Flash Player</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="86"/>
        <source>Firefox Plugin Container</source>
        <oldsource>FireFox Plugin Container</oldsource>
        <translation>Firefox 插件容器</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="87"/>
        <source>Generic Web Browser</source>
        <translation>常规网页浏览器</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="88"/>
        <source>Generic Mail Client</source>
        <translation>常规电子邮件客户端</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="89"/>
        <source>Thunderbird</source>
        <translation>Thunderbird</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="99"/>
        <source>Terminated</source>
        <translation>已终止</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="105"/>
        <source>Forced </source>
        <translation>必沙 </translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="103"/>
        <source>Running</source>
        <translation>正在运行</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="109"/>
        <source> Elevated</source>
        <translation> 管理员</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="111"/>
        <source> as System</source>
        <translation> 系统权限</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="114"/>
        <source> in session %1</source>
        <translation> 位于会话 %1</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="120"/>
        <source> (%1)</source>
        <translation> (%1)</translation>
    </message>
</context>
<context>
    <name>CSbieView</name>
    <message>
        <location filename="Views/SbieView.cpp" line="148"/>
        <location filename="Views/SbieView.cpp" line="270"/>
        <source>Create New Box</source>
        <translation>新建沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="378"/>
        <source>Remove Group</source>
        <translation>移除组</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="156"/>
        <source>Run</source>
        <translation>运行</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="157"/>
        <source>Run Program</source>
        <translation>运行程序(Run)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="158"/>
        <source>Run from Start Menu</source>
        <translation>从开始菜单运行</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="169"/>
        <source>Default Web Browser</source>
        <translation>默认浏览器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="170"/>
        <source>Default eMail Client</source>
        <translation>默认电子邮件客户端</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="172"/>
        <source>Windows Explorer</source>
        <translation>Windows 文件资源管理器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="173"/>
        <source>Registry Editor</source>
        <translation>注册表编辑器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="174"/>
        <source>Programs and Features</source>
        <translation>程序和功能</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="185"/>
        <source>Terminate All Programs</source>
        <translation>终止所有程序</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="191"/>
        <location filename="Views/SbieView.cpp" line="248"/>
        <location filename="Views/SbieView.cpp" line="322"/>
        <location filename="Views/SbieView.cpp" line="360"/>
        <source>Create Shortcut</source>
        <translation>创建快捷方式</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="193"/>
        <location filename="Views/SbieView.cpp" line="307"/>
        <source>Explore Content</source>
        <translation>浏览内容</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="195"/>
        <location filename="Views/SbieView.cpp" line="314"/>
        <source>Snapshots Manager</source>
        <translation>快照管理器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="196"/>
        <source>Recover Files</source>
        <translation>文件恢复</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="197"/>
        <location filename="Views/SbieView.cpp" line="306"/>
        <source>Delete Content</source>
        <translation>删除内容</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="204"/>
        <source>Sandbox Presets</source>
        <translation>预置配置</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="206"/>
        <source>Ask for UAC Elevation</source>
        <translation>询问 UAC 提权</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="207"/>
        <source>Drop Admin Rights</source>
        <translation>撤销管理员权限</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="208"/>
        <source>Emulate Admin Rights</source>
        <translation>模拟管理员权限</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="216"/>
        <source>Block Internet Access</source>
        <translation>拦截网络访问</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="218"/>
        <source>Allow Network Shares</source>
        <translation>允许网络共享</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="199"/>
        <source>Sandbox Options</source>
        <translation>沙盒选项</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="188"/>
        <source>Browse Files</source>
        <translation>浏览文件</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="225"/>
        <location filename="Views/SbieView.cpp" line="312"/>
        <source>Sandbox Tools</source>
        <translation>沙盒工具</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="226"/>
        <source>Duplicate Box Config</source>
        <translation>复制配置</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="229"/>
        <location filename="Views/SbieView.cpp" line="325"/>
        <source>Rename Sandbox</source>
        <translation>重命名沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="230"/>
        <location filename="Views/SbieView.cpp" line="326"/>
        <source>Move Sandbox</source>
        <translation>移动沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="241"/>
        <location filename="Views/SbieView.cpp" line="337"/>
        <source>Remove Sandbox</source>
        <translation>移除沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="246"/>
        <location filename="Views/SbieView.cpp" line="358"/>
        <source>Terminate</source>
        <translation>终止</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="249"/>
        <source>Preset</source>
        <translation>预设</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="250"/>
        <source>Pin to Run Menu</source>
        <translation>固定到运行菜单</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="252"/>
        <source>Block and Terminate</source>
        <translation>阻止并终止</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="256"/>
        <source>Allow internet access</source>
        <translation>允许网络访问</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="258"/>
        <source>Force into this sandbox</source>
        <translation>强制入此沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="260"/>
        <source>Set Linger Process</source>
        <translation>设置驻留进程</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="262"/>
        <source>Set Leader Process</source>
        <translation>设置引导进程</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="508"/>
        <source>    File root: %1
</source>
        <translation>    文件根目录: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="509"/>
        <source>    Registry root: %1
</source>
        <translation>    注册表根: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="510"/>
        <source>    IPC root: %1
</source>
        <translation>    IPC 根: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="512"/>
        <source>Options:
    </source>
        <translation>选项:
    </translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="729"/>
        <source>[None]</source>
        <translation>[无]</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="988"/>
        <source>Please enter a new group name</source>
        <translation>请输入新的组名</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="838"/>
        <source>Do you really want to remove the selected group(s)?</source>
        <translation>确定要移除选中的组吗？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="149"/>
        <location filename="Views/SbieView.cpp" line="271"/>
        <source>Create Box Group</source>
        <translation>新建沙盒组</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="376"/>
        <source>Rename Group</source>
        <translation>重命名组</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="153"/>
        <location filename="Views/SbieView.cpp" line="275"/>
        <source>Stop Operations</source>
        <translation>停止作业</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="177"/>
        <source>Command Prompt</source>
        <translation>命令提示符</translation>
    </message>
    <message>
        <source>Boxed Tools</source>
        <translation type="vanished">沙盒工具</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="178"/>
        <source>Command Prompt (as Admin)</source>
        <translation>命令提示符 (管理员)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="181"/>
        <source>Command Prompt (32-bit)</source>
        <translation>命令提示符 (32 位)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="167"/>
        <source>Execute Autorun Entries</source>
        <translation>执行自动运行项目</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="313"/>
        <source>Browse Content</source>
        <translation>浏览内容</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="187"/>
        <source>Box Content</source>
        <translation>沙盒内容</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="194"/>
        <source>Open Registry</source>
        <translation>打开注册表</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="190"/>
        <location filename="Views/SbieView.cpp" line="321"/>
        <source>Refresh Info</source>
        <translation>刷新信息</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="161"/>
        <location filename="Views/SbieView.cpp" line="285"/>
        <source>(Host) Start Menu</source>
        <translation>开始菜单(宿主)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="168"/>
        <source>More Tools</source>
        <translation>更多工具</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="222"/>
        <source>Immediate Recovery</source>
        <translation>即时恢复</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="227"/>
        <source>Export Box</source>
        <translation>导出沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="231"/>
        <location filename="Views/SbieView.cpp" line="327"/>
        <source>Move Up</source>
        <translation>上移</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="236"/>
        <location filename="Views/SbieView.cpp" line="332"/>
        <source>Move Down</source>
        <translation>下移</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="278"/>
        <source>Run Sandboxed</source>
        <translation>运行</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="279"/>
        <source>Run Web Browser</source>
        <translation>默认浏览器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="280"/>
        <source>Run eMail Reader</source>
        <translation>默认电子邮件客户端</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="281"/>
        <source>Run Any Program</source>
        <translation>运行程序(Run)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="282"/>
        <source>Run From Start Menu</source>
        <translation>从开始菜单运行</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="290"/>
        <source>Run Windows Explorer</source>
        <translation>Windows 资源管理器</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="304"/>
        <source>Terminate Programs</source>
        <translation>终止程序</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="305"/>
        <source>Quick Recover</source>
        <translation>快速恢复</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="310"/>
        <source>Sandbox Settings</source>
        <translation>沙盒配置</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="317"/>
        <source>Duplicate Sandbox Config</source>
        <translation>复制配置</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="318"/>
        <source>Export Sandbox</source>
        <translation>导出沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="377"/>
        <source>Move Group</source>
        <translation>移动组</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="828"/>
        <source>Please enter a new name for the Group.</source>
        <translation>为此组指定新的名称</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="875"/>
        <source>Move entries by (negative values move up, positive values move down):</source>
        <translation>将项目移动的距离(负数向上移动，正数向下移动):</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="911"/>
        <source>A group can not be its own parent.</source>
        <translation>组不能是自己的父级</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1016"/>
        <source>The Sandbox name and Box Group name cannot use the &apos;,()&apos; symbol.</source>
        <translation>⌈沙盒/组⌋名称不能使用 &apos;,()&apos; 等符号</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1021"/>
        <source>This name is already used for a Box Group.</source>
        <translation>名称已被用于现有的其它沙盒组</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1026"/>
        <source>This name is already used for a Sandbox.</source>
        <translation>名称已被用于现有的其它沙盒</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1076"/>
        <location filename="Views/SbieView.cpp" line="1144"/>
        <location filename="Views/SbieView.cpp" line="1384"/>
        <source>Don&apos;t show this message again.</source>
        <translation>不再显示此消息</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1135"/>
        <location filename="Views/SbieView.cpp" line="1155"/>
        <location filename="Views/SbieView.cpp" line="1561"/>
        <source>This Sandbox is empty.</source>
        <translation>此沙盒是空的</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1162"/>
        <source>WARNING: The opened registry editor is not sandboxed, please be careful and only do changes to the pre-selected sandbox locations.</source>
        <translation>警告：打开的注册表编辑器未沙盒化，请审慎且仅对预先选定的沙盒节点进行修改</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1163"/>
        <source>Don&apos;t show this warning in future</source>
        <translation>不再显示此警告</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1219"/>
        <source>Please enter a new name for the duplicated Sandbox.</source>
        <translation>请为此复制的沙盒输入一个新名称</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1219"/>
        <source>%1 Copy</source>
        <translatorcomment>沙盒名称只能包含字母、数字和下划线，不应对此处的文本进行翻译！</translatorcomment>
        <translation>%1 Copy</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1258"/>
        <source>Select file name</source>
        <translation>选择文件名</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1258"/>
        <source>7-zip Archive (*.7z)</source>
        <translation>7-zip 压缩包 (*.7z)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1266"/>
        <source>Exporting: %1</source>
        <translation>正在导出：%1</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1273"/>
        <source>Please enter a new name for the Sandbox.</source>
        <translation>请为该沙盒输入新名称</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1294"/>
        <source>Do you really want to remove the selected sandbox(es)?&lt;br /&gt;&lt;br /&gt;Warning: The box content will also be deleted!</source>
        <translation>确定要删除选中的沙盒？&lt;br /&gt;&lt;br /&gt;警告：沙盒内的内容也将被删除！</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1325"/>
        <source>This Sandbox is already empty.</source>
        <translation>此沙盒已清空</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1335"/>
        <source>Do you want to delete the content of the selected sandbox?</source>
        <translation>确定要删除选中沙盒的内容吗？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1336"/>
        <location filename="Views/SbieView.cpp" line="1340"/>
        <source>Also delete all Snapshots</source>
        <translation>同时删除所有快照</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1339"/>
        <source>Do you really want to delete the content of all selected sandboxes?</source>
        <translation>你真的想删除所有选定的沙盒的内容吗？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1366"/>
        <source>Do you want to terminate all processes in the selected sandbox(es)?</source>
        <translation>确定要终止所选沙盒中的所有进程吗？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1367"/>
        <location filename="Views/SbieView.cpp" line="1460"/>
        <source>Terminate without asking</source>
        <translation>终止且不再询问</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1382"/>
        <source>The Sandboxie Start Menu will now be displayed. Select an application from the menu, and Sandboxie will create a new shortcut icon on your real desktop, which you can use to invoke the selected application under the supervision of Sandboxie.</source>
        <oldsource>The Sandboxie Start Menu will now be displayed. Select an application from the menu, and Sandboxie will create a newshortcut icon on your real desktop, which you can use to invoke the selected application under the supervision of Sandboxie.</oldsource>
        <translation>现在将显示 Sandboxie 开始菜单。从菜单中选择一个应用程序，Sandboxie 将在真实桌面上创建一个新的快捷方式图标，你可以用它来调用所选受 Sandboxie 监督的应用程序。</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1417"/>
        <location filename="Views/SbieView.cpp" line="1487"/>
        <source>Create Shortcut to sandbox %1</source>
        <translation>为沙盒 %1 创建快捷方式</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1459"/>
        <source>Do you want to terminate %1?</source>
        <oldsource>Do you want to %1 %2?</oldsource>
        <translation>确定要终止 %1？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1459"/>
        <source>the selected processes</source>
        <translation>选中的进程</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1520"/>
        <source>This box does not have Internet restrictions in place, do you want to enable them?</source>
        <translation>此沙盒无互联网限制，确定启用吗？</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1604"/>
        <source>This sandbox is disabled, do you want to enable it?</source>
        <translation>此沙盒已禁用，确定启用吗？</translation>
    </message>
</context>
<context>
    <name>CSelectBoxWindow</name>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="89"/>
        <source>Sandboxie-Plus - Run Sandboxed</source>
        <translation>Sandboxie-Plus - 在沙盒内运行</translation>
    </message>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="206"/>
        <source>Are you sure you want to run the program outside the sandbox?</source>
        <translation>确定要在沙盒外运行程序吗？</translation>
    </message>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="219"/>
        <source>Please select a sandbox.</source>
        <translation>请选择一个沙盒</translation>
    </message>
</context>
<context>
    <name>CSettingsWindow</name>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="129"/>
        <source>Sandboxie Plus - Global Settings</source>
        <oldsource>Sandboxie Plus - Settings</oldsource>
        <translation>Sandboxie Plus - 全局设置</translation>
    </message>
    <message>
        <source>Advanced Config</source>
        <translation type="vanished">高级选项</translation>
    </message>
    <message>
        <source>Sandbox Config</source>
        <translation type="vanished">沙盒配置</translation>
    </message>
    <message>
        <source>Config Protection</source>
        <translation type="vanished">保护配置</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="191"/>
        <source>Auto Detection</source>
        <translation>自动检测</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="192"/>
        <source>No Translation</source>
        <translation>保持默认</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="212"/>
        <source>Don&apos;t integrate links</source>
        <translation>不整合</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="213"/>
        <source>As sub group</source>
        <translation>作为子组</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="214"/>
        <source>Fully integrate</source>
        <translation>全面整合</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="216"/>
        <source>Don&apos;t show any icon</source>
        <oldsource>Don&apos;t integrate links</oldsource>
        <translation>不显示</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="217"/>
        <source>Show Plus icon</source>
        <translation>Plus 版</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="218"/>
        <source>Show Classic icon</source>
        <translation>经典版</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="220"/>
        <source>All Boxes</source>
        <translation>所有沙盒</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="221"/>
        <source>Active + Pinned</source>
        <translation>激活或已固定的沙盒</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="222"/>
        <source>Pinned Only</source>
        <translation>仅已固定的沙盒</translation>
    </message>
    <message>
        <source>Close to Tray</source>
        <translation type="vanished">隐藏管理器到托盘</translation>
    </message>
    <message>
        <source>Prompt before Close</source>
        <translation type="vanished">询问要执行的动作</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="vanished">退出管理器</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="224"/>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="225"/>
        <source>Native</source>
        <translation>原生</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="226"/>
        <source>Qt</source>
        <translation>Qt</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="240"/>
        <source>%1</source>
        <oldsource>%1 %</oldsource>
        <translation>%1</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="384"/>
        <source>Search for settings</source>
        <translation>搜索设置</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="529"/>
        <location filename="Windows/SettingsWindow.cpp" line="530"/>
        <location filename="Windows/SettingsWindow.cpp" line="540"/>
        <source>Run &amp;Sandboxed</source>
        <translation>在沙盒中运行(&amp;S)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="561"/>
        <source>Sandboxed Web Browser</source>
        <translation>浏览器(沙盒)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="229"/>
        <location filename="Windows/SettingsWindow.cpp" line="234"/>
        <source>Notify</source>
        <translation>通知</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="228"/>
        <source>Ignore</source>
        <translation>忽略</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="230"/>
        <location filename="Windows/SettingsWindow.cpp" line="235"/>
        <source>Download &amp; Notify</source>
        <translation>下载并通知</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="231"/>
        <location filename="Windows/SettingsWindow.cpp" line="236"/>
        <source>Download &amp; Install</source>
        <translation>下载并安装</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="279"/>
        <source>Browse for Program</source>
        <translation>浏览程序</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="464"/>
        <source>Select Program</source>
        <translation>选择程序</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="464"/>
        <source>Executables (*.exe *.cmd)</source>
        <translation>可执行文件 (*.exe *.cmd)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="468"/>
        <location filename="Windows/SettingsWindow.cpp" line="481"/>
        <source>Please enter a menu title</source>
        <translation>请输入一个菜单标题</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="477"/>
        <source>Please enter a command</source>
        <translation>请输入一则命令</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="750"/>
        <source>This supporter certificate has expired, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>此赞助者凭据已过期，请&lt;a href=&quot;sbie://update/cert&quot;&gt;获取新凭据&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="753"/>
        <source>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;Plus features will be disabled in %1 days.&lt;/font&gt;</source>
        <translation>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;Plus 附加的高级功能将在 %1 天后被禁用&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="755"/>
        <source>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;For this build Plus features remain enabled.&lt;/font&gt;</source>
        <translation>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;在此版本中，Plus 附加的高级功能仍是可用的&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="757"/>
        <source>&lt;br /&gt;Plus features are no longer enabled.</source>
        <translation>&lt;br /&gt;Plus 附加的高级功能已不再可用</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="763"/>
        <source>This supporter certificate will &lt;font color=&apos;red&apos;&gt;expire in %1 days&lt;/font&gt;, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>此赞助者凭据将&lt;font color=&apos;red&apos;&gt;在 %1 天后过期&lt;/font&gt;，请&lt;a href=&quot;sbie://update/cert&quot;&gt;获取新凭据&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="794"/>
        <source>Supporter certificate required</source>
        <oldsource>Supproter certificate required</oldsource>
        <translation>需要赞助者凭据</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="897"/>
        <source>Run &amp;Un-Sandboxed</source>
        <translation>在沙盒外运行(&amp;U)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1118"/>
        <source>This does not look like a certificate. Please enter the entire certificate, not just a portion of it.</source>
        <translation>这看起来不像是一份凭据。请输入完整的凭据，而不仅仅是其中的一部分</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1137"/>
        <source>This certificate is unfortunately expired.</source>
        <translation>很不幸此凭据已过期</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1139"/>
        <source>This certificate is unfortunately outdated.</source>
        <translation>很不幸此凭据已过时</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1142"/>
        <source>Thank you for supporting the development of Sandboxie-Plus.</source>
        <translation>感谢您对 Sandboxie-Plus 开发工作的支持</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1149"/>
        <source>This support certificate is not valid.</source>
        <translation>此赞助者凭据无效</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1180"/>
        <location filename="Windows/SettingsWindow.cpp" line="1301"/>
        <source>Select Directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1210"/>
        <source>&lt;a href=&quot;check&quot;&gt;Check Now&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;check&quot;&gt;立即检查&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1263"/>
        <source>Please enter the new configuration password.</source>
        <translation>请输入新的配置保护密码</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1267"/>
        <source>Please re-enter the new configuration password.</source>
        <translation>请再次输入新的配置保护密码</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1272"/>
        <source>Passwords did not match, please retry.</source>
        <translation>输入的密码不一致，请重新输入</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1282"/>
        <source>Process</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1282"/>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1292"/>
        <source>Please enter a program file name</source>
        <translation>请输入一个程序文件名</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1444"/>
        <source>%1 (Current)</source>
        <translation>%1 (当前)</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0&quot;&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;0&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;1&quot;&gt;%1&lt;/a&gt;</source>
        <translation type="vanished">&lt;a href=&quot;1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Do you want to download the version %1?</source>
        <translation type="vanished">是否下载此版本 %1?</translation>
    </message>
</context>
<context>
    <name>CSetupWizard</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="29"/>
        <source>Setup Wizard</source>
        <translation>设置指南</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="40"/>
        <source>The decision you make here will affect which page you get to see next.</source>
        <translation>你在这里做出的决定将影响你接下来看到的页面内容</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="43"/>
        <source>This help is likely not to be of any help.</source>
        <translation>此类帮助很可能没用提供任何实质性帮助</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="47"/>
        <source>Sorry, I already gave all the help I could.</source>
        <translation>对不起，我已经提供了所有能给的帮助</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="49"/>
        <source>Setup Wizard Help</source>
        <translation>设置向导帮助</translation>
    </message>
</context>
<context>
    <name>CShellPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="415"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; shell integration</source>
        <translation>设置 &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 系统集成选项</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="416"/>
        <source>Configure how Sandboxie-Plus should integrate with your system.</source>
        <translation>配置 Sandboxie-Plus 应如何与你的系统整合</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="420"/>
        <source>Start UI with Windows</source>
        <translation>随系统启动沙盒管理器</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="425"/>
        <source>Add &apos;Run Sandboxed&apos; to the explorer context menu</source>
        <translation>在资源管理器中添加“在沙盒中运行”右键菜单</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="430"/>
        <source>Add desktop shortcut for starting Web browser under Sandboxie</source>
        <translation>添加沙盒化的网络浏览器快捷方式到桌面</translation>
    </message>
</context>
<context>
    <name>CSnapshotsWindow</name>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="24"/>
        <source>%1 - Snapshots</source>
        <translation>%1 - 快照</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="38"/>
        <source>Snapshot</source>
        <translation>快照</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="56"/>
        <source>Revert to empty box</source>
        <translation>恢复到空沙盒</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="103"/>
        <source> (default)</source>
        <translation> (默认)</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="173"/>
        <source>Please enter a name for the new Snapshot.</source>
        <translation>请输入新快照的名称</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="173"/>
        <source>New Snapshot</source>
        <translation>新快照</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="196"/>
        <source>Do you really want to switch the active snapshot? Doing so will delete the current state!</source>
        <translation>确定要切换正在使用的快照？这将删除当前的状态！</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="230"/>
        <source>Do you really want to delete the selected snapshot?</source>
        <translation>确定要删除选中的快照？</translation>
    </message>
</context>
<context>
    <name>CSummaryPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="494"/>
        <source>Create the new Sandbox</source>
        <translation>创建新沙盒</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="502"/>
        <source>Almost complete, click Finish to create a new sandbox and conclude the wizard.</source>
        <translation>即将就绪, 点击完成按钮结束沙盒创建向导</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="511"/>
        <source>Save options as new defaults</source>
        <translation>保存选项为新的默认配置</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="522"/>
        <source>Don&apos;t show the summary page in future (unless advanced options were set)</source>
        <translation>以后不再显示总结页面 (除非启用高级选项)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="541"/>
        <source>
This Sandbox will be saved to: %1</source>
        <translation>
该沙盒将保存到: %1</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="544"/>
        <source>
This box&apos;s content will be DISCARDED when it&apos;s closed, and the box will be removed.</source>
        <oldsource>
This box&apos;s content will be DISCARDED when its closed, and the box will be removed.</oldsource>
        <translation>
该沙盒中的内容将在所有程序结束后被删除，同时沙盒本身将被移除</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="546"/>
        <source>
This box will DISCARD its content when its closed, its suitable only for temporary data.</source>
        <translation>
该沙盒中的内容将在所有程序结束后被删除，仅适合临时数据</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="548"/>
        <source>
Processes in this box will not be able to access the internet or the local network, this ensures all accessed data to stay confidential.</source>
        <translation>
该沙盒中所有进程将无法访问网络和本地连接，以确保所有可访问的数据不被泄露</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="550"/>
        <source>
This box will run the MSIServer (*.msi installer service) with a system token, this improves the compatibility but reduces the security isolation.</source>
        <oldsource>
This box will run the MSIServer (*.msi installer service) with a system token, this improves the compatybility but reduces the security isolation.</oldsource>
        <translation>
该沙盒允许 MSIServer (*.msi 安装服务) 在沙盒内使用系统令牌运行，这将改善兼容性但会影响安全隔离效果</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="552"/>
        <source>
Processes in this box will think they are run with administrative privileges, without actually having them, hence installers can be used even in a security hardened box.</source>
        <translation>
该沙盒中所有进程将认为其运行在管理员模式下，即使实际上并没有该权限，这有助于在安全加固型沙盒中运行安装程序</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="580"/>
        <source>Failed to create new box: %1</source>
        <translation>无法创建新沙盒: %1</translation>
    </message>
</context>
<context>
    <name>CSupportDialog</name>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="115"/>
        <source>The installed supporter certificate &lt;b&gt;has expired %1 days ago&lt;/b&gt; and &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;must be renewed&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>已安装的赞助者凭据&lt;b&gt;已经过期 %1 天了&lt;/b&gt;，&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;必须续期&lt;/a&gt;。&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="117"/>
        <source>&lt;b&gt;You have installed Sandboxie-Plus more than %1 days ago.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</source>
        <translation>&lt;b&gt;您已安装 Sandboxie-Plus 超过 %1 天了。&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="119"/>
        <source>&lt;u&gt;Commercial use of Sandboxie past the evaluation period&lt;/u&gt;, requires a valid &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;support certificate&lt;/a&gt;.</source>
        <translation>&lt;u&gt;商业使用 Sandboxie 的评估期已过&lt;/u&gt;，需要一份有效的&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;赞助者凭据&lt;/a&gt;。</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="126"/>
        <source>The installed supporter certificate is &lt;b&gt;outdated&lt;/b&gt; and it is &lt;u&gt;not valid for&lt;b&gt; this version&lt;/b&gt;&lt;/u&gt; of Sandboxie-Plus.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>安装的赞助者凭据&lt;b&gt;已过期&lt;/b&gt;，并且&lt;u&gt;不再适用于&lt;b&gt;此版本&lt;/b&gt;&lt;/u&gt;的 Sandboxie-Plus。&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="128"/>
        <source>The installed supporter certificate is &lt;b&gt;expired&lt;/b&gt; and &lt;u&gt;should be renewed&lt;/u&gt;.&lt;br /&gt;&lt;br /&gt;</source>
        <oldsource>The installed supporter certificate is &lt;b&gt;expired&lt;/b&gt; and &lt;u&gt;should to be renewed&lt;/u&gt;.&lt;br /&gt;&lt;br /&gt;</oldsource>
        <translation>安装的赞助者凭据&lt;b&gt;已过期&lt;/b&gt;，&lt;u&gt;应当更新&lt;/u&gt;。&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="130"/>
        <source>&lt;b&gt;You have been using Sandboxie-Plus for more than %1 days now.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</source>
        <translation>&lt;b&gt;已经使用 Sandboxie-Plus 超过 %1 天了。&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="133"/>
        <source>Sandboxie on ARM64 requires a valid supporter certificate for continued use.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>Sandboxie 的 ARM64 支持需要一份有效的赞助者凭据。&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="135"/>
        <source>Personal use of Sandboxie is free of charge on x86/x64, although some functionality is only available to project supporters.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>个人用途的 Sandboxie 在 x86/x64 平台上是免费的，尽管有些功能只对项目赞助者开放。&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="138"/>
        <source>Please continue &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt; by renewing your &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt; and continue using the &lt;b&gt;enhanced functionality&lt;/b&gt; in new builds.</source>
        <translation>请考虑继续 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;捐赠支持该项目&lt;/a&gt;，以续签 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;，从而继续使用新构建版本中的增强功能</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="141"/>
        <source>Sandboxie &lt;u&gt;without&lt;/u&gt; a valid supporter certificate will sometimes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;pause for a few seconds&lt;/font&gt;&lt;/b&gt;, to give you time to contemplate the option of &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;A &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt; not just removes this reminder, but also enables &lt;b&gt;exclusive enhanced functionality&lt;/b&gt; providing better security and compatibility.</source>
        <translation>Sandboxie &lt;u&gt;在没有&lt;/u&gt;有效的赞助者凭据时有时会&lt;b&gt;&lt;font color=&apos;red&apos;&gt;弹窗提醒&lt;/font&gt;&lt;/b&gt;，让您考虑是否&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;捐赠支持此项目&lt;/a&gt;(但不会中断不需要赞助着凭据的沙盒内的程序)，&lt;br /&gt;&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;不仅可以消除这种提醒，还可以 &lt;b&gt;提供特殊的增强功能&lt;b&gt;，实现更好的安全性和兼容性</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="172"/>
        <source>Sandboxie-Plus - Support Reminder</source>
        <translation>Sandboxie-Plus - 捐赠提醒</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="251"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="258"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="259"/>
        <source>Continue</source>
        <translation>继续</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="260"/>
        <source>Get Certificate</source>
        <translation>获取凭据</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="261"/>
        <source>Enter Certificate</source>
        <translation>输入凭据</translation>
    </message>
</context>
<context>
    <name>CTraceModel</name>
    <message>
        <location filename="Models/TraceModel.cpp" line="196"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="175"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="176"/>
        <source>Process %1</source>
        <translation>进程 %1</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="179"/>
        <source>Thread %1</source>
        <translation>线程 %1</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="333"/>
        <source>Process</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="335"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="336"/>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="337"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
</context>
<context>
    <name>CTraceView</name>
    <message>
        <location filename="Views/TraceView.cpp" line="197"/>
        <source>Monitor mode</source>
        <translation>监控模式</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="201"/>
        <source>Show as task tree</source>
        <translation>显示为任务树</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="205"/>
        <source>Show NT Object Tree</source>
        <translation>展示 NT 对象树</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="212"/>
        <source>PID:</source>
        <translation>进程 PID：</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="214"/>
        <location filename="Views/TraceView.cpp" line="221"/>
        <location filename="Views/TraceView.cpp" line="230"/>
        <location filename="Views/TraceView.cpp" line="231"/>
        <location filename="Views/TraceView.cpp" line="240"/>
        <location filename="Views/TraceView.cpp" line="481"/>
        <location filename="Views/TraceView.cpp" line="484"/>
        <location filename="Views/TraceView.cpp" line="581"/>
        <source>[All]</source>
        <translation>[所有]</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="219"/>
        <source>TID:</source>
        <translation>线程 TID：</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="227"/>
        <source>Type:</source>
        <translation>类型：</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="238"/>
        <source>Status:</source>
        <translation>状态：</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="241"/>
        <source>Open</source>
        <translation>开放</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="242"/>
        <source>Closed</source>
        <translation>封禁</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="243"/>
        <source>Trace</source>
        <translation>跟踪</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="244"/>
        <source>Other</source>
        <translation>其它</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="252"/>
        <source>Show All Boxes</source>
        <translation>显示所有沙盒</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="259"/>
        <source>Save to file</source>
        <translation>保存到文件</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="273"/>
        <source>Cleanup Trace Log</source>
        <translation>清理跟踪日志</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="624"/>
        <source>Save trace log to file</source>
        <translation>保存跟踪日志到文件</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="630"/>
        <source>Failed to open log file for writing</source>
        <translation>无法打开日志文件进行写入</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="650"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="554"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="561"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
</context>
<context>
    <name>CTraceWindow</name>
    <message>
        <location filename="Views/TraceView.cpp" line="683"/>
        <source>Sandboxie-Plus - Trace Monitor</source>
        <translation>Sandboxie-Plus - 跟踪监测</translation>
    </message>
</context>
<context>
    <name>CUIPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="300"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; UI</source>
        <translation>配置 &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 用户界面</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="301"/>
        <source>Select the user interface style you prefer.</source>
        <translation>选择您喜欢的用户界面风格</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="305"/>
        <source>&amp;Advanced UI for experts</source>
        <translation>适合专家的高级视图(&amp;A)</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="310"/>
        <source>&amp;Simple UI for beginners</source>
        <translation>适合新手的简易视图(&amp;S)</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="315"/>
        <source>&amp;Vintage SbieCtrl.exe UI</source>
        <translation>SbieCtrl 经典视图(&amp;V)</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="340"/>
        <source>Use Bright Mode</source>
        <translation>使用浅色主题</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="344"/>
        <source>Use Dark Mode</source>
        <translation>使用深色主题</translation>
    </message>
</context>
<context>
    <name>CWFPPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="451"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; network filtering</source>
        <translation>配置 &lt;b&gt;Sandboxie-Plus&lt;/b&gt; 的网络过滤功能</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="452"/>
        <source>Sandboxie can use the Windows Filtering Platform (WFP) to restrict network access.</source>
        <translation>沙盒可以使用 Windows 筛选平台 (WFP) 来限制网络访问</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="458"/>
        <source>Using WFP allows Sandboxie to reliably enforce IP/Port based rules for network access. Unlike system level application firewalls, Sandboxie can use different rules in each box for the same application. If you already have a good and reliable application firewall and do not need per box rules, you can leave this option unchecked. Without WFP enabled, Sandboxie will still be able to reliably and entirely block processes from accessing the network. However, this can cause the process to crash, as the driver blocks the required network device endpoints. Even with WFP disabled, Sandboxie offers to set IP/Port based rules, however these will be applied in user mode only and not be enforced by the driver. Hence, without WFP enabled, an intentionally malicious process could bypass those rules, but not the entire network block.</source>
        <translation>启用 WFP 使 Sandboxie 能够可靠地执行基于 IP/端口 的网络访问规则
与系统层级的应用防火墙不同，Sandboxie 可以针对同一应用在不同的沙盒内设置不同的规则
如果你已有一个更友好、更可靠的应用防火墙，并且不需要针对同一应用在不同沙盒设置不同的规则，则可不勾选此选项
如果不启用 WFP，Sandboxie 仍然能够可靠地完全阻止进程访问网络
然而，这可能会导致进程崩溃，因为驱动程序会阻止程序访问请求的网络设备端点
即使禁用 WFP，Sandboxie 也将提供基于 IP/端口 的规则过滤功能，但此时规则只能在用户态下应用，而无法被驱动程序强制执行
因此，如果不启用 WFP，某些恶意程序可能可以绕过这些规则，但不能绕过整个网络区块</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="467"/>
        <source>Enable Windows Filtering Platform (WFP) support</source>
        <translation>启用 Windows 筛选平台 (WFP) 功能支持</translation>
    </message>
</context>
<context>
    <name>NewBoxWindow</name>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="32"/>
        <source>SandboxiePlus new box</source>
        <translation>SandboxiePlus 新建沙盒</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="60"/>
        <source>Box Type Preset:</source>
        <translation>沙盒类型预设配置：</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="91"/>
        <source>A sandbox isolates your host system from processes running within the box, it prevents them from making permanent changes to other programs and data in your computer. The level of isolation impacts your security as well as the compatibility with applications, hence there will be a different level of isolation depending on the selected Box Type. Sandboxie can also protect your personal data from being accessed by processes running under its supervision.</source>
        <translation>沙盒将主机系统与在盒内运行的进程隔离开来，可以防止它们对计算机中的其它程序和数据进行永久性的改变，根据所选的沙盒类型，会有不同的隔离程度，隔离的程度影响到主机的安全性以及盒内应用程序的兼容性，此外沙盒还可以保护你的个人数据不被受监督下运行的进程的访问</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="101"/>
        <source>Box info</source>
        <translation>沙盒信息</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="67"/>
        <source>Sandbox Name:</source>
        <translation>沙盒名称：</translation>
    </message>
</context>
<context>
    <name>OptionsWindow</name>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="32"/>
        <source>SandboxiePlus Options</source>
        <translation>SandboxiePlus 选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="52"/>
        <source>General Options</source>
        <translation>常规选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="62"/>
        <source>Box Options</source>
        <translation>沙盒选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="252"/>
        <source>Appearance</source>
        <translation>外观</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="221"/>
        <source>px Width</source>
        <translation>宽度(像素)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="96"/>
        <source>Sandbox Indicator in title:</source>
        <translation>标题栏中的沙盒标识：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="106"/>
        <source>Sandboxed window border:</source>
        <translation>沙盒内窗口边框：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="737"/>
        <location filename="Forms/OptionsWindow.ui" line="773"/>
        <location filename="Forms/OptionsWindow.ui" line="790"/>
        <location filename="Forms/OptionsWindow.ui" line="943"/>
        <location filename="Forms/OptionsWindow.ui" line="988"/>
        <source>Protect the system from sandboxed processes</source>
        <translation>保护系统免受沙盒内进程的影响</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="946"/>
        <source>Elevation restrictions</source>
        <translation>提权限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="702"/>
        <source>Block network files and folders, unless specifically opened.</source>
        <translation>拦截对网络文件和文件夹的访问，除非专门开放访问权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="953"/>
        <source>Make applications think they are running elevated (allows to run installers safely)</source>
        <translation>使应用程序认为自己已被提权运行(允许安全地运行安装程序)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="793"/>
        <source>Network restrictions</source>
        <translation>网络限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1031"/>
        <source>Drop rights from Administrators and Power Users groups</source>
        <translation>撤销管理员和 Power Users 用户组的权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="967"/>
        <source>(Recommended)</source>
        <translation>(推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="279"/>
        <source>File Options</source>
        <translation>文件选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="390"/>
        <source>Auto delete content when last sandboxed process terminates</source>
        <translation>最后一个沙盒内的进程终止后自动删除内容</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="460"/>
        <source>Copy file size limit:</source>
        <translation>复制文件大小限制：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="335"/>
        <source>Box Delete options</source>
        <translation>沙盒删除选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="294"/>
        <source>Protect this sandbox from deletion or emptying</source>
        <translation>保护此沙盒免受删除或清空</translation>
    </message>
    <message>
        <source>Raw Disk access</source>
        <translation type="vanished">底层磁盘访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="440"/>
        <location filename="Forms/OptionsWindow.ui" line="481"/>
        <source>File Migration</source>
        <translation>文件迁移</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="301"/>
        <source>Allow elevated sandboxed applications to read the harddrive</source>
        <translation>允许提权的沙盒内程序读取硬盘</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="287"/>
        <source>Warn when an application opens a harddrive handle</source>
        <translation>有程序打开硬盘句柄时警示</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="510"/>
        <source>kilobytes</source>
        <translation>KB</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="603"/>
        <source>Issue message 2102 when a file is too large</source>
        <translation>文件太大时，提示问题代码 2102</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="467"/>
        <source>Prompt user for large file migration</source>
        <translation>询问用户是否迁移大文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="709"/>
        <source>Remove spooler restriction, printers can be installed outside the sandbox</source>
        <translation>解除打印限制，可在沙盒外安装打印机</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="776"/>
        <source>Printing restrictions</source>
        <translation>打印限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="716"/>
        <source>Open System Protected Storage</source>
        <translation>开放“系统保护的存储”权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="695"/>
        <source>Allow the print spooler to print to files outside the sandbox</source>
        <translation>允许打印服务在沙盒外打印文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1045"/>
        <source>CAUTION: When running under the built in administrator, processes can not drop administrative privileges.</source>
        <translation>警告：在内置的管理员用户下运行时，不能撤销进程的管理员权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="682"/>
        <source>Block access to the printer spooler</source>
        <translation>阻止访问打印服务</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="740"/>
        <source>Other restrictions</source>
        <translation>其它限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="648"/>
        <source>Block read access to the clipboard</source>
        <translation>阻止访问系统剪贴板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="172"/>
        <source>Show this box in the &apos;run in box&apos; selection prompt</source>
        <translation>在“在沙盒中运行”对话框中显示此沙盒</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1072"/>
        <source>Security note: Elevated applications running under the supervision of Sandboxie, with an admin or system token, have more opportunities to bypass isolation and modify the system outside the sandbox.</source>
        <translation>安全提示：在沙盒监管下运行的程序，若具有提升的管理员或系统权限令牌，将有更多机会绕过沙盒的隔离，并修改沙盒外部的系统</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="998"/>
        <source>Allow MSIServer to run with a sandboxed system token and apply other exceptions if required</source>
        <translation>允许 MSIServer 在沙盒内使用系统令牌运行，并在必要时给予其它限制权限的豁免</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1055"/>
        <source>Note: Msi Installer Exemptions should not be required, but if you encounter issues installing a msi package which you trust, this option may help the installation complete successfully. You can also try disabling drop admin rights.</source>
        <translation>注意：MSI 安装程序的权限豁免不是必须的，但是如果在安装受信任的程序包时遇到问题，此选项可能会有助于成功完成安装，此外也可以尝试关闭「撤销管理员权限」选项</translation>
    </message>
    <message>
        <source>Access Restrictions</source>
        <translation type="vanished">访问限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="803"/>
        <source>Run Menu</source>
        <translation>运行菜单</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="821"/>
        <source>You can configure custom entries for the sandbox run menu.</source>
        <translation>可以在此处为沙盒列表的「运行」菜单配置自定义命令</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="873"/>
        <location filename="Forms/OptionsWindow.ui" line="1468"/>
        <location filename="Forms/OptionsWindow.ui" line="1607"/>
        <location filename="Forms/OptionsWindow.ui" line="1689"/>
        <location filename="Forms/OptionsWindow.ui" line="1834"/>
        <location filename="Forms/OptionsWindow.ui" line="1879"/>
        <location filename="Forms/OptionsWindow.ui" line="1957"/>
        <location filename="Forms/OptionsWindow.ui" line="2809"/>
        <location filename="Forms/OptionsWindow.ui" line="3031"/>
        <location filename="Forms/OptionsWindow.ui" line="3147"/>
        <location filename="Forms/OptionsWindow.ui" line="4269"/>
        <location filename="Forms/OptionsWindow.ui" line="4326"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="878"/>
        <source>Command Line</source>
        <translation>命令行</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="843"/>
        <source>Add program</source>
        <translation>添加程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="862"/>
        <location filename="Forms/OptionsWindow.ui" line="1493"/>
        <location filename="Forms/OptionsWindow.ui" line="1591"/>
        <location filename="Forms/OptionsWindow.ui" line="1697"/>
        <location filename="Forms/OptionsWindow.ui" line="1809"/>
        <location filename="Forms/OptionsWindow.ui" line="1907"/>
        <location filename="Forms/OptionsWindow.ui" line="1985"/>
        <location filename="Forms/OptionsWindow.ui" line="2077"/>
        <location filename="Forms/OptionsWindow.ui" line="2211"/>
        <location filename="Forms/OptionsWindow.ui" line="2310"/>
        <location filename="Forms/OptionsWindow.ui" line="2391"/>
        <location filename="Forms/OptionsWindow.ui" line="2504"/>
        <location filename="Forms/OptionsWindow.ui" line="2778"/>
        <location filename="Forms/OptionsWindow.ui" line="2920"/>
        <location filename="Forms/OptionsWindow.ui" line="3069"/>
        <location filename="Forms/OptionsWindow.ui" line="3155"/>
        <location filename="Forms/OptionsWindow.ui" line="3442"/>
        <location filename="Forms/OptionsWindow.ui" line="3575"/>
        <location filename="Forms/OptionsWindow.ui" line="3644"/>
        <location filename="Forms/OptionsWindow.ui" line="3769"/>
        <location filename="Forms/OptionsWindow.ui" line="3828"/>
        <location filename="Forms/OptionsWindow.ui" line="4240"/>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1602"/>
        <location filename="Forms/OptionsWindow.ui" line="1684"/>
        <location filename="Forms/OptionsWindow.ui" line="2088"/>
        <location filename="Forms/OptionsWindow.ui" line="2188"/>
        <location filename="Forms/OptionsWindow.ui" line="2321"/>
        <location filename="Forms/OptionsWindow.ui" line="2441"/>
        <location filename="Forms/OptionsWindow.ui" line="2515"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1436"/>
        <source>Program Groups</source>
        <translation>程序组</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1444"/>
        <source>Add Group</source>
        <translation>添加组</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1476"/>
        <location filename="Forms/OptionsWindow.ui" line="1823"/>
        <location filename="Forms/OptionsWindow.ui" line="1900"/>
        <location filename="Forms/OptionsWindow.ui" line="1978"/>
        <location filename="Forms/OptionsWindow.ui" line="2764"/>
        <source>Add Program</source>
        <translation>添加程序</translation>
    </message>
    <message>
        <source>Forced Programs</source>
        <translation type="vanished">必沙程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1627"/>
        <source>Force Folder</source>
        <translation>必沙目录</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2103"/>
        <location filename="Forms/OptionsWindow.ui" line="2203"/>
        <location filename="Forms/OptionsWindow.ui" line="2336"/>
        <source>Path</source>
        <translation>路径</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1584"/>
        <source>Force Program</source>
        <translation>必沙程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="557"/>
        <location filename="Forms/OptionsWindow.ui" line="1500"/>
        <location filename="Forms/OptionsWindow.ui" line="1565"/>
        <location filename="Forms/OptionsWindow.ui" line="1723"/>
        <location filename="Forms/OptionsWindow.ui" line="1816"/>
        <location filename="Forms/OptionsWindow.ui" line="1914"/>
        <location filename="Forms/OptionsWindow.ui" line="2030"/>
        <location filename="Forms/OptionsWindow.ui" line="2070"/>
        <location filename="Forms/OptionsWindow.ui" line="2177"/>
        <location filename="Forms/OptionsWindow.ui" line="2303"/>
        <location filename="Forms/OptionsWindow.ui" line="2398"/>
        <location filename="Forms/OptionsWindow.ui" line="2538"/>
        <location filename="Forms/OptionsWindow.ui" line="2966"/>
        <location filename="Forms/OptionsWindow.ui" line="3062"/>
        <location filename="Forms/OptionsWindow.ui" line="3169"/>
        <location filename="Forms/OptionsWindow.ui" line="3401"/>
        <location filename="Forms/OptionsWindow.ui" line="3592"/>
        <location filename="Forms/OptionsWindow.ui" line="3599"/>
        <location filename="Forms/OptionsWindow.ui" line="3864"/>
        <source>Show Templates</source>
        <translation>显示模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="238"/>
        <source>General Configuration</source>
        <translation>常规配置</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="211"/>
        <source>Box Type Preset:</source>
        <translation>沙盒类型预设配置：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="179"/>
        <source>Box info</source>
        <translation>沙盒信息</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="142"/>
        <source>&lt;b&gt;More Box Types&lt;/b&gt; are exclusively available to &lt;u&gt;project supporters&lt;/u&gt;, the Privacy Enhanced boxes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;protect user data from illicit access&lt;/font&gt;&lt;/b&gt; by the sandboxed programs.&lt;br /&gt;If you are not yet a supporter, then please consider &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt;, to receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;.&lt;br /&gt;You can test the other box types by creating new sandboxes of those types, however processes in these will be auto terminated after 5 minutes.</source>
        <translation>&lt;b&gt;更多沙盒类型&lt;/b&gt;仅&lt;u&gt;项目赞助者&lt;/u&gt;可用，隐私增强沙盒&lt;b&gt;&lt;font color=&apos;red&apos;&gt;保护用户数据免受沙盒化的程序非法访问&lt;/font&gt;&lt;/b&gt;&lt;br /&gt;如果你还不是赞助者，请考虑&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;捐赠此项目&lt;/a&gt;，来获得&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;&lt;br /&gt;当然你也可以直接新建一个这些类型的沙盒进行测试，不过沙盒中运行的程序将在 5 分钟之后自动终止</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="89"/>
        <source>Always show this sandbox in the systray list (Pinned)</source>
        <translation>固定住此沙盒，以便总是在系统托盘列表显示</translation>
    </message>
    <message>
        <source>Admin Rights</source>
        <translation type="vanished">管理员权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="628"/>
        <source>Open Windows Credentials Store (user mode)</source>
        <translation>开放 Windows 凭据存储访问权限 (用户态)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="668"/>
        <source>Prevent change to network and firewall parameters (user mode)</source>
        <translation>拦截对网络及防火墙参数的更改 (用户态)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1483"/>
        <source>You can group programs together and give them a group name.  Program groups can be used with some of the settings instead of program names. Groups defined for the box overwrite groups defined in templates.</source>
        <translation>可以在此处将应用程序分组并给它们分配一个组名，程序组可用于代替程序名被用于某些设置，在此处定义的沙盒程序组将覆盖模板中定义的程序组</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1634"/>
        <source>Programs entered here, or programs started from entered locations, will be put in this sandbox automatically, unless they are explicitly started in another sandbox.</source>
        <translation>此处指定的程序或者指定位置中的程序，将自动进入此沙盒，除非已明确在其它沙盒中启动它</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1766"/>
        <source>Stop Behaviour</source>
        <translation>停止行为</translation>
    </message>
    <message>
        <source>Remove Program</source>
        <translation type="vanished">移除程序</translation>
    </message>
    <message>
        <source>Add Leader Program</source>
        <translation type="vanished">添加引导程序</translation>
    </message>
    <message>
        <source>Add Lingering Program</source>
        <translation type="vanished">添加驻留程序</translation>
    </message>
    <message>
        <source>Lingering programs will be automatically terminated if they are still running after all other processes have been terminated.

If leader processes are defined, all others are treated as lingering processes.</source>
        <translation type="vanished">其它所有程序被终止后，仍在运行的驻留程序将自动终止

如果定义了引导进程，其它进程将被视作驻留进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1938"/>
        <source>Start Restrictions</source>
        <translation>启动限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1946"/>
        <source>Issue message 1308 when a program fails to start</source>
        <translation>程序启动失败时，提示问题代码 1308</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1997"/>
        <source>Allow only selected programs to start in this sandbox. *</source>
        <translation>仅允许所选程序在此沙盒中启动 *</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2004"/>
        <source>Prevent selected programs from starting in this sandbox.</source>
        <translation>阻止所选的程序在此沙盒中启动</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2011"/>
        <source>Allow all programs to start in this sandbox.</source>
        <translation>允许所有程序在此沙盒中启动</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2018"/>
        <source>* Note: Programs installed to this sandbox won&apos;t be able to start at all.</source>
        <translation>* 注意：安装在此沙盒里的程序将完全无法启动</translation>
    </message>
    <message>
        <source>Internet Restrictions</source>
        <translation type="vanished">联网限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2737"/>
        <source>Process Restrictions</source>
        <translation>程序限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2757"/>
        <source>Issue message 1307 when a program is denied internet access</source>
        <translation>程序被拒绝访问网络时，提示问题代码 1307</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2785"/>
        <source>Note: Programs installed to this sandbox won&apos;t be able to access the internet at all.</source>
        <translation>注意：安装在此沙盒中的程序将完全无法访问网络</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2771"/>
        <source>Prompt user whether to allow an exemption from the blockade.</source>
        <translation>询问用户是否允许例外</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2040"/>
        <source>Resource Access</source>
        <translation>资源访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="573"/>
        <location filename="Forms/OptionsWindow.ui" line="2093"/>
        <location filename="Forms/OptionsWindow.ui" line="2193"/>
        <location filename="Forms/OptionsWindow.ui" line="2326"/>
        <location filename="Forms/OptionsWindow.ui" line="2446"/>
        <location filename="Forms/OptionsWindow.ui" line="2520"/>
        <location filename="Forms/OptionsWindow.ui" line="2938"/>
        <location filename="Forms/OptionsWindow.ui" line="3851"/>
        <source>Program</source>
        <translation>程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2098"/>
        <location filename="Forms/OptionsWindow.ui" line="2198"/>
        <location filename="Forms/OptionsWindow.ui" line="2331"/>
        <location filename="Forms/OptionsWindow.ui" line="2451"/>
        <location filename="Forms/OptionsWindow.ui" line="2525"/>
        <location filename="Forms/OptionsWindow.ui" line="2814"/>
        <source>Access</source>
        <translation>访问</translation>
    </message>
    <message>
        <source>Network Firewall Rules</source>
        <translation type="vanished">网络防火墙规则</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2230"/>
        <source>Add Reg Key</source>
        <translation>添加注册表键值</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2123"/>
        <source>Add File/Folder</source>
        <translation>添加文件/文件夹</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2417"/>
        <source>Add Wnd Class</source>
        <translation>添加窗口类</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2557"/>
        <source>Add COM Object</source>
        <translation>添加 COM 对象</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2296"/>
        <source>Add IPC Path</source>
        <translation>添加 IPC 路径</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2997"/>
        <source>File Recovery</source>
        <translation>文件恢复</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3076"/>
        <source>Add Folder</source>
        <translation>添加文件夹</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3116"/>
        <source>Ignore Extension</source>
        <translation>忽略扩展名</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3162"/>
        <source>Ignore Folder</source>
        <translation>忽略文件夹</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3123"/>
        <source>Enable Immediate Recovery prompt to be able to recover files as soon as they are created.</source>
        <translation>启用快速恢复提示，以便快速恢复创建的文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3106"/>
        <source>You can exclude folders and file types (or file extensions) from Immediate Recovery.</source>
        <translation>可以在此处从快速恢复中排除特定目录和文件类型(扩展名)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3039"/>
        <source>When the Quick Recovery function is invoked, the following folders will be checked for sandboxed content. </source>
        <translation>当快速恢复功能被调用时，检查沙盒内的下列文件夹 </translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3204"/>
        <source>Advanced Options</source>
        <translation>高级选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3789"/>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1358"/>
        <source>Do not start sandboxed services using a system token (recommended)</source>
        <translation>不使用系统令牌启动沙盒化的服务 (推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2464"/>
        <source>Don&apos;t alter window class names created by sandboxed programs</source>
        <translation>不要改变由沙盒内程序创建的窗口类名</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1210"/>
        <location filename="Forms/OptionsWindow.ui" line="1227"/>
        <location filename="Forms/OptionsWindow.ui" line="1279"/>
        <location filename="Forms/OptionsWindow.ui" line="1303"/>
        <location filename="Forms/OptionsWindow.ui" line="1327"/>
        <source>Protect the sandbox integrity itself</source>
        <translation>沙盒完整性保护</translation>
    </message>
    <message>
        <source>Sandbox isolation</source>
        <translation type="vanished">沙盒隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3221"/>
        <location filename="Forms/OptionsWindow.ui" line="3236"/>
        <source>Compatibility</source>
        <translation>兼容性</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1412"/>
        <source>Add sandboxed processes to job objects (recommended)</source>
        <translation>添加沙盒化进程到作业对象 (推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3250"/>
        <source>Force usage of custom dummy Manifest files (legacy behaviour)</source>
        <translation>强制使用自定义虚拟 Manifest 文件 (传统行为)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1378"/>
        <source>Allow only privileged processes to access the Service Control Manager</source>
        <translation>仅允许特权进程访问“服务控制管理器”</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3270"/>
        <source>Emulate sandboxed window station for all processes</source>
        <translation>为所有进程模拟沙盒化的窗口状况</translation>
    </message>
    <message>
        <source>Isolation</source>
        <translation type="vanished">隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1152"/>
        <source>Open access to Windows Security Account Manager</source>
        <oldsource>Open access to windows Security Account Manager</oldsource>
        <translation>开放 Windows 安全帐户管理器 (SAM) 的访问权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1230"/>
        <source>Access isolation</source>
        <translation>权限隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3557"/>
        <source>Hide Processes</source>
        <translation>隐藏进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3606"/>
        <location filename="Forms/OptionsWindow.ui" line="3664"/>
        <source>Add Process</source>
        <translation>添加进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3582"/>
        <source>Hide host processes from processes running in the sandbox.</source>
        <translation>对沙盒内运行的进程隐藏宿主的进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3613"/>
        <source>Don&apos;t allow sandboxed processes to see processes running in other boxes</source>
        <translation>不允许沙盒内的进程查看其它沙盒里运行的进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3721"/>
        <source>Users</source>
        <translation>用户</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3739"/>
        <source>Restrict Resource Access monitor to administrators only</source>
        <translation>仅允许管理员访问“资源访问监视器”</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3746"/>
        <source>Add User</source>
        <translation>添加用户</translation>
    </message>
    <message>
        <source>Remove User</source>
        <translation type="vanished">移除用户</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3776"/>
        <source>Add user accounts and user groups to the list below to limit use of the sandbox to only those accounts.  If the list is empty, the sandbox can be used by all user accounts.

Note:  Forced Programs and Force Folders settings for a sandbox do not apply to user accounts which cannot use the sandbox.</source>
        <translation>添加用户和用户组到下方列表来仅限这些系统用户使用沙盒，如果列表为空，则所有系统用户均可使用沙盒

注意：沙盒的必沙程序及文件夹设置不适用于不能运行沙盒的系统用户</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3887"/>
        <source>Tracing</source>
        <translation>跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4058"/>
        <source>COM Class Trace</source>
        <translation>COM 类跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4003"/>
        <source>IPC Trace</source>
        <translation>IPC 跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4065"/>
        <source>Key Trace</source>
        <translation>键值跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4010"/>
        <source>GUI Trace</source>
        <translation>GUI 跟踪</translation>
    </message>
    <message>
        <source>Security</source>
        <translation type="vanished">安全选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="991"/>
        <source>Security enhancements</source>
        <translation>安全增强</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="922"/>
        <source>Use the original token only for approved NT system calls</source>
        <translation>只在经过批准的 NT 系统调用中使用原始令牌</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="974"/>
        <source>Restrict driver/device access to only approved ones</source>
        <translation>将对“驱动程序/设备”的访问权限制在已知的终结点列表内</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="929"/>
        <source>Enable all security enhancements (make security hardened box)</source>
        <translation>启用所有安全增强功能(安全防护加固型沙盒选项)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="259"/>
        <source>Double click action:</source>
        <translation>双击动作：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="427"/>
        <source>Separate user folders</source>
        <translation>隔离不同用户的文件夹</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="404"/>
        <source>Box Structure</source>
        <translation>沙盒结构</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="904"/>
        <source>Security Options</source>
        <translation>安全选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="914"/>
        <source>Security Hardening</source>
        <translation>安全加固</translation>
    </message>
    <message>
        <source>Various Restrictions</source>
        <translation type="vanished">杂项限制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1104"/>
        <source>Security Isolation</source>
        <translation>安全隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1257"/>
        <source>Advanced Security</source>
        <oldsource>Adcanced Security</oldsource>
        <translation>安全性(高级)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1265"/>
        <source>Use a Sandboxie login instead of an anonymous token (experimental)</source>
        <translation>使用 Sandboxie 限权用户，而不是匿名令牌 (实验性)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1282"/>
        <source>Other isolation</source>
        <translation>其它隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1306"/>
        <source>Privilege isolation</source>
        <translation>特权隔离</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1330"/>
        <source>Sandboxie token</source>
        <translation>沙盒令牌</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1419"/>
        <source>Using a custom Sandboxie Token allows to isolate individual sandboxes from each other better, and it shows in the user column of task managers the name of the box a process belongs to. Some 3rd party security solutions may however have problems with custom tokens.</source>
        <translation>使用自定义沙盒令牌可以更好地将各个沙盒相互隔离，同时可以实现在任务管理器的用户栏中显示进程所属的沙盒
但是，某些第三方安全解决方案可能会与自定义令牌产生兼容性问题</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1510"/>
        <source>Program Control</source>
        <translation>程序控制</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1532"/>
        <source>Force Programs</source>
        <translation>必沙程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1647"/>
        <source>Breakout Programs</source>
        <translation>分离程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1716"/>
        <source>Breakout Program</source>
        <translation>分离程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1742"/>
        <source>Breakout Folder</source>
        <translation>分离目录</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1749"/>
        <source>Programs entered here will be allowed to break out of this sandbox when they start. It is also possible to capture them into another sandbox, for example to have your web browser always open in a dedicated box.</source>
        <oldsource>Programs entered here will be allowed to break out of this box when thay start, you can capture them into an other box. For example to have your web browser always open in a dedicated box. This feature requires a valid supporter certificate to be installed.</oldsource>
        <translation>此处设置的程序在启动时将被允许脱离这个沙盒，利用此选项可以将程序捕获到另一个沙盒里
例如，让网络浏览器总是在一个专门的沙盒里打开</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1776"/>
        <source>Lingering Programs</source>
        <translation>驻留程序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1842"/>
        <source>Lingering programs will be automatically terminated if they are still running after all other processes have been terminated.</source>
        <translation>其它所有程序被终止后，仍在运行的驻留程序将自动终止</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1855"/>
        <source>Leader Programs</source>
        <translation>引导进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1921"/>
        <source>If leader processes are defined, all others are treated as lingering processes.</source>
        <translation>如果定义了引导进程，其它进程将被视作驻留进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2050"/>
        <source>Files</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2143"/>
        <source>Configure which processes can access Files, Folders and Pipes. 
&apos;Open&apos; access only applies to program binaries located outside the sandbox, you can use &apos;Open for All&apos; instead to make it apply to all programs, or change this behavior in the Policies tab.</source>
        <translation>配置哪些进程可以访问文件、文件夹和管道
“开放”访问权限只适用于原先已位于沙盒之外的程序二进制文件
你可以使用“完全开放”来对所有程序开放所有权限，或者在策略标签中改变这一行为</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2157"/>
        <source>Registry</source>
        <translation>注册表</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2250"/>
        <source>Configure which processes can access the Registry. 
&apos;Open&apos; access only applies to program binaries located outside the sandbox, you can use &apos;Open for All&apos; instead to make it apply to all programs, or change this behavior in the Policies tab.</source>
        <translation>配置哪些进程可以读写注册表
“开放”访问权限只适用于原先已位于沙盒之外的程序二进制文件
你可以使用“完全开放”来对所有程序开放所有权限，或者在策略标签中改变这一行为</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2264"/>
        <source>IPC</source>
        <translation>IPC</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2357"/>
        <source>Configure which processes can access NT IPC objects like ALPC ports and other processes memory and context.
To specify a process use &apos;$:program.exe&apos; as path.</source>
        <translation>配置哪些进程可以访问 NT IPC 对象，如 ALPC 端口及其他进程的内存和相关运行状态环境
如需指定一个进程，使用“$:program.exe”作为路径值(不含双引号)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2371"/>
        <source>Wnd</source>
        <translation>窗口</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2456"/>
        <source>Wnd Class</source>
        <translation>窗口类</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2471"/>
        <source>Configure which processes can access Desktop objects like Windows and alike.</source>
        <translation>配置哪些进程可以访问桌面对象，如 Windows 或其它类似对象</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2484"/>
        <source>COM</source>
        <translation>COM</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2530"/>
        <source>Class Id</source>
        <translation>类 Id</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2577"/>
        <source>Configure which processes can access COM objects.</source>
        <translation>配置哪些进程可以访问 COM 对象</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2589"/>
        <source>Don&apos;t use virtualized COM, Open access to hosts COM infrastructure (not recommended)</source>
        <translation>不虚拟化 COM 对象，而是开放主机的 COM 基础结构 (不推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2597"/>
        <source>Access Policies</source>
        <translation>权限策略</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2631"/>
        <source>Apply Close...=!&lt;program&gt;,... rules also to all binaries located in the sandbox.</source>
        <translation>将 Close...=!&lt;program&gt;,... 规则，应用到位于沙盒内的所有相关二进制文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2727"/>
        <source>Network Options</source>
        <translation>网络选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2824"/>
        <source>Set network/internet access for unlisted processes:</source>
        <translation>不在列表中的程序的网络访问权限：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2871"/>
        <source>Test Rules, Program:</source>
        <translation>测试规则或程序:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2881"/>
        <source>Port:</source>
        <translation>端口:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2891"/>
        <source>IP:</source>
        <translation>IP:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2901"/>
        <source>Protocol:</source>
        <translation>协议:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2911"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2927"/>
        <source>Add Rule</source>
        <translation>添加规则</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="568"/>
        <location filename="Forms/OptionsWindow.ui" line="2943"/>
        <location filename="Forms/OptionsWindow.ui" line="3375"/>
        <location filename="Forms/OptionsWindow.ui" line="3700"/>
        <source>Action</source>
        <translation>动作</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2948"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2953"/>
        <source>IP</source>
        <translation>IP</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2958"/>
        <source>Protocol</source>
        <translation>协议</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2980"/>
        <source>CAUTION: Windows Filtering Platform is not enabled with the driver, therefore these rules will be applied only in user mode and can not be enforced!!! This means that malicious applications may bypass them.</source>
        <translation>警告：未在此驱动程序启用 Windows 筛选平台，因此以下规则只能在用户模式下生效，无法被强制执行！！！恶意程序可能会绕过这些规则的限制</translation>
    </message>
    <message>
        <source>Resource Access Rules</source>
        <translation type="vanished">资源访问权限规则</translation>
    </message>
    <message>
        <source>Configure which processes can access what resources. Double click on an entry to edit it.
&apos;Open&apos; File and Key access only applies to program binaries located outside the sandbox.
You can use &apos;Open for All&apos; instead to make it apply to all programs, or change this behaviour in the Policies tab.</source>
        <translation type="vanished">在此配置哪些进程可以访问哪些资源，双击一个条目来编辑它
“开放”文件和密钥访问权限只适用于原先已位于沙盒之外的程序二进制文件
你可以使用 “完全开放” 来对所有程序开放所有权限，或者在策略标签中更改这一行为</translation>
    </message>
    <message>
        <source>Resource Access Policies</source>
        <translation type="vanished">资源访问权限策略</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2679"/>
        <source>The rule specificity is a measure to how well a given rule matches a particular path, simply put the specificity is the length of characters from the begin of the path up to and including the last matching non-wildcard substring. A rule which matches only file types like &quot;*.tmp&quot; would have the highest specificity as it would always match the entire file path.
The process match level has a higher priority than the specificity and describes how a rule applies to a given process. Rules applying by process name or group have the strongest match level, followed by the match by negation (i.e. rules applying to all processes but the given one), while the lowest match levels have global matches, i.e. rules that apply to any process.</source>
        <translation>规则的特异度是衡量一个给定规则对特定路径的匹配程度，简单地说，特异度是指从路径的最开始到最后一个匹配的非通配符子串之间的字符长度，一个只匹配 “*.tmp” 这样的文件类型的规则将具有最高的特异性，因为它总是匹配整个文件路径
进程匹配级别的优先级高于特异度，它描述了一条规则如何适用于一个给定的进程，按进程名称或程序组应用的规则具有最高的匹配级别，其次是否定匹配模式(即适用于匹配除给定进程以外的所有进程的规则)，而匹配级别最低的是全局匹配，即适用于任何进程的规则</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2638"/>
        <source>Prioritize rules based on their Specificity and Process Match Level</source>
        <translation>基于规则的特异度和进程匹配级别对规则进行优先级排序</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2690"/>
        <source>Privacy Mode, block file and registry access to all locations except the generic system ones</source>
        <translation>隐私模式，阻止对通用系统目录之外的所有文件位置和注册表节点的访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2672"/>
        <source>Access Mode</source>
        <translation>访问权限模式</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2710"/>
        <source>When the Privacy Mode is enabled, sandboxed processes will be only able to read C:\Windows\*, C:\Program Files\*, and parts of the HKLM registry, all other locations will need explicit access to be readable and/or writable. In this mode, Rule Specificity is always enabled.</source>
        <translation>当启用隐私模式时，沙盒进程将只能读取 C:\Windows\* 、 C:\Program Files\* 和注册表 HKLM 节点下的部分内容，除此之外的所有其它位置都需要明确的访问授权才能被读取或写入，在此模式下，专有规则将总是被应用</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2624"/>
        <source>Rule Policies</source>
        <translation>规则策略</translation>
    </message>
    <message>
        <source>Apply Close...=!&lt;program&gt;,... rules also to all binaries located in the sandboxed.</source>
        <translation type="vanished">将 Close...=!&lt;program&gt;,...规则，应用到位于沙盒内的所有相关二进制文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2645"/>
        <source>Apply File and Key Open directives only to binaries located outside the sandbox.</source>
        <translation>只对位于沙盒之外的二进制文件应用文件和密钥权限开放指令</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1289"/>
        <source>Start the sandboxed RpcSs as a SYSTEM process (not recommended)</source>
        <translation>以系统进程启动沙盒服务 RpcSs (不推荐)</translation>
    </message>
    <message>
        <source>COM/RPC</source>
        <translation type="vanished">COM/RPC</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3243"/>
        <source>Allow use of nested job objects (works on Windows 8 and later)</source>
        <oldsource>Allow use of nested job objects (experimental, works on Windows 8 and later)</oldsource>
        <translation>允许使用嵌套作业对象(job object) (仅适用于 Windows 8 及更高版本)</translation>
    </message>
    <message>
        <source>Open access to COM infrastructure (not recommended)</source>
        <translation type="vanished">开放“COM 基础结构”的访问权限 (不推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1351"/>
        <source>Drop critical privileges from processes running with a SYSTEM token</source>
        <translation>撤销以系统令牌运行中的程序的关键特权</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1344"/>
        <location filename="Forms/OptionsWindow.ui" line="1392"/>
        <source>(Security Critical)</source>
        <translation>(安全关键)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1313"/>
        <source>Protect sandboxed SYSTEM processes from unprivileged processes</source>
        <translation>保护沙盒中的系统进程免受非特权进程的影响</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1166"/>
        <source>Security Isolation through the usage of a heavily restricted process token is Sandboxie&apos;s primary means of enforcing sandbox restrictions, when this is disabled the box is operated in the application compartment mode, i.e. it’s no longer providing reliable security, just simple application compartmentalization.</source>
        <translation>通过严格限制进程令牌的使用来进行安全隔离是 Sandboxie 执行沙盒化限制的主要手段，当它被禁用时，沙盒将在应用隔间模式下运行，此时将不再提供可靠的安全限制，只是简单进行应用分隔</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1145"/>
        <source>Allow sandboxed programs to manage Hardware/Devices</source>
        <translation>允许沙盒内程序管理硬件设备</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1159"/>
        <source>Open access to Windows Local Security Authority</source>
        <translation>开放 Windows 本地安全验证 (LSA) 的访问权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="675"/>
        <source>Allow to read memory of unsandboxed processes (not recommended)</source>
        <translation>允许读取非沙盒进程的内存 (不推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="723"/>
        <source>Issue message 2111 when a process access is denied</source>
        <translation>进程被拒绝访问非沙盒进程内存时，提示问题代码 2111</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3290"/>
        <source>Disable the use of RpcMgmtSetComTimeout by default (this may resolve compatibility issues)</source>
        <translation>默认禁用 RpcMgmtSetComTimeout (或许可以解决兼容性问题)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1176"/>
        <source>Disable Security Isolation (experimental)</source>
        <translation>禁用安全隔离 (实验性)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1193"/>
        <source>Various advanced isolation features can break compatibility with some applications. If you are using this sandbox &lt;b&gt;NOT for Security&lt;/b&gt; but for simple application portability, by changing these options you can restore compatibility by sacrificing some security.</source>
        <translation>各种高级隔离功能可能会影响部分应用程序的兼容性，如果你使用沙盒，&lt;b&gt;不是为了安全性&lt;b&gt;，而只是为了应用程序的可移植性，则可以通过改变这些选项，牺牲一些安全性来恢复兼容性</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1213"/>
        <source>Security Isolation &amp; Filtering</source>
        <translation>安全隔离 &amp; 筛查</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1112"/>
        <source>Disable Security Filtering (not recommended)</source>
        <translation>禁用安全筛查功能 (不推荐)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1237"/>
        <source>Security Filtering used by Sandboxie to enforce filesystem and registry access restrictions, as well as to restrict process access.</source>
        <translation>安全筛查被 Sandboxie 用来强制执行文件系统和注册表访问限制，以及限制进程访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1183"/>
        <source>The below options can be used safely when you don&apos;t grant admin rights.</source>
        <translation>以下选项可以在你未授予管理员权限时安全的使用</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3307"/>
        <source>Triggers</source>
        <translation>触发器</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3370"/>
        <source>Event</source>
        <translation>事件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3340"/>
        <location filename="Forms/OptionsWindow.ui" line="3359"/>
        <location filename="Forms/OptionsWindow.ui" line="3497"/>
        <source>Run Command</source>
        <translation>执行命令</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3529"/>
        <source>Start Service</source>
        <translation>启动服务</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3504"/>
        <source>These events are executed each time a box is started</source>
        <translation>这些事件当沙盒每次启动时都会被执行</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3507"/>
        <source>On Box Start</source>
        <translation>沙盒启动阶段</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3388"/>
        <location filename="Forms/OptionsWindow.ui" line="3536"/>
        <source>These commands are run UNBOXED just before the box content is deleted</source>
        <translation>这些命令将在删除沙盒的内容之前，以非沙盒化的方式被执行</translation>
    </message>
    <message>
        <source>On Box Delete</source>
        <translation type="vanished">删除阶段</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3462"/>
        <source>These commands are executed only when a box is initialized. To make them run again, the box content must be deleted.</source>
        <translation>这些命令只在沙盒被初始化时执行，要使它们再次运行，必须删除沙盒内容</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3465"/>
        <source>On Box Init</source>
        <translation>沙盒初始阶段</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3475"/>
        <source>Here you can specify actions to be executed automatically on various box events.</source>
        <translation>在此处可以配置各种沙盒事件中自动执行特定的动作</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3895"/>
        <source>API call trace (requires LogAPI to be installed in the Sbie directory)</source>
        <oldsource>API call trace (requirers logapi to be installed in the sbie dir)</oldsource>
        <translation>API 调用跟踪 (需要安装 LogAPI 模块到沙盒目录)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3935"/>
        <source>Log all SetError&apos;s to Trace log (creates a lot of output)</source>
        <translation>记录所有 SetError 到跟踪日志 (将产生大量输出)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3989"/>
        <source>File Trace</source>
        <translation>文件跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3915"/>
        <source>Pipe Trace</source>
        <translation>管道跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4051"/>
        <source>Access Tracing</source>
        <translation>访问跟踪</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3955"/>
        <source>Log Debug Output to the Trace Log</source>
        <translation>调试日志输出到跟踪日志</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3962"/>
        <source>Log all access events as seen by the driver to the resource access log.

This options set the event mask to &quot;*&quot; - All access events
You can customize the logging using the ini by specifying
&quot;A&quot; - Allowed accesses
&quot;D&quot; - Denied accesses
&quot;I&quot; - Ignore access requests
instead of &quot;*&quot;.</source>
        <translation>将驱动程序看到的所有访问事件记录到资源访问日志

这些选项将事件掩码设定为 &quot;*&quot; - 所有访问事件
另外可以通过编辑配置文本来详细自定义日志行为
&quot;A&quot; - 允许的访问
&quot;D&quot; - 拒绝的访问
&quot;I&quot; - 忽略访问请求
来代替 &quot;*&quot;</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3982"/>
        <source>Ntdll syscall Trace (creates a lot of output)</source>
        <translation>Ntdll 系统调用跟踪 (将产生大量输出)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3996"/>
        <source>Disable Resource Access Monitor</source>
        <translation>禁用资源访问监控器</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4024"/>
        <source>Resource Access Monitor</source>
        <translation>资源访问监控</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2839"/>
        <location filename="Forms/OptionsWindow.ui" line="4072"/>
        <source>Network Firewall</source>
        <translation>网络防火墙</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4089"/>
        <source>Debug</source>
        <translation>调试</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4145"/>
        <source>WARNING, these options can disable core security guarantees and break sandbox security!!!</source>
        <translation>警告，这些选项可使核心安全保障失效并且破坏沙盒安全！</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4155"/>
        <source>These options are intended for debugging compatibility issues, please do not use them in production use. </source>
        <translation>这些选项是为调试兼容性问题提供的，日常使用者勿碰 </translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4170"/>
        <source>App Templates</source>
        <translation>应用模板</translation>
    </message>
    <message>
        <source>Compatibility Templates</source>
        <translation type="vanished">兼容性模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4200"/>
        <source>Filter Categories</source>
        <translation>类别筛选</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4213"/>
        <source>Text Filter</source>
        <translation>文本筛选</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4220"/>
        <source>Add Template</source>
        <translation>添加模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4227"/>
        <source>This list contains a large amount of sandbox compatibility enhancing templates</source>
        <translation>此列表含有大量的沙盒兼容性增强模板</translation>
    </message>
    <message>
        <source>Remove Template</source>
        <translation type="vanished">删除模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4264"/>
        <source>Category</source>
        <translation>类别</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4280"/>
        <source>Template Folders</source>
        <translation>目录模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4300"/>
        <source>Configure the folder locations used by your other applications.

Please note that this values are currently user specific and saved globally for all boxes.</source>
        <translation>配置你的其它应用程序所使用的文件夹位置

请注意，这些值对当前用户的所有沙盒保存</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3856"/>
        <location filename="Forms/OptionsWindow.ui" line="4331"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4342"/>
        <source>Accessibility</source>
        <translation>无障碍功能</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4438"/>
        <source>To compensate for the lost protection, please consult the Drop Rights settings page in the Restrictions settings group.</source>
        <translation>要弥补失去的保护，请参考“限制”设置组中的降低权限部分</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4362"/>
        <source>Screen Readers: JAWS, NVDA, Window-Eyes, System Access</source>
        <translation>屏幕阅读器：JAWS、NVDA、Window-Eyes、系统无障碍接口</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="321"/>
        <source>Use volume serial numbers for drives, like: \drive\C~1234-ABCD</source>
        <translation>使用驱动器的卷系列号，例如：\drive\C~1234-ABCD</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="355"/>
        <source>The box structure can only be changed when the sandbox is empty</source>
        <translation>只有在沙盒为空时，才能更改沙盒结构</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="362"/>
        <source>Allow sandboxed processes to open files protected by EFS</source>
        <translation>允许沙盒内的进程打开受 EFS 保护的文件</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="376"/>
        <source>Disk/File access</source>
        <translation>“磁盘/文件”访问权限</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="383"/>
        <source>Virtualization scheme</source>
        <translation>虚拟化方案</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="488"/>
        <source>2113: Content of migrated file was discarded
2114: File was not migrated, write access to file was denied
2115: File was not migrated, file will be opened read only</source>
        <translation>2113：待迁移文件的内容被遗弃了
2114：文件没有被迁移，文件的写入访问被拒绝
2115：文件没有被迁移，文件将以只读方式打开</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="493"/>
        <source>Issue message 2113/2114/2115 when a file is not fully migrated</source>
        <translation>当一个文件没有被完全迁移时，提示问题代码：2113/2114/2115</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="517"/>
        <source>Add Pattern</source>
        <translation>添加“模式”</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="524"/>
        <source>Remove Pattern</source>
        <translation>移除“模式”</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="578"/>
        <source>Pattern</source>
        <translation>模式</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="586"/>
        <source>Sandboxie does not allow writing to host files, unless permitted by the user. When a sandboxed application attempts to modify a file, the entire file must be copied into the sandbox, for large files this can take a significate amount of time. Sandboxie offers options for handling these cases, which can be configured on this page.</source>
        <translation>Sandboxie 不被允许对主机文件进行写入，除非得到用户的允许
当沙盒化的应用程序试图修改一个文件时，整个文件必须被复制到沙盒中
对于大文件来说，这可能需要相当长的时间
Sandboxie 提供了针对这些情况的处理选项，可以在此页面进行配置</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="596"/>
        <source>Using wildcard patterns file specific behavior can be configured in the list below:</source>
        <translation>使用“通配符模式”，具体的文件行为可以在下面的列表中进行配置：</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="610"/>
        <source>When a file cannot be migrated, open it in read-only mode instead</source>
        <translation>当一个文件不能被迁移时，尝试以只读模式打开它</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="620"/>
        <source>Restrictions</source>
        <translation>限制选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3007"/>
        <source>Quick Recovery</source>
        <translation>快速恢复</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3086"/>
        <source>Immediate Recovery</source>
        <translation>即时恢复</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3183"/>
        <source>Various Options</source>
        <translation>其它杂项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3297"/>
        <source>Apply ElevateCreateProcess Workaround (legacy behaviour)</source>
        <translation>应用 ElevateCreateProcess 解决方案 (传统行为)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3337"/>
        <source>This command will be run before the box content will be deleted</source>
        <translation>该命令将在删除沙盒内容之前运行</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3391"/>
        <source>On File Recovery</source>
        <translation>文件恢复阶段</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3420"/>
        <source>This command will be run before a file is being recovered and the file path will be passed as the first argument. If this command returns anything other than 0, the recovery will be blocked</source>
        <oldsource>This command will be run before a file is being recoverd and the file path will be passed as the first argument, if this command return something other than 0 the recovery will be blocked</oldsource>
        <translation>该命令将在文件恢复前运行，文件路径将作为最先被传递的参数，如果该命令的返回值不为 0，恢复动作将被终止</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3423"/>
        <source>Run File Checker</source>
        <translation>运行文件检查</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3539"/>
        <source>On Delete Content</source>
        <translation>内容删除阶段</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3620"/>
        <source>Protect processes in this box from being accessed by specified unsandboxed host processes.</source>
        <translation>保护此沙盒内的进程不被指定的非沙盒的主机进程访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3631"/>
        <location filename="Forms/OptionsWindow.ui" line="3695"/>
        <source>Process</source>
        <translation>进程</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3671"/>
        <source>Block also read access to processes in this sandbox</source>
        <translation>阻止对位于该沙盒中的进程的读取访问</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3821"/>
        <source>Add Option</source>
        <translation>添加选项</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3835"/>
        <source>Here you can configure advanced per process options to improve compatibility and/or customize sandboxing behavior.</source>
        <oldsource>Here you can configure advanced per process options to improve compatibility and/or customize sand boxing behavior.</oldsource>
        <translation>在此处可以配置各个进程的高级选项，以提高兼容性或自定义沙盒的某些行为</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3846"/>
        <source>Option</source>
        <translation>选项</translation>
    </message>
    <message>
        <source>DNS Request Logging</source>
        <oldsource>Dns Request Logging</oldsource>
        <translation type="obsolete">DNS 请求记录</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4180"/>
        <source>Templates</source>
        <translation>模板</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4402"/>
        <source>The following settings enable the use of Sandboxie in combination with accessibility software.  Please note that some measure of Sandboxie protection is necessarily lost when these settings are in effect.</source>
        <translation>以下设置允许 Sandboxie 与辅助功能软件结合，请注意当这些设置生效时，会失去 Sandboxie 的部分保护措施</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4455"/>
        <source>Edit ini Section</source>
        <translation>配置文本</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4461"/>
        <source>Edit ini</source>
        <translation>编辑配置</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4474"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4497"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
</context>
<context>
    <name>PopUpWindow</name>
    <message>
        <location filename="Forms/PopUpWindow.ui" line="32"/>
        <source>SandboxiePlus Notifications</source>
        <translation>SandboxiePlus 通知</translation>
    </message>
</context>
<context>
    <name>ProgramsDelegate</name>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="47"/>
        <source>Group: %1</source>
        <translation>组: %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="Views/SbieView.cpp" line="1400"/>
        <source>Drive %1</source>
        <translation>磁盘 %1</translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="SandMan.cpp" line="3313"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3314"/>
        <source>Apply</source>
        <translation>应用</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3315"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3316"/>
        <source>&amp;Yes</source>
        <translation>是(&amp;Y)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3317"/>
        <source>&amp;No</source>
        <translation>否(&amp;N)</translation>
    </message>
</context>
<context>
    <name>RecoveryWindow</name>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="32"/>
        <source>SandboxiePlus - Recovery</source>
        <translation>SandboxiePlus - 恢复</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="164"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="68"/>
        <source>Recover target:</source>
        <translation>恢复目标位置：</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="61"/>
        <source>Delete Content</source>
        <translation>删除内容</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="42"/>
        <source>Add Folder</source>
        <translation>添加文件夹</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="110"/>
        <source>Recover</source>
        <translation>恢复</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="78"/>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="142"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="171"/>
        <source>Show All Files</source>
        <translation>显示所有文件</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="184"/>
        <source>TextLabel</source>
        <translation>文本标签</translation>
    </message>
</context>
<context>
    <name>SelectBoxWindow</name>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="32"/>
        <source>SandboxiePlus select box</source>
        <translation>SandboxiePlus 选择沙盒</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="87"/>
        <source>Select the sandbox in which to start the program, installer or document.</source>
        <translation>选择要用于运行程序、安装程序或打开文件的沙盒</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="97"/>
        <source>Run in a new Sandbox</source>
        <translation>在新沙盒中运行</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="65"/>
        <source>Sandbox</source>
        <translation>沙盒</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="80"/>
        <source>Run As UAC Administrator</source>
        <translation>以 UAC 管理员权限运行</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="47"/>
        <source>Run Sandboxed</source>
        <translation>在此沙盒内运行</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="73"/>
        <source>Run Outside the Sandbox</source>
        <translation>在沙盒外运行</translation>
    </message>
</context>
<context>
    <name>SettingsWindow</name>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="32"/>
        <source>SandboxiePlus Settings</source>
        <translation>SandboxiePlus 设置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="52"/>
        <source>General Config</source>
        <oldsource>General Options</oldsource>
        <translation>常规选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="182"/>
        <source>Show Notifications for relevant log Messages</source>
        <translation>显示有关日志消息的通知</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="131"/>
        <source>Open urls from this ui sandboxed</source>
        <translation>总是在沙盒中打开设置页面的链接</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="90"/>
        <source>Run box operations asynchronously whenever possible (like content deletion)</source>
        <translation>尽可能以异步方式执行沙盒的各类操作 (如内容删除)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="124"/>
        <source>General Options</source>
        <translation>常规选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="297"/>
        <source>Show boxes in tray list:</source>
        <translation>沙盒列表显示：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="327"/>
        <source>Add &apos;Run Un-Sandboxed&apos; to the context menu</source>
        <translation>添加“在沙盒外运行”到右键菜单</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="231"/>
        <source>Show a tray notification when automatic box operations are started</source>
        <translation>当沙盒自动化作业事件开始执行时，弹出托盘通知</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1014"/>
        <source>Activate Kernel Mode Object Filtering</source>
        <translation>激活内核模式的对象过滤器</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1120"/>
        <source>Hook selected Win32k system calls to enable GPU acceleration (experimental)</source>
        <translation>Hook 选定的 Win32k 系统调用钩子以启用 GPU 加速 (实验性)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="161"/>
        <source>Recovery Options</source>
        <translation>恢复选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="341"/>
        <source>Start Menu Integration</source>
        <translation>开始菜单集成</translation>
    </message>
    <message>
        <source>Integrate boxes with Host Start Menu</source>
        <translation type="vanished">整合沙盒与宿主开始菜单</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="241"/>
        <source>Scan shell folders and offer links in run menu</source>
        <translation>扫描系统 Shell 目录并在开始菜单中集成快捷方式</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="395"/>
        <source>Integrate with Host Start Menu</source>
        <translation>与主机开始菜单整合：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="458"/>
        <source>User Interface</source>
        <translation>用户界面</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="631"/>
        <source>Use new config dialog layout *</source>
        <translation>使用新的配置对话框视图 *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="644"/>
        <source>Run Menu</source>
        <translation>运行菜单</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="662"/>
        <source>Add program</source>
        <translation>添加程序</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="669"/>
        <source>You can configure custom entries for all sandboxes run menus.</source>
        <translation>你可以为所有沙盒配置自定义运行菜单条目</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="704"/>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="720"/>
        <source>Command Line</source>
        <translation>命令行</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="733"/>
        <source>Support &amp;&amp; Updates</source>
        <translation>支持 &amp;&amp; 更新</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="980"/>
        <source>Sandbox Config</source>
        <translation>沙盒配置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1094"/>
        <source>Default sandbox:</source>
        <translation>默认沙盒: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1277"/>
        <source>Program Alerts</source>
        <translation>程序警报</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1359"/>
        <source>Issue message 1301 when forced processes has been disabled</source>
        <translation>当必沙进程被禁止时，提示问题代码 1301</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1367"/>
        <source>Compatibility</source>
        <translation>软件兼容</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1431"/>
        <source>Edit ini Section</source>
        <translation>配置文本</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1440"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1447"/>
        <source>Edit ini</source>
        <translation>编辑配置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1473"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Support</source>
        <translation type="vanished">捐赠支持</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="807"/>
        <source>Version Updates</source>
        <translation>待更新版本：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="900"/>
        <source>New full versions from the selected release channel.</source>
        <translation>来自选定发布通道的新的完整版本</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="804"/>
        <source>Hotpatches for the installed version, updates to the Templates.ini and translations.</source>
        <translation>针对已安装版本的 Templates.ini 模板和翻译的热更新补丁</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="827"/>
        <source>The preview channel contains the latest GitHub pre-releases.</source>
        <translation>预览版通道包含最新的 GitHub 预发布版本</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="903"/>
        <source>New Versions</source>
        <translation>新版本：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="957"/>
        <source>The stable channel contains the latest stable GitHub releases.</source>
        <translation>稳定版通道包含最新的 GitHub 稳定版本</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="960"/>
        <source>Search in the Stable channel</source>
        <translation>稳定版通道</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="774"/>
        <source>Keeping Sandboxie up to date with the rolling releases of Windows and compatible with all web browsers is a never-ending endeavor. Please consider supporting this work with a donation.&lt;br /&gt;You can support the development with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;PayPal donation&lt;/a&gt;, working also with credit cards.&lt;br /&gt;Or you can provide continuous support with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Patreon subscription&lt;/a&gt;.</source>
        <translation>使 Sandboxie 与 Windows 的滚动更新保持同步，并和主流浏览器保持兼容性，这是一项永无止境的事业，请考虑捐赠以支持这项工作&lt;br /&gt;您可以通过 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;PayPal 捐赠&lt;/a&gt; (支持使用信用卡付款)来支持项目的开发&lt;br /&gt;您也可以通过 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Patreon 订阅&lt;/a&gt; 来提供持续的捐赠支持</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="830"/>
        <source>Search in the Preview channel</source>
        <translation>预览版通道</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="787"/>
        <source>Supporters of the Sandboxie-Plus project can receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporter certificate&lt;/a&gt;. It&apos;s like a license key but for awesome people using open source software. :-)</source>
        <translation>Sandboxie-Plus 项目的赞助者将收到 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;赞助者凭据&lt;/a&gt;，这类似于许可密钥，是为拥抱开源软件的优秀人士准备的 :-)</translation>
    </message>
    <message>
        <source>Search in the Release channel</source>
        <translation type="vanished">发布通道</translation>
    </message>
    <message>
        <source>Install updates automatically</source>
        <translation type="vanished">自动安装更新</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="751"/>
        <source>This supporter certificate has expired, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>此赞助者凭据已过期，请&lt;a href=&quot;sbie://update/cert&quot;&gt;获取新凭据&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="937"/>
        <source>Check periodically for updates of Sandboxie-Plus</source>
        <translation>定期检查有无 Sandboxie-Plus 更新</translation>
    </message>
    <message>
        <source>Download Updates automatically</source>
        <translation type="vanished">仅下载更新包</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="930"/>
        <source>In the future, don&apos;t notify about certificate expiration</source>
        <translation>不再通知凭据过期的情况</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="248"/>
        <source>Start UI with Windows</source>
        <translation>随系统启动沙盒管理器</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="375"/>
        <source>Add &apos;Run Sandboxed&apos; to the explorer context menu</source>
        <translation>在资源管理器中添加“在沙盒中运行”右键菜单</translation>
    </message>
    <message>
        <source>On main window close:</source>
        <translation type="vanished">关闭主窗口时：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="408"/>
        <source>Start UI when a sandboxed process is started</source>
        <translation>随沙盒化应用启动沙盒管理器</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="192"/>
        <source>Show file recovery window when emptying sandboxes</source>
        <oldsource>Show first recovery window when emptying sandboxes</oldsource>
        <translation>在清空沙盒时显示恢复窗口</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1235"/>
        <source>Config protection</source>
        <translation>保护配置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1081"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/ipcrootpath&quot;&gt;ipc root&lt;/a&gt;: </source>
        <translation>沙盒 &lt;a href=&quot;sbie://docs/ipcrootpath&quot;&gt;IPC&#x3000;根目录&lt;/a&gt;: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1104"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/keyrootpath&quot;&gt;registry root&lt;/a&gt;: </source>
        <translation>沙盒 &lt;a href=&quot;sbie://docs/keyrootpath&quot;&gt;注册表根目录&lt;/a&gt;: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1249"/>
        <source>Clear password when main window becomes hidden</source>
        <translation>主窗口隐藏时清除密码</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1242"/>
        <source>Only Administrator user accounts can use Pause Forcing Programs command</source>
        <oldsource>Only Administrator user accounts can use Pause Forced Programs Rules command</oldsource>
        <translation>仅管理员用户可「停用必沙程序规则」</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1054"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/filerootpath&quot;&gt;file system root&lt;/a&gt;: </source>
        <translation>沙盒 &lt;a href=&quot;sbie://docs/filerootpath&quot;&gt;文件系统根目录&lt;/a&gt;: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="170"/>
        <source>Hotkey for terminating all boxed processes:</source>
        <translation>终止所有沙盒内进程的快捷键:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="317"/>
        <source>Systray options</source>
        <translation>任务栏托盘区域选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="70"/>
        <source>Show recoverable files as notifications</source>
        <translation>将可恢复的文件以通知形式显示</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="80"/>
        <source>UI Language:</source>
        <translation>界面语言:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="284"/>
        <source>Show Icon in Systray:</source>
        <translation>托盘图标显示：</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="209"/>
        <source>Shell Integration</source>
        <translation>系统集成</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="224"/>
        <source>Run Sandboxed - Actions</source>
        <translation>“在沙盒中运行”选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="425"/>
        <source>Always use DefaultBox</source>
        <translation>总是使用 DefaultBox 沙盒</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="368"/>
        <source>Start Sandbox Manager</source>
        <translation>沙盒管理器启动选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="970"/>
        <source>Advanced Config</source>
        <translation>高级选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1041"/>
        <source>Use Windows Filtering Platform to restrict network access</source>
        <translation>使用 Windows 筛选平台 (WFP) 限制网络访问</translation>
    </message>
    <message>
        <source>Separate user folders</source>
        <translation type="vanished">启用相互独立的用户目录(个人文件夹)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1074"/>
        <source>Sandboxing features</source>
        <translation>沙盒功能</translation>
    </message>
    <message>
        <source>Supporters of the Sandboxie-Plus project receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;. It&apos;s like a license key but for awesome people using open source software. :-)</source>
        <translation type="vanished">Sandboxie-Plus 项目的赞助者将收到&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;赞助者凭据&lt;/a&gt;，这类似于许可密钥，是为拥抱开源软件的优秀人士准备的 :-)</translation>
    </message>
    <message>
        <source>Program Control</source>
        <translation type="vanished">程序控制</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1193"/>
        <source>Sandboxie Config</source>
        <oldsource>Config Protection</oldsource>
        <translation>保护配置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1256"/>
        <source>Only Administrator user accounts can make changes</source>
        <translation>仅管理员用户可更改</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1208"/>
        <source>Password must be entered in order to make changes</source>
        <translation>更改必须输入密码</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1201"/>
        <source>Change Password</source>
        <translation>更改密码</translation>
    </message>
    <message>
        <source>Keeping Sandboxie up to date with the rolling releases of Windows and compatible with all web browsers is a never-ending endeavor. Please consider supporting this work with a donation.&lt;br /&gt;You can support the development with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=donate&quot;&gt;PayPal donation&lt;/a&gt;, working also with credit cards.&lt;br /&gt;Or you can provide continuous support with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Patreon subscription&lt;/a&gt;.</source>
        <translation type="vanished">使 Sandboxie 与 Windows 的滚动更新保持同步，并和主流浏览器保持兼容性，是一项永无止境的努力，请考虑捐赠以支持这项工作&lt;br /&gt;您可以通过 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=donate&quot;&gt;PayPal 捐赠&lt;/a&gt; (支持使用信用卡付款)来支持项目的开发&lt;br /&gt;您也可以通过 &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Patreon 订阅&lt;/a&gt; 来提供持续的捐赠支持</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="950"/>
        <source>Enter the support certificate here</source>
        <translation>在此输入赞助者凭据</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="844"/>
        <source>Support Settings</source>
        <translation>支持设置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1183"/>
        <source>Portable root folder</source>
        <translation>便携化根目录</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1027"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1160"/>
        <source>Sandbox default</source>
        <translation>沙盒预设</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1263"/>
        <source>Watch Sandboxie.ini for changes</source>
        <translation>监控 Sandboxie.ini 变更</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="199"/>
        <source>Count and display the disk space occupied by each sandbox</source>
        <oldsource>Count and display the disk space ocupied by each sandbox</oldsource>
        <translation>统计并显示每个沙盒的磁盘空间占用情况</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="415"/>
        <source>Use Compact Box List</source>
        <translation>使用紧凑的沙盒列表</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="448"/>
        <source>Interface Config</source>
        <translation>界面设置</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="516"/>
        <source>Show &quot;Pizza&quot; Background in box list *</source>
        <oldsource>Show &quot;Pizza&quot; Background in box list*</oldsource>
        <translation>在沙盒列表中显示“披萨”背景 *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="614"/>
        <source>Make Box Icons match the Border Color</source>
        <translation>保持沙盒内的图标与边框颜色一致</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="539"/>
        <source>Use a Page Tree in the Box Options instead of Nested Tabs *</source>
        <translation>在沙盒选项中使用页面树，而不是嵌套标签 *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="556"/>
        <source>Interface Options</source>
        <translation>界面选项</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="570"/>
        <source>Use large icons in box list *</source>
        <translation>在沙盒列表中使用大图标 *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="580"/>
        <source>High DPI Scaling</source>
        <translation>高 DPI 缩放</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="621"/>
        <source>Don&apos;t show icons in menus *</source>
        <translation>不在“工具栏/菜单列表”中显示图标 *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="506"/>
        <source>Use Dark Theme</source>
        <translation>使用深色主题</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="466"/>
        <source>Font Scaling</source>
        <translation>字体缩放</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="483"/>
        <source>(Restart required)</source>
        <translation>(需要重启沙盒)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="563"/>
        <source>* a partially checked checkbox will leave the behavior to be determined by the view mode.</source>
        <translation>* 标复选框的显示效果取决于具体的视图模式</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="97"/>
        <source>Show the Recovery Window as Always on Top</source>
        <translation>始终置顶恢复文件窗口</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="600"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="607"/>
        <source>Alternate row background in lists</source>
        <translation>在沙盒列表中使用奇偶(交替)行背景色</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="590"/>
        <source>Use Fusion Theme</source>
        <translation>使用 Fusion 风格主题</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1034"/>
        <source>Use a Sandboxie login instead of an anonymous token (experimental)</source>
        <translation>使用 Sandboxie 限权用户，而不是匿名令牌 (实验性)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="715"/>
        <location filename="Forms/SettingsWindow.ui" line="1293"/>
        <location filename="Forms/SettingsWindow.ui" line="1397"/>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="60"/>
        <source>This option also enables asynchronous operation when needed and suspends updates.</source>
        <translation>在暂缓更新或其它需要的情况使用异步操作</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="63"/>
        <source>Suppress pop-up notifications when in game / presentation mode</source>
        <translation>在“游戏/演示”模式下，禁止弹出通知</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1298"/>
        <source>Path</source>
        <translation>路径</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1306"/>
        <source>Remove Program</source>
        <translation>删除程序</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1326"/>
        <source>Add Program</source>
        <translation>添加程序</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1333"/>
        <source>When any of the following programs is launched outside any sandbox, Sandboxie will issue message SBIE1301.</source>
        <translation>下列程序在沙盒之外启动时，Sandboxie 将提示 SBIE1301 警告</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1343"/>
        <source>Add Folder</source>
        <translation>添加文件夹</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1350"/>
        <source>Prevent the listed programs from starting on this system</source>
        <translation>阻止下列程序在此系统中启动</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1283"/>
        <source>Issue message 1308 when a program fails to start</source>
        <translation>程序启动失败时，提示问题代码 1308</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1375"/>
        <source>In the future, don&apos;t check software compatibility</source>
        <translation>之后不再检查软件兼容性</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1382"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1389"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1418"/>
        <source>Sandboxie has detected the following software applications in your system. Click OK to apply configuration settings, which will improve compatibility with these applications. These configuration settings will have effect in all existing sandboxes and in any new sandboxes.</source>
        <translation>沙盒已检测到系统中安装了以下软件，点击“确定”应用配置，将改进与这些软件的兼容性，这些配置将作用于所有沙盒，包括现存和未来新增的沙盒</translation>
    </message>
</context>
<context>
    <name>SnapshotsWindow</name>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="32"/>
        <source>SandboxiePlus - Snapshots</source>
        <translation>SandboxiePlus - 快照</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="60"/>
        <source>Selected Snapshot Details</source>
        <translation>所选快照详情</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="79"/>
        <source>Name:</source>
        <translation>名称：</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="69"/>
        <source>Description:</source>
        <translation>说明：</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="86"/>
        <source>When deleting a snapshot content, it will be returned to this snapshot instead of none.</source>
        <translation>当删除一个快照时，它将被回退到此快照创建时的状态，而不是直接清空</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="89"/>
        <source>Default snapshot</source>
        <translation>默认快照</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="108"/>
        <source>Snapshot Actions</source>
        <translation>快照操作</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="134"/>
        <source>Remove Snapshot</source>
        <translation>移除快照</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="153"/>
        <source>Go to Snapshot</source>
        <translation>进入快照</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="114"/>
        <source>Take Snapshot</source>
        <translation>抓取快照</translation>
    </message>
</context>
</TS>
