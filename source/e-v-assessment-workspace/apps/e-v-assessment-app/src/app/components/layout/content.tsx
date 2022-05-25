import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Landing from '../modules/landing/landing';


export default function Content() {
  return (
      <main className="page-content">
        <Routes>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </main>
  );
}

// export default function Content() {
//   return (
//     <>
//       <main className="page-content">
//             <h2>Pro Sidebar</h2>
//             <hr></hr>
//             <div className="row">
//             <div className="form-group col-md-12">
//                 <p>
//                 This is a responsive sidebar template with dropdown menu based on
//                 bootstrap 4 framework.
//                 </p>
//                 <p>
//                 {' '}
//                 You can find the complete code on{' '}
//                 <a
//                     href="https://github.com/azouaoui-med/pro-sidebar-template"
//                     target="_blank"
//                 >
//                     Github
//                 </a>
//                 , it contains more themes and background image option
//                 </p>
//             </div>
//             <div className="form-group col-md-12">
//                 <iframe
//                 src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small"
//                 scrolling="0"
//                 width="90px"
//                 height="30px"
//                 ></iframe>
//                 <iframe
//                 src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small"
//                 scrolling="0"
//                 width="90px"
//                 height="30px"
//                 ></iframe>
//             </div>
//             <div className="form-group col-md-12">
//                 <div className="alert alert-success" role="alert">
//                 <h4 className="alert-heading">New !</h4>
//                 <p>
//                     New react pro sidebar library is now available on{' '}
//                     <a
//                     href="https://www.npmjs.com/package/react-pro-sidebar"
//                     target="_blank"
//                     >
//                     npm
//                     </a>{' '}
//                     <a
//                     href="https://github.com/azouaoui-med/react-pro-sidebar"
//                     target="_blank"
//                     >
//                     <img
//                         alt="GitHub stars"
//                         src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
//                     />
//                     </a>
//                 </p>
//                 <a
//                     href="https://github.com/azouaoui-med/react-pro-sidebar"
//                     target="_blank"
//                     className="btn btn-sm btn-primary mr-2"
//                 >
//                     Github
//                 </a>
//                 <a
//                     href="https://azouaoui-med.github.io/react-pro-sidebar"
//                     target="_blank"
//                     className="btn btn-sm btn-success"
//                 >
//                     Demo
//                 </a>
//                 </div>
//             </div>
//             </div>

//             <h5>More templates</h5>
//             <hr></hr>
//             <div className="row">
//             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
//             <div className="card rounded-0 p-0 shadow-sm">
//                 <img src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png" className="card-img-top rounded-0" alt="Angular pro sidebar"/>
//                 <div className="card-body text-center">
//                 <h6 className="card-title">Angular Pro Sidebar</h6>
//                 <a href="https://github.com/azouaoui-med/angular-pro-sidebar" target="_blank" className="btn btn-primary btn-sm">Github</a>
//                 <a href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/" target="_blank" className="btn btn-success btn-sm">Preview</a>
//                 </div>
//             </div>
//             </div>
//             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
//             <div className="card rounded-0 p-0 shadow-sm">
//                 <img src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG" className="card-img-top rounded-0" alt="Angular pro sidebar"/>
//                 <div className="card-body text-center">
//                 <h6 className="card-title">Angular Dashboard</h6>
//                 <a href="https://github.com/azouaoui-med/lightning-admin-angular" target="_blank" className="btn btn-primary btn-sm">Github</a>
//                 <a href="https://azouaoui-med.github.io/lightning-admin-angular/demo/" target="_blank" className="btn btn-success btn-sm">Preview</a>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <hr></hr>

//         <footer className="text-center">
//             <div className="mb-2">
//             {/* <small>
//                 © 2020 made with <i className="fa fa-heart" style="color:red"></i> by - <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">Mohamed Azouaoui</a>
//             </small> */}
//             </div>
//             <div>
//             <a href="https://github.com/azouaoui-med" target="_blank">
//                 <img alt="GitHub followers" src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social" />
//             </a>
//             <a href="https://twitter.com/azouaoui_med" target="_blank">
//                 <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social" />
//             </a>
//             </div>
//         </footer>

//       </main>
//     </>
//   );
// }
