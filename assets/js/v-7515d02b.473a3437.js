"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14534],{79497:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-7515d02b",path:"/devices/067774.html",title:"Legrand 067774 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 067774 control via MQTT",description:"Integrate your Legrand 067774 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-06-29T17:33:31.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]},{level:3,title:"Model numbers",slug:"model-numbers",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/067774.md",git:{updatedTime:1635784079e3}}},38791:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(66252);const a=(0,i.uE)('<h1 id="legrand-067774" tabindex="-1"><a class="header-anchor" href="#legrand-067774" aria-hidden="true">#</a> Legrand 067774</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>067774</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Wireless double remote switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/067774.jpg" alt="Legrand 067774"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),d=(0,i.Uk)("How to use device type specific configuration"),o=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Set to <code>true</code> to simulate a <code>brightness</code> value (default: <code>false</code>). If this device provides a <code>brightness_move_up</code> or <code>brightness_move_down</code> action it is possible to specify the update interval and delta. This can be done by instead of specifying <code>true</code>:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers" aria-hidden="true">#</a> Model numbers</h3><p>Model number depends on the country and the colour of the devices. For example:</p><ul><li>French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 24&quot;, &quot;0 677 74&quot;, and &quot;0 677 94&quot;.</li><li>Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 12&quot;, &quot;7 418 42&quot; and &quot;7 418 72&quot;.</li></ul><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',6),s=(0,i.Uk)("The remote supports "),r=(0,i.Uk)("binding"),c=(0,i.Uk)(" on each endpoint, so you can bind each button to a different device/group."),l=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),u={},h=(0,n(83744).Z)(u,[["render",function(e,t){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),o,(0,i._)("p",null,[s,(0,i.Wm)(n,{to:"/guide/usage/binding.html"},{default:(0,i.w5)((()=>[r])),_:1}),c]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,i]of t)e[n]=i;return e}}}]);