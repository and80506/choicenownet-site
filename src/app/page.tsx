import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-glow" />
      
      <header className="header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="ChoiceNowNet Logo" style={{ height: '40px', width: 'auto' }} />
          ChoiceNowNet
        </div>
        <nav>
          <Link href="#products" className="btn-secondary">所有产品</Link>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>探索未来的<br /><span style={{color: 'var(--primary)'}}>智能生活</span>方式</h1>
          <p>
            ChoiceNowNet 致力于通过 AI 和互动技术，为您带来更加高效、有趣且充满可能性的数字体验。
          </p>
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
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link href="/sitemap.xml">Sitemap</Link>
          <a href="https://fintap.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">云养鱼 Sitemap</a>
          <a href="https://contexta.choicenownet.site/sitemap.xml" target="_blank" rel="noopener">AI 情境英语 Sitemap</a>
        </div>
      </footer>
    </>
  );
}
