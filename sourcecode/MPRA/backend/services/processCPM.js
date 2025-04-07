const processCPM = (tasks, projectStartTime, projectEndTime, unitTime) => {
  if (!tasks || !tasks?.length) {
    return []
  }
  let updateTasks = [...tasks]
  // console.log("updateTasks: ", updateTasks.map((item) => item.code))


  //
  let successors = {
    // key: code of task
    // value: [] array list tasks v that v has key is one of preceedingTasks 
  }

  for(let i = 0; i < updateTasks?.length; i++) {
    let task = updateTasks[i]
    task.ES = new Date(0)
    task.EF = new Date(0)
    task.LS = new Date("2100-04-30T00:00:00Z")
    task.LF = Date("2100-04-30T00:00:00Z")
    if (!successors[task?.code]) {
      successors[task.code] = []
    }
    let preceedingTasks = task?.preceedingTasks
    if (preceedingTasks && preceedingTasks?.length > 0) {
      preceedingTasks.forEach((item) => {
        let taskCode = item

        // taskCode is prev of this task => this taskCode has successor is this task.code

        if (!successors[taskCode]) {
          successors[taskCode] = []
        }
        successors[taskCode].push(task.code)
      })
      // console.log("task.code: ", task.code, "pre: ", preceedingTasks.map((item) => item.link))
    }
  }

  for(let i = 0; i < updateTasks?.length; i++) {
    let task = updateTasks[i]
    let preceedingTasks = task?.preceedingTasks && task?.preceedingTasks?.length ? 
      task?.preceedingTasks.map((item) => updateTasks?.find((taskItem) => taskItem?.id === item))
      : []
    if (!preceedingTasks || !preceedingTasks?.length) {
      task.ES = new Date(projectStartTime)
    } else {
      task.ES = new Date(Math.max(...preceedingTasks.map((item) => item.EF)))
    }
    task.ES = reCalculateTimeWorking(task.ES)
    task.EF = calculateEndDateFromStartDate(task.ES, task?.estimateNormalTime, unitTime)
    task.EF = reCalculateTimeWorking(task.EF)
  }

  updateTasks = updateTasks.reverse()
  // console.log("updateTasks: ", updateTasks.map((item) => item.code))
  for(let i = 0; i < updateTasks?.length; i++) {
    let task = updateTasks[i]
    // let preceedingTasks = task?.preceedingTasks && task?.preceedingTasks?.length ? 
    //   task?.preceedingTasks.map((item) => updateTasks?.find((taskItem) => taskItem?.code === item?.link))
    //   : []
    // console.log("pre: ", task.code, preceedingTasks)
    let successorTasks = successors[task.code] && successors[task.code]?.length > 0 ? 
      successors[task.code].map((item) => updateTasks.find((task) => task.code === item)) : []
    
    if (!successorTasks || !successorTasks?.length) {
      task.LF = new Date(projectEndTime)
    } else {
      task.LF = new Date(Math.min(...successorTasks.map((item) => item.LS)))
    }
    task.LS = calculateStartDateFromEndDate(task.LF, task?.estimateNormalTime, unitTime)
  }
  return updateTasks.reverse()
}

module.exports = {processCPM}