import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className="my-7 pt-5 text-3xl text-center">Questions and Answers</h3>
            <div className=" mx-12 py-10 mb-10">
                {/*Q/A 1*/}
                <div
                    tabindex="0"
                    class="collapse  collapse-arrow my-4 border bg-accent text-white rounded-box"
                    >
                    <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content">
                        <p>There are some way of manage state properly in our React apps.
                            We can use rect useState() hook to manage state in our applications.
                            useEffect() hook allow us to update state in quick time . This use case is very basic. In large application we need to share state in all over app to get real data thats why we use contextAPI and also use Redux for state management .  
                        </p>
                        
                    </div>
                </div>
                {/*Q/A 2 */}
                <div
                    tabindex="0"
                    class="collapse  collapse-arrow my-4 border  bg-accent text-white rounded-box"
                    >
                    <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p>There are a lot of way to improve the performance of a react application. As a developer we need to know how to improve performance. We have to Keep component state local where necessary at first .Then we have to stop re rendering components and should follow the DRY coding method. Avoid code repetition. If we do these kind of work, we will be improve more and make faster applications.</p>
                    </div>
                </div>
                {/* Q/A 3*/}
                <div
                    tabindex="0"
                    class="collapse  collapse-arrow my-4 border  bg-accent text-white rounded-box"
                    >
                    <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript is allowed for prototypal inheritance, meaning the objects and methods can be shared, extended, and copied.
                        Sharing objects makes it easy for inheritance of structure (data fields), behavior (functions / methods), and state (data values).
                        </p>
                    </div>
                </div>
                {/* Q/A 4*/}
                <div
                    tabindex="0"
                    class="collapse  collapse-arrow my-4 border  bg-accent text-white rounded-box"
                    >
                    <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>Unit test is an important part of every application . We need to test our code because we do not think of the several possible use cases always, thats why sometimes we write code with errors.For better experience we should test our project to find problems that we might not think of.</p>
                    </div>
                </div>
                {/* Q/A 5 */}
                <div
                    tabindex="0"
                    class="collapse  collapse-arrow my-4 border  bg-accent text-white rounded-box"
                    >
                    <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React?
                    </div>
                    <div class="collapse-content">
                        <p>We do not set the state directly in react because of its affect in our application. If we set value directly we can not realize the immediate value. If we do not state direct it gives us updated value always. If we set directly we lose control of the state across all of the components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;