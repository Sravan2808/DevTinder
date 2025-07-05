const { subDays, startOfDay, endOfDay } = require("date-fns");
const cron = require("node-cron");
const ConnectionRequestModel = require("../models/connectionRequest");
const sendEmail = require("./sendEmail");

cron.schedule("0 8 * * * ", async () => {
  try {
    const yesterday = subDays(new Date(), 1);
    const yesterdayStart = startOfDay(yesterday);
    const yesterdayEnd = endOfDay(yesterday);

    const pendingRequests = await ConnectionRequestModel.find({
      status: "interested",
      createdAt: {
        $gte: yesterdayStart,
        $lt: yesterdayEnd,
      },
    }).populate("fromUserId toUserId");

    const listOfEmails = [
      ...new Set(pendingRequests.map((req) => req.toUserId.emailId)),
    ];

    console.log(listOfEmails);
    
    for (const email of listOfEmails) {
      try {
        const res = await sendEmail.run(
          "New friend Requests pending for " + email,
          "There are so many friend requests pending, please login to devMatchh.me and accept or reject the request"
        );
        console.log(res);
        
      } catch (err) {
        console.log(err);
        
      }
    }
  } catch (err) {
    console.log(err);
  }
});
