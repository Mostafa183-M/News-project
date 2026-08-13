const API_KEY = "ae0d93f2d6c94fa498b594af7f5a0197";

const API_URL = "https://newsapi.org/v2";


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


  let url;


  if (!apiCategory) {

    url =
      `${API_URL}/everything` +
      `?q=أخبار` +
      `&language=ar` +
      `&sortBy=publishedAt` +
      `&pageSize=20` +
      `&apiKey=${API_KEY}`;

  }


  else {

    url =
      `${API_URL}/top-headlines` +
      `?country=us` +
      `&category=${apiCategory}` +
      `&pageSize=20` +
      `&apiKey=${API_KEY}`;

  }


  const response = await fetch(url);


  if (!response.ok) {

    throw new Error(
      "فشل في تحميل الأخبار"
    );

  }


  const data = await response.json();


  return data.articles || [];

}