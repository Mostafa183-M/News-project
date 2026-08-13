export default function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="container">

        <div className="footer-grid">

          {/* اللوجو والوصف */}
          <div className="footer-brand">
            <h2>نبض نيوز</h2>

            <p>
              نبض نيوز منصة إخبارية تقدم لك آخر الأخبار
              والتطورات المحلية والعربية والعالمية
              بكل سرعة وموضوعية.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          {/* الأقسام */}
          <div className="footer-column">
            <h3>الأقسام</h3>

            <ul>
              <li>سياسة</li>
              <li>اقتصاد</li>
              <li>رياضة</li>
              <li>تكنولوجيا</li>
              <li>عالم</li>
              <li>فن</li>
            </ul>
          </div>

          {/* روابط مهمة */}
          <div className="footer-column">
            <h3>روابط مهمة</h3>

            <ul>
              <li>من نحن</li>
              <li>اتصل بنا</li>
              <li>سياسة الخصوصية</li>
              <li>شروط الاستخدام</li>
              <li>إعلان معنا</li>
            </ul>
          </div>

          {/* النشرة البريدية */}
          <div className="footer-column newsletter">
            <h3>النشرة الإخبارية</h3>

            <p>
              اشترك ليصلك أهم الأخبار والتحديثات اليومية.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
              />

              <button>
                اشتراك
              </button>
            </div>
          </div>

        </div>

        {/* أسفل الفوتر */}
        <div className="footer-bottom">

          <span>
            © 2026 نبض نيوز. جميع الحقوق محفوظة.
          </span>

          <span>
            آخر تحديث للأخبار على مدار الساعة
          </span>

        </div>

      </div>
    </footer>
  );
}