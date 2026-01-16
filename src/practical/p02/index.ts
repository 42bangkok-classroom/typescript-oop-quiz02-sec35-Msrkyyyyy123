
import axios from 'axios';

interface user {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPostsByUser(userId: number) {
  try {
    const response = await axios.get<user[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    if (posts.length === 0) return [];

    const result = posts
      .filter(post => post.userId === userId)
      .map(post => ({
        id: post.id,
        title: post.title
      }));

    return result;
  } catch (error) {
    return [];
  }
}