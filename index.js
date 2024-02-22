const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/ping", (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.clear();

  console.log("ERR is HERE");
});

const Discord = require("discord.js-selfbot-v13");

// Function to create a new bot instance
async function createBot(token) {
  try {
    const client = new Discord.Client({ checkUpdate: false });
    client.on("ready", () => {
      console.log(
        `\x1b[31m[${tokens.indexOf(token) + 1}] ${client.user.username} (${
          client.user.id
        }). ${token} \x1b[0m`
      );
      //bot.editSelf({username: `${TokensList.indexOf(token) + 1}`})
    });
    const { userAccount } = require("sphinx-run");
    const randomTime = () =>
      Math.floor(Math.random() * (14000 - 10000 + 1) + 10000);

    new userAccount(client, Discord).leveling({
      channel: "1175225251479683183",
      randomLetters: false,
      time: randomTime(), // Generate a random time between 10000 and 14000 milliseconds
      type: "eng",
    });

    await client.login(token);
  } catch (error) {
    console.error(`Failed to log in: ${error}`);
  }
}

// Array of your bot tokens
const tokens = [
  "MTE5NTkwMDQ5NjYxMTkwMTQ0Mg.GLpYIf.iCUpu_jqonVatiy1CVl0g9R2-qhfwY6KG0S4mc",
  "MTE4NDQwMzg2Nzk3OTQ5MzM3Nw.Gnem6q.dewGqCWMWvQCgTuw94TboTcNaKkmUiKd1-Ue_E",
  "MTE4NDc2NDc3Mzg3NTg0NzE3OA.Gyuijk.wHqs1RE6Y22IohTGrwWqmJRuEt5KEG0q7YeDjY",
  "MTE4NDc2MDQ2NTQ4Njc5NDgxMw.GaN6qG.rSBfYaxUH9VnRv3UPWeXVkEnOQmRoC0twdTXrE",
  "MTE4NDc1ODEzNTYwMTI1NDQ1MQ.GRzf-W.hQT7d3EXNMcf8dAgI70L43WeW3urO1s-yC6ETs",
  "MTE4NDc1NjI4MTc5ODU3ODI2Mg.GWsOv_.sYKGpN38aX_0HUBFc2JRyreAbQu2dqMej5prvY",
  "MTE4NDc1NTQ2MjM5OTMyODMxNw.GZelbX.0Lnx1mbCP5ph9CbW2maPXZV2p4kziH9_cCFN2E",
  "MTE4NDc1NDQ3NTAzOTIxMTYwMA.GFKky1.i_PeSs0dkc6eM0zJYFA82HvrPcef3zt_IxgbTg",
  "MTE4NDc1Mjk5OTI1NjU2Nzg5OA.GOmBfm.FUyRU__vfpGyFTVnratZRUfW5JQRGTSI5Cm9rY",
  "MTE4NzM3Mjc1OTU0Njg3MTk0OQ.G9h9vf.8aDSPy2YNdJnzWAiz8nf7Dq8WQ2841l-JjoG-M",
  "MTE4NzM2ODEzMDk0Nzg0NjE5NA.GZ7Tx4.tYWp2Ix6nEyjz_AdF-5ZT_zx-dCVnYijYlWuB4",
  "MTAwNzQ0Njc0NzU0NDU2Mzg2Nw.GKb_Lo.lkKT9_o3phGWAnZF0gyn9Qg5eqPKTLKv9n9HE4",
  "MTE5NjYyNjg3NzA1ODY1ODMwOA.GxOeR8.sORcHPl5OFQScHB2sbjnDcWvODStEiy_ouGEwk",
  "MTE4NzM2MTcwMzc1MTU4NTgwMg.GqJujF.fiyD9xT9rzJb-KRhauJfllXANfWrGmSzZcW08Q",
  "MTAwNzQ0NzMxNjEyNDQxODE4MA.G3tPDh.9cxpVR9N29e6H5IVK09frz7JgdR5-vUCoOuPo4",
  "MTE5NjYxMjAxMTA0ODU4NzM3Ng.GCB-u9.HNdCscLTJBgH9V85qYEE15pWj9XD5GfO7Nts_U",
  "MTAwNzQzNjAyNTMyMjI4NzE1NA.GBTFFv.ml5R8kC_JAKNq0qIu0CocgVfxnBXbUYkXWKb8Q",
  "MTAwNzQ0NjE5NTY4MzIxNzQ2OQ.GlIZS8.jSKFtiO12JnIHhZR65xeYKwiKL1gff56lowQI8",
"MTE5MzgyNzU5ODUzOTY5NDEzMw.GPoQia.px8L9VPqnWDO7LFQwIqxbT5QZbQSY59a4xnh6c",
"MTE5NDU2MDcwMzc1MTc5MDY1Nw.Gfh961.joILi9RF8jQnKqMSQEw2aR0bexCvvYrfyl-9tg",
"MTIwMTgzMjk3MDMzNjYwODMyOQ.GDDAQi.MPNmGCNA0dFzuM-sTH3zjYtid2hbnDZWmazhAA",
"MTIwMTgzNDA4NjAzMzc4ODk1OQ.GZOXvO.X7--g7Cp4JAXmOkN4CgrXgW0gZ5ukR2xF0T8Bk",
"MTE5Mzg1MDUzOTIxODMwNTA2NA.Gr5G6N.7rhpTTU_DATiTGsO6rFDOLPwhoiCX5Qi1w7BhQ"
]; //process.env.ERROR.split(',').map(token => token.trim());

