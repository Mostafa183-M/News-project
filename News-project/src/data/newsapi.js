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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "فشل في تحميل الأخبار"
    );
  }

  return data.articles || [];
}