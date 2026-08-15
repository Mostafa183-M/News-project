export default async function handler(req, res) {
  try {
    const { category } = req.query;
    
    const API_KEY = globalThis.process.env.NEWS_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({
        message: "NEWS_API_KEY غير موجود في Environment Variables",
      });
    }

    const topicMap = {
      politics: "politics",
      business: "business",
      sports: "sports",
      technology: "technology",
      entertainment: "entertainment",
      health: "health",
      science: "science",
    };

    const topic = topicMap[category];

    let url =
      "https://api.freenewsapi.io/v1/news" +
      "?language=ar" +
      "&country=EG" +
      "&order_by=recent" +
      "&offset=0";

    if (topic) {
      url += `&topic=${encodeURIComponent(topic)}`;
    }

    const response = await fetch(url, {
      headers: {
        "x-api-key": API_KEY,
        "accept": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("FreeNewsAPI Error:", data);

      return res.status(response.status).json({
        message: data.message || "فشل تحميل الأخبار",
      });
    }

    return res.status(200).json({
      articles: data.data || [],
    });

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      message: "حدث خطأ أثناء تحميل الأخبار",
    });
  }
}