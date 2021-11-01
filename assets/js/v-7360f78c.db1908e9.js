"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82079],{83844:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-7360f78c",path:"/devices/067773.html",title:"Legrand 067773 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 067773 control via MQTT",description:"Integrate your Legrand 067773 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Legacy integration",slug:"legacy-integration",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]},{level:3,title:"Model numbers",slug:"model-numbers",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/067773.md",git:{updatedTime:1635784079e3}}},59552:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(66252);const i=(0,n.uE)('<h1 id="legrand-067773" tabindex="-1"><a class="header-anchor" href="#legrand-067773" aria-hidden="true">#</a> Legrand 067773</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>067773</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Wireless remote switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/067773.jpg" alt="Legrand 067773"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration" aria-hidden="true">#</a> Legacy integration</h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><p>{% raw %}</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>{% endraw %}</p><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',9),d=(0,n.Uk)("How to use device type specific configuration"),o=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"legacy"),(0,n.Uk)(": Set to "),(0,n._)("code",null,"false"),(0,n.Uk)(" to disable the legacy integration (highly recommended!) (default: true)")])],-1),r=(0,n._)("h3",{id:"model-numbers",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#model-numbers","aria-hidden":"true"},"#"),(0,n.Uk)(" Model numbers")],-1),s=(0,n._)("p",null,'Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 23", "0 677 73", and "0 648 93". Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 13", "7 418 43" and "7 418 73".',-1),l=(0,n._)("h3",{id:"binding",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,n.Uk)(" Binding")],-1),c=(0,n.Uk)("The remote supports "),u=(0,n.Uk)("binding"),h=(0,n.Uk)("."),p=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),g={},m=(0,a(83744).Z)(g,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[d])),_:1})])]),o,r,s,l,(0,n._)("p",null,[c,(0,n.Wm)(a,{to:"/guide/usage/binding.html"},{default:(0,n.w5)((()=>[u])),_:1}),h]),p],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}}}]);