// Create a bot instance for each token
tokens.forEach((token) => {
  createBot(token);
});
async function createBot1(token1) {
  try {
    const client1 = new Discord.Client({ checkUpdate: false });
    client1.on("ready", () => {
      console.log(
        `\x1b[32m[${tokens1.indexOf(token1) + 1}] ${client1.user.username} (${
          client1.user.id
        }). ${token1} \x1b[0m`
      );
      //bot.editSelf({username: `${TokensList.indexOf(token) + 1}`})
    });
    const { userAccount } = require("sphinx-run");
    const randomTime = () =>
      Math.floor(Math.random() * (14000 - 10000 + 1) + 10000);

    new userAccount(client1, Discord).leveling({
      channel: "1175345952094179348",
      randomLetters: false,
      time: randomTime(), // Generate a random time between 10000 and 14000 milliseconds
      type: "eng",
    });

    await client1.login(token1);
  } catch (error) {
    console.error(`Failed to log in: ${error}`);
  }
}

// Array of your bot tokens
const tokens1 = [
  "MTE5MzY0ODIwMzI1ODY3MTExNQ.Gu4ZxB.ukoX52vStNjmNl-073tZ2-VhulFC3n4_8ePcrY",
  "MTE4MjMzMjIwNDIyODAzODcxOQ.GWIURm.7YJwYkv3KqOnJF5IZGtiH_S3XfrehJMdqaXc44",
  "MTE4MjMzNjkxODkzMTkxODk3MA.GCpJjP.ukvChQrjk_5gbna-52EqANDEDvcoiF0MJaBWNs",
  "MTE4MjMzODMzODYxMTUyNzcwMg.GJgF69.WHTg47JeZ8zrNn_5po8OBhhNrLe8GAxjwTzyDM",
  "MTAwNzQzODIyMTEwNzUzNTkyMg.G2qMZ9.BUmCd4cPWCMbftiM2X6fCPd2HPG6w2HmF_lw5k",
  "MTAwNzQ0MDAyMDEzMjYwMTkzNg.G5zsfN.MIpcabj7plcUlTsfPkg0DLCOF7cDh8hbhgW_Aw",
  "MTE4NDQyMjk1MDUxNDk5MTIyNA.Gqcoxg.GOMrGVKpkBjT9eRuKpvQe60-TmhqnyyToO1JUk",
  "MTE4NDQyNDA0NDc3NTM0NjE5Mw.GjhNIZ.w0a_ytR8btHUiqTxG7Yn0MVgVN80yp3vCyoT7E",
  "MTE5MzYyMjg0MzI5NzExMjE3NQ.GnD_VY.FHpdD1NNgeT2ln9r7IKx5F0Y4YohBXaia2emw4",
  "MTE4NDQyNTIzNzQzNDA3NzE4Ng.G9LU-T.mob6j70xwzPSj8StcMDHZFJ0mZQ1NyuiH0lRcA",
  "MTE4NDQyNjQ3Mjk5MjE0NTQ0MA.GKJuFt.nxw8vOlibMfWfAobyGroYr3DJ4bJM10YBmpBNU",
  "MTE4NDQyODQxNjMxMzg3MjQxNQ.GhF6FF.K0PqrczBwQX3h_a65umhz_f2rWFhZ-yu94jsjw",
  "MTE4NDQyOTg5NDE2NDI5OTg1Ng.GH_vKH.p27KojZvXoWgCwuPto8gUK-EvS9XGrEXW8YJlw",
  "MTE4NDQzNDgyMjY2MDI0NzU5NA.GRQ5JA.HjNW4dJrouCMR7aLIG9kZZR3arPXwdL6McB18o",
  "MTE4NDQzNjY0NjEyOTcxNzMyMw.Gd80Tj.xXcaJc7k0FCji_XhOezyPfsm-WQpVI8hVmxM0I",
  "MTE4NDQzOTY3NTkyNzE1NDc3OA.GMI6sE.D9b2VwE4wit4v5HCDr8npGxePFCPIX4HpzFCns",
  "MTE5NTg4ODAwNTM5MTU4MTI0NA.GHWHiS.lBda373u95-NxQvhjU4h7OKc6s6uyiFiS_lbrA",
  "MTE4NDQzODQxNjcxNzM4OTkxNg.Gq864Z.uEI9eM59_sB2BAc1bPyrjywwyBEJQdfeYkViFg",
  "MTE4NDQwODg0ODUyMjU1MTMyMA.Gk9FPH.51UWQg6mcbkHwy37NZDXTovzp5bbNyfrLGWh9g",
  "MTE5NjYxNzU3MjQ0ODIxNTEyMQ.GBaqLS.rkGsqOlaE4j1WUBn2UJi3eY0hCnCfGN55zC4B0",
  "MTE5NjYyMTQ5MTg1MzMzNjU4Ng.GG1y04.Ltz9LqH0JXD-IluF3Mqn_zpMVh7wCmLvXapEKQ",
  "MTE4NDQwNzIyODAxOTY0NjU5OA.GmatCn.B9aFHaII16wluVWDoShwuQIJjZtVOfStbJomug",
  "MTE4NDQwNTYzMzU5MjczMzc0Nw.G4cQzG.rKAK67l-qfVogntPVqRD6pCXQFv4cGdEFk1bxo",
  "MTE4NDQwMTcyMTYxNTcxMjMwNw.GEpJrP.dxgPWDJkgmpvdIDafCYfjI7bCYZ-GINd3Hfr-8"
]; //process.env.ERROR.split(',').map(token => token.trim());

