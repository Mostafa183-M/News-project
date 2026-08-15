const categoryMap = {
  "الرئيسية": "",
  "سياسة": "politics",
  "اقتصاد": "business",
  "رياضة": "sports",
  "تكنولوجيا": "technology",
  "فن": "entertainment",
  "صحة": "health",
  "علوم": "science",
};

export async function getNews(category = "الرئيسية") {
  const apiCategory = categoryMap[category] || "";

  let url = "/api/news";

  if (apiCategory) {
    url += `?category=${encodeURIComponent(apiCategory)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));

    throw new Error(
      error.message || "فشل في تحميل الأخبار"
    );
  }

  const data = await response.json();

  return data.articles || [];
}