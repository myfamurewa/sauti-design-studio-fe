import React from 'react';
import { connect } from "react-redux";

import { getProjectsByUserId,addProjectByUserId,setProjectId } from "../actions";
import Navbar from '../components/Navbar';

import blankFolder from '../images/FolderBlank.png';
import blankProject from '../images/ProjectBlank.png';
import addSign from '../images/icons/plus.png';

const sidebar = [
  {
    id: 1,
    title: "Tutorials",
    backgroundImage: blankFolder
  },
  {
    id: 2,
    title: "Templates",
    backgroundImage: blankFolder
  },
  {
    id: 3,
    title: "Contact Us",
    backgroundImage: blankFolder
  },
  {
    id: 4,
    title: "Tutorials",
    backgroundImage: blankFolder
  },
  {
    id: 5,
    title: "Templates",
    backgroundImage: blankFolder
  },
  {
    id: 6,
    title: "Contact Us",
    backgroundImage: blankFolder
  }
]

const folders = [
  {
    id: 1,
    title: "Church Apps",
    backgroundImage: blankFolder
  },
  {
    id: 2,
    title: "Recipe Book",
    backgroundImage: blankFolder
  },
  {
    id: 3,
    title: "Personal",
    backgroundImage: blankFolder
  },
  {
    id: 4,
    title: "WIP",
    backgroundImage: blankFolder
  },
  {
    id: 5,
    title: "Trade Network",
    backgroundImage: blankFolder
  },
  {
    id: 6,
    title: "Trade Network",
    backgroundImage: blankFolder
  }
]

const projects = [
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  }
]

class Profile extends React.Component {
  state={
    projects: null
  }

  componentDidMount(){
    if(this.props.user_id !== null){
      this.props.getProjectsByUserId(this.props.user_id);
    }
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("get there -------------------");
    console.log("prevProps.fetchingProjectId", prevState.fetchingProjectId);
    console.log("prevProps.fetchingProjectId", prevProps.fetchingProjectId);
    console.log("this.props.fetchingProjectId", this.props.fetchingProjectId);
    console.log("this.props.project_id", this.props.project_id);

    if(this.props.added_project !== prevProps.added_project && !this.props.added_project){
      this.props.getProjectsByUserId(this.props.user_id);
    }
    else if(this.props.projects !== prevProps.projects && !this.props.fetching){
        this.setState({
          ...this.state,
          projects: this.props.projects
        });
    }
    else if(this.props.fetchingProjectId !== prevProps.fetchingProjectId && this.props.fetchingProjectId === false){
      console.log("workflows --------");
      this.props.history.push("/workflows");
    }
  }
  
  addProject = (obj) => {
    let {project_title, graph_json, user_id} = obj;
    let projectsArray = this.state.projects;
    projectsArray.push({
      add: "Adding Project"
    });
    this.setState({
      ...this.state,
      projects: projectsArray
    });
    this.props.addProjectByUserId(
      {
        project_title,
        graph_json,
        user_id
      }
    )
  }

  render(){
    if(this.props.projects !== null && this.state.projects == null){
      this.setState({
        projects: this.props.projects
      });
    }
      return (
        <>
      <Navbar/>
      {
        (this.props.fetching || this.props.projects === null || this.state.projects === null)?(
          <p>duh</p>
          ):(
      <div className="profile-page-container">
        {/* <section className="resources-section">
            <h2>Resources</h2>
            <div className="resources-list">
              {sidebar.map(item => {
                return <div 
                  style={{
                    backgroundImage: `url(${blankProject})`,
                    backgroundPosition: "0 0",
                    backgroundSize: "cover"
                    }}
                  className="resource"
                  key={item.id}
                  >
                  <div className="title-container">
                    <h3>{ item.title }</h3>
                  </div>
                </div>
              })}
            </div>
        </section>
        <section className="folders-section">
            <h2>Folders</h2>
            <div className="folders-list">
              {folders.map(folder => {
              return <div 
                style={{
                  backgroundImage: `url(${blankFolder})`,
                  backgroundPosition: "0 0",
                  backgroundSize: "cover"
                  }}
                className="folder"
                key={folder.id}
                >
                <div className="title-container">
                  <h3>{ folder.title }</h3>
                </div>
              </div>
              })}
            </div>
        </section> */}
        <section className="projects-section">
          <div className="projects-title-add">
            <h2>Projects</h2>
            <div 
              className="btn"
              title="Add Project"
              onClick={()=>this.addProject(
                {
                  project_title: "Enter Title...",
                  graph_json: null,
                  user_id: this.props.user_id
                }
              )}
            >
            <img src={addSign} alt="Add Project"/>
            </div>
          </div>
          <div className="projects-list">
            {this.state.projects.map(project => {
              if(project.add !== undefined){
                return <div 
              >
              <div className="title-container">
                <h3>{ project.add }</h3>
              </div>
            </div>
              }else{
              return <div 
              style={{
                backgroundImage: `url(${blankFolder})`,
                backgroundPosition: "0 0",
                backgroundSize: "cover"
                }}
              className="project"
              key={project.id}
              onClick={
                ()=> this.props.setProjectId(project.id)
              }
              >
              <div className="title-container">
                <h3>{ project.project_title }</h3>
              </div>
            </div>
              }
            })}
          </div>
        </section>
      </div>
        )
      }
    </>
  )
}
}


const mapStateToProps = state => ({
  user_id: state.user_id,
  projects: state.projects,
  project_id: state.project_id,
  added_project: state.added_project,
  project_title: state.project_title,
  graph_json: state.graph_json,
  fetching: state.fetching,
  error: state.error,
  loggedIn: state.loggedIn,
  fetchingProjectId: state.fetchingProjectId
});

export default connect(
  mapStateToProps,
  { getProjectsByUserId, addProjectByUserId, setProjectId }
  )(Profile); 
