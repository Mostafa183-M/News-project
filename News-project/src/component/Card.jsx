export default function Card({
  article,
  small = false,
}) {
  if (!article) {
    return null;
  }

  return (
    <article
      className={
        small
          ? "news-card news-card-small"
          : "news-card"
      }
    >

      <div className="card-image">

        <img
  src={
    article.image ||
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
  }
  alt={article.title}
  onError={(e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
  }}
/>

        <span>
          {article.category}
        </span>

      </div>

      <div className="card-content">

        <h3>
          {article.title}
        </h3>

        {article.date && (
          <small>
            {article.date}
          </small>
        )}

      </div>

    </article>
  );
}