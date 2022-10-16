# Kata 2

Great job you completed your first 2 katas! Wahoo!

In the last kata, you wrote a little JSX! Read more in the (docs)[https://reactjs.org/docs/introducing-jsx.html].

Now in this kata let's get more comfortable with writing JSX.

To start, create a JSX file in the `/src` directory and write some markup (just like you would with HTML).

This looks like HTML, but its not. Its (JSX)[https://reactjs.org/docs/introducing-jsx.html] and it helps us feel like we're writing HTML, but then if we need to use JavaScript then we can type a simple directive using curly braces like this:

```
function MyAwesomeComponent(props) {
    return (
        <h2>Hi my name is {{props.name}}</h2>
        <span>I go to school at {{props.school}}</span>
        <p>Kanye is greatest artist resting or alive! No dynamic variable needed here, because just like the meaning of his name... he is the only one.</p>
    )
}
```
