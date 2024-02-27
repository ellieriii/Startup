# CS 260 Notes

## Setup
### Git and GitHub
#### Create a Repository

- Easiest to do directly through GitHub
- git clone <url>

#### Making Changes

- Make sure to save the file
- git add . or git add <filename>
- git commit -am "message for change"
- git push

- git fetch (get information about the latest changes without changing your local repository)
- git status (shows if we are missing any commits)
- git pull



## Three Pillars of Web Development

### HTML

#### History
- Hypertext Markup Language
- Tim Berners-Lee
- Built the world's first server
- Berners-Lee also made HTTP and URL

#### Common Elements
- html:	The page container
- head:	Header information
- title:	Title of the page
- meta:	Metadata for the page such as character set or viewport settings
- script:	JavaScript reference. Either a external reference, or inline
- include:	External content reference
- body:	The entire content body of the page
- header:	Header of the main content
- footer:	Footer of the main content
- nav:	Navigational inputs
- main:	Main content of the page
- section:	A section of the main content
- aside:	Aside content from the main content
- div:	A block division of content
- span:	An inline span of content
- h<1-9>:	Text heading. From h1, the highest level, down to h9, the lowest level
- p:	A paragraph of text
- b:	Bring attention
- table:	Table
- tr:	Table row
- th:	Table header
- td:	Table data
- ol,ul:	Ordered or unordered list
- li:	List item
- a:	Anchor the text to a hyperlink
- img:	Graphical image reference
- dialog:	Interactive component such as a confirmation
- form:	A collection of user input
- input:	User input field
- audio:	Audio content
- video:	Video content
- svg:	Scalable vector graphic content
- iframe:	Inline frame of another HTML page

#### How to
Name your main HTML file "index.html"  


### CSS

- Cascading Style Sheets
- Hakon Wium Lie
- Makes stuff look more stylized and cool

### JavaScript 

- Created by Brendan Eich
- Created in about a week
- JavaScript can basically be run everywhere


## The Console

### Commands:
- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual

## Server Setup

IP Address: 54.242.124.222  
Domain: mastermind-online.click  
Key location: ~/OneDrive/Documents/CS_260/Keys/startup-key-pair.pem

## Deploying
Make sure that your files are in the same directory!!  
"$ ./deployFiles.sh -k ~/OneDrive/Documents/CS_260/Keys/startup-key-pair.pem -h mastermind-online.click -s startup"

## JSON:
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null
### Converting to JS
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);
// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}

## Promises vs. Async/Await
### Promises
The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three states different states.

pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.
Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.
The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

### Async/Await
The await keyword wraps the execution of a promise and removes the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. 
Uses a try/catch block
you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function so that it can in turn make asynchronous requests.
