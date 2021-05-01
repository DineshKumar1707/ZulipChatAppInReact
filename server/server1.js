const zulip = require('zulip-js');


const config = { zuliprc: ".zuliprc" };


// send a message

// (async () => {
//   const client = await zulip(config);
  
//   const user_mail_id = "nirmalkumarcse07@gmail.com";
//   params = {
//       to: [user_mail_id],
//       type: "private",
//       content: "Hi bro, This message is sent from node"
//   };
//   console.log(await client.messages.send(params));
// })();

// Get all users

(async  () => {
    const client = await zulip(config);


    const user_id = 407847;
    console.log(await client.users.me.getProfile(user_id));

    // console.log(await client.users.retrieve({client_gravatar: true}));
})();
