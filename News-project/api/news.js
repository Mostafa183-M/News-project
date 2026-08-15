export default async function handler(req, res) {
  try {
    const { category } = req.query;

    const API_KEY = globalThis.process.env.NEWS_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        message: "NEWS_API_KEY غير موجود في Environment Variables",
      });
    }

    const categoryMap = {
      politics: "politics",
      business: "business",
      sports: "sports",
      technology: "technology",
      entertainment: "entertainment",
      health: "health",
      science: "science",
    };

    let url =
      "https://api.freenewsapi.io/v1/news" +
      "?language=ar" +
      "&order_by=recent";

    if (category && categoryMap[category]) {
      url += `&topic=${categoryMap[category]}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "Accept": "application/json",
      },
    });

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("DATA:", data);

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.message || "فشل تحميل الأخبار",
      });
    }

    return res.status(200).json({
      articles: data.data || [],
    });

  } catch (error) {
    console.error("ERROR:", error);

    return res.status(500).json({
      message: "حدث خطأ أثناء تحميل الأخبار",
    });
  }
}