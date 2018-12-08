// import controller modules
import * as PagesContoller from '../controllers';

const pages = new PagesContoller.default();

const routes = (app) => {
  app.get('/test', (req, res) => {
    res.status(200)
      .send('Welcome to my API');
  });
  app.get('/', pages.getHome);
};

export default routes;
