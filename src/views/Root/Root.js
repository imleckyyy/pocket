import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import SummaryPage from 'views/SummaryPage/SummaryPage';
import VideosPage from 'views/VideosPage/VideosPage';
import ArticlesPage from 'views/ArticlesPage/ArticlesPage';
import DetailsPage from 'views/DetailsPage/DetailsPage';

const Root = () => (
  <>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={SummaryPage} />
          <Route exact path={routes.videos} component={VideosPage} />
          <Route exact path={routes.video} component={DetailsPage} />
          <Route exact path={routes.articles} component={ArticlesPage} />
          <Route exact path={routes.article} component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </>
);

export default Root;
