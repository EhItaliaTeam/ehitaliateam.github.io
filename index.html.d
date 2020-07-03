<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hacker 8.0</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="css/index.css" />

  </head>

  <body>

    <div class="jumbotron text-center" style="margin-bottom:0">
      <h1>Hacker 8.0</h1>
      <p>Pentesting Made Simple</p> 
    </div>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

      <!-- Usually there's a logo here with a rpadding then the collapsable burger menu -->
      <a class="navbar-brand" href="#index.html">Home</a>

      <!-- burger -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- collapsable menu -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#hire">Hire us</a>
          </li>
        </ul>
      </div>
    
    </nav>

    <div class="container reabusta">
      <!-- 2x2 matrix in a 1x2 container : error_ -->
      <div class="row">

        <div class="col-sm-4">

          <!-- FROM here -->
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <!-- TO here : may be everything wrapped into a div? -->

          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>

          <!-- explain it to me plz, to lazy to search for: what that class stands for? -->
          <hr class="d-sm-none">

        </div>

        <!-- You need to handle classes for all screens and this code is illegible -->
        <div class="col-sm-8 col-md-8 col-xs-8">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="rrr-lel">
            LeL
          </div>
        </div>
      </div>

      <!-- Shiet may be vertically aligned -->
      <div class="row">
        <div class="col-md-4">
          <!-- This card may be refactored with a better grouping for a logical CSS nomenclature (i personal use BEM) -->
          <div class="card">
            <h2>This is H2</h2>
            <h5>This is h5:</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>This is H3:</h3>
            <p>Lorem ipsum dolor sit ame.</p>
          </div>
        </div>

        <div class="col-md-8">
          <!-- EXAMPLE : raw and illogic -->
          <div class="card">
            <div class="card__title">Title</div>
            <!-- Y not inside title? icsd -->
            <div class="card__subtitle">subtitle</div>
            <div class="card__background">WHAT DO YOU WANT TO ACHIEVE?</div>
            <div class="card__content">
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">

        <!-- This wants to be a dimostration of the need in vertical align, not a css trick itself -->
        <div class="col-md-4">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>

        <div class="col-md-8">
          <!-- EXAMPLE : raw and illogic -->
          <div class="card">
            <div class="card__title">Title</div>
            <!-- Y not inside title? icsd -->
            <div class="card__subtitle">subtitle</div>
            <div class="card__background">WHAT DO YOU WANT TO ACHIEVE?</div>
            <div class="card__content">
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="jumbotron text-center reafooter">
      <p>Footer</p>
    </div>

  </body>
</html>
