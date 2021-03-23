export default function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = function () {
      return resolve({
        data: fileReader.result,
        name: file.name,
        size: file.size,
        type: file.type,
      });
    };
    fileReader.readAsDataURL(file);
  });
}
