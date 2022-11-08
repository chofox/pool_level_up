const keysAndValues = (data) => {
    let data_key = Object.keys(data);
    let data_value = Object.values(data);
    let data_key_value = [data_key, data_value];
    return data_key_value;
  };
  
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));