import SharedMdxLayout from '../../components/SharedMdxLayout'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <SharedMdxLayout>{children}</SharedMdxLayout>
}lt function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="min-h-screen bg-grass pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}