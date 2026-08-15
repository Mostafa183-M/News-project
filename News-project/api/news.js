export default async function handler(req, res) {
  try {
    const { category } = req.query;

    const API_KEY = globalThis.process.env.NEWS_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        message: "NEWS_API_KEY غير موجود في Environment Variables",
      });
    }

    const topics = {
      politics: "politics",
      business: "business",
      sports: "sports",
      technology: "technology",
      entertainment: "entertainment",
      health: "health",
      science: "science",
    };

    const topic = topics[category];

    let url = "https://api.freenewsapi.io/v1/news";

    const params = new URLSearchParams();

    params.set("language", "ar");
    params.set("order_by", "recent");

    if (topic) {
      params.set("topic", topic);
    }

    url += `?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        "x-api-key": API_KEY,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    console.log("FreeNewsAPI status:", response.status);
    console.log("FreeNewsAPI response:", data);

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.message || "فشل تحميل الأخبار",
      });
    }

    return res.status(200).json({
      articles: data.data || [],
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      message: "حدث خطأ أثناء تحميل الأخبار",
    });
  }
}