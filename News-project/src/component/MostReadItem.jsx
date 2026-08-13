export default function MostReadItem({
  article,
  number,
}) {
  return (
    <div className="most-read-item">

      <div className="most-read-number">
        {number}
      </div>

      <div className="most-read-content">

        <h3>
          {article.title}
        </h3>

        <small>
          {(article.views / 1000).toFixed(1)} ألف مشاهدة
        </small>

      </div>

    </div>
  );
}