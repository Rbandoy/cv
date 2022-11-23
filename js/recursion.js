const STATUSES = {
  0: 'registered',
  1: 'activated',
  2: 'barred',
  3: 'blocked',
  4: 'terminated',
  5: 'purged',
}

const ROLE = {
  1: 'Parent',
  2: 'Member',
  3: 'Sub-Main',
}

let data = {
  test: {
    status: "1",
    data: {
      status: "1",
      role_id: "1",
      status1: "1",
    },
    data2: {
      status: "1",
      role_id: "1",
      status: "1",
    }
  }
}

const changeData = async (obj, find, value, replaceKey = "") => { 
  if (typeof obj === 'object' && obj != undefined) {
    Object.keys(obj).forEach(async (keys, index) => {  

      if (keys === find && replaceKey == '') obj[keys] = value

      if (keys === find && replaceKey != '') {
        obj[replaceKey] = value 
        delete obj[find]
      }
      typeof obj[keys] === 'object' ? await changeData(obj[keys],find, value,replaceKey) : ""
    })
  }
  return obj 
}

(async () => {
  console.log(await changeData(data, "role_id", "admin", "role"))
})();

