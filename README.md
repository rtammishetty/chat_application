<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

        <input type="text" autofocus/> <br><hr />

        <br><button>Change color</button> <br><hr />

        <h3>Event Bubbling</h3>
        <button id="evtBubblingBtn">EventBubbling</button>
        <div style="visibility: hidden" id="evtBubblingDiv">
            <span id="evtBubblingSpan">
                <label>some text</label>
            </span>
        </div> <br><hr />
        
        <h3>Toggling</h3>
        <button onclick="toggleDiv()" id="evtListnrButton">Show / Hide</button>
        <div id="toggleDivJS">Hide this div on click in Javascript</div>
        <div id="toggleDivEvtListnr" hidden>Hide this div on click using Event Listner</div>

        <br>
            <p id="test" name="hacker">Hello</p>
            <p class="five" name="hacker">Hello1</p>
            <p class="five" name="hacker">Hello2</p>
            <p class="five" name="hacker">Hello3</p>
            <p class="five" name="hacker">Hello4</p>
            <p class="five" name="hacker">Hello5</p>
            <p class="five" name="hacker">Hello6</p>
        <br>

        <div onclick="alert('The handler!')">
            <em>If you click on 
                <code>EM</code>, the handler on 
                <code>DIV</code> runs.
            </em>
        </div>

        <div onclick="alert('div')">DIV
            <p onclick="event.stopPropagation()">P1</p>
            <p onclick="alert('P')">P</p>
        </div>


        <div>
            <button class='test' onclick='testFunct()'>testFunct</button>
        </div>

        <div>
            <button class='test' onclick='hello()'>hello</button>
        </div>
        
        <script>
            
        </script>
        <script src='arrays.js'></script>
    </body>
</html>
