import { posts } from "#site/content";
import config from "~/config";
import { getSEOTags } from "~/lib/seo";
import BlogPageClient from "./blog-page-client";

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: `All Blogs - ${config.appName}`,
  description:
    "Welcome to my digital garden where I share what I'm learning about shipping great products, becoming a better developer and growing a career in tech.",
  canonicalUrlRelative: "/blogs",
  keywords: [
    "JavaScript",
    "TypeScript",
    "React",
    "Testing",
    "Career",
    "Software Development",
    "Faisal tariq Blog",
  ],
});

const BlogPage = async ({ searchParams }: { searchParams: { search: string | undefined } }) => {
  return <BlogPageClient posts={posts} searchTerm={searchParams.search} />;
};

export default BlogPage;
