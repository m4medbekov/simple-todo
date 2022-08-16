import './App.css';
import 'antd/dist/antd.min.css';
import MainContainer from './components/MainContainer';
import { Button } from 'antd';
import { FullScreen, useFullScreenHandle } from "react-full-screen";


function App() {

  const handle = useFullScreenHandle();
  
  return (
    <div className="App" style={{ height: "100vh" }}>
      <FullScreen handle={handle}>
        <MainContainer />
      </FullScreen>
      <Button onClick={handle.enter}>Full screen</Button>
    </div>
  );
}

export default App;
