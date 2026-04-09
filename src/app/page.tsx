import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-glow" />
      
      <header className="header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo.webp" 
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
            ChoiceNowNet 致力于通过 AI 和互动技术，为您带来更加高效、有趣且充满可能性的数字体验。我们不断探索人工智能在语言学习、情感陪伴及数字化娱乐领域的创新应用，旨在为全球用户提供前沿的智能生活工具。
          </p>
        </section>

        {/* 增加描述性文本，提升关键词密度和内容丰富度，解决 Thin Content 问题 */}
        <section className="about-intro" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)', background: 'var(--card-bg)', padding: '3rem', borderRadius: '32px', border: '1px solid var(--card-border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2rem' }}>ChoiceNowNet: 汇集前沿 AI 技术的数字体验中心</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.8' }}>
              在这个飞速发展的数字时代，ChoiceNowNet 始终走在技术创新的前沿。每一个产品——无论是基于 LLM 大语言模型的智能教育工具，还是利用先进 3D 渲染技术打造的放松空间——都是我们对科技边界的深度探索。我们相信，优秀的数字产品不仅应该功能强大，更应该具有直觉性的设计和情感的温度。
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: '1.8' }}>
              从帮助成千上万学子通过“AI 实时语境”攻克英语学习难关的 <strong>Contexta (AI 情境英语)</strong>，到提供极致治愈体验、让您在繁杂工作中获得片刻宁静的 3D 水族馆 <strong>FinTap (云摸鱼)</strong>。ChoiceNowNet 坚持将卓越的工业设计与底层算法优化相结合。
            </p>
            <p style={{ lineHeight: '1.8' }}>
              我们的使命是消除人类与机器之间的沟通隔阂，让每一位用户都能在互动中获得惊喜，在学习中提升效率，在屏幕前找到属于自己的宁静。欢迎加入 ChoiceNowNet 的世界，共同开启更加智能、美好的未来生活。
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
        <div style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
          ChoiceNowNet Development Hub • Global Distributed
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link href="/sitemap.xml">Sitemap</Link>
          <Link href="/llms.txt">AI Info (llms.txt)</Link>
          <Link href="/terms">服务条款</Link>
          <Link href="/privacy">隐私政策</Link>
          <a href="https://contexta.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">AI 情境英语 Sitemap</a>
          <a href="https://fintap.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">云摸鱼 Sitemap</a>
        </div>
        <div style={{ marginTop: '2rem', fontSize: '0.75rem', opacity: 0.5 }}>
          最后更新时间: 2026年4月9日 | 致力于探索 AI 与人的无限可能
        </div>
      </footer>
    </>
  );
}
