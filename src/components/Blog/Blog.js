import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <Accordion className='w-50 m-auto'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='fs-4'><strong>What is cors?</strong></Accordion.Header>
          <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources.CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='fs-5'><strong>How does the private route work?</strong></Accordion.Header>
          <Accordion.Body>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='fs-5'><strong>What is Node? How does node work?</strong></Accordion.Header>
          <Accordion.Body>
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='fs-5'><strong>Why are you using firebase?What other options do you have to implement authentication?</strong></Accordion.Header>
          <Accordion.Body>
          Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. 
          <br/>
          6 user authentication types
          <ul>
            <li>Password-based authentication</li>
            <li> Two-factor/multifactor authentication</li>
            <li>Biometric authentication</li>
            <li>Single sign-on</li>
            <li>Token-based authentication</li>
            <li> Certificate-based authentication</li>
          
          </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blog;