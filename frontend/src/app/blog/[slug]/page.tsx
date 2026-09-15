import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "@/components/blog/BlogPostContent";

export const metadata = {
  title: "Why Edge AI is the Future of Assistive Technology | Trinetrum",
  description: "Cloud-based AI has powered the first generation of assistive devices. But the next generation must run entirely on-device.",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <div className="flex-grow bg-white mt-[-1px]">
        <BlogPostContent />
      </div>

      <Footer />
    </main>
  );
}
