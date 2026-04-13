function GuessOneToThree (){
    function onClickHandle() {
        const randomNum = Math.floor(Math.random()*3 + 1) 
        console.log(randomNum)
        const input = prompt (`enter 1 to 3`)     // prompt --> popup and let user enter
        alert (`you entered ${input}, machine gives ${randomNum}` ) // alert --> popup alert on screen
    }
    return(
        <div>
            <button onClick={onClickHandle}> click me to guess 1 to 3 </button>
        </div>
    )
}
export default GuessOneToThree