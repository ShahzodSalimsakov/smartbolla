export default async function handler(req, res) {
  //   if (req.method === "POST") {
  try {
    const resCounter = await fetch("https://smartbolla.com/api/", {
      method: "POST",
      body: JSON.stringify({
        method: req.query.method,
        data: {
          id: req.query.id,
        },
      }),
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });
  } catch (e) {
    res.json({
      result: false,
    });
  }
  //   }
  res.json({
    result: true,
  });
}
