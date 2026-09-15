import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Trinetrum Ventures",
  description: "Thoughts from the Trinetrum team on AI, accessibility, embedded systems, and the future of assistive technology.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow">
        <BlogHero />
        <BlogList />
      </div>

      <Footer />
    </main>
  );
}
