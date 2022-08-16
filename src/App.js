import './App.css';
import 'antd/dist/antd.min.css';
import MainContainer from './components/MainContainer';


function App() {

  (function() {
    
    var win = window,
        doc = win.document;
  
    // If there's a hash, or addEventListener is undefined, stop here
    if ( !window.location.hash || !win.addEventListener ) {
  
      //scroll to 1
      window.scrollTo( 0, 1 );
      var scrollTop = 1,
  
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
  
      if (win.addEventListener) {
        win.addEventListener("load", function(){
          setTimeout(function(){
            //reset to hide addr bar at onload
            win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
          }, 0);
        }, false );
      }
    }
  
  })();

  return (
    <div className="App" style={{ height: "100vh" }}>
      <MainContainer />
    </div>
  );
}

export default App;
