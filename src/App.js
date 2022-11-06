import './App.css';
import Task from './Component/Task';
import TaskList from './Component/TaskList';
import TaskState from './Context/TaskState';
function App() {
  return (

    <div className="App">
      <TaskState>
        <div className="row">
          <div className="col-md-2" id='sidebar'>
            <div className='logo'>
              <img src="https://caitindia.com/wp-content/uploads/2021/03/CAIT-Logo-White-Highlight.png" alt="CAIT" />
            </div>
          <div className="menubar">
            <div className="sidebar-header">
              <div className="menu">
                <span>
                  <span className="icon"><img src="/icons/menu.png" alt="" /></span>
                  <span>My Apps</span>
                </span>
              </div>
              <div className="menu">
                <span>
                  <span className="icon"><img src="./icons/selection.png" alt="" /></span>
                  <span>Resources</span>
                </span>
              </div>
            </div>
            <div className="sidebar-footer">
              <div className="menu">
                <span>
                  <span className="icon"><img src="./icons/home.png" alt="" /></span>
                  <span>My Organization</span>
                </span>
              </div>
              <div className="menu">
                <span>
                  <span className="icon">
                    <img src="./icons/settings.png" alt="" />
                  </span>
                  <span>Settings</span>
                </span>
              </div>
              <div className="menu">
                <span>
                  <span className="icon"><img src="/icons/logout.png" alt="" /></span>
                  <span>Logout</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-10" id='taskContainer'>
            <div>
              <Task />
            </div>
            <div>
              <TaskList />
            </div>
          </div>
        </div>
      </TaskState>
    </div>
  );
}

export default App;
