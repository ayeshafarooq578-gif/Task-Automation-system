const Notification = require("../models/Notification");

exports.getNotifications = async (
req,
res
)=>{

try{

const notifications=

await Notification.find()

.sort({

createdAt:-1

})

.limit(10);

res.json(notifications);

}

catch(error){

res.status(500).json(
error.message
);

}

};