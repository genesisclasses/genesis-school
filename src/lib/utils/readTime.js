// lib/utils/calculateReadTime.js - UPDATED VERSION
export function calculateReadTime(content) {
  if (!content) return 1;

  try {
    let contentObj = content;

    // Handle if content is a string
    if (typeof content === 'string') {
      contentObj = JSON.parse(content);
    }

    console.log('Processing content:', contentObj); // DEBUG

    // If contentObj is empty or doesn't have content array
    if (!contentObj || !contentObj.content || !Array.isArray(contentObj.content)) {
      console.warn('No valid content array found');
      return 1;
    }

    let totalText = '';

    // Extract text from all node types
    contentObj.content.forEach((node) => {
      if (!node) return;

      // Paragraph nodes
      if (node.type === 'paragraph' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.text) {
            totalText += item.text + ' ';
          }
        });
      }

      // Heading nodes
      else if (node.type === 'heading' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.text) {
            totalText += item.text + ' ';
          }
        });
      }

      // Blockquote nodes
      else if (node.type === 'blockquote' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.content && Array.isArray(item.content)) {
            item.content.forEach((subItem) => {
              if (subItem.text) {
                totalText += subItem.text + ' ';
              }
            });
          }
        });
      }

      // Code block nodes
      else if (node.type === 'codeBlock' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.text) {
            totalText += item.text + ' ';
          }
        });
      }

      // Bullet list nodes
      else if (node.type === 'bulletList' && node.content && Array.isArray(node.content)) {
        node.content.forEach((listItem) => {
          if (listItem.content && Array.isArray(listItem.content)) {
            listItem.content.forEach((paragraphNode) => {
              if (paragraphNode.content && Array.isArray(paragraphNode.content)) {
                paragraphNode.content.forEach((item) => {
                  if (item.text) {
                    totalText += item.text + ' ';
                  }
                });
              }
            });
          }
        });
      }

      // Ordered list nodes
      else if (node.type === 'orderedList' && node.content && Array.isArray(node.content)) {
        node.content.forEach((listItem) => {
          if (listItem.content && Array.isArray(listItem.content)) {
            listItem.content.forEach((paragraphNode) => {
              if (paragraphNode.content && Array.isArray(paragraphNode.content)) {
                paragraphNode.content.forEach((item) => {
                  if (item.text) {
                    totalText += item.text + ' ';
                  }
                });
              }
            });
          }
        });
      }
    });

    console.log('Total text extracted:', totalText); // DEBUG
    console.log('Word count:', totalText.trim().split(/\s+/).length); // DEBUG

    // Calculate read time: 200 words per minute
    const wordCount = totalText.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    console.log('Final read time:', readTime); // DEBUG

    return readTime;
  } catch (error) {
    console.error('Error calculating read time:', error);
    return 1;
  }
}
