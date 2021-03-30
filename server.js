// Dependencies
const path = require ('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//App and Port
const app = express();
const PORT = process.env.PORT || 3030;

//Creating our express handlebars
const hbs = exphbs.create({ helpers });

//Creates session
const sess = {
  secret: 'StartingUserSession',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('assets'));

app.use(routes);

//Listener
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port 3030'));
  });