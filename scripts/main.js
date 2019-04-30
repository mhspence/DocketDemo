var app = new Vue ({
  el: '#app',
  data: {
    courtCases: [
      {id:1, case:"John", room:"107", time:"8:30 am", caseNumber:"FS2019-01"},
      {id:2, case:"Russell", room:"109", time:"9:00 am", caseNumber:"FS2019-02"},
      {id:3, case:"Lynda", room:"110", time:"9:30 am", caseNumber:"FS2019-03"},
      {id:4, case:"Kevin", room:"215", time:"10:00 am", caseNumber:"FS2019-04"},
      {id:5, case:"Stephen", room:"305", time:"10:30 am", caseNumber:"FS2019-05"},
      {id:6, case:"Jessie", room:"107", time:"11:00 am", caseNumber:"FS2019-06"},
      {id:7, case:"Crystal", room:"109", time:"11:30 pm", caseNumber:"FS2019-07"},
      {id:8, case:"Justin", room:"110", time:"1:00 pm", caseNumber:"FS2019-08"},
      {id:9, case:"Greg", room:"215", time:"1:30 pm", caseNumber:"FS2019-09"},
      {id:10, case:"Charles", room:"305", time:"2:00 pm", caseNumber:"FS2019-10"},],
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
