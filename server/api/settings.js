const { asyncErrorWrapper, jwtValidationMiddleware } = require("../helper");

module.exports = (router, User, webpush, languages) => {
  /**
   * @swagger
   * /subscribe:
   *  post:
   *    summary: Validates the login data and sends user settings and ID to client
   *    parameters:
   *      - in: body
   *        name: user
   *        schema:
   *          type: object
   *          required:
   *            - email
   *              password
   *          properties:
   *            email:
   *              type: string
   *            password:
   *              type: string
   *    responses:
   *      '200':
   *        description: Login data valid
   *      '409':
   *        description: Validation error
   */
  router.post(
    "/subscribe",
    asyncErrorWrapper(async (req, res) => {
      console.log("subscribe");
      const { uuid, subscription } = req.body;
      res.status(201).json({});
      const user = await User.findOneAndUpdate({ _id: uuid }, { subscription }, { upsert: true });
      if (user !== null) {
        console.log(user);
        const payload = JSON.stringify({ title: "Subscription", message: "Subscription successfully setup" });
        webpush.sendNotification(subscription, payload);
      }
    })
  );

  router.post("/language", (req, res) => {
    const countryCode = req.body.countryCode;
    const language = languages[countryCode] ? languages[countryCode] : languages["en"];
    res.status(200).json(language);
  });

  return router;
};