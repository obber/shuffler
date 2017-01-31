var app = new Vue({
  el: '#app',
  data: {
    names: '',
    list: []
  },
  methods: {
    formSubmit: function(list, e) {
      e.preventDefault();
      axios.post('/randomize', { names: list.split('\n') })
        .then(resp => {
          this.list = resp.data.list;
        })
        .catch(e => console.error(e));
    }
  }
});
