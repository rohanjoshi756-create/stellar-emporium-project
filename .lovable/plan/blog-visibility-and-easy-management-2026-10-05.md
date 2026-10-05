# Blog visibility and easy management

## What will change
- Add a polished latest-blogs section on the home page with a clear “View all blogs” link.
- Keep the existing all-blogs page as the complete article library.
- Redesign each article page so recent blogs appear in a left sidebar on desktop and a compact horizontal list on mobile.
- Keep every article, image, date, author, and section in one central content file so the team can add a new blog by copying one clearly documented entry.

## Technical details
- Reuse the existing `BlogCard` and typed blog data to preserve the current store design.
- Use type-safe article links and retain unique metadata, structured data, and sitemap entries.
- Verify home, listing, and article pages on desktop and mobile, including overflow and browser errors.
