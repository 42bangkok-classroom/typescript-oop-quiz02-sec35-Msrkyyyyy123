import axios from 'axios';

interface user {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getEdgePosts() {
  try {
    const response = await axios.get<user[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    if (posts.length === 0) return [];

    const firstPost = posts[0];
    const lastPost = posts[posts.length - 1];

    const result = [
      { id: firstPost.id, title: firstPost.title },
      { id: lastPost.id, title: lastPost.title }
    ];

    return result;
  } catch (error) {
    return [];
  }
}