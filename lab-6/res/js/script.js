$(function (){
/*$.get( "res/json/posts.json", function( posts ) {
    for(post of posts){
        let div = $('<div class="post">');
        let userId = $('<h2>').text(post.userId);
        let title = $('<h1>').text(post.title);
        let body = $('<p>').text(post.body);
        div.append(userId);
        div.append(title);
        div.append(body);
        $('body').append(div);

    }
  });*/

  $(function() {
    $('#send').click(function() {
    let title = $('form input').val()
    let body = $('form textarea').val()
    //create a Json object composed of these two values
    let data = {
    "title": title,
    "body": body,
    }
    $.post('https://jsonplaceholder.typicode.com/posts', data,
   function(response) {
    //to show the object to be send we output the result to the console
    console.log(response)
    })
    })
   });
});

    