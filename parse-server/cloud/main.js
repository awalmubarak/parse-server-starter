Parse.Cloud.define("averageStars", async (request) => {
    const query = new Parse.Query("Review");
    query.equalTo("movie", request.params.movie);
    const results = await query.find();
    let sum = 0;
    for (let i = 0; i < results.length; ++i) {
      sum += results[i].get("stars");
    }
    return sum / results.length;
  },{
    fields : ['movie'],
    requireUser: true
  });


  Parse.Cloud.job("myJob", async (request) =>  {
    // params: passed in the job call
    // headers: from the request that triggered the job
    // log: the ParseServer logger passed in the request
    // message: a function to update the status message of the job object
    const { params, headers, log, message } = request;
    message("I just started");
    return await doSomethingVeryLong(request);
  });


  Parse.Cloud.job("another", async (request) =>  {
    // params: passed in the job call
    // headers: from the request that triggered the job
    // log: the ParseServer logger passed in the request
    // message: a function to update the status message of the job object
    const { params, headers, log, message } = request;
    message("I just started");
    return await doSomethingVeryLong(request);
  });

  Parse.Cloud.job("anotherF", async (request) =>  {
    // params: passed in the job call
    // headers: from the request that triggered the job
    // log: the ParseServer logger passed in the request
    // message: a function to update the status message of the job object
    // console.log(request);
    const { params, headers, log, message } = request;
    log.debug("This is debug message");
    log.verbose("This is verbose message");
    log.silly("This is silly message");
    message("I just started");
    return await doSomethingVeryLong(request);
  });


    const doSomethingVeryLong = (request) => {
    const { params, headers, log, message } = request;
    message("I am still doing something very long");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        message("I am done");
        resolve();
      }, 50000);
    });
  }