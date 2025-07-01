// runDLHS.js - chạy giải thuật DLHS chính

const fs = require('fs');
const path = require('path');
const {
  getTotalKPIByProject,
  getKPIOfEmployeesByProject,
  getDistanceOfKPIEmployeesTarget,
  getCostOfAssignment,
  checkDuplicate
} = require('./helper');

function cloneAssignment(assignment) {
  return assignment.map(item => ({
    task: { ...item.task },
    assignee: item.assignee ? { ...item.assignee } : null,
    assets: [...(item.assets || [])]
  }));
}

function evaluateSolution(assignment, kpiTargetByProject, kpiOfEmployeesTarget) {
  const totalKPI = getTotalKPIByProject(assignment);
  const kpiOfEmp = getKPIOfEmployeesByProject(assignment);
  const distance = getDistanceOfKPIEmployeesTarget(kpiOfEmp, kpiOfEmployeesTarget);
  const cost = getCostOfAssignment(assignment);
  const duplicates = checkDuplicate(assignment);

  return {
    assignment,
    score: typeof distance === 'number' ? distance : Infinity,
    totalKPI,
    kpiOfEmp,
    cost,
    duplicates
  };
}

function generateNewHarmony(bestSolution, tasks, employees) {
  const newAssign = cloneAssignment(bestSolution.assignment);
  for (let item of newAssign) {
    const candidates = item.task.availableAssignee || [];
    if (candidates.length > 0) {
      const rand = Math.floor(Math.random() * candidates.length);
      item.assignee = candidates[rand];
    }
  }
  return newAssign;
}

function writeFinalResult(solution, FEs) {
  const lines = [];
  lines.push(`🎯 Tổng số lần đánh giá: ${FEs}`);
  lines.push(`🏆 Score tốt nhất: ${solution.score}`);
  lines.push(`💰 Tổng chi phí: ${solution.cost}`);
  lines.push(`⛔ Số lần trùng lịch: ${solution.duplicates}`);
  lines.push('📋 Phân bổ chi tiết:');

  for (const item of solution.assignment) {
    const task = item.task;
    const assignee = item.assignee;
    lines.push(`- Task [#${task.id}] - ${task.name || ''}`);
    lines.push(`  + Nhân sự: ${assignee ? assignee.id : 'Unassigned'}`);
    lines.push(`  + Thời gian: ${task.startTime || '---'} → ${task.endTime || '---'}`);
  }

  const outputPath = path.join(__dirname, 'logs', 'final_result_dlhs.txt');
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath));
  }
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf-8');
  console.log(`\n[✔] Kết quả cuối cùng đã được ghi vào: ${outputPath}\n`);
}

function runDLHS(harmonyMemory, tasks, employees, args, kpiTargetByProject, kpiOfEmployeesTarget) {
  const { Max_FEs, R, HMS } = args;
  let FEs = 0;
  let bestSolution = harmonyMemory.find(h => h && typeof h.score === 'number');

  while (FEs < Max_FEs) {
    const subSize = Math.floor(HMS / args.numOfSub);
    const subHMs = [];
    for (let i = 0; i < args.numOfSub; i++) {
      const sub = harmonyMemory.slice(i * subSize, (i + 1) * subSize);
      subHMs.push(sub);
    }

    for (let sub of subHMs) {
      let localBest = sub.reduce((a, b) => a.score < b.score ? a : b);
      const newAssignment = generateNewHarmony(localBest, tasks, employees);
      const newSolution = evaluateSolution(newAssignment, kpiTargetByProject, kpiOfEmployeesTarget);

      const worstIdx = sub.reduce((worst, cur, idx, arr) =>
        cur.score > arr[worst].score ? idx : worst, 0);
      if (newSolution.score < sub[worstIdx].score) {
        sub[worstIdx] = newSolution;
      }

      FEs++;
    }

    for (const sub of subHMs) {
      for (const s of sub) {
        if (!bestSolution || (s && typeof s.score === 'number' && s.score < bestSolution.score)) {
          bestSolution = s;
        }
      }
    }

    if ((FEs % 500 === 0 || FEs === 1) && bestSolution && typeof bestSolution.score === 'number') {
      console.log(`⏳ FE ${FEs} | Best Score: ${bestSolution.score.toFixed(4)} | Cost: ${bestSolution.cost} | Duplicate: ${bestSolution.duplicates}`);
    }
  }

  writeFinalResult(bestSolution, FEs);

  return {
    bestSolution,
    FEs
  };
}

module.exports = {
  runDLHS
};