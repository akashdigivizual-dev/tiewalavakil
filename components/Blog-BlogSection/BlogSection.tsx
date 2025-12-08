import React from "react";
import "./BlogSection.scss";

interface BlogPost {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    imageUrl: "/images/Blog/blog2.png",
    tags: ["Property Law", "Sale Deed", "Legal Advice"],
    title: "Why Sale Deed is the Most Crucial Legal Document in Property Transactions",
    description:
      "In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property.",
    author: "Advocate Ajay Shankar Sharma",
    date: "December 15, 2024",
    readTime: "5 min read",
    link: "/blogs/sale-deed-crucial-legal-document",
  },
  {
    imageUrl: "/images/Blog/blog3.png",
    tags: ["बैनामा लेखक", "Property Law", "Hapur Legal Services"],
    title: "Trusted Property Legal Services in Hapur | बैनामा लेखक | Advocate Ajay Shankar Sharma",
    description:
      "Are you looking for reliable, affordable, and legally sound property services in Hapur? Meet Advocate Ajay Shankar Sharma, one of the most trusted and experienced बैनामा लेखक (Deed Writers) in Hapur, offering over 33 years of legal expertise and a family legacy of legal service since the 1950s.",
    author: "Advocate Ajay Shankar Sharma",
    date: "December 10, 2024",
    readTime: "8 min read",
    link: "/blogs/trusted-property-legal-services-hapur",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog-section container mx-auto p-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <div className="image-wrapper">
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div className="content">
            <div className="tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="title">{post.title}</h2>
            <p className="description">{post.description}</p>
            <div className="meta">
              <span className="author">👤 {post.author}</span>
              <span className="date">📅 {post.date}</span>
              <span className="read-time">⏱ {post.readTime}</span>
            </div>
            <a href={post.link} className="read-more-btn">
              Read Full Article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
