# Learning-Node-Starter-Kit

•	What is Node?  
  Evented I/O for V8 JavaScript Engine by Ryan Dahl  

  I/O Model  
  o	Event driven  
  o	Non-blocking  
  o	Asynchronous  

It is a runtime environment for creating web applications on server side.
It also is a library as it comes with a lot of modules that are not required to be coded 

•	How to setup Node JS  
Download Node https://nodejs.org/en/download/  
Check it on your Command Prompt with ‘node -v’. This will give you the version of the node installed.  

• Starting to code  
This is more of a hands-on type of course. Where you learn while coding. Go through the codes given in the files and write it on your own and run it to get the maximum output from this kit.  

1. Hello World Code (refer file helloworld.js)  

  All programming languages start with this code so will we.  
  It contains only a single line 
        
     console.log("Hello World!"); //this prints the Hello World! on the command prompt 
  this is all is needed to write the hello world program in Node Js.  
    
  How to execute the Node JS code  
    - To run this code all you need is open command prompt.  
    - Go to the directory you have saved your code in.  
    - Run it with the command 'node helloworld'. (node <filename>)  
    
2. Modules (refer file modules.js, athletics.js)

    o	Breaking down of a lengthy code and putting them into individual files. Each of these files is called Module.  
    o	It is a good convention to use the name of the module as the name of the variable  
    o	We request a module with the help of syntax:  
        
        // require(‘file_name’);
        require(‘./module.js’); //say file is present in the same folder  
        
    o	Functions we export can be used in the file requesting that module. We export a function as:
      
        module.exports.relay = relay;  //where relay is the name of the function
        
    o	Thus if you want to request a module and call only some specific functions then export only those functions.  
    o	Say you want many functions to be exported, then you don’t need to call the moule.exports for every function, but rather you can just use this:  
    
        module.exports = {
          relay: function() {
            console.log(“This is a relay function”);
          },
          longjump: function(){
            console.log(“This is a longjump function”);
          }
        }
    
3. Core Modules (refer file httpserver.js)  

  o	Creating a web server that returns Hello World  
  o	Node JS comes with some built in modules so that we don’t have to code from the scratch.  
  o	For core modules we do not need to specify '.' or '/' while requesting the module  
  o	Examples of such modules:  
    	HTTP module  
      •	This allows the use of HTTP server at the client  
      •	With this we create a web server   
      
          var http = require(‘http’);
          
   • It has a createServer method or a function in a http module that returns a object that has a method listen, and this takes parameter a port number.
      
        http.createServer().listen(8080)
      
4. Events (refer file EventHandler.js)  

  o	One reason node JS is fast because it runs on events   
  o	Event goes off and then what has to happen when a particular event goes of is Event Handler.  
  o	When we are dealing with event then we make use of the core module called ‘event’.  
  
      var event = require(‘event’);	  
      
  o	Then we make use of eventEmitter class   
  
      var eventEmitter = new events.EventEmitter() 

  o	Event is handled by 
  
      eventEmitter.on(‘doorOpen’, ringbell); 
      // where ringbell is a function

  o	Event is triggered with the help of function 
    
      eventEmitter.emit(‘doorOpen’);

  o	Events can even emit parameters to the functions being that are handling the event
  
5. File I/O (refer file filesystem.js)

  o	Every time we want to read or write from a file we make use of a core module called File System module (fs module).  
  o	Every fs module makes use of an asynchronous form and a Synchronous form.  
  o	Thus, we use a core module  
  
      var fs = require(‘fs’);

  o	Read the data asynchronously  
  
      fs.readFile(name_of_file, anonymous_function) 

      fs.readFile(‘readme.txt’, function(err, data){
        //err parameter if the read file returns an error
        // else we use data parameter that contains the data from the file
      })

  o	Read data Synchronously  

      var data = fs.readFileSync(‘readme.txt’);

6. Streams (refer file stream.js)  

  o	Streams are nothing but Unix pipes that allow to read data from the source and then pipe that data to the destination very easily.  
  
  o	There are three types of streams:  
    	Readable stream  
      •	That lets you read data from a source  
    	Writable stream  
      •	That lets you write data to a destination  
  
  o	To use streams, we require fs module  
  o	Streams read the data bit by bit and not the entire file all at once  
  
  o	Readable Streams:  
  
      var readableStream = fs.createReadStream(‘readme.txt’);
      var data = ‘’
      readableStream.setEncoding(‘UTF8’); 	//used to set the encoding format
      
  o	Streams are also event emitters, so we can listen to events and perform some action also 
      
      readableStream.on(‘data’, function(chunk){
        data += chunk; 
      })
      
  o	We have another function called end that produces the whole data once whole file is read. 
  
      readableStream.on(‘end’, function(){
        console.log(data);
      })
  
  o	Writeable stream 
  
      var writeStream = fs.createWriteStream(‘output.txt’);
      
  o	We write the data with the write function 
  
      writeableStream.write(writeData, ‘UTF8’);
      
  o	End the write function   
  o	Then we call a finish event, when writing data to output file is finsihed
    
      writeableStream.on(‘finish’, function(){})
    
7. Pipes (refer file pipe.js)  

  o	Piping is a mechanism in which you can read data from a source and then write into a destination without having to manage anything in between.  
  o	You can directly read a data from a file and pipe it to another output file without having to manage the flow.  


Thus far we cover all the major topics of Node JS. Now what is needed is to combine these into a project and thus bring whatwver we have learned so far to a better conclusion.  
So refer to my Node Projects   
Start building the small application called Review System. This is the best project for a beginner who just learned about Node basics.  
Then move on to create Weather Apps.  

Hope so you enjoyed this short journey.   
Thank you!   

