export default async function handler(req, res) {
  try {
    const { category } = req.query;
    const API_KEY = globalThis.process.env.NEWS_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        message: "NEWS_API_KEY غير موجود في Environment Variables",
      });
    }

    let url;

    if (category) {
      url =
        `https://newsapi.org/v2/top-headlines` +
        `?country=eg` +
        `&category=${encodeURIComponent(category)}` +
        `&pageSize=20` +
        `&apiKey=${API_KEY}`;
    } else {
      url =
        `https://newsapi.org/v2/everything` +
        `?q=أخبار` +
        `&language=ar` +
        `&sortBy=publishedAt` +
        `&pageSize=20` +
        `&apiKey=${API_KEY}`;
    }

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.message || "NewsAPI Error",
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "حدث خطأ أثناء تحميل الأخبار",
    });
  }
}