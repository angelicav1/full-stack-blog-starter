import User from "../models/user.model.js"

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Webhook secret needed');
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(secret);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: 'Webhook verification failed',
    });
  }

  if (evt.type === "user.created") {
    console.log("userId:", evt.data.id);
  }
};
