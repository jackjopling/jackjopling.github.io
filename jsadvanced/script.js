 $(document).ready(function(){

        function jumbotron(data){
            var htmlcode = '<div class="jumbotron">'+
            '<div class="container">'+
                '<h1>'+ data.heading+'</h1>'+
                '<p>'+ data.subheading+'</p>'+
            '</div>'+
        '</div>';
            $("#main").append(htmlcode)
        };


        var content = {
            "navbar": [
                {
                    "title": "Home",
                    "url" : "index.html"
                },
                {
                    "title": "About Us",
                    "url" : "about.html"
                },
                {
                    "title": "Our Team",
                    "url" : "team.html"
                },
                {
                    "title": "Contact Us",
                    "url" : "contact.html"
                }
            ],
            "about.html" : {
                "blocks" : [
                    {
                        "type" : "jumbotron",
                        "heading" : "This is a pretty cool title",
                        "subheading": "This is our cool subheading that goes here"
                    }
                ]
            },

         "index2.html" : {
                "blocks" : [
                    {
                        "type" : "jumbotron",
                        "heading" : "About Page",
                        "subheading": "This is our cool subheading that goes here"
                    }


                ]
            }

        }

        for(var i=0; i<content.navbar.length; i++){
            console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);
            $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+ content.navbar[i].url +'">'+ content.navbar[i].title +'</a></li>')
        }

        console.log(window.location);
        console.log(window.location.pathname);
        var pagefile = window.location.pathname.split("/").pop();
        console.log(pagefile);

        //jumbotron();
        /*if(content[pagefile] !=""){*/

        var blocks = content[pagefile].blocks;
        console.log(blocks);
        for (var i=0; i<blocks.length; i++) {
          if(blocks[i].type == 'jumbotron'){
            jumbotron(blocks[i])}
        }


        $.ajax({
            url: 'https://randomuser.me/api/?results=25',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                for (var i = 0; i<25; i++) {
                

                var firstname = data.results[i].name.first;
                var lastname = data.results[i].name.last;
                var mediumpicture = data.results[i].picture.medium;
                var nat = data.results[i].nat.toLowerCase();


                    $("#users").append('<div class="col-md-2"> <img src="'+mediumpicture+'" class="fluid rounded-circle"> '+firstname+' '+lastname+' <span class="flag-icon flag-icon-'+nat+' "></span> <i class="fab fa-facebook-f"></i> <i class="fab fa-twitter"></i> <i class="fab fa-linkedin-in"></i> </div>');
                }
            }
        });






    });