var app = new Vue ({
  el: '#app',
  data: {
    courtCases: [
      {id:1, case:"John", room:"107", time:"9:00 am", caseNumber:"100031"},
      {id:2, case:"Russell", room:"109", time:"9:30 am", caseNumber:"100002"},
      {id:3, case:"Lynda", room:"110", time:"9:45 am", caseNumber:"100003"},
      {id:4, case:"Kevin", room:"215", time:"10:30 am", caseNumber:"100004"},
      {id:5, case:"Stephen", room:"305", time:"10:45 am", caseNumber:"100005"},
      {id:6, case:"Jessie", room:"107", time:"11:30 am", caseNumber:"100006"},
      {id:7, case:"Crystal", room:"109", time:"12:00 pm", caseNumber:"100007"},
      {id:8, case:"Justin", room:"110", time:"12:30 pm", caseNumber:"100008"},
      {id:9, case:"Greg", room:"215", time:"1:45 pm", caseNumber:"100009"},
      {id:10, case:"Charles", room:"305", time:"2:30 pm", caseNumber:"1000010"},],
    oddRowCellClassObject: {
      oddRowCell: false
    }
  },
  methods: {
    classObject(rowIndex) {
      return {
        "cell": true,
        "oddRowCell": rowIndex % 2 === 0
      }
    }
  }

})
