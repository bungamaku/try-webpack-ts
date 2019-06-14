import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Discover from 'pages/Discover';
import NavBar from 'components/NavBar';

export default function Page() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Discover} />
      </Switch>
    </>
  );
}
