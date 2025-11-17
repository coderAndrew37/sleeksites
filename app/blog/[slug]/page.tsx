import { AuthorBio } from "@/app/components/blog/AuthorBio";
import { portableTextComponents } from "@/app/components/blog/PortableTextComponents";
import { QuizComponent } from "@/app/components/blog/QuizComponent";
import { RelatedPosts } from "@/app/components/blog/RelatedPosts";
import { TableOfContents } from "@/app/components/blog/TableOfContents";
import Layout from "@/app/components/layout/Layout";
import { BlogPost, Quiz } from "@/app/components/types/blog";
import Button from "@/app/components/ui/Button";
import { safeImageUrl } from "@/app/components/utils/safeImageHelper";
import { client, urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { JSX, useEffect, useRef, useState } from "react";

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPage({
  post,
  relatedPosts,
}: BlogPostPageProps): JSX.Element {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const imgUrl = safeImageUrl(post.mainImage, 400, 200);

  // Extract quiz from body content
  const quiz = post.body?.find((block: any) => block._type === "quiz") as
    | Quiz
    | undefined;
  const bodyWithoutQuiz = post.body?.filter(
    (block: any) => block._type !== "quiz"
  );

  // Extract headings for table of contents
  const headings =
    bodyWithoutQuiz
      ?.filter(
        (block: any) =>
          block._type === "block" && ["h2", "h3"].includes(block.style)
      )
      .map((block: any) => ({
        id: block._key,
        text: block.children[0]?.text,
        level: block.style,
      })) || [];

  // Intersection Observer for table of contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowQuiz(false);
  };

  return (
    <Layout
      title={post.seo?.metaTitle || post.title}
      description={post.seo?.metaDescription || post.excerpt}
    >
      <Head>
        <meta name="keywords" content={post.seo?.keywords?.join(", ")} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={
            post.mainImage
              ? urlForImage(post.mainImage).width(1200).height(630).url()
              : "/default-og.jpg"
          }
        />

        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        {post.categories.map((category) => (
          <meta
            key={category.slug}
            property="article:tag"
            content={category.title}
          />
        ))}
      </Head>

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-linear-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-blue-200 mb-8">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>›</span>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <span>›</span>
                <span className="text-white">{post.title}</span>
              </nav>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog/category/${category.slug}`}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-blue-200">
                <div className="flex items-center">
                  {post.author.image ? (
                    <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white">
                      {post.author.name}
                    </div>
                    <div>{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {publishedDate}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime} min read
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="lg:col-span-1">
                    <div className="sticky top-8">
                      <TableOfContents
                        headings={headings}
                        activeHeading={activeHeading}
                      />
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div
                  ref={contentRef}
                  className={`${headings.length > 0 ? "lg:col-span-3" : "lg:col-span-4"} max-w-3xl mx-auto`}
                >
                  {/* Featured Image */}
                  {post.mainImage && (
                    <div className="mb-12 rounded-2xl overflow-hidden">
                      <div className="relative w-full h-96">
                        <Image
                          src={urlForImage(post.mainImage)
                            .width(1200)
                            .height(600)
                            .url()}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          priority
                          placeholder="blur"
                          blurDataURL={urlForImage(post.mainImage)
                            .width(20)
                            .height(20)
                            .blur(10)
                            .url()}
                        />
                      </div>
                      {post.mainImage.caption && (
                        <p className="text-center text-gray-600 text-sm mt-3">
                          {post.mainImage.caption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Portable Text Content */}
                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={bodyWithoutQuiz}
                      components={portableTextComponents}
                    />
                  </div>

                  {/* Quiz Section */}
                  {quiz && (
                    <div className="my-12">
                      {!showQuiz && !quizCompleted && (
                        <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Test Your Knowledge
                          </h3>
                          <p className="text-gray-600 mb-6">
                            Take this quick quiz to see how well you understood
                            the concepts in this article.
                          </p>
                          <Button
                            variant="primary"
                            onClick={() => setShowQuiz(true)}
                          >
                            Start Quiz
                          </Button>
                        </div>
                      )}
                      {showQuiz && (
                        <QuizComponent
                          quiz={quiz}
                          onComplete={handleQuizComplete}
                        />
                      )}
                      {quizCompleted && (
                        <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-8 h-8 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Quiz Completed!
                          </h3>
                          <p className="text-gray-600">
                            Great job! You've completed the quiz and reinforced
                            your understanding.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Author Bio */}
                  <AuthorBio author={post.author} />

                  {/* Share Section */}
                  <div className="bg-gray-50 rounded-2xl p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Enjoyed this article?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Share it with your network
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        {
                          name: "Twitter",
                          url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                          color: "bg-blue-400 hover:bg-blue-500",
                        },
                        {
                          name: "LinkedIn",
                          url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                          color: "bg-blue-600 hover:bg-blue-700",
                        },
                        {
                          name: "Facebook",
                          url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          color: "bg-blue-800 hover:bg-blue-900",
                        },
                      ].map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${platform.color} text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center`}
                        >
                          Share on {platform.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{ slug }`;
  const posts = await client.fetch(query);

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    publishedAt,
    readTime,
    featured,
    "author": author->{
      name,
      role,
      bio,
      "image": image.asset->url
    },
    "categories": categories[]->{
      title,
      slug
    },
    seo
  }`;

  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts based on categories
  const relatedPostsQuery = `*[
    _type == "post" && 
    slug.current != $slug && 
    count(categories[@._ref in ^.^.categories[]._ref]) > 0
  ][0...3]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{
      name,
      role
    },
    "categories": categories[]->{
      title,
      slug
    }
  }`;

  const relatedPosts = await client.fetch(relatedPostsQuery, { slug });

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
