import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom styling for all markdown elements
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-instrument-serif text-green mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-instrument-serif text-green mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-instrument-serif text-green mb-4 leading-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg font-space-grotesk text-body mb-6 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link href={href || ''} className="text-text-focused hover:italic underline">
        {children}
      </Link>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-lg font-space-grotesk text-body mb-6 space-y-2 ml-4">
        {children}
      </ol>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-lg font-space-grotesk text-body mb-6 space-y-2 ml-4">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    // You can add more custom components
    ...components,
  }
}