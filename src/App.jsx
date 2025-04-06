import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

  useEffect(() => {
    if (Array.isArray(data)) {
      setPosts(data);
    } else {
      setPosts([]); // or handle it in a way that suits your application
    }
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="KhushiVerse🖋️" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home isLoading = {isLoading}
            fetchError = {fetchError} />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
