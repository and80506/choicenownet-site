import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-glow" />
      
      <header className="header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo.png" 
            alt="ChoiceNowNet Logo" 
            style={{ height: '40px', width: '40px' }} 
            fetchPriority="high"
          />
          <span>ChoiceNowNet</span>
        </div>
        <nav>
          <Link href="#products" className="btn-secondary">所有产品</Link>
        </nav>
      </header>

      <main id="main-content" className="main">
        <section className="hero">
          <h1>ChoiceNowNet<br />探索未来的<span style={{color: 'var(--primary)'}}>智能生活</span>方式</h1>
          <p>
            ChoiceNowNet 致力于通过 AI 和互动技术，为您带来更加高效、有趣且充满可能性的数字体验。我们不断探索人工智能在语言学习、情感陪伴及数字化娱乐领域的创新应用。
          </p>
        </section>

        {/* 增加描述性文本，提升关键词密度和内容丰富度 */}
        <section className="about-intro" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2rem' }}>汇集前沿 AI 技术的数字体验中心</h2>
            <p style={{ marginBottom: '1rem' }}>
              在 ChoiceNowNet，每一个产品都是对科技边界的探索。我们利用最新的 LLM 大语言模型、3D 渲染技术和行为科学，打造直观且富有意义的工具。
            </p>
            <p>
              从帮助成千上万学子攻克英语难关的 <strong>Contexta</strong>，到提供极致治愈体验的 3D 水族馆 <strong>FinTap</strong>，我们坚持将卓越的设计与强大的功能相结合，开启智能生活的新篇章。
            </p>
          </div>
        </section>

        <section id="products" className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              
              <ul className="features">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a 
                href={product.url} 
                className="btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                立即开始 →
              </a>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ChoiceNowNet. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link href="/sitemap.xml">Sitemap</Link>
          <Link href="/llms.txt">AI Info (llms.txt)</Link>
          <Link href="/terms">服务条款</Link>
          <Link href="/privacy">隐私政策</Link>
          <a href="https://contexta.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">AI 情境英语 Sitemap</a>
          <a href="https://fintap.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">云摸鱼 Sitemap</a>
        </div>
      </footer>
    </>
  );
}
