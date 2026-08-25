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
            <a href="#views">三视图</a>
            <a href="#expressions">动作表情</a>
            <a href="#merch">周边延伸</a>
            <a href="#stickers">表情包</a>
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
          <img src="/assets/HAI-SHARKY-v2-views.png" alt="新版 Sharky 正面、侧面与背面三视图" />
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

      <section className="merch section" id="merch">
        <div className="section-head shell">
          <p><b>04</b> BEYOND THE CHARACTER</p>
          <span>FROM DIGITAL PARTNER TO EVERYDAY COMPANION</span>
        </div>
        <div className="merch-title shell">
          <h2>把智能伙伴，<br />带进<span>工作与生活。</span></h2>
          <p>从数字服务到真实陪伴，HAI SHARKY<br />让海管家的品牌温度触手可及。</p>
        </div>
        <div className="merch-grid shell">
          <article className="product product-featured">
            <img src="/assets/HAI-SHARKY-v2-giftbox.png" alt="新版 Sharky 公仔收藏礼盒" />
            <div><p>01 / COLLECTIBLE</p><h3>SHARKY 公仔礼盒</h3><span>为每一次相遇，保留仪式感。</span></div>
          </article>
          <article className="product product-small">
            <img src="/assets/HAI-SHARKY-v2-keychain.png" alt="新版 Sharky 钥匙挂件" />
            <div><p>02 / TAKE ALONG</p><h3>随身钥匙挂件</h3></div>
          </article>
          <article className="product product-wide">
            <img src="/assets/HAI-SHARKY-v4-tote-cutout.png" alt="新版 Sharky 帆布包" />
            <div><p>03 / DAILY OBJECT</p><h3>海洋刺绣帆布包</h3></div>
          </article>
          <article className="product product-small product-plush">
            <img src="/assets/HAI-SHARKY-v2-plush.png" alt="新版蓬松柔软的 HAI SHARKY 毛绒玩具" />
            <div><p>04 / SOFT FRIEND</p><h3>陪伴毛绒玩具</h3></div>
          </article>
        </div>
      </section>

      <section className="stickers section" id="stickers">
        <div className="sticker-glow" />
        <div className="section-head section-head-light shell">
          <p><b>05</b> STICKER COLLECTION</p>
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
