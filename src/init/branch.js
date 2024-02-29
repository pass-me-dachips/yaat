export const branch_IndexdotYaat = (title) => `
title:: ${title}
sec::
 hl:: Application Heading 
 text:: Lorem ipsum dolor sit amet, [[ consectetur ]] adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 info:: Bacon ipsum dolor amet short loin boudin pork chop 😊😊, strip steak porchetta turkey cow rump picanha. Kevin brisket andouille boudin meatball. Jowl pork belly cupim alcatra tail beef ribs pork chop ham hock leberkas prosciutto biltong kielbasa.

sec:: 
 hx:: Application Subheading
 text:: Bacon ipsum dolor amet short ribs pancetta venison, pork belly turducken beef ribs boudin tri-tip swine picanha sausage ham hock. Sirloin jerky leberkas boudin ribeye, pork chop swine cow jowl cupim bacon. Filet mignon drumstick beef ribs t-bone prosciutto bacon cow biltong fatback. Pancetta pork chop pork belly jerky, tenderloin shankle t-bone sirloin. Leberkas biltong tri-tip ground round porchetta picanha. Cupim boudin prosciutto kielbasa tail sirloin salami. Turkey alcatra salami, boudin pig hamburger andouille pork loin brisket t-bone.
 list:: foo 🍜
 list:: bar 🍹 

sec:: 
 hx:: Computer code
 text:: This feature enables the incorporation of computer code snippets on your Yaatpage with just two essential elements: the << reference_to_code element >>, indicating the reference name to the specified code in the .yaatEmbed file, and the << display_title >> element.
 computerCode:: sampleA, SAMPLE.JS
 text:: a node js application.
 computerCode:: sampleB, SAMPLE.PY
 text:: a python application.    
`;

export const branch_dotyaatEmbed = () => `
sampleA :::
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, HTTP Server!');
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:8080/\`);
});




sampleB :::
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

PORT = 8080

handler = SimpleHTTPRequestHandler
with TCPServer(("", PORT), handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
`;
