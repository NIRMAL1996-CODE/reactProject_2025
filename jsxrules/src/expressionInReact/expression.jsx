const Expression=()=>{
  return <div>
  <h1>Expression In React</h1>
   <p>1. The expression {"{ 2 + 2 }"} inside the JSX is wrapped in curly braces {'{}'} to indicate that it's a JavaScript expression.<br/>
   2. React will evaluate the expression and render the result 4 inside the paragraph tag.<br/>
   3. And if you didnot use curly braces, React would treat it as plain text, not as an expression.<br/>
  </p>
  <p> so, 2+2= {2+2} </p>
  </div>
};
export default Expression;