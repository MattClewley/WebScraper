console.log("hello world");

/* getting from json url
(async () => {
    const response = await fetch('https://wordpress.org/wp-json');
    const json = await response.json();
    console.log(JSON.stringify(json));
})()
*/

(async () => {
    const response = await fetch('https://mattclewley.imfast.io/');
    const text = await response.text();
    console.log(text.match(/(?<=\<h1>).*(?=\<\/h1>)/));
  })()