import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Feed from './posts/Feed';
import Feeds from './posts/Feeds';
import Media from './posts/Media';

const Posts = () => {
  const { path } = useRouteMatch();

  return (
    <div className="posts">
      <aside>
        <ul>
          <li>
            <NavLink to={`${path}/feeds`}>Feed</NavLink>
          </li>
          <li>
            <NavLink to={`${path}/media`}>Media</NavLink>
          </li>
        </ul>
      </aside>
      <div>
        <Switch>
          <Route path={`${path}/feeds`} exact component={Feeds} />
          <Route path={`${path}/feeds/:id`} exact component={Feed} />
          <Route path={`${path}/media`} component={Media} />
          <Redirect path={path} to={`${path}/feeds`} />
        </Switch>
      </div>
    </div>
  );
};

export default Posts;
