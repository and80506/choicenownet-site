import Link from 'next/link';

export const metadata = {
  title: "隐私政策 - ChoiceNowNet",
  description: "了解 ChoiceNowNet 如何收集、使用和保护您的个人信息。",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-glow" />
      <div className="main" style={{ maxWidth: '900px', lineHeight: '1.8', paddingBottom: '4rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <Link href="/" className="btn-secondary" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← 返回主页
          </Link>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>隐私政策</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            生效日期：2026年3月20日<br />
            最近更新：2026年4月9日
          </p>
        </header>

        <section style={{ marginBottom: '2.5rem' }}>
          <p>
            ChoiceNowNet（以下简称“我们”、“我们的”或“本站”）致力于保护您的隐私。本隐私政策旨在说明我们在您访问 choicenownet.site 以及使用我们的 AI 产品（包括 AI 情境英语 Contexta 和云摸鱼 FinTap）时，如何收集、使用、披露和保护您的信息。
          </p>
          <p>
            请仔细阅读本政策。通过使用我们的服务，即表示您同意本政策所述的行为。如果您不同意本政策的条款，请停止使用我们的服务。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>1. 我们收集的信息</h2>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem' }}>1.1 您主动提供的信息</h3>
          <ul>
            <li><strong>账户信息：</strong> 如果您在具体产品（如 Contexta）中注册，我们可能会收集您的电子邮件地址、用户名或由第三方认证系统（如 Google/GitHub）提供的基本概要列表。</li>
            <li><strong>学习数据：</strong> 在使用 AI 情境英语时，我们会记录您的单词学习进度、复习计划及学习偏好，以便通过 AI 算法为您定制内容。</li>
          </ul>

          <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem' }}>1.2 自动收件的信息</h3>
          <ul>
            <li><strong>AI 处理数据：</strong> 当您与 AI 进行互动（如生成单词故事或翻译）时，相关的文本请求会被发送至我们的处理中心（如 OpenAI 或其他 LLM 提供商）。</li>
            <li><strong>技术数据：</strong> 包括您的 IP 地址、浏览器类型、设备信息、访问时长以及进入本站前的来源页面。</li>
            <li><strong>使用习惯：</strong> 在云摸鱼 (FinTap) 中，我们可能会收集匿名化的互动数据（如鱼缸偏好），用于优化 3D 性能和视听效果。</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>2. 我们如何使用信息</h2>
          <p>我们将收集到的信息用于以下目的：</p>
          <ul>
            <li><strong>提供与优化服务：</strong> 运行实时 AI 翻译、内容生成及 3D 渲染，并根据使用反馈改进产品功能。</li>
            <li><strong>个性化体验：</strong> 利用 AI 算法根据您的学习进度调整内容难度。</li>
            <li><strong>服务安全性：</strong> 检测并防止欺诈、非法访问及滥用行为。</li>
            <li><strong>沟通：</strong> 发送与账户相关的通知或必要的技术支持信息。</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>3. 信息共享与第三方服务</h2>
          <p>我们不会向第三方出售、出租或交易您的个人信息。为了提供特定功能，我们会将匿名化或必要的数据分享给以下处理者：</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', background: 'var(--card-bg)', borderRadius: '12px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--card-border)' }}>
                <th style={{ padding: '1rem' }}>提供商</th>
                <th style={{ padding: '1rem' }}>目的</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem' }}>OpenAI / Anthropic</td>
                <td style={{ padding: '1rem' }}>大型语言模型处理，生成 AI 故事与翻译。</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                <td style={{ padding: '1rem' }}>Vercel / Cloudflare</td>
                <td style={{ padding: '1rem' }}>网站托管、边缘计算及基础流量分析。</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}>Google Analytics</td>
                <td style={{ padding: '1rem' }}>匿名化的用户访问习惯分析。</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>4. 数据安全与保留</h2>
          <p>
            我们实施了行业标准的加密技术（TLS/HTTPS）来保护传输中的数据。除财务记录或法律另有规定外，我们仅在实现本政策所述目的所需的时间内保留您的个人信息。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>5. 您的权利</h2>
          <p>根据您的所在地，您可能拥有以下权利：</p>
          <ul>
            <li><strong>访问权：</strong> 要求获取我们持有的您的个人数据副本。</li>
            <li><strong>纠正权：</strong> 要求更正不准确的数据。</li>
            <li><strong>删除权：</strong> 要求注销账户并删除您的个人数据。</li>
          </ul>
          <p>如需行使上述权利，请通过下方联系方式与我们联系。</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>6. 儿童隐私</h2>
          <p>
            对于 13 岁以下的儿童，建议在监护人指导下使用 Contexta 等教学产品。我们不会在未获得监护人同意的情况下故意收集此类信息。
          </p>
        </section>

        <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>联系我们</h2>
          <p>如果您对本隐私政策有任何疑问，请联系我们：</p>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--primary)' }}>
            Email: <a href="mailto:support@choicenownet.site">support@choicenownet.site</a>
          </p>
        </footer>
      </div>
    </>
  );
}
