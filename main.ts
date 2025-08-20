let L1_IR = 0
let R1_IR = 0
let 差 = 0
let L_IR = 0
let R_IR = 0
function 右輪 (速度: number) {
    if (速度 < 0) {
        if (速度 <= -255) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 速度)
        }
    } else if (速度 > 0) {
        if (速度 >= 255) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 速度)
        }
    } else if (速度 == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
    }
}
function 左輪 (速度: number) {
    if (速度 < 0) {
        if (速度 <= -255) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 速度)
        }
    } else if (速度 > 0) {
        if (速度 >= 255) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 速度)
        }
    } else if (速度 == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
}
function 白線上感測器 () {
    L1_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1)
    R1_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1)
    if (L1_IR < 3000 && R1_IR > 3000) {
        差 = 3000 - L1_IR
        左輪(1)
        右輪(1)
    } else if (L1_IR > 3000 && R1_IR < 3000) {
        差 = 3000 - R1_IR
    } else if (L1_IR < 3000 && R1_IR < 3000) {
    	
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    左輪(255)
    右輪(255)
    basic.pause(1000)
    左輪(0)
    右輪(0)
})
function 白線兩邊感測器 () {
    L_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L2)
    if (L_IR <= 1300) {
        L_IR = 0
    } else {
        L_IR = Math.round((DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L2) - 1300) / 25)
    }
    R_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R2)
    if (R_IR <= 1200) {
        R_IR = 0
    } else {
        R_IR = Math.round((DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R2) - 1200) / 25)
    }
    serial.writeValue("R", R_IR)
    serial.writeValue("L", L_IR)
}
function 雙輪左速度右速度 (左速度: number, 右速度: number) {
    if (左速度 < 0) {
        if (左速度 <= -255) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 左速度)
        }
    } else if (左速度 > 0) {
        if (左速度 >= 255) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 左速度)
        }
    } else if (左速度 == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
    if (右速度 < 0) {
        if (右速度 <= -255) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 右速度)
        }
    } else if (右速度 > 0) {
        if (右速度 >= 255) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 255)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 右速度)
        }
    } else if (右速度 == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
    }
}
basic.forever(function () {
	
})
