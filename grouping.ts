const grouping = {
  "personal-planning": {
    label: "个人：规划",
    index: 1,
    minor: {
      "break-project": {
        minorIndex: 1,
        label: "拆分项目",
      },
      "pick-dependency": {
        minorIndex: 2,
        label: "使用外部依赖 vs. 自己造轮子",
      },
      "read-docs": {
        minorIndex: 3,
        label: "看文档 vs. 看源码实现",
      },
      "plan-work": {
        minorIndex: 4,
        label: "规划编码工作",
      },
    },
  },
  "personal-writing-code": {
    label: "个人：编写代码",
    index: 2,
    minor: {
      "scope-task": {
        minorIndex: 5,
        label: "确定任务范围",
      },
      "structure-code": {
        minorIndex: 6,
        label: "组织代码结构",
      },
      "shape-commits": {
        minorIndex: 7,
        label: "管理提交历史",
      },
      "write-todos": {
        minorIndex: 8,
        label: "写 TODO vs. 写实现",
      },
      "polish-code": {
        minorIndex: 9,
        label: "对整洁代码的品味",
      },
      "make-readable": {
        minorIndex: 10,
        label: "对可读性的感觉",
      },
      "name-variables": {
        minorIndex: 11,
        label: "短变量名 vs. 完全自描述的长变量名",
      },
      "write-comments": {
        minorIndex: 12,
        label: "对代码注释的态度",
      },
    },
  },
  "personal-firming-up": {
    label: "个人：加固代码",
    index: 3,
    minor: {
      "design-testable": {
        minorIndex: 13,
        label: "为可测试性而设计",
      },
      "think-security": {
        minorIndex: 14,
        label: "考虑安全性",
      },
      "handle-debt": {
        minorIndex: 15,
        label: "处理技术债务",
      },
      "explore-code": {
        minorIndex: 16,
        label: "在代码库中翻找相关代码",
      },
      "stop-task": {
        minorIndex: 17,
        label: "判断任务何时可以收手",
      },
    },
  },
  "team-planning": {
    label: "团队协作：规划",
    index: 4,
    minor: {
      "talk-peer": {
        minorIndex: 18,
        label: "与同级同事沟通",
      },
      "talk-owner": {
        minorIndex: 19,
        label: "与代码负责人沟通",
      },
      "talk-report": {
        minorIndex: 20,
        label: "与直属下属沟通",
      },
      "talk-pm": {
        minorIndex: 21,
        label: "与分配任务的产品经理沟通",
      },
    },
  },
  "team-code-review": {
    label: "团队协作：代码评审",
    index: 5,
    minor: {
      "review-peer": {
        minorIndex: 22,
        label: "评审同级同事的代码",
      },
      "review-owner": {
        minorIndex: 23,
        label: "评审代码负责人的代码",
      },
      "review-report": {
        minorIndex: 24,
        label: "评审直属下属的代码",
      },
      "take-peer": {
        minorIndex: 25,
        label: "接受同级同事的评审意见",
      },
      "take-owner": {
        minorIndex: 26,
        label: "接受代码负责人的评审意见",
      },
      "take-report": {
        minorIndex: 27,
        label: "接受直属下属的评审意见",
      },
    },
  },
  "team-emotional": {
    label: "团队协作：情绪",
    index: 6,
    minor: {
      "sit-peer": {
        minorIndex: 28,
        label: "面对同级同事的严厉言辞",
      },
      "sit-owner": {
        minorIndex: 29,
        label: "面对代码负责人的严厉言辞",
      },
      "sit-report": {
        minorIndex: 30,
        label: "面对直属下属的严厉言辞",
      },
    },
  },
}

export default grouping
