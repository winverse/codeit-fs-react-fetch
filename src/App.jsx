import { PostProvider } from '@/providers/PostProvider';
import { Pagination } from './components/Pagination';
import { PostList } from './features/Home/PostList';

function App() {
  return (
    <PostProvider>
      <PostList />
      <Pagination currentPage={1} totalPages={10} />
    </PostProvider>
  );
}

export default App;
