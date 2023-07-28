// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
//book 1
const status0 = document.querySelector("#book1 .status")
const reserve0 = document.querySelector("#book1 .reserve")
const checkout0 = document.querySelector("#book1 .checkout")
const checkin0 = document.querySelector("#book1 .checkin")
//book 2
const status1 = document.querySelector("#book2 .status")
const reserve1 = document.querySelector("#book2 .reserve")
const checkout1 = document.querySelector("#book2 .checkout")
const checkin1 = document.querySelector("#book2 .checkin")
//book 3
const status2 = document.querySelector("#book3 .status")
const reserve2 = document.querySelector("#book3 .reserve")
const checkout2 = document.querySelector("#book3 .checkout")
const checkin2 = document.querySelector("#book3 .checkin")

checkin0.color = "none"
status0.style.color = STATUS_MAP.overdue.color
reserve0 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

if (STATUS_MAP.overdue.canReserve){
    reserve0.disabled = false
}

if (STATUS_MAP.overdue.canCheckout){
    checkout0.disabled = false
}

if (STATUS_MAP.overdue.canCheckIn){
    checkin0.disabled = true
}

checkin1.color = none
status1.style.color = STATUS_MAP.reserved.color
reserve1 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

if (STATUS_MAP.reserved.canReserve){
    reserve1.disabled = false
}

if (STATUS_MAP.reserved.canCheckout){
    checkout1.disabled = true
}

if (STATUS_MAP.reserved.canCheckIn){
    checkin1.disabled = false
}
checkin2.color = none
status2.style.color = STATUS_MAP.checkedOut.color
reserve2 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

if (STATUS_MAP.checkedOut.canReserve){
    reserve2.disabled = false
}
if (STATUS_MAP.checkedOut.canReserve){
    checkout2.disabled = false
}
if (STATUS_MAP.checkedOut.canReserve){
    checkin2.disabled = true
}