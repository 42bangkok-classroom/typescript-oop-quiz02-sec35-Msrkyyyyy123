
import axios from 'axios';

interface user {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function etPostsByUser() {
  try {
    const response = await axios.get<user[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    if (posts.length === 0) return [];

    const firstPost = posts[0];
    const secondPost = posts[1];

    const result = [
      { id: firstPost.id, title: firstPost.title },
      { id: secondPost.id, title: secondPost.title }
    ];

    return result;
  } catch (error) {
    return [];
  }
}