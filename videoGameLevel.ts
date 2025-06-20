const obstacles_1 = [4, 6];
const obstacles_2 = [9, 4, 2];
const obstacles_3 = [];

const instructions_1 = "RRRJJRRR";
const instructions_2 = "RRRLJ";
const instructions_3 = "RRRJJRRRL";
const instructions_4 = "RRRLRJJRRR";
const instructions_5 = "RRRRRRRRRR";
const instructions_6 = "RRJJJJ";
const instructions_7 = "RLRRRJJRRLLJJJLRRRJJRRR";
const instructions_8 = "RRRJJRLJJJRRR";
const instructions_9 = "R";
const instructions_10 = "RJJJJR";
const instructions_11 = "RJJRRRRR";
const instructions_12 = "RJJRRRJ";
const instructions_13 = "RJJJLJRJRJ";

console.log(reachExit(instructions_1, new Set(obstacles_1)))

function reachExit(instructions: string, obstacles:Set<number>): boolean {
  let position=0;
  let direction =1;
  
  for(const move of instructions){
    if(move==='L')
    {
      direction =-1;
      position -=1;    
    }
    if(move ==='R')
    {
      direction =1;
      position +=1;
    }
    else if(move === 'J')
    {
      position += 2* direction;
    }
    
    if(obstacles.has(position)){
      return false;
    }
  }
  return true;
}