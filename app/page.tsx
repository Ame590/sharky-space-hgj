export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#top" aria-label="SHARKY SPACE 首页">
            <span className="brand-dot"><img src="/assets/HAI-SHARKY-v2-cutout.png" alt="" /></span>
            <span>HAI SHARKY</span>
          </a>
          <div className="nav-links">
            <a href="#profile">角色档案</a>
            <a href="#expressions">形象展示</a>
            <a href="#applications">应用场景</a>
            <a href="#merch">周边延伸</a>
            <a href="#visual">色彩视觉</a>
          </div>
        </nav>

        <div className="hero-stage shell">
          <h1 className="sr-only">HAI SHARKY</h1>

          <div className="hero-type-scene" aria-hidden="true">
            <span className="stage-letter stage-s">S</span>
            <span className="stage-letter stage-h">H</span>
            <span className="stage-letter stage-a">A</span>
            <span className="stage-letter stage-r">R</span>
            <span className="stage-letter stage-k">K</span>
            <span className="stage-letter stage-y">Y</span>
          </div>

          <div className="hero-mascot">
            <span className="mascot-halo" />
            <span className="mascot-orbit mascot-orbit-one" />
            <span className="mascot-orbit mascot-orbit-two" />
            <img src="/assets/HAI-SHARKY-v2-cutout.png" alt="海管家 AI 智能伙伴 HAI SHARKY 新版主形象" />
          </div>

          <a className="explore hero-center-cta" href="#profile"><span>认识 SHARKY</span><i>↓</i></a>

          <div className="hero-chip chip-booking"><span>AI订舱</span></div>
          <div className="hero-chip chip-quote"><span>AI询报价</span></div>
          <div className="hero-chip chip-doc"><span>AI单证</span></div>
          <div className="hero-chip chip-customs"><span>AI报关</span></div>
          <div className="hero-pixel pixel-a" />
          <div className="hero-pixel pixel-b" />
          <div className="hero-pixel pixel-c" />
          <div className="hero-spark spark-a">✦</div>
          <div className="hero-spark spark-b">✦</div>
        </div>
      </section>

      <section className="profile section" id="profile">
        <div className="section-head shell">
          <p><b>01</b> CHARACTER PROFILE</p>
          <span>YOUR AI PARTNER ACROSS THE OCEAN</span>
        </div>
        <div className="profile-grid shell">
          <div className="profile-art">
            <div className="profile-type-scene" aria-hidden="true">
              <span>H</span><span>A</span><span>I</span>
            </div>
            <div className="profile-image-wrap">
              <img src="/assets/HAI-SHARKY-v2-cutout.png" alt="HAI SHARKY 新版角色主形象特写" />
            </div>
          </div>
          <div className="profile-story">
            <h2>不停游动，<br />也<span>不停止进化。</span></h2>
            <p className="story-copy">HAI SHARKY 是海管家 AI 科技能力的 IP 化身。鲨鱼以持续游动保持生命力，它也代表海管家“不停止进化”的技术信念；面对每一个复杂的国际物流场景，它选择 Make it happen。</p>
            <div className="traits">
              <span>持续进化</span>
              <span>Make it happen</span>
              <span>连接多彩世界</span>
            </div>
            <dl className="profile-data">
              <div><dt>ROLE</dt><dd>海管家 AI 智能伙伴</dd></div>
              <div><dt>DNA</dt><dd>持续进化 · 永远向前</dd></div>
              <div><dt>POWER</dt><dd>AI</dd></div>
              <div><dt>MISSION</dt><dd>让智能物流支撑多彩世界的转动</dd></div>
            </dl>
          </div>
        </div>

      </section>

      <section className="views section" id="views">
        <div className="section-head section-head-light shell">
          <p><b>02</b> CHARACTER VIEWS</p>
          <span>FRONT · SIDE · BACK</span>
        </div>
        <div className="views-title shell">
          <h2>每一个角度，<br />都保持<span>敏锐在线。</span></h2>
          <p>圆润、友好的视觉语言消解运输流程的复杂感，<br />让专业能力拥有更亲近的表达。</p>
        </div>
        <div className="views-stage shell">
          <div className="view-ghost-words" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
          <div className="view-orbit view-orbit-one" />
          <div className="view-orbit view-orbit-two" />
          <img src="/assets/HAI-SHARKY-v4-views.png" alt="高清 HAI SHARKY 正面、侧面与背面三视图" />
          <div className="view-labels"><span>FRONT</span><span>SIDE</span><span>BACK</span></div>
        </div>
      </section>

      <section className="expressions section" id="expressions">
        <div className="section-head shell">
          <p><b>03</b> MOTION &amp; EMOTION</p>
          <span>SIX EMOTIONS · ONE VIVID CHARACTER</span>
        </div>
        <div className="expressions-intro shell">
          <h2>每一种情绪，<br />都是<span>鲜活的 SHARKY。</span></h2>
          <p>欢呼、惊喜、疑惑、思考、生气、委屈，<br />让 HAI SHARKY 更真实，也更有生命力。</p>
        </div>
        <div className="emotion-universe shell" aria-label="HAI SHARKY 六种动作与表情设计">
          <div className="emotion-orbit orbit-emotion-one" />
          <div className="emotion-orbit orbit-emotion-two" />
          <article className="emotion-crop emotion-main crop-1">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 庆祝表情" />
            <div><span>欢呼</span></div>
          </article>
          <article className="emotion-crop emotion-float emotion-float-a crop-2">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 惊喜表情" />
            <div><span>惊喜</span></div>
          </article>
          <article className="emotion-crop emotion-float emotion-float-b crop-3">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 疑惑表情" />
            <div><span>疑惑</span></div>
          </article>
          <article className="emotion-crop emotion-float emotion-float-c crop-4">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 思考表情" />
            <div><span>思考</span></div>
          </article>
          <article className="emotion-crop emotion-float emotion-float-d crop-5">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 生气表情" />
            <div><span>生气</span></div>
          </article>
          <article className="emotion-crop emotion-float emotion-float-e crop-6">
            <img src="/assets/HAI-SHARKY-v2-emotions.png" alt="新版 HAI SHARKY 委屈表情" />
            <div><span>委屈</span></div>
          </article>
        </div>
      </section>

      <section className="stickers section" id="stickers">
        <div className="sticker-glow" />
        <div className="section-head section-head-light shell">
          <p><b>04</b> STICKER COLLECTION</p>
          <span>THE LANGUAGE OF SMART COLLABORATION</span>
        </div>
        <div className="stickers-grid shell">
          <div className="sticker-copy">
            <p className="kicker">12 WORKDAY MOMENTS</p>
            <h2>不用多说，<br />SHARKY 都懂。</h2>
            <p>把工作协作中的每一次回应，变成轻松、有趣又有温度的表达。</p>
            <div className="bubble-row"><span>收到！</span><span>加油！</span><span>思考中…</span></div>
          </div>
          <div className="sticker-sheet">
            <img src="/assets/HAI-SHARKY-v2-stickers.png" alt="新版 Sharky 十二枚日常表情包集合" />
            <span className="sheet-mark">12 × SHARKY</span>
          </div>
        </div>
      </section>

      <section className="seasonal section" id="seasonal">
        <div className="section-head shell">
          <p><b>05</b> SEASONAL SKINS</p>
          <span>ONE CHARACTER · MANY FESTIVE MOMENTS</span>
        </div>
        <div className="seasonal-intro shell">
          <div>
            <p className="kicker">FESTIVE EDITION</p>
            <h2>换上节日心情，<br />保持<span>同一个 SHARKY。</span></h2>
          </div>
          <p>在不改变核心识别的前提下，以帽饰、披肩和节日光色拓展角色的情绪边界，让每一次品牌沟通都有应景的新鲜感。</p>
        </div>
        <div className="skin-gallery shell">
          <article className="skin-card skin-christmas">
            <div className="skin-number">01</div>
            <img src="/assets/HAI-SHARKY-skin-christmas-v3.png" alt="欢呼状态的 HAI SHARKY 圣诞节主题皮肤" />
            <div className="skin-caption"><p>CHRISTMAS</p><h3>圣诞暖游</h3><span>绒感红帽 · 冰晶蓝光</span></div>
          </article>
          <article className="skin-card skin-new-year">
            <div className="skin-number">02</div>
            <img src="/assets/HAI-SHARKY-skin-new-year-v3.png" alt="欢呼状态的 HAI SHARKY 新年主题皮肤" />
            <div className="skin-caption"><p>NEW YEAR</p><h3>新年启航</h3><span>赤红披肩 · 金色好意</span></div>
          </article>
          <article className="skin-card skin-halloween">
            <div className="skin-number">03</div>
            <img src="/assets/HAI-SHARKY-skin-halloween-v3.png" alt="欢呼状态的 HAI SHARKY 万圣节主题皮肤" />
            <div className="skin-caption"><p>HALLOWEEN</p><h3>奇幻夜游</h3><span>魔法紫夜 · 南瓜微光</span></div>
          </article>
        </div>
      </section>

      <section className="applications section" id="applications">
        <div className="section-head section-head-light shell">
          <p><b>06</b> BRAND APPLICATIONS</p>
          <span>FROM SCREEN TO SPACE · FROM CULTURE TO ACTION</span>
        </div>
        <div className="applications-title shell">
          <h2>不只是一个形象，<br />而是<span>品牌体验的连接点。</span></h2>
          <p>让 SHARKY 进入数字产品与员工文化，在每一次接触中形成统一而有温度的海管家品牌记忆。</p>
        </div>

        <div className="application-grid shell">
          <article className="application-card app-website">
            <div className="app-meta"><span>01 / DIGITAL</span><b>官网</b></div>
            <div className="browser-mockup">
              <div className="browser-bar"><i /><i /><i /><span>HAI GUAN JIA · AI LOGISTICS</span></div>
              <div className="browser-screen">
                <div><small>SMART LOGISTICS</small><strong>连接你我，<br />支撑多彩时间转动</strong><em>EXPLORE →</em></div>
                <img src="/assets/HAI-SHARKY-v2-cutout.png" alt="" />
              </div>
            </div>
          </article>

          <article className="application-card app-handbook">
            <div className="app-meta"><span>02 / CULTURE</span><b>员工手册</b></div>
            <div className="book-stack">
              <div className="book book-back"><span>HAI GUAN JIA</span></div>
              <div className="book book-front"><small>EMPLOYEE HANDBOOK</small><strong>与 SHARKY<br />一起向前</strong><img src="/assets/HAI-SHARKY-v2-cutout.png" alt="" /><em>2026</em></div>
            </div>
          </article>

        </div>

        <div className="values-panel shell">
          <div className="values-heading">
            <p>CULTURE CODE</p>
            <h3>五个词，<br />指向同一种<span>行动方向。</span></h3>
          </div>
          <div className="value-grid value-grid-words">
            <span>实事求是</span>
            <span>开放透明</span>
            <span>客户导向</span>
            <span>持续进化</span>
            <span>Make it happen</span>
          </div>
        </div>
      </section>

      <section className="visual-system section" id="visual">
        <div className="section-head shell">
          <p><b>08</b> COLOR &amp; VISUAL LANGUAGE</p>
          <span>THE DESIGN DNA OF HAI SHARKY</span>
        </div>
        <div className="visual-title shell">
          <h2>来自海洋的亲和力，<br />遇见<span>AI 的未来感。</span></h2>
          <p>色彩、轮廓与发光细节共同构成 SHARKY 的识别系统：温暖但不幼稚，科技但不疏离。</p>
        </div>

        <div className="palette shell" aria-label="HAI SHARKY 品牌色彩">
          <article className="swatch swatch-deep"><div /><p><b>DEEP SEA</b><span>#15214D</span></p></article>
          <article className="swatch swatch-blue"><div /><p><b>OCEAN BLUE</b><span>#4B75F7</span></p></article>
          <article className="swatch swatch-light"><div /><p><b>LIGHT CURRENT</b><span>#91B7FF</span></p></article>
          <article className="swatch swatch-violet"><div /><p><b>AURORA VIOLET</b><span>#8F7DF7</span></p></article>
          <article className="swatch swatch-cyan"><div /><p><b>GILL CYAN</b><span>#71F4FF</span></p></article>
          <article className="swatch swatch-pink"><div /><p><b>GILL PINK</b><span>#FF9CDF</span></p></article>
          <article className="swatch swatch-white"><div /><p><b>SAIL WHITE</b><span>#F8FBFF</span></p></article>
        </div>

        <div className="anatomy shell">
          <div className="anatomy-stage">
            <div className="anatomy-ring ring-one" /><div className="anatomy-ring ring-two" />
            <img src="/assets/HAI-SHARKY-v2-cutout.png" alt="HAI SHARKY 形象元素理念解析" />
            <span className="anatomy-point point-eye">专注竖眼<i>01</i></span>
            <span className="anatomy-point point-gill">智能感知鳃<i>02</i></span>
            <span className="anatomy-point point-fin">持续进化鳍<i>03</i></span>
            <span className="anatomy-point point-body">亲和圆润体<i>04</i></span>
          </div>
          <div className="principle-list">
            <article><i>01</i><div><h3>专注与可靠</h3><p>极简竖眼传达专注、清晰和稳定回应，让 AI 伙伴拥有可信赖的第一印象。</p></div></article>
            <article><i>02</i><div><h3>实时感知</h3><p>蓝粉荧光鲨鱼鳃象征对运价、舱位和运输节点的敏锐感知。</p></div></article>
            <article><i>03</i><div><h3>持续进化</h3><p>流线鳍尾与游动姿态对应“不停止进化”，也是海管家持续向前的行动隐喻。</p></div></article>
            <article><i>04</i><div><h3>科技有温度</h3><p>海洋蓝连接物流业务，极光紫连接 AI 未来；圆润白色面罩消解技术距离感。</p></div></article>
          </div>
        </div>
      </section>

      <section className="merch section" id="merch">
        <div className="section-head shell">
          <p><b>07</b> BEYOND THE CHARACTER</p>
          <span>FROM DIGITAL PARTNER TO EVERYDAY COMPANION</span>
        </div>
        <div className="merch-title shell">
          <h2>把智能伙伴，<br />带进<span>工作与生活。</span></h2>
          <p>从数字服务到真实陪伴，HAI SHARKY<br />让海管家的品牌温度触手可及。</p>
        </div>
        <div className="merch-grid shell">
          <article className="product product-featured">
            <img src="/assets/HAI-SHARKY-v3-giftbox.png" alt="欢呼状态的 Sharky 公仔收藏礼盒" />
            <div><p>01 / COLLECTIBLE</p><h3>SHARKY 公仔礼盒</h3><span>为每一次相遇，保留仪式感。</span></div>
          </article>
          <article className="product product-small">
            <img src="/assets/HAI-SHARKY-v3-keychain.png" alt="欢呼状态的 Sharky 钥匙挂件" />
            <div><p>02 / TAKE ALONG</p><h3>随身钥匙挂件</h3></div>
          </article>
          <article className="product product-wide">
            <img src="/assets/HAI-SHARKY-v5-tote.png" alt="欢呼状态的 Sharky 帆布包" />
            <div><p>03 / DAILY OBJECT</p><h3>海洋刺绣帆布包</h3></div>
          </article>
          <article className="product product-small product-plush">
            <img src="/assets/HAI-SHARKY-v3-plush.png" alt="欢呼状态的蓬松 HAI SHARKY 毛绒玩具" />
            <div><p>04 / SOFT FRIEND</p><h3>陪伴毛绒玩具</h3></div>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <div>
            <p>让智能物流支撑多彩世界的转动</p>
            <h2>SAIL SMART WITH<br /><i>HAI SHARKY.</i></h2>
          </div>
          <a href="#top" aria-label="返回顶部">↑</a>
        </div>
        <div className="footer-base shell"><span>SHARKY SPACE（HGJ）</span><span>HAI GUAN JIA AI PARTNER · 2026</span></div>
      </footer>
    </main>
  );
}
