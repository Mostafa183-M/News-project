export default function Header({
  lightMode,
  setLightMode,
}) {
  return (
    <header className="site-header">

      <div className="container header-content">

        <div className="logo">
          نبض نيوز
        </div>

        <div className="header-actions">

          <button>
            🔍
          </button>

          <button
            onClick={() => setLightMode(!lightMode)}
            title="تغيير الوضع"
          >
            {lightMode ? "🌙" : "☀️"}
          </button>

        </div>

      </div>

    </header>
  );
}