module.exports = (app)=>{

  require("dotenv").config();

  const express = require("express");
  const morgan = require("morgan");

  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  const FileStore = require("session-file-store")(session);
  const { cookiesCleaner } = require("./auth");

  const path = require("path");
  const hbs = require("hbs");

  const cors = require("cors");
  app.use(cors());

  app.use(morgan("dev"));

  // Body POST запросов.
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // initialize cookie-parser to allow us access the cookies stored in the browser.
  app.use(cookieParser());

  // initialize express-session to allow us track the logged-in user across sessions.
  app.use(
    session({
      store: new FileStore(),
      key: "user_sid",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
      },
    })
  );
  app.use(cookiesCleaner);

  // Подключаем статику
  // app.use(express.static(path.join(__dirname, '..', "public")));

  // Подключаем views(hbs)rs
  app.set("views", path.join(__dirname, "..", "views"));
  app.set("view engine", "hbs");

  //регистрируем хбс нав и футер
  hbs.registerPartials(path.join(__dirname, "..", "/views/partials"));



}
