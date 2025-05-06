import data from '../data/blog.json';

export async function getBlogPosts() {
  try {
    return {
      status: 200,
      body: data
    };
  } catch (error) {
    console.error('Error loading blog data:', error);
    return {
      status: 500,
      body: { posts: [] }
    };
  }
} 