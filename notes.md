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



