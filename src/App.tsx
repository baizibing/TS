import React from 'react';
import Dialog from './containers/dialog/index'
import Main from './containers/main/index'
// import '../src/index.css'
// import './assets/js/swiper.css'
// import './assets/fonts/iconfont.css'
// import './assets/js/flexible.js'

import '../src/index.css'
import './js/swiper.css'
import './fonts/iconfont.css'
import './js/flexible.js'
// import Ind from './utils/index.tsx'
const App: React.FC = () => {
  return (
    <div className="App">
        
         {/* <Main></Main> */}
          <Dialog   ></Dialog>
          {/* <Ind></Ind> */}
    </div>
  );
}
export default App;
