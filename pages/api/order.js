export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const resCounter = await fetch("https://api.smartbolla.com/api/", {
        method: "POST",
        body: req.body,
        headers: {
          ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
        },
      });

      const { data } = await resCounter.json();
      return res.json({
        data,
      });
    } catch (e) {
      res.json({
        result: false,
      });
    }
  }
  res.json({
    result: true,
  });
}
