addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const response = await fetch(request);
    const type = response.headers.get('Content-Type') || '';

    // Efficient HTML Processing: Only modify if there are <img> tags
    if (type.includes('text/html')) {
      let text = await response.text();

      // Check if there are any images to replace before processing
      if (
        /<img[^>]+src=["']https?:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com/.test(
          text
        )
      ) {
        // Replace the URLs in the src attributes
        text = text.replace(
          /(<img[^>]*src=["'])(https?:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com\/[^\s"']+?\.(?:png|webp|jpg|svg|jpeg|gif))([^"'>]*)(["'>])/g,
          '$1https://loudface.co/cdn-cgi/image/format=avif,quality=90/$2$3$4'
        );

        // Replace the URLs in the srcset attributes
        text = text.replace(
          /(<img[^>]*srcset=["'])([^"'>]+)(["'>])/g,
          (match, start, srcset, end) => {
            const replacedSrcset = srcset.replace(
              /(https:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com\/[^\s,]+?\.(?:png|webp|jpg|svg|jpeg|gif))/g,
              'https://loudface.co/cdn-cgi/image/format=avif,quality=90/$1'
            );
            return `${start}${replacedSrcset}${end}`;
          }
        );
      }

      return new Response(text, {
        headers: response.headers,
      });
    }

    // If the response is an image and it's from the Image Resizer, set cache headers
    if (type.startsWith('image/') && request.url.includes('https://loudface.co/cdn-cgi/image/')) {
      const newHeaders = new Headers(response.headers);

      // Example for dynamic cache control (this is a static implementation)
      // You might adjust this based on the image's path or query parameters
      newHeaders.set('Cache-Control', 'public, s-maxage=31536000, max-age=604800, immutable');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    return response;
  } catch (error) {
    // Enhanced error handling
    console.error('Error processing request:', error);
    return new Response('An error occurred while processing your request.', { status: 500 });
  }
}
