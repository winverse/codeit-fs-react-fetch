import { PostProvider } from '@/providers/PostProvider';
import { PostList } from './features/Home/PostList';

function App() {
  return (
    <PostProvider>
      <PostList />
    </PostProvider>
  );
}

export default App;
