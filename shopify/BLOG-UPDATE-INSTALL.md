# Shopify Blog Update

This package adds only the blog design. It does not replace product, collection, cart, header, or footer files.

## Upload these new files

- `snippets/article-card.liquid`
- `sections/main-blog.liquid`
- `sections/main-article.liquid`
- `sections/home-blogs.liquid`
- `templates/blog.json`
- `templates/article.json`

## Merge these existing files

- Append the marked `SHOPIFY BLOG` block from `assets/theme.css` to the current theme's `assets/theme.css`.
- To show latest posts on the homepage, add `home-blogs` in the home template through Customize, or use the supplied `templates/index.json` update.

## Shopify setup

1. Open **Online Store → Themes → Edit code** and add/replace only the files listed above.
2. Open **Online Store → Themes → Customize**.
3. Open the **Blog posts** page and select a collection in the Article section for the right-side shopping button.
4. On the homepage, add **Latest blogs**, select the required Shopify blog, and save.
5. Add the blog URL to the existing header/footer navigation from Shopify Navigation.

Existing Shopify post content automatically uses this article design. Headings, paragraphs, lists, links, quotes, tables, and images are styled by the shared template.