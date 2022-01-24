Vue.component("new-component", {
    data: function () {
      return {
        name: "plerp",
        count: 0,
      };
    },
    template:
      "<p @click= 'count++'> Hello {{name}}, you have clicked {{count}} times </p>",
  });
  
  Vue.component("props-new", {
    data: function () {
      return {};
    },
    //props: ['author', 'title'],
    //  “author” prop “required” and define a validator that checks whether the length
    // of the “author” variable is bigger than 10 characters.
  
    props: {
      author: {
        required: true,
        validator: function (prp) {
          return prp.length > 10;
        },
      },
      title: {},
    },
    //template: "<p> Author name: {{ author}} wrote {{ title}} {{message}}</p>",
    // two filters, the first changes the characters of the variable to “upper case”, and the
    //last adds an asterisk symbol (*) to the begging and the end of the passed variable. For
    //example, “name” will be represented as “* NAME *” after applying the filters.
    template:
      "<p> Author name: {{ author}} wrote {{ title | touppercase | addStar }} </p>",
  });
  
  Vue.component("posts-url", {
      data: function() {
      return {}
      },
      props: ['title', 'body'],
      template: "<div> <h3 class= 'title'> Title: {{ title}} </h3> {{ body}} </div>",
     });
  
  new Vue({
    el: "#App",
    data: {
      authors: [
        { id: 1, author: "Charles Dickens", title: "A Tale of Two Cities" },
        { id: 2, author: "William Shakespeare", title: "Macbeth" },
        { id: 3, author: "George Orwell", title: "Animal Farm" },
      ],
      
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.postsUrl = data)
      .then(console.log(this.postsUrl))
      },
     
  });
  