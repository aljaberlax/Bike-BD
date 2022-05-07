import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='q1-container'>
                <h3>Difference between js and node js</h3>
                <div className='question1'>
                    <div>
                        <h5>JavaScript</h5>
                        <li>Javascript is a  language that is used for writing scripts on the website.</li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.	</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                        <li>It is the upgraded version of ECMA script that uses Chrome s V8 engine written in C++. </li>
                        <li>Javascript is used in frontend development.</li>
                    </div>
                    <div>
                        <h5>NodeJs</h5>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>Nodejs is written in C, C++ and Javascript.</li>
                        <li>Nodejs is used in server-side development.</li>
                    </div>
                </div>
            </div>
            <div className='q1-container question2'>
                <h4>When should you use Nodejs?</h4>
                <p>
                    The JS is a single-threaded system, which accepts all requests in one thread. This single thread handles everything that happens on the webpage: page scroll, listening to DOM events, printing something on the page, etc.

                    While one request is being processed, the server will not go on with another one. In this case, the execution will be blocked, and the browser will “freeze.”

                    Node.js applies a progressive event-driven pattern with an event-loop that replies to specific events. Thus, Node.js uses single-thread non-blocking I/O calls, which supports thousands of connections simultaneously.
                </p>
                <h4>When should you use MongoDB?</h4>
                <p>
                    You're using cloud computing. MongoDB is ideal for cloud computing.
                    Cloud-based storage needs to easily distribute data across multiple servers,
                    which suits MongoDB's nature perfectly.
                    You need your data fast and easily accessible.as it's a NoSQL DB and widely used in the industry.
                    It's also easy to learn
                </p>

            </div>
            <div>
                <div className='q1-container'>
                    <h3>Difference between SQL and NoSQL</h3>
                    <div className='question1'>
                        <div>
                            <h5>SQL</h5>
                            <li>Databases are categorized as Relational Database Management System (RDBMS).</li>
                            <li>SQL databases have fixed or static or predefined schema.</li>
                            <li>SQL databases display data in form of tables so it is known as table-based database.	</li>
                            <li>SQL databases are vertically scalable.</li>
                            <li>SQL databases are not best suited for hierarchical data storage.	</li>
                            <li>SQL databases are best suited for complex queries.</li>
                        </div>
                        <div>
                            <h5>NoSQL</h5>
                            <li>NoSQL databases are categorized as Non-relational or distributed database system.</li>
                            <li>NoSQL databases have dynamic schema.</li>
                            <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.	</li>
                            <li>NoSQL databases are horizontally scalable.</li>
                            <li>NoSQL databases are best suited for hierarchical data storage.</li>
                            <li>NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;