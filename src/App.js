import Header from './components/header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllBlogs from './blogs/AllBlogs';
import Login from './components/login';
import SignUp from './components/signup';
import { ContextProvider } from './store/userContext';
import Blog from './blogs/blog';
import Footer from './components/footer';
import AddNewBlog from './components/newBlog';
import Account from './components/account';

function App() {
  
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header /> 
          <div className='middle'>
        <Routes>
          <Route path='/' element={<AllBlogs />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/add-blog' element={<AddNewBlog />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/account' element={<Account />}  />
        </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
