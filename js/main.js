(() => {
  //create a component first
  const UserComponent = {
  props: ['name', 'role'],

  template: "#userstemplate",

  created: function() {
    console.log("what");
  },

  methods: {
    logFromChild(){
      console.log("logged");
    },

    passEvent(){
      this.$emit('shoutup');
    }
  }

};

  //then you vue instance
  const vm = new Vue({
    el: "#app",

    data: {
      testmessage: "sup"
    },

    methods: {
      calledOnParent(){
        console.log("This method lives in the main vm and was called from a component");
      }
    },

    components: {
      'activeusers' : UserComponent

    }
  })

})();
