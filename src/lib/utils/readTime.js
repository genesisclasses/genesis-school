// ✅ Calculate read time from Tiptap JSON content
export function calculateReadTime(content) {
  if (!content) return 1;

  try {
    const contentObj = typeof content === 'string' ? JSON.parse(content) : content;

    // Extract all text from the content
    let totalText = '';

    if (contentObj.content && Array.isArray(contentObj.content)) {
      contentObj.content.forEach((node) => {
        if (node.type === 'paragraph' && node.content) {
          node.content.forEach((item) => {
            if (item.text) {
              totalText += item.text + ' ';
            }
          });
        } else if (node.type === 'heading' && node.content) {
          node.content.forEach((item) => {
            if (item.text) {
              totalText += item.text + ' ';
            }
          });
        } else if (node.type === 'blockquote' && node.content) {
          node.content.forEach((item) => {
            if (item.content) {
              item.content.forEach((subItem) => {
                if (subItem.text) {
                  totalText += subItem.text + ' ';
                }
              });
            }
          });
        } else if (node.type === 'codeBlock' && node.content) {
          node.content.forEach((item) => {
            if (item.text) {
              totalText += item.text + ' ';
            }
          });
        }
      });
    }

    // Average reading speed: 200 words per minute
    const wordCount = totalText.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return readTime;
  } catch (error) {
    console.error('Error calculating read time:', error);
    return 1;
  }
}
