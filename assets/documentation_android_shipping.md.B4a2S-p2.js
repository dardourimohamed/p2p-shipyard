import{_ as i,c as a,o as s,a1 as e}from"./chunks/framework.rLYnVynv.js";const u=JSON.parse('{"title":"Shipping your app for Android","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/android/shipping.md","filePath":"documentation/android/shipping.md"}'),t={name:"documentation/android/shipping.md"},n=e(`<h1 id="shipping-your-app-for-android" tabindex="-1">Shipping your app for Android <a class="header-anchor" href="#shipping-your-app-for-android" aria-label="Permalink to &quot;Shipping your app for Android&quot;">​</a></h1><p>To build a production version of your app, you just need to run this very simple command inside the <code>androidDev</code> devShell:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eJMVz" id="tab-fBNhfc7" checked><label for="tab-fBNhfc7">npm</label><input type="radio" name="group-eJMVz" id="tab-V41zxr4"><label for="tab-V41zxr4">yarn</label><input type="radio" name="group-eJMVz" id="tab-b0pSYpf"><label for="tab-b0pSYpf">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> develop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .#androidDev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tauri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> develop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .#androidDev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tauri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> develop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .#androidDev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tauri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div></div></div><p>Take into account that this will compile your app for all the different Android target architectures: it will take a long time.</p><p>That&#39;s it! When the command finishes, you can copy the resulting <code>Android App Bundle</code> and <a href="https://developer.android.com/studio/publish" target="_blank" rel="noreferrer">publish it on the <code>Google Play Store</code></a>, or the release method of your choosing.</p>`,5),p=[n];function d(h,l,o,r,k,c){return s(),a("div",null,p)}const F=i(t,[["render",d]]);export{u as __pageData,F as default};
