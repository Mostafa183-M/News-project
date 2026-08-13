import { useEffect, useState } from "react";

import { getNews } from "../data/newsapi.js";

import Header from "../component/Header.jsx";
import Navbar from "../component/Navbar.jsx";
import Banner from "../component/Banner.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";
import SectionTitle from "../component/SectionTitle.jsx";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c";

export default function Home({ lightMode, setLightMode }) {

  const [selectedCategory, setSelectedCategory] =
    useState("الرئيسية");

  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");



  useEffect(() => {

    async function loadNews() {

      try {

        setLoading(true);
        setError("");

        const articles = await getNews(
          selectedCategory
        );

        setNews(articles);

      } catch (err) {

        console.error(err);

        setError(
          "حدث خطأ أثناء تحميل الأخبار"
        );

      } finally {

        setLoading(false);

      }

    }

    loadNews();

  }, [selectedCategory]);




  const formattedNews = news.map(
    (article, index) => ({

      id: index,

      title:
        article.title ||
        "عنوان الخبر غير متوفر",

      summary:
        article.description ||
        "لا يوجد وصف لهذا الخبر.",

      image:
        article.urlToImage ||
        DEFAULT_IMAGE,

      category:
        selectedCategory === "الرئيسية"
          ? "أخبار"
          : selectedCategory,

      date:
        article.publishedAt || "",

      url:
        article.url || "#",

    })
  );


  return (

    <div dir="rtl">


      <Banner />



      <Header
        lightMode={lightMode}
        setLightMode={setLightMode}
      />



      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={
          setSelectedCategory
        }
      />


      <main className="container">


        {loading && (

          <div className="loading">

            <h2>
              جاري تحميل أخبار{" "}
              {selectedCategory === "الرئيسية"
                ? "اليوم"
                : selectedCategory}
              ...
            </h2>

          </div>

        )}



        {!loading && error && (

          <div className="no-news">

            <h2>{error}</h2>

            <p>
              حاول تحديث الصفحة مرة أخرى.
            </p>

          </div>

        )}



        {!loading &&
          !error &&
          formattedNews.length > 0 && (

            <>


              {selectedCategory === "الرئيسية" ? (

                <>

                  <div className="top-section">

                    <section className="featured-section">

                      <div className="featured-image">

                        <img
                          src={
                            formattedNews[0]
                              .image
                          }
                          alt={
                            formattedNews[0]
                              .title
                          }

                          onError={(e) => {

                            e.currentTarget.src =
                              DEFAULT_IMAGE;

                          }}
                        />

                        <span className="category-badge">

                          {formattedNews[0]
                            .category}

                        </span>

                      </div>


                      <h1>
                        {formattedNews[0].title}
                      </h1>


                      <p>
                        {formattedNews[0].summary}
                      </p>


                      <small>
                        {formattedNews[0].date}
                      </small>

                    </section>


                    <aside className="editor-section">

                      <SectionTitle
                        title="مختارات المحرر"
                      />

                      <div className="editor-list">

                        {formattedNews
                          .slice(1, 5)
                          .map(
                            (article) => (

                              <Card
                                key={article.id}
                                article={article}
                                small
                              />

                            )
                          )}

                      </div>

                    </aside>

                  </div>



                  <div className="content-section">

                    <section className="latest-section">

                      <SectionTitle
                        title="آخر الأخبار"
                      />

                      <div className="news-grid">

                        {formattedNews
                          .slice(5)
                          .map(
                            (article) => (

                              <Card
                                key={article.id}
                                article={article}
                              />

                            )
                          )}

                      </div>

                    </section>



                    <aside className="sidebar">

                      <SectionTitle
                        title="الأكثر قراءة"
                      />

                      <p>
                        سيتم تطوير قسم الأكثر
                        قراءة لاحقًا.
                      </p>

                    </aside>

                  </div>

                </>


              ) : (



                <section className="category-page">

                  <SectionTitle
                    title={selectedCategory}
                  />


                  <div className="news-grid category-grid">

                    {formattedNews.map(
                      (article) => (

                        <Card
                          key={article.id}
                          article={article}
                        />

                      )
                    )}

                  </div>

                </section>

              )}

            </>

          )}



        {!loading &&
          !error &&
          formattedNews.length === 0 && (

            <div className="no-news">

              <h2>
                لا توجد أخبار حاليًا
              </h2>

              <p>
                لم يتم العثور على أخبار في قسم{" "}
                {selectedCategory}.
              </p>

            </div>

          )}

      </main>


      <Footer />

    </div>

  );
}