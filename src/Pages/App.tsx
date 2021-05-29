
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import '../styles/allstyles.scss';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import GroupsView from './GroupsView';
import AddGroup from "./AddGroup";
import NavigationBar from '../Components/NavigationBar';
import MentorRegistration from './MentorRegistration';
import LandingPage from './LandingPage';
import MyGroup from "./MyGroup";

export default function App() {
  return (
    <Router>



        <Switch>
          <Route path="/singin">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <RegistrationForm />
          </Route>
          <Route path="/mentor_registration">
            <MentorRegistration />
          </Route>
          <Route path="/addGroup">
            <AddGroup />
          </Route>
          <Route exact path="/myGroup" component={MyGroup}>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>

    </Router >
  );
}


// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Grupy</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/IT`}>Grupy ze świata IT</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/Psychology`}>Grupy ze świata psychologii</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           {/* <GroupsView groupsType={topicId}/> jakos przekazac*/}
//           <GroupsView groupsType='IT' />
//         </Route>
//         <Route path={match.path}>
//           {/* <GroupsView groupsType='IT' /> */}
//         </Route>
//       </Switch>
//     </div>
//   );
// }

