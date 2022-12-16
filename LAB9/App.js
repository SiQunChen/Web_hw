import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useParams, useSearchParams } from "react-router-dom";
import MySidebar from './components/sidebar';
import Title from './components/title';

function App() {
  return (
    <div className="App">
	 <Routes>
	   <Route path="/" element={<Layout />}>
		  <Route index element={<Home />} />
		  <Route path="search" element={<Search />} />
		  {/* Using path="*"" means "match anything", so this route
				  acts like a catch-all for URLs that we don't have explicit
				  routes for. */}
		  <Route path="*" element={<NoMatch />} />
	   </Route>
	 </Routes>
    </div>
  );
}

function Layout() {
    return (
        <div>
            <Title/>
            <ProSidebarProvider>
                <MySidebar/>
            </ProSidebarProvider>
            <Outlet />
        </div>
    );
}

function Home() {
  return (
    <div>
      <h2>This is our Home!</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Search() {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <h2>Your search term: {searchParams.get('term')}</h2>
            <form onSubmit="search">
                <label> Search:</label>
                <input name={"term"} />
                <button type={"submit"}>submit</button>
            </form>
        </div>
    );
}

export default App;
