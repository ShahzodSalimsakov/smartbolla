export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const resCounter = await fetch("https://smartbolla.com/api/", {
        method: "POST",
        body: req.body,
        headers: {
          ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
        },
      });

      const { data } = await resCounter.json();
      console.log(req.body);
      console.log(data);
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
