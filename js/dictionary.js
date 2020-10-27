let dictionary = {
    // 订单类型
    orderType: {
        '0': '软文',
        '1': '小红书',
        '2': '微信',
        '3': '微博',
        '4': '直播',
        '5': '短视频',
        "6": "充值",
        "7": "提现"
    },
    // 订单状态
    orderState: {
        '0': '待支付',
        '1': '待发起',
        '2': '待确认',
        '3': '已确认',
        '4': '发布中',
        '5': '已完成',
        '6': '已拒稿',
        '7': '已退款',
        '8': '已失效',
        '9': '退款中',
        "10": "待充值",
        "11": "已充值",
        "12": "待提现",
        "13": "已提现",
        "14": "已失效"
    },
    // 项目类型
    operateType: {
        '0': '充值',
        '1': '提现',
        '2': '消费',
        '3': '退款',
        '4': '改价',
        '5': '订单确认',
    },
    // 审批状态
    approvalState: {
        '0': '主管审批中',
        '1': '主管通过',
        '2': '主管驳回',
        '3': '财务审批中',
        '4': '财务通过',
        '5': '财务驳回',
    },
    // 交易方式
    dealType: {
        '0': '现金',
        '1': '支付宝转账',
        '2': '银行转账/汇款',
        '3': '微信转账',
        '4': '企蜂传媒账户',
        '5': '支付宝在线支付',
    },
    rechargeOrderType: {
        "0": "充值",
        "1": "提现"
    },
    rechargeOrderState: {
        "0": "待充值",
        "1": "已充值",
        "2": "待提现",
        "3": "已提现",
        "4": "已失效",
    },
    roleType: {
        "0": "超管",
        "1": "客服",
        "2": "主管",
        "3": "财务"
    }
}

export default dictionary