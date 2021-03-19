export default async function handler(req, res) {
  //   if (req.method === "POST") {
  try {
    const resCounter = await fetch("https://smartbolla.com/api/", {
      method: "POST",
      body: req.body,
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });
    // const text = await resCounter.text();
    // console.log(text);
    const result = await resCounter.json();
    console.log(result);
    return res.json(result);
  } catch (e) {
    console.log(e);
    return res.json({
      result: false,
    });
  }
  //   }
  res.json({
    result: true,
  });
}
