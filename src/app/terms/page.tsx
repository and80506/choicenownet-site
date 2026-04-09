import Link from 'next/link';

export const metadata = {
  title: "服务条款 - ChoiceNowNet",
  description: "使用 ChoiceNowNet 及其 AI 产品（Contexta, FinTap）的法律协议与使用准则。",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-glow" />
      <div className="main" style={{ maxWidth: '900px', lineHeight: '1.8', paddingBottom: '4rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <Link href="/" className="btn-secondary" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← 返回主页
          </Link>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>服务条款</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            生效日期：2026年3月20日<br />
            最近更新：2026年4月9日
          </p>
        </header>

        <section style={{ marginBottom: '2.5rem' }}>
          <p>
            本服务条款（“条款”）适用于您对 ChoiceNowNet 平台及其提供的 AI 驱动数字产品（包括但不限于 AI 情境英语 Contexta 和云摸鱼 FinTap，统称为“服务”）的访问和使用。本服务由 ChoiceNowNet 团队（以下简称“我们”）运营。
          </p>
          <p>
            通过使用我们的服务，即表示您同意受本条款的约束。如果您不同意，请勿使用本服务。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>1. 服务描述</h2>
          <p>
            ChoiceNowNet 致力于通过人工智能和互动技术提升您的数字生活体验。我们的核心服务包括：
          </p>
          <ul>
            <li><strong>AI 情境英语 (Contexta)：</strong> 利用大语言模型 (LLM) 为英语学习者提供即时的情境故事生成、翻译及复习计划管理。</li>
            <li><strong>云摸鱼 (FinTap)：</strong> 为用户提供沉浸式的 3D 虚拟水族馆互动体验。</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>2. 适用人群</h2>
          <p>
            您必须年满 18 周岁（或您所在司法管辖区的法定成人年龄）才能使用本服务。如果您未满 18 周岁，必须在父母或法定监护人的同意和监督下使用。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>3. 账户与安全性</h2>
          <p>
            在某些服务中，您可能需要创建账户。您负责保护您的账户凭据安全，并对以您账户名义进行的活动承担全部责任。如果您发现任何未经授权的账户使用，请立即通知我们。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>4. AI 内容免责声明</h2>
          <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem' }}>4.1 准确性保证</h3>
          <p>
            AI 生成的内容（如翻译、情境故事、语音合成）是基于机器学习模型生成的。这些内容可能包含错误、不准确性或上下文误解。
          </p>
          <h3 style={{ color: 'var(--accent)', marginTop: '1.5rem' }}>4.2 非专业替代品</h3>
          <p>
            本服务不能替代专业的人文翻译、法律建议、医疗咨询或金融契约。请勿将本服务用于若翻译错误可能导致严重后果的场合，包括但不限于法律诉讼、医疗紧急情况或关键的财务决策。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>5. 可接受的使用行为</h2>
          <p>您同意不将本服务用于：</p>
          <ul>
            <li>违反任何适用的法律、法规或规章。</li>
            <li>骚扰、威胁、跟踪或恐吓他人。</li>
            <li>利用 AI 技术生成欺骗性内容、深度伪造 (Deepfakes) 或冒充他人。</li>
            <li>干扰或破坏服务的运行及其基础设施。</li>
            <li>在没有获得对方授权的情况下，试图获取其个人信息。</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>6. 知识产权</h2>
          <p>
            本服务及其附带的软件、算法、界面和文档归 ChoiceNowNet 及其授权方所有。
            您保留通过本服务传输的原始内容的所有权，但授予我们一项全球性的、免费的许可，以处理这些内容从而为您提供对应的 AI 服务（如翻译和文本生成）。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>7. 责任限制</h2>
          <p>
            在法律允许的最大范围内，ChoiceNowNet 团队不对任何由于翻译错误、服务中断、或您依赖本服务生成的 AI 内容而导致的直接或间接损害承担责任。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>8. 条款变更</h2>
          <p>
            我们可能会不时更新本条款。如果我们做出重大变更，将通过更新本页面顶部的“最近更新”日期进行通知。您在任何更改后继续使用本服务即表示您接受修订后的条款。
          </p>
        </section>

        <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>联系我们</h2>
          <p>如果您对本服务条款有任何疑问，请联系我们：</p>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--primary)' }}>
            Email: <a href="mailto:support@choicenownet.site">support@choicenownet.site</a>
          </p>
        </footer>
      </div>
    </>
  );
}
