const mobileList = [
  { id: 1, name: "samsung" },
  { id: 2, name: "iPhone" },
  { id: 3, name: "realme" },
];

export function getMobileList() {
    return new Promise((res, reject) => {
        try{
            setTimeout(() => {
              res(mobileList);
            }, 2000);
        } catch (error) {
            reject(error?.message);
            // throw Error("There was a problem while getting data");
        }
    });
}
