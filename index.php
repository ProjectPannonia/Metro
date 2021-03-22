<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Metro fan page">
    <meta name="keywords" content="">
    <meta name="author" content="Adam Letenyei">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" type="text/css" href="css/style.css">
    
    <title>Metro fan page</title>
    
</head>
<body>

<div class="wrapper">
    
    <header>
    
        <menu>
            <ul>
                <li>
                    <a id="homeBtn" onclick="switchdiv(this.id)" href="javascript:void(0)">
                        Home
                    </a>
                </li>
                <li>
                    <a id="bookBtn" onclick="switchdiv(this.id)" href="javascript:void(0)">
                        Books
                    </a>
                </li>
                <li>
                    <a id="gamesBtn" onclick="switchdiv(this.id)" href="javascript:void(0)">
                        Games
                    </a>
                </li>
            </ul>
        
        </menu>
    
    </header>
    
    <main>
    
        <div id="bookCont" class="books">
            <h1>Books</h1>
            <div id="first" class="book" onclick="flip(this.id)">
            </div>
            <div id="second" class="book" onclick="flip(this.id)">
            </div>
            <div id="third" class="book" onclick="flip(this.id)">
            </div>
            
        </div>
        <div id="gamesCont" class="games">
        
        
        
        </div>
    
    </main>
    
    <footer>
    
        <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sitemap</a></li>
            <li><a href="">&#169; Project Pannonia</a></li>
        </ul>
    
    </footer>
    
</div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
    </script>
    
    <script type="text/javascript" src="script/script.js"></script>

    </body>
</html>