// Create a bot instance for each token
tokens1.forEach((token1) => {
  createBot1(token1);
});

async function createBot2(token2) {
  try {
    const client2 = new Discord.Client({ checkUpdate: false });
    client2.on("ready", () => {
      console.log(
        `\x1b[34m[${tokens2.indexOf(token2) + 1}] ${client2.user.username} (${
          client2.user.id
        }). ${token2} \x1b[0m`
      );
      //bot.editSelf({username: `${TokensList.indexOf(token) + 1}`})
    });
    const { userAccount } = require("sphinx-run");
    const randomTime = () =>
      Math.floor(Math.random() * (14000 - 10000 + 1) + 10000);

    new userAccount(client2, Discord).leveling({
      channel: "1210351466884104222",
      randomLetters: false,
      time: randomTime(), // Generate a random time between 10000 and 14000 milliseconds
      type: "eng",
    });
    await client2.login(token2);
  } catch (error) {
    console.error(`Failed to log in: ${error}`);
  }
}

// Array of your bot tokens
const tokens2 = [
  "MTE5NTg5NTg0MjYxNjM4MTQ1Mg.GAPheA.2vZkGiodLzQqfH4uLBJqt2TNkP9FHtpIDQ56GI",
  "MTE3NTIyMjIzOTI4MTU1NzU0NA.GMFMJz.q6dK-jijlN2d0RepXPcfF95De_kUvYkJ25Yl4g",
  "MTE3ODk5OTI2NDAwMTY3MTI1OA.G04n2g.5oUS3Nt5yto2WhWSYuHuLV57gbGxU0M3AseDiI",
  "MTE3ODk5NzI0NzkxNzE3MDcyMQ.G77sUa.AN7vZN2viYFedxGRGON9LkdhPZbNZMSvNelurQ",
  "MTE3NzEzMzUyMjYyOTE2OTE5Mw.GvdXD9.iydp7HTf97ORh_fWn_8b6opD2h0XBwbnlemcmw",
  "MTE3NzEzMTg0NDYxMzk2Mzc5Ng.GpF2cg.EV0b2QTFdYt2wO4XZEPhodO1_74e1PRqSUJhvc",
  "MTE3NzEzMDAzNDk5ODI5MjUwMA.GNqLH_.F3Db4TLerCr-W5c6lUj3RsJrDF24Mjy5a4vCZE",
  "MTE3NzEyODI0Nzg2NDA3MDE0Nw.GhU7UK.mab2PKzOtxwXxOy5RJxAtfMg2kQuYoLwpeBFCQ",
  "MTE3NzEyNDMwOTA0MzUxMTM0OA.GfRNED.n-H7PYSYp8sDpEMOvCKTuir2dgaS6wxokVsHqQ",  
  "ODMzNDUzMDcxNzM1NzE3ODk4.GeT5Hu.e_TmKi4UA976-Pzp0WrcWe6xUYuSmdmjOntFCo",
  "MTAwNzQzODgzODk1Nzg4MzM5NA.GvokrL.-fjogPJ01BABXaPk4znaNFUPP1Lt05mwM_PTRM",
  "OTk2MjYxMjYxMTMyMTY5MzU2.Gcl2Es.FaDTnKRN2wSPqxf5YclfpH_PTj71U0aRXP0rxM",
  "MTAwNzQ1MDM5NDI0ODYxODA0NA.GEM_V8.-M45-zZvZ4R4RNGfpweeyif080sxffp2_HCvSo",
  "MTAwNzQ0ODg3ODM0NzQ2NDczNA.GvdoPy.JSjLuecIW6bCDUXXVmYTmLDAl8UehuNLNDsqoU",
  "ODIxOTkwMzA5MzY5MjE3MDM1.GUNzPh.ZUOx2YU9mCFS7RoCDlTM0jKSLvRJcK19VUmhtQ",
  "MTE3NTIyMTU5OTE4ODgyODE3NQ.G8g_WG.ti9BwS0HvxNhAqZdEQUUilSuNvBCh5fdBUimC8",
  "MTE3NTIyMTA4MTA5NTgxMTIwNg.GVVj-g.drEi9yuRzqRcAD8H3lHKQXFMbjynCoqO4LxXUs",
  "MTE3NTIyMDQ5ODIwOTE3NzYxNA.G_0Jvi.SH9HPfEByWVe29AG8CfdXue8DaQ0r0MfI5rnWg",
  "MTE3NTIxOTI4MDAxOTczNDU0NQ.G_p-aN.HcVlLApqNSUXoos6yf9ix3lHh6ZlGbHhJsq4kE",
  "MTE3NTIxNzc4ODU0MjAxMzUzMA.GARQ96.Bus8KIeW55n44TJRGYgyNknfl9QI7bsmpz5vzM",
  "MTE2OTE4OTMwOTk3NTM2Nzc0Mg.G6opkU.IZJ0QpxgOWnpNmSyijVHIq3K7q5QkseiwMZIQs"

]; //process.env.ERROR.split(',').map(token => token.trim());

// Create a bot instance for each token
tokens2.forEach((token2) => {
  createBot2(token2);
});

process.on("unhandledRejection", (error) => {
  console.error("Error has been handled!", error);
});
