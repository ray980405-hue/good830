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
    while (停停停 == 0) {
        L1_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1)
        R1_IR = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1)
        if (L1_IR < 3200 && R1_IR > 2900) {
            差 = (3200 - L1_IR) / 25
            越多 = 計次越多次沒修回來越多 / 1000
            修 = 差 + 越多
            雙輪左速度右速度(速度 + 修, 速度 - 修)
            計次越多次沒修回來越多 += 1
        } else if (L1_IR > 2900 && R1_IR < 3200) {
            差 = (3200 - R1_IR) / 25
            越多 = 計次越多次沒修回來越多 / 1000
            修 = 差 + 越多
            雙輪左速度右速度(速度 - 修, 速度 + 修)
            計次越多次沒修回來越多 += 1
        } else if (L1_IR < 3200 && R1_IR < 3200) {
            雙輪左速度右速度(0, 0)
        } else {
            計次越多次沒修回來越多 = 0
            雙輪左速度右速度(速度, 速度)
        }
        全部停的條件()
    }
}
input.onButtonPressed(Button.A, function () {
    停停停 = 0
    白線上感測器()
})
function 全部停的條件 () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0)) {
        停停停 = 1
        左輪(0)
        右輪(0)
    }
}
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
let R_IR = 0
let L_IR = 0
let 修 = 0
let 越多 = 0
let R1_IR = 0
let L1_IR = 0
let 停停停 = 0
let 計次越多次沒修回來越多 = 0
let 差 = 0
let 速度 = 0
速度 = 120
差 = 0
計次越多次沒修回來越多 = 0
let L緩 = 0
let L前緩 = 0
basic.forever(function () {
    serial.writeValue("R", DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R2))
    serial.writeValue("L", DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L2))
})
