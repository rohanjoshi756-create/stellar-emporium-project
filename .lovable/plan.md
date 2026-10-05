# Shopify Blog-Only Update

## Scope
- Add a Shopify blog listing template that automatically shows the selected blog's posts.
- Add a Shopify article template matching the current journal design, including recent blogs on the left, article content in the centre, and a related-product link on the right.
- Add an optional homepage “From the Nakshatra Journal” section showing the latest three posts.
- Add responsive blog styling to the existing theme stylesheet without changing product, collection, header, or footer layouts.
- Package only the files needed for this blog update, with short upload instructions for the existing Shopify theme.

## Content behaviour
- Existing Shopify article content will render inside the shared article design automatically.
- Headings, paragraphs, lists, blockquotes, links, tables, and images will inherit consistent article styling.
- The listing, recent posts, and homepage section will update automatically whenever the team publishes a Shopify blog post.

## Technical details
- Use Shopify Liquid objects (`blog`, `article`, and `blogs`) rather than hard-coded posts.
- Add `templates/blog.json`, `templates/article.json`, and reusable blog sections/snippets.
- Preserve Shopify native SEO metadata and article URLs.
