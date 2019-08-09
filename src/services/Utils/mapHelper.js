export default function mapHelper(object) {
  const copyObject = {};
  const keysObject = Object.keys(object)
    keysObject.map((data) => {
      const value = object[data];
      const keyObject = data.charAt(0).toUpperCase() + data.slice(1);
      copyObject[keyObject] = value;
    })

  return copyObject;
}