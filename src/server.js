const jsonServer = require("json-server");

const server = jsonServer.create();

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/api/Authentication/Login", (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.status(400).send("Bad Request");
  } else {
    res.status(200).send({
      id: "1",
      email: "dev@gmail.com",
      password: "devPassword",
      username: "Dev",
      role: 1,
      birthday: "2000-06-14T13:30:00.0000000Z",
      gender: 0,
      phone: "+380990123033",
      accountId: "sadasda-2131-sadasd-123",
    });
  }
});

server.get("/api/FrontConfigs/GetConfigs", (req, res) => {
  res.status(200).json("Success");
});

server.get("/api/notificationType/All", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "nice",
    },
    {
      id: 2,
      name: "nice",
    },
  ]);
});

server.get("/api/chat/All", (req, res) => {
  res.status(200).json("Success");
});

server.get("/api/Users/GetCategories", (req, res) => {
  res.status(200).json([
    {
      id: "1",
      name: "Drawing",
      CategoryGroupId: "1",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "2",
      name: "Pottery",
      CategoryGroupId: "1",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "3",
      name: "Self-education",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "4",
      name: "Public Speaking",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "5",
      name: "Book Club",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "6",
      name: "Climbing",
      CategoryGroupId: "3",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "7",
      name: "Volleyball",
      CategoryGroupId: "3",
      countOfUser: 0,
      countOfEvents: 0,
    },
  ]);
});

server.get("/api/category/all", (req, res) => {
  res.status(200).json([
    {
      id: "1",
      name: "Drawing",
      CategoryGroupId: "1",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "2",
      name: "Pottery",
      CategoryGroupId: "1",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "3",
      name: "Self-education",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "4",
      name: "Public Speaking",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "5",
      name: "Book Club",
      CategoryGroupId: "2",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "6",
      name: "Climbing",
      CategoryGroupId: "3",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "7",
      name: "Volleyball",
      CategoryGroupId: "3",
      countOfUser: 0,
      countOfEvents: 0,
    },
    {
      id: "8",
      name: "Football",
      CategoryGroupId: "3",
      countOfUser: 0,
      countOfEvents: 0,
    },
  ]);
});

server.get("/api/Users/GetUserInfo", (req, res) => {
  res.status(200).json({
    id: 1,
    email: "dev@gmail.com",
    password: "devPassword",
    username: "Dev",
    role: 1,
    birthday: "2000-06-14T13:30:00.0000000Z",
    gender: 0,
    phone: "+380990123033",
    accountId: "sadasda-2131-sadasd-123",
  });
});

server.get("/api/chat/GetUnreadMessages", (req, res) => {
  res.status(200).json("OMG");
});

server.get("/api/event/Upcoming", (req, res) => {
  res.status(200).json("OMG");
});

server.get("/api/Account/GetLinkedAuth", (req, res) => {
  res.status(200).json([]);
});

server.get("/api/Photo/GetUserPhoto", (req, res) => {
  res
    .status(200)
    .json(
      "https://images.unsplash.com/photo-1652640274319-676dc25db745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    );
});

server.post("/chatroom/negotiate", (req, res) => {
  res.status(200).json("It works!");
});

server.listen(5000, () => {});
