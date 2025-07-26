import FadeInSection from "../components/FadeInSection";
import blogs from "../data/blogs";

const Blogs = () => {
  return (
    <section id="blogs" className="dark:max-w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 dark:bg-gray-900 dark:text-gray-100">
        <FadeInSection variant="slideInRight" delay={0.4}>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-12 dark:text-gray-100">
            &lt; Blogs /&gt;
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.title}
                className="bg-white border border-gray-200 dark:shadow-lg dark:shadow-white/20 hover:scale-105 dark:border-none dark:bg-gray-900 dark:text-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <a href={blog.demo}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 dark:text-gray-100">{blog.date}</p>
                      <p className="text-gray-600 text-sm mb-4 flex items-center gap-1 dark:text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          class="blogs-clock"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                        </svg>
                        3 min read
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Blogs;
