import React from 'react';
import styles from './BlogLayout.module.css';

const BLOG_DATA = {
  categories: ["Residence", "Beauty", "Fashion", "Images", "Lifestyle"],
  recentPosts: [
    { id: 1, title: "Fusce mollis felis quis tristique", date: "7 MARCH, 2023", img: "https://i.pravatar.cc/100?u=a042581f4e29026701d" },
    { id: 2, title: "Fusce mollis felis quis tristique", date: "7 MARCH, 2023", img: "https://i.pravatar.cc/100?u=a042581f4e29026702d" },
    { id: 3, title: "Fusce mollis felis quis tristique", date: "7 MARCH, 2023", img: "https://i.pravatar.cc/100?u=a042581f4e29026703d" },
    { id: 4, title: "Fusce mollis felis quis tristique", date: "7 MARCH, 2023", img: "https://i.pravatar.cc/100?u=a042581f4e29026704d" },
  ],
  archives: [
    { month: "January", count: 3 },
    { month: "February", count: 4 },
    { month: "March", count: 4 },
    { month: "April", count: 3 },
    { month: "May", count: 4 },
    { month: "Jun", count: 1 },
    { month: "July", count: 4 },
  ],
  articles: [
    { id: 1, type: 'standard', title: "Praesent pharetra congue sem, nec euismod nisi fermentum.", meta: "7 MARCH 2023 • BY JOHN DOE", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, type: 'slider', title: "Praesent pharetra congue sem, nec euismod nisi fermentum.", meta: "7 MARCH 2023 • BY JOHN DOE", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" },
    { id: 3, type: 'video', title: "Praesent pharetra congue sem, nec euismod nisi fermentum.", meta: "7 MARCH 2023 • BY JOHN DOE", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { id: 4, type: 'text', title: "Praesent pharetra congue sem, nec euismod nisi fermentum.", meta: "7 MARCH 2023 • BY JOHN DOE" ,img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"},
  ]
};

const BlogLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Left Sidebar */}
        <aside className={styles.sidebar}>
          <section className={styles.widget}>
            <h3 className={styles.widgetTitle}>SEARCH</h3>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Enter your keywords..." className={styles.searchInput} />
              <button className={styles.searchBtn}>🔍</button>
            </div>
          </section>

          <section className={styles.widget}>
            <h3 className={styles.widgetTitle}>CATEGORIES</h3>
            <ul className={styles.list}>
              {BLOG_DATA.categories.map((cat, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.arrow}>&raquo;</span> {cat}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.widget}>
            <h3 className={styles.widgetTitle}>RECENT POSTS</h3>
            {BLOG_DATA.recentPosts.map((post) => (
              <div key={post.id} className={styles.recentItem}>
                <img src={post.img} alt="Thumbnail" className={styles.miniThumb} />
                <div className={styles.miniContent}>
                  <p className={styles.miniTitle}>{post.title}</p>
                  <span className={styles.miniDate}>{post.date}</span>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.widget}>
            <h3 className={styles.widgetTitle}>ARCHIVES</h3>
            <ul className={styles.list}>
              {BLOG_DATA.archives.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.arrow}>&raquo;</span> {item.month} 
                  <span className={styles.count}>({item.count})</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Right Content */}
        <main className={styles.main}>
          {BLOG_DATA.articles.map((article) => (
            <article key={article.id} className={styles.card}>
              {article.img && (
                <div className={styles.cardImageContainer}>
                  <img src={article.img} alt="Post cover" className={styles.cardImage} />
                  {article.type === 'video' && <div className={styles.playBtn}>▶</div>}
                  {article.type === 'slider' && (
                    <>
                      <div className={styles.sliderNavLeft}>&lsaquo;</div>
                      <div className={styles.sliderNavRight}>&rsaquo;</div>
                    </>
                  )}
                </div>
              )}
              <div className={styles.cardBody}>
                <span className={styles.cardMeta}>{article.meta}</span>
                <h2 className={styles.cardTitle}>{article.title}</h2>
                <p className={styles.cardExcerpt}>
                  Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh. In hac habitasse platea dictumst. 
                  Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien.
                </p>
                <div className={styles.cardFooter}>
                  <button className={styles.readMore}>▶</button>
                </div>
              </div>
            </article>
          ))}

          <div className={styles.pagination}>
            <button className={styles.pageArrow}>&lsaquo;</button>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageArrow}>&rsaquo;</button>
          </div>
        </main>

      </div>
    </div>
  );
};

export default BlogLayout;