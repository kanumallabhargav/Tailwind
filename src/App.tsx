import './App.css'
import DemoComponent from "./components/DemoComponent.tsx";
import NavBar from "./components/NavBar.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Interactive from "./components/Interactive.tsx";
import Breakpoints from "./components/Breakpoints.tsx";
import Flex from "./components/Flex.tsx";
import Grid from "./components/Grid.tsx";
import Transform from "./components/Transform.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <div className='container bg-zinc-300 py-4 rounded-full shadow-inner shadow-zinc-500/30 mb-16'>
                <NavBar>
                    <Link to='/demo'>Demo Component</Link>
                </NavBar>
                <NavBar>
                    <Link to='/interactive'>Interactive</Link>
                </NavBar>
                <NavBar>
                    <Link to='/breakpoints'>Breakpoints</Link>
                </NavBar>
                <NavBar>
                    <Link to='/flex'>Flex</Link>
                </NavBar>
                <NavBar>
                    <Link to='/grid'>Grid</Link>
                </NavBar>
                <NavBar>
                    <Link to='/transform'>Transform</Link>
                </NavBar>
            </div>


            <Routes>
                <Route path="/demo" element={<DemoComponent />} />
                <Route path="/interactive" element={<Interactive />} />
                <Route path="/breakpoints" element={<Breakpoints />} />
                <Route path="/flex" element={<Flex />} />
                <Route path="/grid" element={<Grid />} />
                <Route path="/transform" element={<Transform />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
